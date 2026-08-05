import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  Blocks,
  BrainCircuit,
  Camera,
  Code2,
  Github,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import {
  CapabilityCard,
  PrimaryLink,
  Reveal,
  SecondaryLink,
  SectionIntro,
} from '../components/ui/Primitives';
import {
  FlameTraxVisual,
  OpenSourceVisual,
  TechnologyMap,
  VisionXVisual,
  WhaleScannerVisual,
} from '../components/ui/Visuals';

const capabilities = [
  {
    icon: BrainCircuit,
    number: '01',
    title: 'Artificial intelligence',
    description: 'Agents, analytical engines and product intelligence shaped around real decisions—not AI added for decoration.',
    items: ['AI agents and orchestration', 'Signal and decision engines', 'Workflow intelligence'],
  },
  {
    icon: Camera,
    number: '02',
    title: 'Computer vision',
    description: 'Systems that understand events from live video, run close to the camera and turn detections into useful action.',
    items: ['Edge inference', 'Safety and security analytics', 'Custom event models'],
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Web3 and digital trust',
    description: 'Wallet-aware products and data pipelines that make decentralized activity easier to understand and verify.',
    items: ['Wallet intelligence', 'On-chain data products', 'Transparent user workflows'],
  },
  {
    icon: Code2,
    number: '04',
    title: 'Open platform engineering',
    description: 'Reusable engines, APIs and plugin systems designed to be understood, extended and improved over time.',
    items: ['Open architecture', 'Plugin ecosystems', 'Developer infrastructure'],
  },
];

const products = [
  {
    eyebrow: 'Web3 intelligence',
    title: 'WhaleScanner',
    copy: 'A crypto intelligence and community platform that brings wallet activity, market context, project discovery and risk awareness into one coherent experience.',
    tags: ['Web3', 'AI signals', 'Data engineering'],
    to: '/work/whalescanner',
    visual: <WhaleScannerVisual />,
    glow: 'rgba(57,230,208,.20)',
  },
  {
    eyebrow: 'Video operations',
    title: 'VisionX',
    copy: 'A focused security experience for live monitoring, AI events, investigation and incident response—powered by the FlameTrax engine.',
    tags: ['Computer vision', 'Security UX', 'Cloud'],
    to: '/work/visionx',
    visual: <VisionXVisual />,
    glow: 'rgba(92,124,255,.22)',
  },
  {
    eyebrow: 'Vision platform',
    title: 'FlameTrax',
    copy: 'A modular edge-to-cloud computer-vision platform that turns camera streams into detections, alerts, evidence and operational intelligence.',
    tags: ['Edge AI', 'Real-time events', 'APIs'],
    to: '/work/flametrax',
    visual: <FlameTraxVisual />,
    glow: 'rgba(177,92,255,.20)',
  },
  {
    eyebrow: 'Open foundations',
    title: 'Open-source engineering',
    copy: 'Reusable engines, plugins and developer tooling created from real product requirements—not isolated demonstration projects.',
    tags: ['Open source', 'Platforms', 'Developer tools'],
    to: '/open-source',
    visual: <OpenSourceVisual />,
    glow: 'rgba(255,112,150,.18)',
  },
];

