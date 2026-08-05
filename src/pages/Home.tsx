import {
  ArrowRight,
  BrainCircuit,
  Camera,
  Code2,
  Cpu,
  Network,
  ShieldCheck,
  WalletCards,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PrimaryLink, Reveal, SecondaryLink, SectionIntro } from '../components/ui/Primitives';

const heroPhoto =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=90';

type ProductCardProps = {
  category: string;
  title: string;
  description: string;
  to: string;
  icon: LucideIcon;
  dark?: boolean;
};

const ProductCard = ({ category, title, description, to, icon: Icon, dark = false }: ProductCardProps) => (
  <Link
    to={to}
    className={`group relative min-h-[390px] overflow-hidden rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 sm:p-9 ${
      dark
        ? 'border-white/10 bg-[#07111f] text-white shadow-[0_26px_80px_rgba(7,17,31,.22)]'
        : 'border-black/10 bg-white text-[#07111f] shadow-[0_22px_65px_rgba(7,17,31,.08)]'
    }`}
  >
    <div className={`absolute inset-0 ${dark ? 'tech-grid opacity-25' : 'light-grid opacity-65'}`} />
    <div className={`absolute -right-12 -top-12 h-56 w-56 rounded-full blur-[80px] ${dark ? 'bg-[#1d9bf0]/22' : 'bg-[#1d9bf0]/12'}`} />
    <div className="relative flex h-full flex-col">
      <div className={`grid h-12 w-12 place-items-center rounded-2xl ${dark ? 'border border-white/10 bg-white/10 text-[#7dd3fc]' : 'bg-[#e8f5fd] text-[#0b7dbd]'}`}>
        <Icon className="h-5 w-5" />
      </div>
      <p className={`mt-12 text-xs font-semibold uppercase tracking-[.15em] ${dark ? 'text-white/42' : 'text-[#6b7280]'}`}>{category}</p>
      <h3 className="mt-4 text-4xl font-semibold tracking-[-.055em] sm:text-5xl">{title}</h3>
      <p className={`mt-6 max-w-lg text-[16px] leading-8 ${dark ? 'text-white/58' : 'text-[#5b6472]'}`}>{description}</p>
      <span className={`mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold transition group-hover:gap-3 ${dark ? 'text-[#7dd3fc]' : 'text-[#0b7dbd]'}`}>
        Explore product <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  </Link>
);

