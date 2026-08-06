# Third Leap Labs — Modern Website Redesign Plan

## Goal

Position Third Leap Labs as a product and engineering lab with a clear portfolio across:

- Crypto and Web3
- Artificial intelligence and computer vision
- Open-source platform engineering

The design should feel current, technically credible and human—not like a stock agency template or a noisy crypto landing page.

## Existing stack preserved

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Router
- React Helmet Async

## Brand direction

**Core idea:** We build intelligent systems for the real world.

**Visual language:** A bright, corporate hero with real software-team photography, supported by darker product sections, strong typography and restrained technical accents.

**Tone:** Clear, practical, confident and conversational. Avoid buzzword-heavy claims, invented screenshots and fabricated statistics.

## Information architecture

- `/` — Home
- `/cognisense` — Cognisense Cloud product overview and canonical corporate-site route
- `/products` — Product and engineering portfolio
- `/capabilities` — AI, computer vision, Web3 and open-source capabilities
- `/open-source` — Open-source philosophy and contribution model
- `/company` — Company story, principles and working style
- `/contact` — Enquiry form and contact information
- Existing legal routes remain available

Legacy Cognisense, VisionX and FlameTrax routes redirect explicitly to `/cognisense`. Legacy WhaleScanner detail routes redirect to `/products#whalescanner`.

## Portfolio structure

### Crypto and Web3

- **WhaleScanner** — Crypto intelligence and community platform
- **GoPaySol** — Non-custodial Solana payment request, verification and receipt workflow

### AI and computer vision

- **Cognisense Cloud by Third Leap Labs** — Cloud and edge visual-intelligence platform for monitoring, AI events, incidents, evidence and operational response

### Open source

- **Open-source engineering** — Reusable engines, APIs, plugins and developer tools

Cognisense Cloud by Third Leap Labs is the current public visual-intelligence product name.

## UX principles

- Mobile-first layouts with no horizontal overflow
- Large, readable type with controlled line length
- Strong keyboard focus states
- Reduced-motion support
- Real corporate photography where photography is useful
- Editorial product-story visuals instead of invented application screenshots
- Clear product classifications and ownership language
- No fake clients, testimonials or metrics

## Implementation notes

The contact form opens a prefilled email draft because the current repository does not expose a contact backend. This is functional without introducing a new service and can later be replaced by an API endpoint.
