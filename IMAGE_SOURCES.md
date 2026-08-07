# Website image sources

The current website imagery is a coordinated Third Leap Labs / EyeWitX media set created for the site in Canva and stored locally under `public/media/`.

## Local media

| Use | Repository asset |
| --- | --- |
| Home hero poster | `public/media/home/hero-eyewitx-poster.webp` |
| EyeWitX visual operations | `public/media/eyewitx/eyewitx-operations.webp` |
| Capabilities infrastructure | `public/media/capabilities/capabilities-infrastructure.webp` |
| WhaleScanner market intelligence | `public/media/whalescanner/whalescanner-product-overview.webp` |
| Company engineering visual | `public/media/company/company-engineering.webp` |

The supplied 1920×1080 JPG exports were converted to web-optimized WebP derivatives for repository delivery and faster page loads.

## Usage and disclosure

The local photographs are illustrative brand media. They are not presented as customer footage, live camera streams, a founder portrait, or measured product telemetry. Product UI compositions that use these images are explicitly labelled as interface illustrations or example operational views.

## Design treatment

The images are intentionally grayscale/desaturated with controlled contrast. Twitter blue (`#1DA1F2`) remains the strong UI accent for detections, status and interaction states.

## Optional hero video

The homepage automatically checks for an approved looping video at:

`public/media/home/hero-eyewitx.mp4`

If a valid MP4 is present, the homepage uses it as the muted looping hero background. If it is absent, the site falls back to `hero-eyewitx-poster.webp` with no broken media element.