export const Home = () => (
  <Layout>
    <SEO
      title="Third Leap Labs | AI, Computer Vision, Web3 & Open Source"
      description="Third Leap Labs builds production-grade products across artificial intelligence, computer vision, Web3 and open-source infrastructure."
      path="/"
    />

    <section className="noise relative min-h-[860px] overflow-hidden pb-20 pt-36 sm:pt-44 lg:flex lg:min-h-screen lg:items-center lg:pb-24">
      <div className="absolute inset-0 section-grid opacity-60" />
      <div className="absolute left-[18%] top-[8%] h-[34rem] w-[34rem] rounded-full bg-electric/12 blur-[140px]" />
      <div className="absolute right-[-8%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-violet/10 blur-[130px]" />

      <div className="page-shell relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55 }}
            className="eyebrow"
          >
            Product & engineering lab
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .75, delay: .08, ease: [0.22, 1, 0.36, 1] }}
            className="display mt-7 max-w-[850px]"
          >
            We build <span className="text-gradient">intelligent systems</span> for the real world.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .2 }}
            className="mt-8 max-w-2xl text-[18px] leading-8 text-white/58 sm:text-[20px]"
          >
            Third Leap Labs turns ambitious ideas into production-ready products across AI, computer vision, Web3 and open-source technology.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .28 }}
            className="mt-4 max-w-xl text-[15px] leading-7 text-white/42 sm:text-base"
          >
            We are hands-on builders. We care about the product people use, the systems behind it and the details that keep both reliable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .36 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <PrimaryLink to="/work">Explore our work</PrimaryLink>
            <SecondaryLink to="/contact">Build with us</SecondaryLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .7, delay: .55 }}
            className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-semibold uppercase tracking-[.16em] text-white/28"
          >
            <span>Artificial intelligence</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span>Computer vision</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span>Web3</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span>Open source</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: .96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .9, delay: .18, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <TechnologyMap />
        </motion.div>
      </div>
    </section>

    <section className="overflow-hidden border-y border-white/[.075] bg-white/[.018] py-5">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center gap-12 pr-12 text-xs font-semibold uppercase tracking-[.19em] text-white/30 sm:gap-20 sm:pr-20">
            <span>Systems that see</span>
            <Sparkles className="h-3.5 w-3.5 text-cyan/65" />
            <span>Products that think</span>
            <Sparkles className="h-3.5 w-3.5 text-electric/70" />
            <span>Technology people can trust</span>
            <Sparkles className="h-3.5 w-3.5 text-violet/70" />
            <span>Open foundations that evolve</span>
            <Sparkles className="h-3.5 w-3.5 text-coral/70" />
          </div>
        ))}
      </div>
    </section>

    <section className="section-space">
      <div className="page-shell">
        <Reveal>
          <SectionIntro
            eyebrow="What we bring together"
            title="Four disciplines. One product mindset."
            description="The interesting work usually happens between categories. We combine specialised technology with strong product engineering so the result feels coherent from edge device to user interface."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * .07}>
              <CapabilityCard {...capability} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space border-y border-white/[.075] bg-[#090b11]">
      <div className="page-shell">
        <Reveal>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Selected work"
              title="Technology proven through products."
              description="Our portfolio is where the disciplines meet: live data, real interfaces, edge intelligence and systems designed to keep growing."
            />
            <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-white/62 transition hover:text-white">
              See the complete portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.title} delay={(index % 2) * .08}>
              <article
                className="product-card flex h-full flex-col rounded-[2rem] p-5 sm:p-7"
                style={{ '--card-glow': product.glow } as React.CSSProperties}
              >
                <div className="relative z-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-cyan/68">{product.eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-.045em] sm:text-4xl">{product.title}</h3>
                  <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/50">{product.copy}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/[.075] bg-white/[.035] px-3 py-1.5 text-[10px] font-medium text-white/46">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 mt-8">{product.visual}</div>
                <Link to={product.to} className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/68 transition hover:text-white">
                  Explore {product.title} <ArrowDownRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space relative overflow-hidden">
      <div className="absolute inset-0 section-grid opacity-45" />
      <div className="page-shell relative">
        <Reveal>
          <SectionIntro
            eyebrow="How we work"
            title="Serious engineering, without the theatre."
            description="We keep teams close to the problem, make decisions visible and ship in focused increments. The aim is not a beautiful presentation—it is a product that survives contact with the real world."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.8rem] border border-white/[.075] bg-white/[.075] md:grid-cols-2 xl:grid-cols-4">
          {[
            ['01', 'Understand', 'We learn the workflow, the users and the uncomfortable constraints before proposing technology.', BrainCircuit],
            ['02', 'Architect', 'We shape the product, data, infrastructure and deployment model as one connected system.', Blocks],
            ['03', 'Build', 'We create the first serious version quickly, while protecting the foundations that matter later.', Workflow],
            ['04', 'Evolve', 'We instrument what ships, listen to real usage and improve the system with evidence.', Sparkles],
          ].map(([number, title, copy, Icon]) => (
            <div key={String(number)} className="bg-[#0a0c12] p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/24">{String(number)}</span>
                <Icon className="h-5 w-5 text-cyan/70" />
              </div>
              <h3 className="mt-10 text-2xl font-semibold tracking-[-.035em]">{String(title)}</h3>
              <p className="mt-4 text-[14px] leading-7 text-white/47">{String(copy)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20 sm:pb-28">
      <div className="page-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#12182a] via-[#10121d] to-[#16101f] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-violet/20 blur-[100px]" />
            <div className="absolute -bottom-20 left-[28%] h-64 w-64 rounded-full bg-cyan/12 blur-[100px]" />
            <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="eyebrow">Start somewhere real</p>
                <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-.05em] sm:text-6xl">
                  Building something technically ambitious?
                </h2>
                <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/55">
                  Tell us what needs to see, think, verify or scale. We will help turn the idea into a product people can actually use.
                </p>
              </div>
              <PrimaryLink to="/contact">Start a conversation</PrimaryLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);
