import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const Reveal = ({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: .15 }}
    transition={{ duration: .5, delay, ease: [0.22, 1, 0.36, 1] }}
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
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) => (
  <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    {eyebrow && <p className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</p>}
    <h2 className={`section-title text-slate-900 ${eyebrow ? 'mt-4' : ''}`}>{title}</h2>
    {description && <p className="mt-5 max-w-2xl text-[17px] leading-8 text-slate-600 sm:text-lg">{description}</p>}
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
  <section className="relative overflow-hidden bg-slate-50 pb-20 pt-36 sm:pb-28 sm:pt-44 border-b border-slate-200">
    <div className="absolute inset-0 section-grid opacity-40" />
    <div className="page-shell relative">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="page-title mt-6 max-w-5xl text-slate-900">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{description}</p>
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
  const classes = 'inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700';

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
    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-slate-50"
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
  <article className="group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
    <div className="flex items-center justify-between">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-100 text-blue-600">
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-mono text-xs font-medium text-slate-400">{number}</span>
    </div>
    <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{description}</p>
    <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          {item}
        </li>
      ))}
    </ul>
  </article>
);

export const MetricChip = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">{label}</p>
    <p className="mt-1.5 text-sm font-semibold text-slate-900">{value}</p>
  </div>
);
