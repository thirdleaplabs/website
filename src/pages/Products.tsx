import { ArrowRight } from 'lucide-react';
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

export const Products = () => {
  return (
    <Layout>
      <SEO 
        title="Products | Third Leap Labs" 
        description="Our products combine domain understanding, software architecture, data systems and applied AI in operational platforms designed to be used—not simply demonstrated." 
        path="/products"
      />
      <main className="bg-white pt-[74px] text-[#1a1a1a] sm:pt-[82px]">
        
        {/* Hero */}
        <section className="hero-wash relative overflow-hidden border-b border-[#e6ebf1]">
          <div className="page-shell py-20 sm:py-28 lg:py-36 text-center">
            <div className="mx-auto max-w-3xl">
              <SectionLabel>PRODUCT PORTFOLIO</SectionLabel>
              <h1 className="mt-5 page-title">Intelligent platforms, built end to end.</h1>
              <p className="mt-6 text-[17px] leading-8 text-[#5e6b7d]">
                Our products combine domain understanding, software architecture, data systems and applied AI in operational platforms designed to be used—not simply demonstrated.
              </p>
            </div>
          </div>
        </section>

        {/* Product 1 — Cognisense Cloud */}
        <section className="page-shell py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[.15em] text-[#0078d4]">Cloud Visual Intelligence</span>
              <h2 className="mt-4 section-title">Visual intelligence for physical operations.</h2>
              <p className="mt-6 text-[17px] leading-8 text-[#5e6b7d]">
                Cognisense Cloud transforms existing camera infrastructure into a connected operational layer for safety, security, incidents, evidence and analytics.
              </p>
              
              <ul className="mt-10 grid gap-x-4 gap-y-4 sm:grid-cols-2 text-[14px] font-medium text-[#1a1a1a]">
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0078d4]" /> Cloud command centre</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0078d4]" /> Visual event detection</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0078d4]" /> Incident management</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0078d4]" /> Search and evidence</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0078d4]" /> Multi-site analytics</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0078d4]" /> Edge and hybrid deployment</li>
              </ul>
              
              <div className="mt-10">
                <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-6 text-sm font-semibold text-white transition hover:bg-[#006cbe]">
                  Explore Cognisense Cloud <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#e1e7ee] bg-[#f8fafc] h-[400px] lg:h-[500px] shadow-[0_12px_45px_rgba(31,55,82,.08)]">
              <div className="h-10 border-b border-[#e1e7ee] bg-white flex items-center px-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dfe5ec]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dfe5ec]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#dfe5ec]" />
                </div>
              </div>
              {/* Product Visual Placeholder */}
              <div className="light-grid h-full w-full" />
            </div>
          </div>
        </section>

        {/* Product 2 — WhaleScanner */}
        <section id="whalescanner" className="bg-[#fbfcfe] border-y border-[#e6ebf1] py-24 sm:py-32">
          <div className="page-shell">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="order-2 overflow-hidden rounded-2xl border border-[#e1e7ee] bg-[#f8fafc] h-[400px] lg:h-[500px] shadow-[0_12px_45px_rgba(31,55,82,.08)] lg:order-1">
                <div className="h-10 border-b border-[#e1e7ee] bg-white flex items-center px-4">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#dfe5ec]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#dfe5ec]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#dfe5ec]" />
                  </div>
                </div>
                {/* Product Visual Placeholder */}
                <div className="tech-grid h-full w-full bg-[#0a0f14]" />
              </div>
              <div className="order-1 lg:order-2 lg:pl-10">
                <span className="text-[11px] font-bold uppercase tracking-[.15em] text-[#0078d4]">Web3 Intelligence & Community</span>
                <h2 className="mt-4 section-title">Intelligence and community for Web3.</h2>
                <p className="mt-6 text-[17px] leading-8 text-[#5e6b7d]">
                  WhaleScanner brings market intelligence, token and wallet insight, project discovery, signals and community workflows into one platform designed to improve transparency and informed participation.
                </p>
                <div className="mt-10">
                  <ArrowLink to="https://whalescanner.com" external>Explore WhaleScanner</ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio principle */}
        <section className="page-shell py-24 sm:py-32">
          <div className="dark-panel relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-24">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-.04em] text-white">
                Different markets. The same engineering discipline.
              </h2>
              <p className="mt-6 text-[17px] leading-8 text-[#9ba8bb]">
                Whether interpreting live video or complex market data, we focus on turning fragmented signals into structured, explainable and actionable product experiences.
              </p>
              <div className="mt-10">
                <Link to="/capabilities" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-7 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#f0f4f8]">
                  View Our Capabilities <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
};
