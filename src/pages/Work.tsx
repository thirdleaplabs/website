import { ArrowRight, Camera, Cpu, WalletCards, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, PrimaryLink, Reveal, SectionIntro } from '../components/ui/Primitives';

type Product = {
  name: string;
  category: string;
  description: string;
  problem: string;
  outcome: string;
  to: string;
  icon: LucideIcon;
  dark: boolean;
};

const products: Product[] = [
  {
    name: 'WhaleScanner',
    category: 'Crypto intelligence and community',
    description: 'Wallet activity, market context, project discovery, signals and community in one connected crypto product.',
    problem: 'Crypto users assemble the story manually across explorers, charts, social feeds and private groups.',
    outcome: 'A clearer place to discover activity, understand context and participate with better information.',
    to: '/work/whalescanner',
    icon: WalletCards,
    dark: true,
  },
  {
    name: 'VisionX',
    category: 'AI video security and operations',
    description: 'Live monitoring, AI events, alerts, investigation and evidence in one calmer operational workflow.',
    problem: 'Operators cannot continuously watch every camera, and isolated alerts often arrive without enough context.',
    outcome: 'Important visual events become structured incidents a team can understand and act on.',
    to: '/work/visionx',
    icon: Camera,
    dark: false,
  },
  {
    name: 'FlameTrax',
    category: 'Computer-vision platform',
    description: 'A reusable edge-to-cloud engine for camera integration, visual inference, event processing and deployment.',
    problem: 'Computer-vision products repeatedly rebuild the same capture, inference, orchestration and integration foundations.',
    outcome: 'A modular platform that lets new visual-intelligence products start from a serious engineering base.',
    to: '/work/flametrax',
    icon: Cpu,
    dark: false,
  },
  {
    name: 'GoPaySol',
    category: 'Non-custodial Solana payments',
    description: 'Payment requests, shareable links, QR flows, on-chain verification and readable receipt records.',
    problem: 'Copied wallet addresses do not explain the amount, purpose or status of a payment.',
    outcome: 'A clear path from request to wallet approval, settlement verification and receipt.',
    to: '/work/gopaysol',
    icon: Zap,
    dark: true,
  },
];

export const Work = () => (
  <Layout>
    <SEO
      title="Work | Third Leap Labs"
      description="Explore Third Leap Labs products across AI, computer vision, Web3 and open engineering."
      path="/work"
    />
    <PageHero
      eyebrow="Our work"
      title={<>Products built around <span className="text-gradient">real problems.</span></>}
      description="We connect specialised technology to complete product experiences—from edge architecture and data systems to the interfaces people use."
    />

    <section className="section-space bg-white">
      <div className="page-shell">
        <Reveal>
          <SectionIntro
            eyebrow="Product portfolio"
            title="Different technologies. The same product discipline."
            description="Every product has a specific job, a clear operating model and an architecture designed to grow beyond the first release."
          />
        </Reveal>

        <div className="mt-16 space-y-5">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal key={product.name} delay={(index % 2) * .05}>
                <Link
                  to={product.to}
                  className={`group grid overflow-hidden rounded-[2rem] border transition duration-300 hover:-translate-y-1 lg:grid-cols-[.82fr_1.18fr] ${
                    product.dark
                      ? 'border-white/10 bg-[#07111f] text-white shadow-[0_26px_80px_rgba(7,17,31,.2)]'
                      : 'border-black/10 bg-[#f7f9fb] text-[#07111f] shadow-[0_22px_65px_rgba(7,17,31,.07)]'
                  }`}
                >
                  <div className={`relative min-h-[310px] overflow-hidden p-7 sm:p-10 ${product.dark ? 'tech-grid' : 'light-grid'}`}>
                    <div className={`absolute -right-16 -top-16 h-64 w-64 rounded-full blur-[90px] ${product.dark ? 'bg-[#1d9bf0]/24' : 'bg-[#1d9bf0]/14'}`} />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className={`grid h-14 w-14 place-items-center rounded-2xl ${product.dark ? 'border border-white/10 bg-white/10 text-[#7dd3fc]' : 'bg-white text-[#0b7dbd] shadow-sm'}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-[.15em] ${product.dark ? 'text-white/42' : 'text-[#6b7280]'}`}>{product.category}</p>
                        <h2 className="mt-4 text-4xl font-semibold tracking-[-.055em] sm:text-5xl">{product.name}</h2>
                      </div>
                    </div>
                  </div>

                  <div className={`p-7 sm:p-10 lg:p-12 ${product.dark ? 'border-t border-white/10 lg:border-l lg:border-t-0' : 'border-t border-black/10 bg-white lg:border-l lg:border-t-0'}`}>
                    <p className={`text-lg leading-8 ${product.dark ? 'text-white/62' : 'text-[#5b6472]'}`}>{product.description}</p>
                    <div className={`mt-9 grid gap-7 border-t pt-8 sm:grid-cols-2 ${product.dark ? 'border-white/10' : 'border-black/10'}`}>
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-[.14em] ${product.dark ? 'text-white/34' : 'text-[#9ca3af]'}`}>Problem</p>
                        <p className={`mt-3 text-sm leading-7 ${product.dark ? 'text-white/50' : 'text-[#5b6472]'}`}>{product.problem}</p>
                      </div>
                      <div>
                        <p className={`text-xs font-semibold uppercase tracking-[.14em] ${product.dark ? 'text-white/34' : 'text-[#9ca3af]'}`}>Outcome</p>
                        <p className={`mt-3 text-sm leading-7 ${product.dark ? 'text-white/50' : 'text-[#5b6472]'}`}>{product.outcome}</p>
                      </div>
                    </div>
                    <span className={`mt-9 inline-flex items-center gap-2 text-sm font-semibold transition group-hover:gap-3 ${product.dark ? 'text-[#7dd3fc]' : 'text-[#0b7dbd]'}`}>
                      Explore {product.name} <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    <section className="dark-panel section-space relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="page-shell relative grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
        <Reveal>
          <SectionIntro
            eyebrow="How we engage"
            title="Product ownership, platform engineering and difficult technical work."
            description="We build our own products and selectively work with teams where our technology depth can create a meaningful advantage."
            tone="dark"
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Product build', 'Shape and deliver a serious first product from problem definition through deployment.'],
            ['Platform engineering', 'Design reusable foundations, integrations and operating models for a growing product family.'],
            ['Focused technical partnership', 'Solve a difficult AI, vision, Web3 or infrastructure problem inside an existing product.'],
          ].map(([title, copy], index) => (
            <Reveal key={title} delay={index * .05}>
              <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[.055] p-6 backdrop-blur-sm">
                <span className="font-mono text-xs text-white/28">0{index + 1}</span>
                <h3 className="mt-12 text-xl font-semibold tracking-[-.035em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/50">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space bg-[#edf2f6]">
      <div className="page-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <div>
            <p className="eyebrow">Build with us</p>
            <h2 className="section-title mt-5 max-w-4xl text-[#07111f]">Have a hard product or engineering problem?</h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#5b6472]">Start with the real workflow, the current constraints and the outcome that matters.</p>
          </div>
        </Reveal>
        <PrimaryLink to="/contact">Start a conversation</PrimaryLink>
      </div>
    </section>
  </Layout>
);
