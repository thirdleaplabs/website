# Codex Instructions — Third Leap Labs Website

## Mission

Maintain and improve the public website for **Third Leap Labs** while preserving the existing bright, premium, product-led visual system. The current redesign should be reused and refined—not replaced with a different template.

The corporate story is:

> Third Leap Labs builds applied AI, computer-vision, Web3 and open-engineering products. Its flagship visual-intelligence product is **Cognisense Cloud by Third Leap Labs**.

## Confirmed public naming

Use consistently:

- Company: **Third Leap Labs**
- Legal entity when relevant: **Third Leap Labs LLC**
- Computer-vision product: **Cognisense Cloud**
- Brand signature: **Cognisense Cloud by Third Leap Labs**
- Product domain: **https://cognisense.cam**
- Product category: **Cloud Visual Intelligence Platform**

**Cognisense Cloud by Third Leap Labs** is the only current public name for the visual-intelligence product. Legacy product names may appear only when documenting redirect compatibility to `/cognisense`.

## Existing technology stack

Preserve the current stack unless the task explicitly requires otherwise:

- React 18
- TypeScript
- Vite 5
- Tailwind CSS 4
- React Router 6
- Framer Motion
- Lucide React
- React Helmet Async

Do not introduce a new UI framework, CMS, state library, router or animation framework without explicit approval.

## Required commands

Before editing:

```bash
npm ci
```

After editing, run:

```bash
npm run lint
npm run build
```

Fix all failures introduced by the change. Report any pre-existing failure separately with evidence.

## Design direction

The existing website design is the baseline. Preserve and extend:

- Bright neutral backgrounds
- Large editorial typography
- Generous spacing
- Restrained blue/cyan accents
- Product-led storytelling
- Rounded product frames and cards
- Clear hierarchy with one principal message per section
- Subtle purposeful motion
- Responsive, keyboard-accessible interactions
- Reduced-motion support

The design may have Apple-like clarity and restraint, but must not copy Apple assets, layouts, wording or trade dress.

Avoid:

- Dark cyberpunk styling as the site-wide identity
- Excessive gradients, glass effects or animated particles
- Dense dashboards on marketing pages
- Generic startup buzzwords
- Fabricated customers, testimonials, deployments, metrics or funding claims
- Claims that a roadmap feature is already production-ready

## Content source of truth

The detailed business and content specifications are maintained in the private repository:

`thirdleaplabs/business-docs`

Relevant paths:

- `website-redesign/02-THIRD-LEAP-LABS-PAGE-BY-PAGE.md`
- `website-redesign/03-COGNISENSE-CLOUD-PAGE-BY-PAGE.md`
- `website-redesign/04-DESIGN-SYSTEM-AND-COMPONENTS.md`
- `products/cognisense-cloud/00-PRODUCT-MESSAGING.md`
- `products/cognisense-cloud/01-FEATURE-CATALOG.md`
- `products/cognisense-cloud/02-ARCHITECTURE-OVERVIEW.md`
- `products/cognisense-cloud/03-USE-CASES.md`

When those files are available in the current workspace, read them before implementing content. If they are not available, follow `docs/CODEX-WEBSITE-MASTER-PROMPT.md` and request only genuinely missing factual inputs.

## Corporate website information architecture

Maintain or implement these principal routes:

- `/` — Home
- `/products` — Product portfolio
- `/capabilities` — AI, computer vision, cloud/edge, Web3 and open engineering
- `/open-source` — Open-engineering philosophy and work
- `/company` — Company and founder story
- `/contact` — Contact and partnership enquiry
- `/cognisense` — Cognisense Cloud product overview and canonical corporate-site route
- Existing legal pages

Required redirects:

- `/work` → `/products`
- `/work/cognisense`, `/work/cognisense-cloud`, `/work/visionx`, `/work/flametrax` → `/cognisense`
- `/products/cognisense`, `/products/cognisense-cloud`, `/products/visionx`, `/products/flametrax` → `/cognisense`
- `/labs/cognisense`, `/labs/cognisense-cloud`, `/labs/visionx`, `/labs/flametrax` → `/cognisense`
- `/labs/whalescanner`, `/work/whalescanner`, `/products/whalescanner` → `/products#whalescanner`

Do not leave duplicate public product pages; preserve legacy names only in the explicit redirect paths above.

## Corporate homepage priorities

The homepage should establish, in this order:

1. Third Leap Labs is a credible applied-technology company.
2. Cognisense Cloud is the flagship AI/computer-vision product.
3. WhaleScanner demonstrates Web3 product execution.
4. Open engineering is a supporting capability and philosophy.
5. Visitors can request a Cognisense pilot or start a company conversation.

AI and computer vision should receive approximately 60–70% of the visual and narrative emphasis. Web3 remains visible but secondary.

## Cognisense Cloud positioning

Approved short description:

> Cognisense Cloud is a cloud and edge visual-intelligence platform that connects compatible camera infrastructure with AI events, incident workflows, evidence and operational analytics.

Approved supporting line:

> Connect cameras, edge AI and cloud workflows to detect risks, manage incidents and understand operations across every location.

Primary tagline:

> Give every camera intelligence.

Use careful customer language such as:

- detect
- surface
- prioritise
- support review
- enable response
- configurable
- deployment-dependent

Avoid promises of perfect detection or autonomous replacement of human judgement.

## Implementation approach

For substantial work, proceed in small reviewable stages:

1. Audit current routes, components, content and assets.
2. Write a concise implementation plan naming the files to change.
3. Update shared navigation, footer, SEO and naming first.
4. Implement one page or coherent page group at a time.
5. Preserve reusable primitives instead of duplicating markup.
6. Run lint and build.
7. Summarise changed files, visible outcomes, tests and remaining placeholders.

Do not perform a broad rewrite before inspecting the current implementation.

## Images and assets

- Reuse approved local assets where possible.
- Do not hotlink random production images without noting licensing and performance implications.
- Do not invent product screenshots.
- Use clearly labelled illustrative UI only when a real screenshot is unavailable.
- Add meaningful alt text.
- Optimise image sizes and avoid layout shift.

## Accessibility and quality

Every implementation must consider:

- Semantic headings
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Responsive behavior from mobile through large desktop
- Reduced-motion preference
- Descriptive links and buttons
- Valid route handling
- SEO title and description
- No horizontal overflow
- No console errors

## Git and delivery

- Keep changes scoped to the requested task.
- Do not deploy or change DNS without explicit approval.
- Do not commit credentials, customer videos or confidential evidence.
- Prefer a pull request for review.
- In the final report include:
  - Summary
  - Files changed
  - Routes affected
  - Validation commands and outcomes
  - Screenshots or preview guidance when available
  - Remaining factual placeholders
