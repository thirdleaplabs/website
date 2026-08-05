import { ArrowUpRight, Code2, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, Reveal, SectionIntro } from '../components/ui/Primitives';
import { FlameTraxVisual, OpenSourceVisual, VisionXVisual, WhaleScannerVisual } from '../components/ui/Visuals';

const work = [
  {
    classification: 'Third Leap Labs product',
    title: 'WhaleScanner',
    category: 'Web3 intelligence platform',
    description: 'Wallet intelligence, market signals, project discovery, community participation and risk awareness in one connected crypto product.',
    to: '/work/whalescanner',
    visual: <WhaleScannerVisual />,
    tags: ['Web3', 'AI signals', 'Data products', 'Mobile'],
  },
  {
    classification: 'Third Leap Labs product',
    title: 'VisionX',
    category: 'AI video security and operations',
    description: 'A clear, focused experience for monitoring sites, understanding AI events and investigating the moments that need attention.',
    to: '/work/visionx',
    visual: <VisionXVisual />,
    tags: ['Computer vision', 'Security operations', 'Cloud', 'UX'],
  },
  {
    classification: 'Core technology platform',
    title: 'FlameTrax',
    category: 'Edge-to-cloud vision engine',
    description: 'A modular computer-vision platform that connects camera streams, inference, event processing, evidence, alerts and cloud workflows.',
    to: '/work/flametrax',
    visual: <FlameTraxVisual />,
    tags: ['Edge AI', 'Real-time events', 'Plugins', 'APIs'],
  },
  {
    classification: 'Open engineering',
    title: 'Open foundations',
    category: 'Reusable engines and tooling',
    description: 'Selected architecture patterns, plugins and developer infrastructure built from real product needs and designed for extension.',
    to: '/open-source',
    visual: <OpenSourceVisual />,
    tags: ['Open source', 'SDKs', 'Developer tools', 'Platforms'],
  },
];

export const Work = () => (
  <Layout>
    <SEO
      title="Work | Third Leap Labs"
      description="Explore Third Leap Labs products and engineering work across AI, computer vision, Web3 and open-source platforms."
      path="/work"
    />
    <PageHero
      eyebrow="Selected work"
      title={<>Products built where <span className="text-gradient">disciplines overlap.</span></>}
      description="Our portfolio connects intelligent software, visual perception, decentralized data and open infrastructure. Each product is a practical expression of that combination."
    />

    <section className="pb-24 sm:pb-32">
      <div className="page-shell grid gap-6 lg:grid-cols-2">
        {work.map((item, index) => (
          <Reveal key={item.title} delay={(index % 2) * .07}>
            <article className="product-card flex h-full flex-col rounded-[2rem] p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-cyan/15 bg-cyan/[.055] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[.16em] text-cyan/74">
                  {item.classification}
                </span>
                <span className="text-[10px] uppercase tracking-[.15em] text-white/28">{item.category}</span>
              </div>
              <h2 className="mt-7 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">{item.title}</h2>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/50">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/[.075] bg-white/[.03] px-3 py-1.5 text-[10px] text-white/42">{tag}</span>
                ))}
              </div>
              <div className="mt-8">{item.visual}</div>
              <Link to={item.to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/64 transition hover:text-white">
                View project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="section-space border-t border-white/[.075] bg-[#090b11]">
      <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionIntro
            eyebrow="What counts as work"
            title="Not every good system needs a glossy product name."
            description="We also work on the foundations: architecture, edge runtimes, event pipelines, analytics engines, integrations and the interfaces that make complex technology manageable."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ['Product systems', 'End-to-end web and mobile products with the infrastructure behind them.', Layers3],
            ['Platform foundations', 'Shared engines, APIs and plugin boundaries that support multiple products.', Code2],
          ].map(([title, copy, Icon]) => (
            <Reveal key={String(title)}>
              <div className="rounded-[1.6rem] border border-white/[.08] bg-white/[.025] p-7">
                <Icon className="h-5 w-5 text-cyan" />
                <h3 className="mt-8 text-2xl font-semibold tracking-[-.035em]">{String(title)}</h3>
                <p className="mt-4 text-sm leading-7 text-white/48">{String(copy)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
