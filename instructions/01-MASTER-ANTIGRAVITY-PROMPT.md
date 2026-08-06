# Master Antigravity Implementation Prompt

## Mission

Update and implement the existing websites for **Third Leap Labs** and **Cognisense Cloud** using the current design foundation and reusable components. Do not start a completely unrelated visual redesign. Preserve the strongest existing design patterns, component architecture, motion language, responsive behaviour and technical stack, while replacing the information architecture, page content, product storytelling and calls to action according to the documents in this folder.

The result must feel like a premium Apple-style technology website: calm, confident, product-led and spacious. This means strong typography, short sections, clear hierarchy, carefully controlled motion, high-quality product visuals and one dominant message at a time. Do not copy Apple’s exact page layouts, code, images, icons or proprietary assets.

## Confirmed brand architecture

- **Company:** Third Leap Labs LLC
- **Corporate website:** https://thirdleaplabs.com
- **Flagship product:** Cognisense Cloud
- **Product signature:** Cognisense Cloud by Third Leap Labs
- **Product website:** https://cognisense.cam
- **Product category:** Cloud Visual Intelligence Platform
- **Primary customer outcome:** Safer, smarter and more responsive physical operations
- **Primary product CTA:** Request a pilot
- **Primary corporate CTA:** Explore Cognisense Cloud

## Core narrative

Third Leap Labs is an applied AI engineering company building intelligent software for the physical and digital world. Its flagship product, Cognisense Cloud, connects existing cameras, edge AI and cloud workflows to detect important events, manage incidents and provide operational insight across multiple sites.

Cognisense Cloud is not presented as a generic CCTV application. It is a cloud visual-intelligence and operational workflow platform for security, safety, facilities, logistics, industrial operations and critical infrastructure.

## Naming rules

Use these names consistently:

- `Third Leap Labs`
- `Third Leap Labs LLC` only where legal identity is needed
- `Cognisense Cloud`
- `Cognisense Cloud by Third Leap Labs`
- `cognisense.cam`

Do not use these as public product names:

- VisionX
- Indus Vision
- Indus Vision Tech
- FlameTrax
- TTL Cognisense

FlameTrax may exist internally as historical technology or an engine, but it must not appear in public website copy unless explicitly approved later.

## Design instruction

Reuse the existing visual design and components wherever they are strong. The work is primarily:

1. Replace weak or confusing content.
2. Reorganise pages and navigation.
3. Improve the section sequence and storytelling.
4. Create clear cross-links between Third Leap Labs and Cognisense Cloud.
5. Add high-quality product visuals and interface frames.
6. Improve responsive behaviour and accessibility.
7. Ensure the final websites support the Startup Qatar investment application.

### Visual principles

- Generous white space and disciplined alignment.
- Large display headlines with concise supporting copy.
- White or near-white backgrounds for most pages.
- Dark sections only where they create emphasis around product visuals.
- One primary accent colour, derived from the existing Third Leap Labs design.
- Subtle gradients, glows and glass effects only when they improve depth.
- No neon-heavy cyberpunk treatment.
- No generic AI brains, robots, circuit-board heads or random technology stock photos.
- Prefer product UI, architectural diagrams, real operating environments and carefully composed abstract visuals.
- Use restrained scroll-reveal, parallax and device-frame motion.
- Respect `prefers-reduced-motion`.
- Use clear hover, focus and active states.
- Maintain WCAG-aware contrast and keyboard navigation.

## Shared content standards

- Use short paragraphs and strong subheadings.
- Avoid exaggerated claims such as “revolutionary,” “world-leading,” “100% accurate” or “fully autonomous.”
- Do not invent customers, revenue, partnerships, accuracy metrics or deployments.
- Use verified facts only.
- Where proof is unavailable, use neutral copy or a clearly marked placeholder.
- Explain business value before technical detail.
- Keep Cognisense Cloud’s available, configurable and roadmap capabilities distinct.
- Use “detect,” “surface,” “prioritise,” “support” and “enable human review” instead of promising perfect prevention.

## Website 1 — Third Leap Labs

Implement the page structure and exact copy direction from:

- `02-THIRD-LEAP-LABS-PAGE-BY-PAGE.md`

The corporate website must make Cognisense Cloud the flagship product while also showing the wider Third Leap Labs capabilities:

- Applied AI
- Computer vision
- Cloud and edge platforms
- Web3 intelligence through WhaleScanner
- Open-source and engineering R&D

