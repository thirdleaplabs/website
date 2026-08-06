# Reusable Codex Master Prompt — Third Leap Labs Website

Copy the task section below into a new Codex task after selecting the `thirdleaplabs/website` repository. Codex must also follow the repository-level `AGENTS.md` file.

---

## Task

Inspect the existing Third Leap Labs website before changing code. Preserve the current React, TypeScript, Vite, Tailwind and Framer Motion implementation and reuse its established bright, premium, product-led visual system.

The purpose of this task is to update the website content and page structure around the confirmed brand architecture:

- Company: Third Leap Labs
- Flagship visual-intelligence product: Cognisense Cloud
- Brand signature: Cognisense Cloud by Third Leap Labs
- Product domain: https://cognisense.cam
- Supporting product: WhaleScanner
- Supporting themes: applied AI, computer vision, cloud/edge engineering, Web3 and open engineering

Do not treat VisionX, FlameTrax or Indus Vision as current public brands. Replace current customer-facing references with Cognisense Cloud. Preserve old URLs only as redirects to `/work/cognisense-cloud`.

### First response before editing

Return a concise audit containing:

1. Current routes and pages.
2. Shared layout and UI components that should be reused.
3. Every current public reference to VisionX or FlameTrax.
4. Proposed files to edit, create, redirect or delete.
5. Any factual content that cannot be safely inferred.

Then implement the approved scope. Do not replace the whole design merely because a different layout is possible.

### Required corporate narrative

Third Leap Labs is an applied AI and product-engineering company building intelligent systems for the physical and digital world.

The corporate website must clearly communicate:

1. Applied AI and computer vision are the primary focus.
2. Cognisense Cloud is the flagship visual-intelligence SaaS product.
3. WhaleScanner is the Web3 intelligence product and evidence of platform execution.
4. Open engineering supports transparency, extensibility and long-term ownership.
5. Third Leap Labs can work with customers, pilot partners, integrators and investors.

### Homepage content direction

Use the current homepage design language but restructure the story as necessary.

Suggested hero:

**Eyebrow:** Third Leap Labs

**Headline:** Engineering intelligence for the physical and digital world.

**Supporting copy:** Third Leap Labs builds applied AI, computer-vision and Web3 products that turn complex data into clearer, faster decisions.

**Primary action:** Explore Cognisense Cloud

**Secondary action:** View our work

The next major section should feature Cognisense Cloud prominently:

**Headline:** Give every camera intelligence.

**Copy:** Cognisense Cloud connects compatible cameras, edge AI and cloud workflows to surface important events, manage incidents and understand operations across every location.

**Actions:** Explore Cognisense Cloud / Request a pilot

WhaleScanner and open engineering should follow as supporting proof of product breadth.

### Required routes

Implement or maintain:

- `/`
- `/work`
- `/capabilities`
- `/open-source`
- `/company`
- `/contact`
- `/work/cognisense-cloud`
- `/work/whalescanner`
- Existing legal pages

Maintain GoPaySol only when the current portfolio still requires it.

Redirect all legacy VisionX and FlameTrax routes to `/work/cognisense-cloud`. Remove duplicate navigation entries and duplicate current-brand pages.

### Cognisense Cloud product page

Create a credible corporate-site overview, not a dense application dashboard. Use the existing visual system.

Recommended narrative order:

1. Hero — cloud visual intelligence for safer, smarter operations.
2. Problem — cameras capture continuously, but operators cannot watch everything.
3. Platform — cameras, edge processing, cloud access, events, incidents, evidence and analytics.
4. Product capabilities:
   - Multi-site monitoring
   - Configurable AI events
   - Incident review and response
   - Search and evidence
   - Analytics and operational trends
   - Edge, cloud and hybrid deployment patterns
   - Roles, governance and integrations
5. Priority use cases:
   - Industrial safety
   - Logistics and warehouses
   - Critical infrastructure
   - Commercial facilities
   - Construction and transport environments
6. Pilot approach — discover, connect, configure, validate and scale.
7. CTA — visit cognisense.cam or request a pilot.

Use careful wording. Do not claim that every listed detector is currently production-ready unless the repository contains verified evidence. Describe unverified capabilities as configurable, pilot-dependent or planned.

### Capabilities page

Organise capabilities into clear groups:

- Applied AI and decision systems
- Computer vision and visual operations
- Cloud, edge and platform engineering
- Web3 and trust systems
- Open engineering and integrations

Lead with outcomes and real systems rather than generic technology buzzwords.

### Company page

Present Third Leap Labs as a founder-led US company with global engineering perspective and a proposed Qatar/GCC expansion. Do not claim that the company is already established in Qatar.

Do not publish sensitive personal, financial or registration identifiers.

### Contact page

Prioritise these enquiry types:

- Cognisense Cloud pilot
- Systems-integration or channel partnership
- Applied AI/product-engineering discussion
- Investment or accelerator conversation
- General enquiry

Keep the current email-based mechanism if no backend exists. Make the selected enquiry type visible in the prefilled subject/body.

### Visual and interaction requirements

- Preserve the existing bright, editorial website system.
- Use generous whitespace and large typography.
- Keep one principal idea per section.
- Use restrained blue/cyan accents.
- Reuse current components and tokens.
- Use motion only to support hierarchy and orientation.
- Support reduced motion.
- Avoid cyberpunk, excessive glassmorphism, animated particle backgrounds and generic AI imagery.
- Do not copy Apple assets or exact layouts.

### Technical requirements

- Preserve strict TypeScript.
- Avoid `any` unless technically unavoidable and documented.
- Reuse shared components.
- Keep React Router redirects explicit.
- Update SEO metadata for changed routes.
- Ensure responsive layouts and no horizontal overflow.
- Use semantic HTML and accessible controls.
- Do not add dependencies unless necessary.

### Validation

Run:

```bash
npm ci
npm run lint
npm run build
```

Report the exact results. Do not deploy. Produce a pull request or committed patch for review.

### Completion report

Return:

1. Summary of visible changes.
2. Routes created, changed and redirected.
3. Files changed.
4. Validation results.
5. Remaining real screenshots/assets needed.
6. Any statements still requiring founder verification.

---

## Recommended execution sequence

Do not use the entire master task as one uncontrolled rewrite. Use these reviewable Codex tasks in order:

1. Audit current site and prepare naming/route migration.
2. Replace VisionX and FlameTrax with Cognisense Cloud and add redirects.
3. Update navigation, footer and SEO.
4. Update the homepage narrative.
5. Build `/work/cognisense-cloud`.
6. Refine `/work` and `/capabilities`.
7. Update `/company` and `/contact`.
8. Run full responsive, accessibility, lint and build review.

Each task should end with a separate reviewable commit or pull request when practical.
