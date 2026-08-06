# Shared Website Design System and Components

## Design intent

Both websites should share a premium product-family language inspired by the clarity and restraint of Apple product pages: strong editorial hierarchy, generous spacing, carefully staged visuals and controlled motion. Reuse the existing design where it already achieves this. Do not create an unrelated theme.

## Colour direction

Use the current Third Leap Labs palette as the source of truth when available. Until the exact tokens are extracted from the existing codebase, use this functional structure rather than hard-coding a conflicting new brand:

- `Background / primary`: white or near-white
- `Background / secondary`: very light neutral
- `Text / primary`: near-black charcoal
- `Text / secondary`: cool grey
- `Product accent`: clear intelligent blue
- `Product accent / light`: cyan or pale blue for data and event highlights
- `Success`: restrained green
- `Warning`: amber
- `Critical`: red/coral
- `Dark showcase`: deep navy-black, not pure black on every section

Use status colours only for meaningful operational states. Do not turn the full marketing website into a dashboard colour scheme.

## Typography

### Preferred approach

Use the existing website font stack if it is readable and modern. Otherwise use a high-quality system sans-serif stack.

Suggested fallback:

```css
font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Do not attempt to redistribute proprietary Apple fonts.

### Scale

- Display hero: fluid `clamp(3rem, 7vw, 7rem)` depending on page and viewport
- Page title: `clamp(2.5rem, 5vw, 5rem)`
- Section headline: `clamp(2rem, 4vw, 4rem)`
- Card headline: `1.25rem–1.75rem`
- Body large: `1.125rem–1.375rem`
- Body: `1rem–1.125rem`
- Eyebrow: `0.75rem–0.875rem`, uppercase with restrained letter spacing

Use short line lengths. Display headlines should normally remain under 12 words.

## Spacing

Adopt a consistent 4/8-point system.

- Desktop section vertical padding: 96–160 px
- Tablet section padding: 72–112 px
- Mobile section padding: 56–88 px
- Maximum content width: approximately 1200–1320 px
- Reading copy width: approximately 620–760 px

Do not fill every gap. White space is a core design element.

## Grid

- 12-column desktop grid
- 8-column tablet grid
- 4-column mobile grid
- Content gutters must scale fluidly
- Align headlines, visuals and CTAs to a visible shared structure

## Corners and borders

- Medium radius for product frames and cards
- Smaller radius for buttons and controls
- Use subtle neutral borders rather than heavy shadows
- Use large-radius editorial panels selectively

## Shadows

Use soft depth only for floating product frames, menus and modal layers. Avoid strong card shadows across every section.

## Buttons

### Primary

- Filled product accent
- High contrast
- Concise action label
- Clear hover, active, focus and disabled states

### Secondary

- Neutral outline, soft fill or text-link treatment
- Must remain visible on both light and dark backgrounds

### Labels

Preferred:

- Explore Cognisense
- Request a Pilot
- See How It Works
- View the Platform
- Start a Conversation

Avoid vague labels such as Learn More when a specific action is possible.

## Motion

### Allowed

- Gentle fade and rise on section entry
- Product-frame scale or depth movement
- Event overlays appearing in sequence
- Horizontal module rails with controlled scrolling
- Architecture connections animating once
- Sticky product-story sections

### Avoid

- Constant floating elements
- Fast parallax
- Excessive cursor effects
- Autoplay carousels that cannot be paused
- Long blocking intro animations
- Motion that obscures content

Always support `prefers-reduced-motion`.

## Core reusable components

### Marketing foundation

- Global header
- Mobile navigation
- Corporate footer
- Product footer
- Announcement bar, optional
- Breadcrumbs for deep pages

### Content

- Hero section
- Eyebrow + headline + copy block
- Split text/visual section
- Full-width product showcase
- Sticky product-story section
- Editorial capability panel
- Module rail
- Step/process timeline
- Architecture diagram wrapper
- Use-case tile
- Quote or evidence block, only when real proof exists
- Resource/download tile
- FAQ accordion
- CTA band

### Product visuals

- Browser frame
- Desktop application frame
- Camera-feed tile
- Event badge
- Incident card
- Analytics card
- Site/device status row
- Architecture node and connector

### Forms

- Text field
- Select
- Multi-select or checkbox group
- Text area
- Consent checkbox
- Error state
- Success state
- Loading state

## Product screenshot treatment

- Screenshots must be large enough to read.
- Use purposeful crops focused on the feature being discussed.
- Do not place a full dashboard inside a tiny card.
- Use real UI screenshots when available.
- Remove development URLs, personal data and debug information.
- Apply consistent browser/device framing.

## Iconography

Use one coherent icon set already present in the codebase. Prefer simple line icons. Do not mix emoji, filled glyphs and unrelated icon libraries in production.

## Photography and imagery

Where real-world images are used:

- Prefer modern industrial, logistics, facility and infrastructure environments.
- Images should have clean geometry and space for text.
- Avoid fear-heavy surveillance imagery.
- Avoid generic hooded-hacker and glowing-robot clichés.
- Ensure licensing is documented.

## Accessibility

- Semantic HTML and correct heading hierarchy
- Keyboard-operable navigation and forms
- Visible focus state
- Accessible form labels and errors
- Sufficient colour contrast
- Alt text for informative images
- Empty alt for decorative images
- Captions/transcripts for important video
- Reduced-motion support
- Touch targets of suitable size

## Performance

- Optimised WebP/AVIF assets
- Responsive image sizes
- Lazy loading below the fold
- Preload only critical fonts/assets
- Avoid unnecessary client-side JavaScript
- Compress videos and provide poster images
- Prevent layout shift
- Measure Core Web Vitals

## Shared tokens

Extract common design tokens into a shared theme or documented token file where repository architecture permits:

- colours
- typography
- spacing
- radii
- shadows
- breakpoints
- motion durations/easings
- content widths

## Quality rule

Every section must answer one question. If a section contains multiple unrelated messages, split it. If a card requires a paragraph to explain its purpose, simplify the card or use a full editorial section.