Do not make the website look like a general freelance agency. It must look like a product and applied-research company capable of building and commercialising deep-technology platforms.

## Website 2 — Cognisense Cloud

Implement the page structure and exact copy direction from:

- `03-COGNISENSE-CLOUD-PAGE-BY-PAGE.md`

The product website must be optimised for customer understanding and pilot conversion. It must explain:

- The problem with passive video monitoring
- The cloud command centre
- Visual AI event detection
- Incident workflows
- Search and evidence
- Analytics
- Edge-to-cloud deployment
- Enterprise controls
- Industry use cases
- Pilot process

## Navigation

### Third Leap Labs suggested navigation

- Home
- Cognisense Cloud
- Products
- Capabilities
- Open Source
- Company
- Contact

Primary navigation CTA: `Explore Cognisense`

### Cognisense Cloud suggested navigation

- Platform
- Capabilities
- Solutions
- Architecture
- Security
- Resources
- Company

Primary navigation CTA: `Request a Pilot`

## Cross-site rules

- Third Leap Labs must link prominently to cognisense.cam.
- Cognisense Cloud must display “by Third Leap Labs” and link back to thirdleaplabs.com.
- Maintain consistent company facts, founder details and contact information.
- Use shared typography, spacing, button shapes and motion behaviour.
- Allow Cognisense Cloud to have its own product accent while remaining visibly part of the Third Leap Labs family.

## Product visuals

Create polished placeholders only when actual screenshots are not available. Label development-only conceptual screens internally, but do not expose “fake dashboard” language publicly.

Required product visual areas:

1. Multi-camera cloud command centre.
2. AI event detection on a live feed.
3. Incident detail and response workflow.
4. Search and evidence interface.
5. Analytics view.
6. Multi-site and device-health administration.
7. Edge-to-cloud architecture diagram.

When real screenshots become available, replace placeholders without changing the surrounding layout.

## Forms and conversion

### Cognisense pilot form

Capture:

- Name
- Work email
- Company
- Role
- Country
- Number of sites
- Approximate number of cameras
- Primary use case
- Existing VMS/camera environment, optional
- Desired pilot timeline
- Message
- Privacy consent

After submission, show a clear confirmation state and send the lead to the configured business email or CRM endpoint.

### Third Leap Labs contact form

Capture:

- Name
- Work email
- Company
- Area of interest
- Message

## SEO and metadata

Implement unique titles, descriptions, Open Graph metadata, canonical URLs and structured organisation/product data where appropriate.

Core phrases to use naturally:

- Applied AI company
- Computer vision platform
- Cloud visual intelligence
- Edge AI
- AI video analytics
- Multi-site camera intelligence
- Incident management
- Industrial safety AI
- Security operations platform
- Operational intelligence

Do not keyword-stuff.

## Technical quality

- Preserve the existing framework and deployment model unless a change is necessary.
- Reuse components instead of duplicating page-specific code.
- Optimise images and use modern formats.
- Lazy-load below-the-fold media.
- Avoid autoplay video with sound.
- Prevent layout shift.
- Ensure mobile navigation and forms work correctly.
- Add meaningful alt text.
- Use semantic headings in correct order.
- Ensure buttons are real links/actions, not decorative elements.
- Check all external links.

## Content source priority

When documents conflict, use this order:

1. Confirmed brand decisions in this repository.
2. The current page-by-page files.
3. Verified product behaviour in the product repository.
4. Existing website copy only when it remains accurate.
5. Never infer or invent proof.

## Implementation sequence

1. Audit the existing pages and reusable components.
2. Create a route and component map.
3. Implement the shared header, footer, typography, buttons and content containers.
4. Implement the Third Leap Labs homepage and corporate pages.
5. Implement the Cognisense Cloud homepage and product pages.
6. Add product visuals and diagrams.
7. Add forms, metadata and analytics hooks.
8. Run responsive, accessibility and performance checks.
9. Compare every public claim with the application documents.
10. Provide a concise implementation summary and list of remaining real assets required.

## Definition of done

The work is complete only when:

- Both sites implement the approved page architecture.
- Cognisense Cloud is consistently branded.
- Old product names have been removed.
- No unsupported claims remain.
- The websites are responsive and accessible.
- Primary CTAs work.
- Metadata is complete.
- No broken links or placeholder lorem ipsum remain.
- The final pages support the same narrative used in the Qatar application and presentations.
