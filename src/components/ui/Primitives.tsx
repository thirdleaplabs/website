import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const Reveal = ({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .18 }}
    transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}
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
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) => (
  <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    <p className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</p>
    <h2 className="section-title mt-5">{title}</h2>
    {description && <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/55 sm:text-lg">{description}</p>}
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
  <section className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
    <div className="absolute inset-0 section-grid opacity-70" />
    <div className="absolute left-[8%] top-[22%] h-56 w-56 rounded-full bg-electric/15 blur-[100px]" />
    <div className="absolute right-[7%] top-[8%] h-56 w-56 rounded-full bg-violet/12 blur-[100px]" />
    <div className="page-shell relative">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title mt-7 max-w-5xl">{title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58 sm:text-xl">{description}</p>
      {children}
    </div>
  </section>
);

export const PrimaryLink = ({
  to,
  children,
  external = false,
}: {
  to: string;
  children: ReactNode;
  external?: boolean;
}) => {
  const classes = 'inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[#090a0f] transition hover:-translate-y-0.5 hover:bg-[#dffdf8]';

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
    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[.035] px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/22 hover:bg-white/[.07]"
  >
    {children} <ArrowUpRight className="h-4 w-4" />
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
  <article className="group rounded-[1.7rem] border border-white/[.085] bg-white/[.025] p-6 transition hover:border-white/15 hover:bg-white/[.04] sm:p-8">
    <div className="flex items-center justify-between">
      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[.04] text-cyan">
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-mono text-xs text-white/25">{number}</span>
    </div>
    <h3 className="mt-8 text-2xl font-semibold tracking-[-.035em]">{title}</h3>
    <p className="mt-4 text-[15px] leading-7 text-white/50">{description}</p>
    <ul className="mt-7 space-y-3 border-t border-white/[.075] pt-6">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-white/62">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan to-electric" />
          {item}
        </li>
      ))}
    </ul>
  </article>
);

export const MetricChip = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl border border-white/[.075] bg-black/20 px-4 py-3">
    <p className="text-[10px] uppercase tracking-[.16em] text-white/30">{label}</p>
    <p className="mt-1.5 text-sm font-semibold text-white/84">{value}</p>
  </div>
);
