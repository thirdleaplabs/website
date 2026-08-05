import {
  ArrowRight,
  Blocks,
  BookOpen,
  Box,
  BrainCircuit,
  Braces,
  Camera,
  CheckCircle2,
  Cloud,
  Code2,
  CreditCard,
  Eye,
  Flame,
  Globe2,
  Layers3,
  ShieldCheck,
  UsersRound,
  WalletCards,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const accentStyles = {
  blue: {
    icon: 'border-[#cfe7ff] bg-[#edf7ff] text-[#0078d4]',
    text: 'text-[#0078d4]',
  },
  green: {
    icon: 'border-[#cdeed1] bg-[#effaf0] text-[#107c10]',
    text: 'text-[#107c10]',
  },
  yellow: {
    icon: 'border-[#ffe5a3] bg-[#fff9e6] text-[#d88b00]',
    text: 'text-[#d88b00]',
  },
  orange: {
    icon: 'border-[#ffd8cc] bg-[#fff3ef] text-[#f25022]',
    text: 'text-[#f25022]',
  },
} as const;

type Accent = keyof typeof accentStyles;

type Capability = {
  title: string;
  description: string;
  image: string;
  to: string;
  icon: LucideIcon;
  accent: Accent;
};

type Product = {
  title: string;
  description: string;
  to: string;
  icon: LucideIcon;
  accent: Accent;
  preview: 'whalescanner' | 'visionx' | 'flametrax' | 'gopaysol';
};

type FlowStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
};

const capabilities: Capability[] = [
  {
    title: 'AI',
    description: 'Custom models and intelligent agents that learn, adapt and deliver useful outcomes.',
    image: '/assets/thirdleap/cap-ai.svg',
    to: '/capabilities',
    icon: BrainCircuit,
    accent: 'blue',
  },
  {
    title: 'Computer Vision',
    description: 'Real-time perception for monitoring, detection, inspection and automation.',
    image: '/assets/thirdleap/cap-vision.svg',
    to: '/capabilities',
    icon: Eye,
    accent: 'green',
  },
  {
    title: 'Web3 Systems',
    description: 'Wallet intelligence, payments and transparent systems for digital ecosystems.',
    image: '/assets/thirdleap/cap-web3.svg',
    to: '/capabilities',
    icon: Blocks,
    accent: 'yellow',
  },
  {
    title: 'Open Engineering',
    description: 'Open platforms, APIs and tools built for transparency, reuse and ownership.',
    image: '/assets/thirdleap/cap-open.svg',
    to: '/open-source',
    icon: Braces,
    accent: 'orange',
  },
];

const products: Product[] = [
  {
    title: 'WhaleScanner',
    description: 'On-chain intelligence, signals, project discovery and crypto community.',
    to: '/work/whalescanner',
    icon: WalletCards,
    accent: 'blue',
    preview: 'whalescanner',
  },
  {
    title: 'VisionX',
    description: 'AI-powered video operations for monitoring, alerts, investigation and evidence.',
    to: '/work/visionx',
    icon: Camera,
    accent: 'blue',
    preview: 'visionx',
  },
  {
    title: 'FlameTrax',
    description: 'The edge-to-cloud computer-vision engine behind visual intelligence products.',
    to: '/work/flametrax',
    icon: Flame,
    accent: 'orange',
    preview: 'flametrax',
  },
  {
    title: 'GoPaySol',
    description: 'Simple, non-custodial Solana payment requests with clear settlement records.',
    to: '/work/gopaysol',
    icon: CreditCard,
    accent: 'green',
    preview: 'gopaysol',
  },
];

const flowSteps: FlowStep[] = [
  {
    title: 'Edge devices',
    description: 'Capture real-world data where it happens.',
    icon: Camera,
    accent: 'blue',
  },
  {
    title: 'Intelligence',
    description: 'Models extract context and actionable insight.',
    icon: BrainCircuit,
    accent: 'blue',
  },
  {
    title: 'Platforms',
    description: 'Scalable systems deliver insight and automation.',
    icon: Box,
    accent: 'green',
  },
  {
    title: 'Actions',
    description: 'Workflows orchestrate the right response.',
    icon: Zap,
    accent: 'yellow',
  },
  {
    title: 'Trust',
    description: 'Security, evidence and verifiable outcomes.',
    icon: ShieldCheck,
    accent: 'green',
  },
];