export const Home = () => (
  <Layout>
    <SEO
      title="Third Leap Labs | AI, Computer Vision, Web3 and Open Engineering"
      description="Third Leap Labs builds applied AI, computer vision and Web3 products, together with reusable open engineering foundations."
      path="/"
    />

    <section className="relative overflow-hidden bg-[#f4f5f7] pt-24 lg:min-h-[100svh] lg:pt-0">
      <div className="grid lg:min-h-[100svh] lg:grid-cols-[1.08fr_.92fr]">
        <div className="relative min-h-[52svh] overflow-hidden lg:min-h-full">
          <img
            src={heroPhoto}
            alt="Close-up of advanced computing hardware and electronic circuits"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-[#030712]/20 to-[#030712]/25 lg:bg-gradient-to-r lg:from-[#030712]/20 lg:via-transparent lg:to-[#030712]/40" />
          <div className="absolute inset-0 tech-grid opacity-20" />

          <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/28 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-white/72 backdrop-blur-md sm:left-8 sm:top-8 lg:left-12 lg:top-32">
            Edge · AI · Cloud · Chain
          </div>

          <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/15 bg-[#07111f]/72 p-5 text-white backdrop-blur-xl sm:inset-x-8 sm:bottom-8 sm:p-6 lg:bottom-12 lg:left-12 lg:right-auto lg:w-[430px]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[.14em] text-white/44">Applied system</p>
              <span className="inline-flex items-center gap-2 text-xs text-white/52"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Active</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ['See', Camera],
                ['Reason', BrainCircuit],
                ['Verify', ShieldCheck],
              ].map(([label, Icon]) => (
                <div key={String(label)} className="rounded-xl border border-white/10 bg-white/[.06] p-3">
                  <Icon className="h-4 w-4 text-[#7dd3fc]" />
                  <p className="mt-4 text-sm font-semibold">{String(label)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-center bg-[#f4f5f7] px-[var(--page-x)] py-16 sm:py-20 lg:px-14 lg:pb-20 lg:pt-32 xl:px-20">
          <div className="absolute inset-0 light-grid opacity-55" />
          <div className="relative max-w-2xl">
            <p className="eyebrow">Third Leap Labs</p>
            <h1 className="mt-7 text-[clamp(3.2rem,6.2vw,6.6rem)] font-semibold leading-[.94] tracking-[-.067em] text-[#07111f]">
              Intelligent products for the real world.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#5b6472] sm:text-xl sm:leading-9">
              We build applied AI, computer-vision and Web3 products—from edge systems and data platforms to the software people use every day.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink to="/work">Explore our work</PrimaryLink>
              <SecondaryLink to="/contact">Start a conversation</SecondaryLink>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-black/10 pt-7 text-sm sm:grid-cols-4">
              {['AI', 'Computer vision', 'Web3', 'Open source'].map((item) => (
                <span key={item} className="font-semibold text-[#4b5563]">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-space border-y border-black/10 bg-white">
      <div className="page-shell">
        <Reveal>
          <SectionIntro
            eyebrow="What we build"
            title="Specialised technology. Complete products."
            description="We connect difficult engineering to a clear user workflow, an operable system and a product people can actually adopt."
          />
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-0">
          {[
            ['Artificial intelligence', 'Agents, knowledge systems and decision engines designed around a useful outcome.', BrainCircuit],
            ['Computer vision', 'Edge-to-cloud systems that turn live video into events, evidence and action.', Camera],
            ['Web3 and trust', 'Wallet intelligence, payment workflows and transparent digital systems.', WalletCards],
            ['Open engineering', 'Reusable platforms, APIs, plugins and tools built for long-term ownership.', Code2],
          ].map(([title, copy, Icon], index) => (
            <Reveal key={String(title)} delay={index * .05}>
              <div className={`h-full xl:px-8 ${index > 0 ? 'border-t border-black/10 pt-9 md:border-t-0 md:pt-0 xl:border-l' : ''}`}>
                <Icon className="h-6 w-6 text-[#0b7dbd]" />
                <h2 className="mt-7 text-2xl font-semibold tracking-[-.04em] text-[#07111f]">{String(title)}</h2>
                <p className="mt-4 text-[15px] leading-7 text-[#5b6472]">{String(copy)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space bg-[#edf2f6]">
      <div className="page-shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <SectionIntro eyebrow="Selected work" title="Products with a clear job to do." />
            <p className="max-w-2xl text-lg leading-8 text-[#5b6472] lg:justify-self-end">
              Each product starts with a real operational problem—not a technology category looking for a use case.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <Reveal><ProductCard category="Crypto intelligence" title="WhaleScanner" description="Wallet activity, market context, project discovery, signals and community in one connected crypto platform." to="/work/whalescanner" icon={WalletCards} dark /></Reveal>
          <Reveal delay={.05}><ProductCard category="AI video operations" title="VisionX" description="A calmer operational experience for live monitoring, AI events, alerts, investigation and evidence." to="/work/visionx" icon={Camera} /></Reveal>
          <Reveal><ProductCard category="Computer-vision platform" title="FlameTrax" description="The reusable edge-to-cloud engine behind visual detection, event processing, integrations and deployment." to="/work/flametrax" icon={Cpu} /></Reveal>
          <Reveal delay={.05}><ProductCard category="Non-custodial payments" title="GoPaySol" description="Create Solana payment requests, share links or QR codes, verify settlement and keep a readable record." to="/work/gopaysol" icon={Zap} dark /></Reveal>
        </div>
      </div>
    </section>

    <section className="dark-panel section-space relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="page-shell relative grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-20">
        <Reveal>
          <SectionIntro
            eyebrow="System thinking"
            title="From edge to cloud to chain."
            description="A strong interface cannot rescue an unreliable pipeline. We design models, devices, data, infrastructure and user workflows as one system."
            tone="dark"
          />
        </Reveal>
        <Reveal delay={.08}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['01', 'Edge', 'Cameras, sensors and local compute', Cpu],
              ['02', 'Intelligence', 'Models, agents and decision logic', BrainCircuit],
              ['03', 'Platforms', 'Cloud, APIs, mobile and operations', Network],
              ['04', 'Trust', 'Blockchain and external ecosystems', ShieldCheck],
            ].map(([number, title, copy, Icon]) => (
              <div key={String(number)} className="rounded-[1.4rem] border border-white/10 bg-white/[.055] p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/28">{String(number)}</span>
                  <Icon className="h-4 w-4 text-[#7dd3fc]" />
                </div>
                <h3 className="mt-12 text-lg font-semibold text-white">{String(title)}</h3>
                <p className="mt-3 text-xs leading-6 text-white/44">{String(copy)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section-space bg-white">
      <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <div className="surface-card relative min-h-[420px] overflow-hidden rounded-[2rem] p-8">
            <div className="absolute inset-0 light-grid opacity-70" />
            <div className="relative flex h-full min-h-[350px] flex-col justify-between rounded-[1.5rem] bg-[#07111f] p-7 text-white">
              <div className="flex items-center justify-between">
                <Code2 className="h-6 w-6 text-[#7dd3fc]" />
                <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/38">Open engineering</span>
              </div>
              <div>
                <p className="text-5xl font-semibold tracking-[-.06em]">Inspect.<br />Extend.<br />Own.</p>
                <p className="mt-6 max-w-sm text-sm leading-7 text-white/52">Reusable foundations should make future engineering easier—not create another black box.</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={.08}>
          <SectionIntro
            eyebrow="Open source"
            title="Foundations built to be understood and extended."
            description="We publish and maintain reusable engines, APIs, plugin boundaries and developer tools where openness improves trust, learning and long-term ownership."
          />
          <div className="mt-9">
            <PrimaryLink to="/open-source">Explore open engineering</PrimaryLink>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="border-t border-black/10 bg-[#edf2f6] py-20 sm:py-24">
      <div className="page-shell flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <div>
            <p className="eyebrow">Build with us</p>
            <h2 className="section-title mt-5 max-w-4xl text-[#07111f]">Bring the difficult part—not a perfect specification.</h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#5b6472]">We can help clarify the problem, choose the architecture and build the first serious version.</p>
          </div>
        </Reveal>
        <PrimaryLink to="/contact">Start a conversation</PrimaryLink>
      </div>
    </section>
  </Layout>
);
