import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  Blocks,
  BrainCircuit,
  Camera,
  Code2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { CapabilityCard, PrimaryLink, Reveal, SectionIntro } from '../components/ui/Primitives';
import { GoPaySolVisual, OpenSourceVisual, VisionXVisual, WhaleScannerVisual } from '../components/ui/Visuals';

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
    description: 'Wallet-aware products and payment workflows that make decentralized activity easier to understand and verify.',
    items: ['Wallet intelligence', 'On-chain data products', 'Non-custodial payments'],
  },
  {
    icon: Code2,
    number: '04',
    title: 'Open-source engineering',
    description: 'Reusable engines, APIs and plugin systems designed to be understood, extended and improved over time.',
    items: ['Open architecture', 'Plugin ecosystems', 'Developer infrastructure'],
  },
];

const products = [
  {
    eyebrow: 'Crypto · Web3 intelligence',
    title: 'WhaleScanner',
    copy: 'A crypto intelligence and community platform that brings wallet activity, market context, project discovery and risk awareness into one coherent experience.',
    tags: ['Web3', 'AI signals', 'Data engineering'],
    to: '/work/whalescanner',
    visual: <WhaleScannerVisual />,
    glow: 'rgba(57,230,208,.20)',
  },
  {
    eyebrow: 'Crypto · Payments',
    title: 'GoPaySol',
    copy: 'A non-custodial Solana payment workflow for creating payment requests, sharing QR flows, verifying settlement and keeping clear receipt records.',
    tags: ['Solana', 'Payments', 'Verification'],
    to: '/work/gopaysol',
    visual: <GoPaySolVisual />,
    glow: 'rgba(177,92,255,.20)',
  },
  {
    eyebrow: 'AI & computer vision',
    title: 'VisionX',
    copy: 'An edge-to-cloud video intelligence platform for live monitoring, AI event detection, alerts, investigation and operational response.',
    tags: ['AI', 'Computer vision', 'Edge & cloud'],
    to: '/work/visionx',
    visual: <VisionXVisual />,
    glow: 'rgba(92,124,255,.22)',
  },
  {
    eyebrow: 'Open source',
    title: 'Open-source engineering',
    copy: 'Reusable engines, plugins and developer tooling created from real product requirements—not isolated demonstration projects.',
    tags: ['Open source', 'Platforms', 'Developer tools'],
    to: '/open-source',
    visual: <OpenSourceVisual />,
    glow: 'rgba(255,112,150,.18)',
  },
];

const heroPhoto = 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1600';
const processPhoto = 'https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg?auto=compress&cs=tinysrgb&w=1400';

export const Home = () => (
  <Layout>
    <SEO
      title="Third Leap Labs | AI, Computer Vision, Web3 & Open Source"
      description="Third Leap Labs builds WhaleScanner and GoPaySol for crypto, VisionX for AI and computer vision, and open-source technology foundations."
      path="/"
    />

    <section className="relative overflow-hidden bg-[#f5f7fb] pb-20 pt-36 text-slate-950 sm:pt-44 lg:min-h-[850px] lg:pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.035)_1px,transparent_1px)] bg-[size:54px_54px]" />
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-cyan-200/35 blur-[120px]" />
      <div className="absolute right-[20%] top-8 h-80 w-80 rounded-full bg-indigo-200/35 blur-[120px]" />

      <div className="page-shell relative grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-14">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55 }}
            className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[.17em] text-blue-700"
          >
            <span className="h-px w-8 bg-gradient-to-r from-cyan-500 to-blue-600" />
            Product & engineering lab
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .75, delay: .08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-[760px] text-[clamp(3.25rem,6.8vw,6.2rem)] font-bold leading-[.94] tracking-[-.065em]"
          >
            We build <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">intelligent systems</span> for the real world.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .2 }}
            className="mt-8 max-w-2xl text-[18px] leading-8 text-slate-600 sm:text-[20px]"
          >
            Third Leap Labs builds crypto products, AI and computer-vision systems, and open-source technology foundations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .28 }}
            className="mt-4 max-w-xl text-[15px] leading-7 text-slate-500 sm:text-base"
          >
            Our product portfolio includes WhaleScanner and GoPaySol in crypto, and VisionX in AI and computer vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .36 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,.24)] transition hover:-translate-y-0.5"
            >
              Explore our work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .7, delay: .55 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {['Artificial intelligence', 'Computer vision', 'Web3', 'Open source'].map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-[11px] font-semibold text-slate-600 shadow-sm">
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: .97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .9, delay: .18, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-[0_32px_90px_rgba(15,23,42,.20)]">
            <img
              src={heroPhoto}
              alt="Software engineers working together in a bright modern office"
              className="aspect-[4/3] w-full rounded-[1.55rem] object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/60 bg-white/88 p-4 shadow-lg backdrop-blur-xl sm:inset-x-auto sm:bottom-7 sm:left-7 sm:max-w-[320px]">
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-blue-700">End-to-end product engineering</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-900">From product thinking and architecture to working software.</p>
            </div>
          </div>
          <div className="absolute -right-5 -top-5 hidden rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:block">
            <p className="text-[10px] font-bold uppercase tracking-[.15em] text-slate-400">Building across</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">AI · Vision · Web3 · Open</p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="overflow-hidden border-y border-slate-200 bg-white py-5 text-slate-900">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center gap-12 pr-12 text-xs font-semibold uppercase tracking-[.18em] text-slate-500 sm:gap-20 sm:pr-20">
            <span>Systems that see</span>
            <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
            <span>Products that think</span>
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Technology people can trust</span>
            <Sparkles className="h-3.5 w-3.5 text-violet-600" />
            <span>Open foundations that evolve</span>
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-600" />
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
            description="The interesting work usually happens between categories. We combine specialised technology with strong product engineering so the result feels coherent from infrastructure to interface."
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
              description="Two crypto products, one AI and computer-vision platform, and open-source engineering foundations."
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
                style={{ '--card-glow': product.glow } as CSSProperties}
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
        <div className="grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[.025] p-2 shadow-2xl shadow-black/25">
              <img
                src={processPhoto}
                alt="Software team reviewing a development project together"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={.08}>
            <div>
              <SectionIntro
                eyebrow="How we work"
                title="Serious engineering, without the theatre."
                description="We keep teams close to the problem, make decisions visible and ship in focused increments. The aim is not a beautiful presentation—it is a product that survives contact with the real world."
              />
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  ['Understand', 'Users, workflow and constraints', BrainCircuit],
                  ['Architect', 'Product, data and infrastructure', Blocks],
                  ['Build', 'Focused, testable increments', Workflow],
                  ['Evolve', 'Evidence from real usage', Sparkles],
                ].map(([title, copy, Icon]) => (
                  <div key={String(title)} className="rounded-2xl border border-white/[.08] bg-white/[.025] p-5">
                    <Icon className="h-4 w-4 text-cyan" />
                    <p className="mt-4 text-sm font-semibold">{String(title)}</p>
                    <p className="mt-2 text-xs leading-6 text-white/42">{String(copy)}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
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
                  Tell us about the product, the users and the part that is difficult to get right. We will help turn it into working software.
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
