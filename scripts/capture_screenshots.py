#!/usr/bin/env python3
"""Capture screenshots of the Third Leap Labs website.

Setup:
    python -m pip install -r requirements-screenshots.txt
    python -m playwright install chromium

Examples:
    python scripts/capture_screenshots.py
    python scripts/capture_screenshots.py --viewport all
    python scripts/capture_screenshots.py --route / --route /products
    python scripts/capture_screenshots.py --base-url https://thirdleaplabs.com
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from urllib.parse import urljoin, urlparse

try:
    from playwright.sync_api import Error as PlaywrightError
    from playwright.sync_api import TimeoutError as PlaywrightTimeoutError
    from playwright.sync_api import sync_playwright
except ModuleNotFoundError:
    print(
        "Playwright is not installed. Run:\n"
        "  python -m pip install -r requirements-screenshots.txt\n"
        "  python -m playwright install chromium",
        file=sys.stderr,
    )
    raise SystemExit(2)


DEFAULT_ROUTES = (
    "/",
    "/eyewitx",
    "/products",
    "/capabilities",
    "/open-source",
    "/company",
    "/contact",
    "/privacy-policy",
    "/legal-disclaimer",
    "/security-notice",
)

VIEWPORTS = {
    "desktop": {"width": 1440, "height": 1000},
    "tablet": {"width": 834, "height": 1112},
    "mobile": {"width": 390, "height": 844},
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Capture full-page screenshots for canonical website routes."
    )
    parser.add_argument(
        "--base-url",
        default="http://localhost:8080",
        help="Website origin to capture (default: %(default)s).",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=Path("screenshots"),
        help="Directory for PNG files (default: %(default)s).",
    )
    parser.add_argument(
        "--route",
        action="append",
        dest="routes",
        help="Route or absolute URL to capture. Repeat for multiple pages.",
    )
    parser.add_argument(
        "--viewport",
        choices=(*VIEWPORTS, "all"),
        default="desktop",
        help="Viewport preset to capture (default: %(default)s).",
    )
    parser.add_argument(
        "--browser",
        choices=("chromium", "firefox", "webkit"),
        default="chromium",
        help="Playwright browser engine (default: %(default)s).",
    )
    parser.add_argument(
        "--timeout-ms",
        type=int,
        default=30_000,
        help="Navigation timeout in milliseconds (default: %(default)s).",
    )
    parser.add_argument(
        "--wait-ms",
        type=int,
        default=500,
        help="Extra wait after page and font loading (default: %(default)s).",
    )
    parser.add_argument(
        "--headed",
        action="store_true",
        help="Show the browser while capturing.",
    )
    parser.add_argument(
        "--viewport-only",
        action="store_true",
        help="Capture only the visible viewport instead of the full page.",
    )
    return parser.parse_args()


def capture_url(base_url: str, route: str) -> str:
    parsed = urlparse(route)
    if parsed.scheme in {"http", "https"}:
        return route
    return urljoin(f"{base_url.rstrip('/')}/", route.lstrip("/"))


def screenshot_name(route: str) -> str:
    parsed = urlparse(route)
    value = parsed.path.strip("/") or "home"
    if parsed.fragment:
        value = f"{value}-{parsed.fragment}"
    return re.sub(r"[^a-zA-Z0-9._-]+", "-", value).strip("-").lower()


def main() -> int:
    args = parse_args()
    routes = tuple(args.routes or DEFAULT_ROUTES)
    viewport_names = tuple(VIEWPORTS) if args.viewport == "all" else (args.viewport,)
    failures: list[tuple[str, str]] = []

    args.output_dir.mkdir(parents=True, exist_ok=True)

    try:
        with sync_playwright() as playwright:
            browser_type = getattr(playwright, args.browser)
            browser = browser_type.launch(headless=not args.headed)

            try:
                for viewport_name in viewport_names:
                    output_dir = args.output_dir / viewport_name
                    output_dir.mkdir(parents=True, exist_ok=True)
                    context = browser.new_context(
                        viewport=VIEWPORTS[viewport_name],
                        device_scale_factor=1,
                        reduced_motion="reduce",
                    )
                    page = context.new_page()
                    page.set_default_timeout(args.timeout_ms)
                    page.set_default_navigation_timeout(args.timeout_ms)

                    for route in routes:
                        url = capture_url(args.base_url, route)
                        destination = output_dir / f"{screenshot_name(route)}.png"

                        try:
                            response = page.goto(url, wait_until="networkidle")
                            if response is not None and not response.ok:
                                raise RuntimeError(
                                    f"HTTP {response.status} while loading {url}"
                                )
                            page.evaluate("document.fonts.ready")
                            if args.wait_ms:
                                page.wait_for_timeout(args.wait_ms)
                            page.screenshot(
                                path=str(destination),
                                full_page=not args.viewport_only,
                                animations="disabled",
                            )
                            print(f"Captured {url} -> {destination}")
                        except (PlaywrightError, PlaywrightTimeoutError, RuntimeError) as error:
                            failures.append((url, str(error)))
                            print(f"Failed {url}: {error}", file=sys.stderr)

                    context.close()
            finally:
                browser.close()
    except PlaywrightError as error:
        print(
            f"Unable to start {args.browser}: {error}\n"
            f"Install it with: python -m playwright install {args.browser}",
            file=sys.stderr,
        )
        return 2

    if failures:
        print(f"\n{len(failures)} capture(s) failed.", file=sys.stderr)
        return 1

    print(f"\nCaptured {len(routes) * len(viewport_names)} screenshot(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