const engineeringItems = [
  { title: 'Open source', description: 'Public repositories and transparent development.', icon: Code2, accent: 'blue' as Accent },
  { title: 'APIs & SDKs', description: 'Developer-first interfaces for rapid integration.', icon: Layers3, accent: 'blue' as Accent },
  { title: 'Documentation', description: 'Clear guides, references and practical examples.', icon: BookOpen, accent: 'blue' as Accent },
  { title: 'Community', description: 'Contribute, review and build together.', icon: UsersRound, accent: 'blue' as Accent },
  { title: 'Security', description: 'Secure by design and testable by others.', icon: ShieldCheck, accent: 'green' as Accent },
];

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[11px] font-bold uppercase tracking-[.16em] text-[#0078d4]">{children}</p>
);

const ArrowLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to} className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0078d4] transition hover:gap-3 hover:text-[#005ea6]">
    {children} <ArrowRight className="h-3.5 w-3.5" />
  </Link>
);

const ProductPreview = ({ kind }: { kind: Product['preview'] }) => {
  if (kind === 'whalescanner') {
    return (
      <div className="product-preview bg-[#f7faff]">
        <div className="grid grid-cols-[1.2fr_.8fr] gap-2 p-3">
          <div className="rounded-lg border border-[#e1e8f0] bg-white p-2">
            <div className="mb-2 h-2 w-20 rounded-full bg-[#dde6f0]" />
            <div className="space-y-1.5">
              {[72, 54, 64, 42].map((width) => <div key={width} className="h-1.5 rounded-full bg-[#e7edf4]" style={{ width: `${width}%` }} />)}
            </div>
          </div>
          <div className="rounded-lg border border-[#e1e8f0] bg-white p-2">
            <div className="flex h-full items-end justify-between gap-1">
              {[26, 48, 36, 68, 58].map((height) => <span key={height} className="w-full rounded-t bg-[#0078d4]" style={{ height: `${height}%` }} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'visionx') {
    return (
      <div className="product-preview bg-[#f7faff] p-3">
        <div className="grid h-full grid-cols-[1fr_.42fr] gap-2">
          <div className="grid grid-cols-2 gap-1.5 rounded-lg border border-[#dfe7ef] bg-white p-2">
            {[0, 1, 2, 3].map((item) => <div key={item} className="rounded bg-[linear-gradient(145deg,#263a49,#0e1822)]" />)}
          </div>
          <div className="space-y-2 rounded-lg border border-[#dfe7ef] bg-white p-2">
            <div className="h-3 rounded bg-[#0078d4]/15" />
            <div className="h-2 rounded bg-[#e5ebf2]" />
            <div className="h-2 rounded bg-[#e5ebf2]" />
            <div className="h-2 w-2/3 rounded bg-[#e5ebf2]" />
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'flametrax') {
    return (
      <div className="product-preview overflow-hidden bg-[#140d31] p-3">
        <div className="relative h-full overflow-hidden rounded-lg bg-[radial-gradient(circle_at_42%_60%,#ffb900_0,#f25022_8%,#7b2cbf_23%,#141338_52%)]">
          <div className="absolute inset-x-3 top-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/45" /><span className="h-2 w-2 rounded-full bg-white/25" /></div>
          <div className="absolute bottom-3 left-3 right-3 h-7 rounded border border-white/10 bg-white/10 backdrop-blur" />
        </div>
      </div>
    );
  }

  return (
    <div className="product-preview flex items-center justify-center gap-5 bg-[#f3f7fb] p-3">
      <div className="h-[84%] w-[33%] rounded-[18px] border-[5px] border-[#172133] bg-white p-2 shadow-sm">
        <div className="mt-2 h-2 rounded bg-[#0078d4]/20" />
        <div className="mx-auto mt-3 grid h-8 w-8 place-items-center rounded-full bg-[#e8f5e9] text-[#107c10]"><CheckCircle2 className="h-5 w-5" /></div>
      </div>
      <div className="rounded-xl border border-[#dfe7ef] bg-white px-5 py-4 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-6 w-6 text-[#107c10]" />
        <p className="mt-2 text-[10px] font-semibold text-[#172133]">Payment verified</p>
      </div>
    </div>
  );
};

export const Home = () => (
  <Layout>
    <SEO
      title="Third Leap Labs | AI, Computer Vision, Web3 and Open Engineering"
      description="Third Leap Labs builds intelligent products across AI, computer vision, Web3 and open engineering."
      path="/"
    />

    <div className="bg-white pt-[74px] text-[#1a1a1a] sm:pt-[82px]">
      <section className="hero-wash relative overflow-hidden border-b border-[#e6ebf1]">
        <div className="page-shell grid min-h-[650px] items-center gap-8 pb-32 pt-12 lg:grid-cols-[.78fr_1.22fr] lg:pb-36 lg:pt-16">
          <div className="relative z-10 max-w-[590px]">
            <SectionLabel>Build · Open · Elevate</SectionLabel>
            <h1 className="mt-5 text-[clamp(3rem,5.6vw,5.9rem)] font-semibold leading-[.96] tracking-[-.065em] text-[#16181d]">
              Technology that sees, reasons and acts.
            </h1>
            <p className="mt-7 max-w-[560px] text-[17px] leading-8 text-[#5e6b7d]">
              Third Leap Labs builds intelligent systems at the intersection of AI, computer vision, Web3 and open engineering—delivering real-world impact from edge to cloud.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(0,120,212,.2)] transition hover:bg-[#006cbe]">
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/work" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#cfd7e2] bg-white px-6 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#0078d4] hover:text-[#0078d4]">
                Explore our work
              </Link>
            </div>

            <div className="mt-10 border-t border-[#e6ebf1] pt-6">
              <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#8490a1]">Built across modern technology ecosystems</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] font-semibold text-[#556273]">
                <span>Microsoft Azure</span><span>AWS</span><span>NVIDIA</span><span>Solana</span><span>Linux</span>
              </div>
            </div>
          </div>

          <div className="relative min-h-[390px] lg:min-h-[540px]">
            <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_58%_48%,rgba(0,120,212,.10),transparent_36%),radial-gradient(circle_at_78%_55%,rgba(139,92,246,.10),transparent_28%)]" />
            <img
              src="/assets/thirdleap/hero-abstract.svg"
              alt="Abstract intelligent system connecting AI, computer vision, Web3 and open engineering"
              className="absolute inset-0 h-full w-full object-cover object-center mix-blend-multiply"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="page-shell absolute inset-x-0 bottom-0 translate-y-1/2">
          <div className="grid overflow-hidden rounded-xl border border-[#dfe6ee] bg-white shadow-[0_16px_45px_rgba(31,55,82,.11)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '04', label: 'Product platforms', icon: Box, accent: 'blue' as Accent },
              { value: 'Edge → Cloud', label: 'Connected architecture', icon: Cloud, accent: 'green' as Accent },
              { value: 'AI · Vision · Web3', label: 'Core disciplines', icon: Globe2, accent: 'yellow' as Accent },
              { value: 'Open', label: 'Engineering foundations', icon: CheckCircle2, accent: 'orange' as Accent },
            ].map(({ value, label, icon: Icon, accent }, index) => (
              <div key={label} className={`flex min-h-24 items-center gap-4 px-6 py-5 ${index > 0 ? 'border-t border-[#e7ebf0] sm:border-l sm:border-t-0' : ''} ${index === 2 ? 'lg:border-l' : ''}`}>
                <Icon className={`h-7 w-7 shrink-0 ${accentStyles[accent].text}`} strokeWidth={1.7} />
                <div><p className={`text-lg font-semibold tracking-[-.03em] ${accentStyles[accent].text}`}>{value}</p><p className="mt-1 text-xs leading-5 text-[#5e6b7d]">{label}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-14 pt-28 sm:pt-32">
        <SectionLabel>Capabilities</SectionLabel>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map(({ title, description, image, to, icon: Icon, accent }) => (
            <article key={title} className="group flex min-h-[350px] flex-col rounded-xl border border-[#e1e7ee] bg-white p-4 shadow-[0_8px_28px_rgba(31,55,82,.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,55,82,.10)]">
              <div className="flex items-start gap-3">
                <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${accentStyles[accent].icon}`}><Icon className="h-6 w-6" strokeWidth={1.8} /></div>
                <div><h2 className="text-xl font-semibold tracking-[-.035em]">{title}</h2><p className="mt-1 text-[13px] leading-5 text-[#5e6b7d]">{description}</p></div>
              </div>
              <img src={image} alt="" className="mt-5 h-28 w-full rounded-lg object-cover" loading="lazy" />
              <div className="mt-auto pt-4"><ArrowLink to={to}>Learn more</ArrowLink></div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell pb-14">
        <div className="flex items-end justify-between gap-6">
          <SectionLabel>Selected products</SectionLabel>
          <ArrowLink to="/work">View all products</ArrowLink>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products.map(({ title, description, to, icon: Icon, accent, preview }) => (
            <article key={title} className="group rounded-xl border border-[#e1e7ee] bg-white p-4 shadow-[0_8px_28px_rgba(31,55,82,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,55,82,.10)]">
              <div className="flex items-start gap-3">
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border ${accentStyles[accent].icon}`}><Icon className="h-5 w-5" /></div>
                <div><h2 className="text-lg font-semibold tracking-[-.03em]">{title}</h2><p className="mt-1 min-h-[40px] text-[12px] leading-5 text-[#5e6b7d]">{description}</p></div>
              </div>
              <div className="mt-4"><ProductPreview kind={preview} /></div>
              <div className="mt-3"><ArrowLink to={to}>Learn more</ArrowLink></div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e4e9ef] bg-[#fbfcfe] py-14">
        <div className="page-shell grid gap-9 xl:grid-cols-[220px_1fr] xl:items-center">
          <div>
            <SectionLabel>From edge to cloud to trust</SectionLabel>
            <p className="mt-4 text-sm leading-6 text-[#5e6b7d]">We connect devices, intelligence, platforms and people to create secure, measurable impact.</p>
            <div className="mt-5"><ArrowLink to="/capabilities">See how it works</ArrowLink></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {flowSteps.map(({ title, description, icon: Icon, accent }, index) => (
              <div key={title} className="relative rounded-xl border border-[#e1e7ee] bg-white p-4 shadow-[0_6px_20px_rgba(31,55,82,.04)]">
                {index < flowSteps.length - 1 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#0078d4] xl:block" />}
                <Icon className={`h-6 w-6 ${accentStyles[accent].text}`} strokeWidth={1.8} />
                <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-[11px] leading-5 text-[#667085]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14">
        <div className="grid gap-10 xl:grid-cols-[220px_1fr] xl:items-start">
          <div>
            <SectionLabel>Open engineering built to last</SectionLabel>
            <p className="mt-4 text-sm leading-6 text-[#5e6b7d]">Our platforms, libraries and tools are designed for reuse, collaboration and long-term ownership.</p>
            <div className="mt-5"><ArrowLink to="/open-source">Explore open source</ArrowLink></div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {engineeringItems.map(({ title, description, icon: Icon, accent }) => (
              <div key={title}>
                <Icon className={`h-7 w-7 ${accentStyles[accent].text}`} strokeWidth={1.7} />
                <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-[11px] leading-5 text-[#667085]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-16">
        <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-[#e1e7ee] bg-[linear-gradient(90deg,#fff_0%,#fff_51%,rgba(255,255,255,.76)_68%,rgba(255,255,255,.08)_100%)] shadow-[0_12px_35px_rgba(31,55,82,.07)]">
          <img src="/assets/thirdleap/cta-team.svg" alt="Technology team collaborating in a modern office" className="absolute inset-y-0 right-0 h-full w-[54%] object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,#fff_50%,rgba(255,255,255,.8)_65%,rgba(255,255,255,.05)_100%)]" />
          <div className="relative z-10 max-w-3xl px-7 py-8 sm:px-10 sm:py-10">
            <SectionLabel>Let&apos;s build what&apos;s next</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.05em] sm:text-4xl">Have a challenge in mind?</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5e6b7d]">We work with forward-looking teams to turn difficult ideas into intelligent, secure and scalable products.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-6 text-sm font-semibold text-white transition hover:bg-[#006cbe]">Start a project <ArrowRight className="h-4 w-4" /></Link>
              <a href="mailto:info@thirdleaplabs.com" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#cfd7e2] bg-white px-6 text-sm font-semibold transition hover:border-[#0078d4] hover:text-[#0078d4]">Talk to our team</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);
