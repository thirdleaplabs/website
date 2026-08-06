import { ArrowRight, BrainCircuit, Eye, Blocks, Braces, Search, Network, ShieldCheck, Box, Workflow, Cloud, CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow">{children}</p>
);

const ArrowLink = ({ to, children, external }: { to: string; children: ReactNode; external?: boolean }) => {
  const className = "inline-flex items-center gap-2 text-[13px] font-semibold text-[#0078d4] transition hover:gap-3 hover:text-[#005ea6]";
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children} <ArrowRight className="h-3.5 w-3.5" />
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children} <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
};

export const Home = () => (
  <Layout>
    <SEO
      title="Third Leap Labs | Applied AI, Computer Vision, Intelligent Platforms"
      description="Third Leap Labs builds applied AI, computer-vision and data-intelligence products that turn complex signals into clear, real-time decisions."
      path="/"
    />

    <div className="bg-white pt-[74px] text-[#1a1a1a] sm:pt-[82px]">
      {/* Section 1 — Hero */}
      <section className="hero-wash relative overflow-hidden border-b border-[#e6ebf1]">
        <div className="page-shell grid min-h-[650px] items-center gap-8 pb-32 pt-12 lg:grid-cols-[.78fr_1.22fr] lg:pb-36 lg:pt-16">
          <div className="relative z-10 max-w-[590px]">
            <SectionLabel>APPLIED AI • COMPUTER VISION • INTELLIGENT PLATFORMS</SectionLabel>
            <h1 className="mt-5 display">
              Engineering intelligence for the physical and digital world.
            </h1>
            <p className="mt-7 max-w-[560px] text-[17px] leading-8 text-[#5e6b7d]">
              Third Leap Labs builds applied AI, computer-vision and data-intelligence products that turn complex signals into clear, real-time decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(0,120,212,.2)] transition hover:bg-[#006cbe]">
                Explore Cognisense Cloud <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/products" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#cfd7e2] bg-white px-6 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#0078d4] hover:text-[#0078d4]">
                View Our Work
              </Link>
            </div>
          </div>

          <div className="relative min-h-[390px] lg:min-h-[540px]">
            <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_58%_48%,rgba(0,120,212,.10),transparent_36%),radial-gradient(circle_at_78%_55%,rgba(139,92,246,.10),transparent_28%)]" />
            {/* Placeholder for Product Visual */}
            <div className="absolute inset-0 m-6 flex flex-col overflow-hidden rounded-xl border border-white/20 bg-[#0b141d] shadow-[0_24px_54px_rgba(11,20,29,.2)]">
              <div className="flex h-10 items-center border-b border-white/10 px-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
              </div>
              <div className="grid h-full grid-cols-[1fr_.3fr]">
                <div className="grid grid-cols-2 grid-rows-2 gap-2 p-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative overflow-hidden rounded border border-white/5 bg-[#151f28]">
                      <div className="absolute inset-0 noise-overlay opacity-30" />
                      {i === 1 && (
                        <div className="absolute inset-x-0 bottom-4 flex justify-center">
                          <span className="rounded bg-[#0078d4] px-2 py-1 text-[10px] font-bold text-white shadow-[0_0_12px_#0078d4]">EVENT DETECTED</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="border-l border-white/10 bg-[#0e1720] p-3">
                  <div className="h-4 w-1/2 rounded bg-white/20" />
                  <div className="mt-4 space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-10 rounded border border-white/5 bg-[#151f28]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Flagship product introduction */}
      <section className="page-shell py-24 sm:py-32 text-center">
        <SectionLabel>COGNISENSE CLOUD</SectionLabel>
        <h2 className="mt-4 section-title">Give every camera intelligence.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-[#5e6b7d]">
          Cognisense Cloud connects cameras, edge AI and cloud workflows to detect risks, manage incidents and understand operations across every location.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[13px] font-semibold text-[#1a1a1a]">
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0078d4]" /> Multi-site visual operations</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0078d4]" /> Configurable AI events</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0078d4]" /> Incident workflows</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0078d4]" /> Search and evidence</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0078d4]" /> Operational analytics</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#0078d4]" /> Edge-to-cloud deployment</span>
        </div>
        <div className="mt-10">
          <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-6 text-sm font-semibold text-white transition hover:bg-[#006cbe]">
            Discover Cognisense <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-16 overflow-hidden rounded-2xl border border-[#e1e7ee] bg-[#f8fafc] shadow-[0_12px_45px_rgba(31,55,82,.08)]">
          <div className="h-10 border-b border-[#e1e7ee] bg-white" />
          <div className="grid h-[400px] grid-cols-[200px_1fr] md:h-[600px]">
            <div className="border-r border-[#e1e7ee] bg-white" />
            <div className="light-grid bg-[#f8fafc]" />
          </div>
        </div>
      </section>

      {/* Section 3 — What we build */}
      <section className="bg-[#fbfcfe] border-y border-[#e6ebf1] py-24 sm:py-32">
        <div className="page-shell">
          <h2 className="section-title max-w-2xl">Applied intelligence, built to operate in the real world.</h2>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'AI & Computer Vision',
                description: 'Build systems that interpret visual environments, detect meaningful events and connect them to human workflows.',
                linkText: 'Explore Cognisense Cloud',
                linkUrl: 'https://cognisense.cam',
                icon: Eye,
                external: true
              },
              {
                title: 'Cloud & Edge Platforms',
                description: 'Design distributed platforms that combine local processing, cloud coordination, APIs, data pipelines and operational interfaces.',
                linkText: 'View Capabilities',
                linkUrl: '/capabilities',
                icon: Cloud,
              },
              {
                title: 'Web3 Intelligence',
                description: 'Build transparent market, wallet and community-intelligence products through WhaleScanner.',
                linkText: 'Explore WhaleScanner',
                linkUrl: '/products',
                icon: Blocks,
              },
              {
                title: 'Open Source & R&D',
                description: 'Experiment in public, contribute reusable engineering and transform research ideas into working prototypes.',
                linkText: 'View Open Source',
                linkUrl: '/open-source',
                icon: Braces,
              },
            ].map((card, i) => (
              <div key={card.title} className={`surface-card flex flex-col justify-between rounded-2xl p-8 lg:p-10 ${i % 3 === 0 ? 'bg-white' : 'bg-[#fafcfd]'}`}>
                <div>
                  <card.icon className="h-8 w-8 text-[#0078d4]" strokeWidth={1.5} />
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#5e6b7d]">{card.description}</p>
                </div>
                <div className="mt-10">
                  <ArrowLink to={card.linkUrl} external={card.external}>{card.linkText}</ArrowLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — How we work */}
      <section className="page-shell py-24 sm:py-32">
        <SectionLabel>FROM SIGNAL TO SYSTEM</SectionLabel>
        <h2 className="mt-4 section-title max-w-2xl">We do more than train models.</h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: '01', title: 'Understand', desc: 'Define the operational problem, available data, constraints and decisions the system must support.' },
            { step: '02', title: 'Engineer', desc: 'Build the AI, platform, edge, workflow and interface layers as one coherent product.' },
            { step: '03', title: 'Validate', desc: 'Test with realistic environments, human operators and measurable product outcomes.' },
            { step: '04', title: 'Scale', desc: 'Deploy, monitor and improve the platform across users, sites and markets.' },
          ].map((item, i) => (
            <div key={item.step} className="relative group">
              {i < 3 && <div className="absolute right-0 top-6 hidden w-full -translate-y-px border-t border-dashed border-[#cfd7e2] lg:block" />}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#0078d4]/30 bg-[#edf7ff] text-sm font-bold text-[#0078d4]">
                {item.step}
              </div>
              <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-6 text-[#5e6b7d]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 — Selected products */}
      <section className="bg-[#fbfcfe] border-y border-[#e6ebf1] py-24 sm:py-32">
        <div className="page-shell">
          <h2 className="section-title">Products built by Third Leap Labs.</h2>
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="surface-card rounded-2xl p-8 lg:p-10">
              <span className="text-[11px] font-bold uppercase tracking-[.15em] text-[#5e6b7d]">Cloud Visual Intelligence</span>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">Cognisense Cloud</h3>
              <p className="mt-4 text-[16px] leading-7 text-[#5e6b7d]">
                Transform existing cameras into real-time safety, security and operational intelligence.
              </p>
              <div className="mt-10 overflow-hidden rounded-xl border border-[#e1e7ee] bg-white h-48">
                {/* Mockup visual */}
                <div className="light-grid h-full w-full" />
              </div>
              <div className="mt-8">
                <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-6 text-sm font-semibold text-white transition hover:bg-[#006cbe]">
                  Visit cognisense.cam <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="surface-card rounded-2xl p-8 lg:p-10">
              <span className="text-[11px] font-bold uppercase tracking-[.15em] text-[#5e6b7d]">Web3 Intelligence & Community</span>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">WhaleScanner</h3>
              <p className="mt-4 text-[16px] leading-7 text-[#5e6b7d]">
                A crypto intelligence platform combining market signals, wallet insight, project discovery and community workflows.
              </p>
              <div className="mt-10 overflow-hidden rounded-xl border border-[#e1e7ee] bg-white h-48">
                {/* Mockup visual */}
                <div className="tech-grid h-full w-full" />
              </div>
              <div className="mt-8">
                <ArrowLink to="https://whalescanner.com" external>Visit whalescanner.com</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Engineering principles */}
      <section className="page-shell py-24 sm:py-32">
        <h2 className="section-title">Built with discipline.</h2>
        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Human-centred', desc: 'AI should help people understand and act, not hide decisions behind a black box.' },
            { title: 'Deployment-aware', desc: 'Real systems must account for privacy, latency, connectivity, hardware and operational constraints.' },
            { title: 'Interoperable', desc: 'Products should connect with existing infrastructure instead of forcing unnecessary replacement.' },
            { title: 'Evidence-led', desc: 'Every important claim, alert and workflow should be traceable to useful context.' },
            { title: 'Secure by design', desc: 'Access, data handling and operational control must be part of the architecture from the beginning.' },
          ].map((principle) => (
            <div key={principle.title} className="border-t border-[#e6ebf1] pt-6">
              <h3 className="text-lg font-semibold text-[#1a1a1a]">{principle.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-[#5e6b7d]">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 — Company CTA */}
      <section className="page-shell pb-24">
        <div className="dark-panel relative overflow-hidden rounded-[2rem] px-8 py-16 sm:px-16 sm:py-24">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-.04em] text-white">
              Building an intelligent system or exploring a pilot?
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-[#9ba8bb]">
              Talk to Third Leap Labs about applied AI, computer vision, platform engineering or Cognisense Cloud.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-7 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#f0f4f8]">
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
                Request a Cognisense Pilot
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);
