import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BrainCircuit, Camera, Code2, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const heroSystems: { label: string; action: string; icon: LucideIcon }[] = [
  { label: 'AI', action: 'Reason', icon: BrainCircuit },
  { label: 'Vision', action: 'See', icon: Camera },
  { label: 'Web3', action: 'Verify', icon: ShieldCheck },
  { label: 'Open', action: 'Extend', icon: Code2 },
];

export const Reveal = ({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .15 }}
    transition={{ duration: .55, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionIntro = ({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}) => {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-[#07111f]';
  const copyClass = tone === 'dark' ? 'text-white/60' : 'text-[#5b6472]';
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className={`eyebrow ${align === 'center' ? 'justify-center' : ''} ${tone === 'dark' ? 'text-[#7dd3fc]' : ''}`}>{eyebrow}</p>}
      <h2 className={`section-title ${titleClass} ${eyebrow ? 'mt-5' : ''}`}>{title}</h2>
      {description && <p className={`mt-6 max-w-2xl text-[17px] leading-8 sm:text-lg ${copyClass}`}>{description}</p>}
    </div>
  );
};

const HeroSystem = () => (
  <div className="dark-panel relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_90px_rgba(7,17,31,.24)] sm:p-8">
    <div className="absolute inset-0 tech-grid opacity-45" />
    <div className="absolute inset-0 noise-overlay opacity-20" />
    <div className="relative flex items-center justify-between text-[10px] font-semibold uppercase tracking-[.16em] text-white/40">
      <span>Applied systems</span>
      <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Online</span>
    </div>
    <div className="relative mt-10 grid grid-cols-2 gap-3">
      {heroSystems.map(({ label, action, icon: Icon }) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-white/[.06] p-4 backdrop-blur-sm">
          <Icon className="h-5 w-5 text-[#7dd3fc]" />
          <p className="mt-6 text-lg font-semibold tracking-[-.03em] text-white">{label}</p>
          <p className="mt-1 text-xs uppercase tracking-[.14em] text-white/38">{action}</p>
        </div>
      ))}
    </div>
    <div className="relative mt-3 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#030712]/65 p-4">
      <img src="/logo.svg" alt="" className="h-11 w-11" />
      <div>
        <p className="text-sm font-semibold text-white">One product engineering core</p>
        <p className="mt-1 text-xs text-white/45">Edge · cloud · data · mobile · chain</p>
      </div>
    </div>
  </div>
);

export const PageHero = ({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) => (
  <section className="relative overflow-hidden border-b border-black/10 bg-[#edf2f6] pb-20 pt-32 sm:pb-28 sm:pt-40">
    <div className="absolute inset-0 light-grid opacity-70" />
    <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#1d9bf0]/10 blur-[100px]" />
    <div className="page-shell relative grid gap-12 lg:grid-cols-[1.05fr_.75fr] lg:items-center lg:gap-20">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title mt-6 max-w-4xl text-[#07111f]">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5b6472] sm:text-xl">{description}</p>
        {children}
      </div>
      <HeroSystem />
    </div>
  </section>
);

export const PrimaryLink = ({
  to,
  children,
  external = false,
  inverse = false,
}: {
  to: string;
  children: ReactNode;
  external?: boolean;
  inverse?: boolean;
}) => {
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
    inverse ? 'bg-white text-[#07111f] hover:bg-[#7dd3fc]' : 'bg-[#07111f] text-white hover:bg-[#1d9bf0]'
  }`;

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={classes}>
        {children} <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children} <ArrowRight className="h-4 w-4" />
    </Link>
  );
};

export const SecondaryLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link
    to={to}
    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-[#07111f] transition hover:border-[#07111f] hover:bg-[#edf2f6]"
  >
    {children} <ArrowRight className="h-4 w-4" />
  </Link>
);

export const CapabilityCard = ({
  icon: Icon,
  number,
  title,
  description,
  items,
}: {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  items: string[];
}) => (
  <article className="surface-card group h-full rounded-[1.6rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#1d9bf0]/40 sm:p-8">
    <div className="flex items-center justify-between">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e8f5fd] text-[#0b7dbd]">
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-mono text-xs font-medium text-[#9ca3af]">{number}</span>
    </div>
    <h3 className="mt-7 text-2xl font-semibold tracking-[-.04em] text-[#07111f]">{title}</h3>
    <p className="mt-4 text-[15px] leading-7 text-[#5b6472]">{description}</p>
    <ul className="mt-7 space-y-3 border-t border-black/10 pt-6">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-[#4b5563]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1d9bf0]" />
          {item}
        </li>
      ))}
    </ul>
  </article>
);

export const MetricChip = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#6b7280]">{label}</p>
    <p className="mt-1.5 text-sm font-semibold text-[#07111f]">{value}</p>
  </div>
);
