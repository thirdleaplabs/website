import { ArrowRight, Code2, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import type { ReactNode } from 'react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow">{children}</p>
);

export const OpenSource = () => {
  return (
    <Layout>
      <SEO 
        title="Open Source | Third Leap Labs" 
        description="Build openly. Learn quickly. Share what compounds. Third Leap Labs contributes to the wider technology community." 
        path="/open-source"
      />
      <main className="bg-white pt-[74px] text-[#1a1a1a] sm:pt-[82px]">
        
        {/* Hero */}
        <section className="page-shell py-20 sm:py-28 lg:py-36 text-center">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>OPEN ENGINEERING</SectionLabel>
            <h1 className="mt-5 page-title">Build openly. Learn quickly. Share what compounds.</h1>
            <p className="mt-6 text-[17px] leading-8 text-[#5e6b7d]">
              Open-source work helps us test ideas, improve engineering quality and contribute useful building blocks to the wider technology community.
            </p>
          </div>
        </section>

        {/* Repositories */}
        <section className="bg-[#fbfcfe] border-y border-[#e6ebf1] py-24 sm:py-32">
          <div className="page-shell">
            <h2 className="section-title">Selected Repositories</h2>
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {[
                { name: 'vision-edge-connector', purpose: 'A secure, low-latency edge agent for streaming IP cameras to cloud infrastructure.', tech: 'Rust', status: 'Active' },
                { name: 'react-timeline-scrubber', purpose: 'Accessible, high-performance video timeline component for incident review.', tech: 'TypeScript', status: 'Active' },
                { name: 'web3-wallet-signals', purpose: 'Extensible pipelines for parsing on-chain wallet activity into structured events.', tech: 'Python', status: 'Active' },
              ].map((repo) => (
                <div key={repo.name} className="surface-card flex flex-col justify-between rounded-2xl p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold tracking-tight">{repo.name}</h3>
                      <span className="rounded-full bg-[#edf7ff] px-3 py-1 text-[11px] font-bold uppercase tracking-[.1em] text-[#0078d4]">{repo.tech}</span>
                    </div>
                    <p className="mt-4 text-[15px] leading-7 text-[#5e6b7d]">{repo.purpose}</p>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[12px] font-medium text-[#107c10]">
                      <span className="h-2 w-2 rounded-full bg-[#107c10]" /> {repo.status}
                    </span>
                    <a href={`https://github.com/thirdleaplabs/${repo.name}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0078d4] transition hover:gap-3 hover:text-[#005ea6]">
                      View on GitHub <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="page-shell py-24 sm:py-32">
          <SectionLabel>OUR PRINCIPLES</SectionLabel>
          <h2 className="mt-4 section-title">How we approach open source.</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Share reusable engineering rather than customer-specific logic.', icon: Code2 },
              { title: 'Protect private customer data and proprietary deployment details.', icon: ShieldCheck },
              { title: 'Document projects clearly.', icon: FileText },
              { title: 'State maintenance status honestly.', icon: CheckCircle2 },
            ].map((principle) => (
              <div key={principle.title} className="border-t border-[#e6ebf1] pt-6">
                <principle.icon className="h-6 w-6 text-[#0078d4]" />
                <p className="mt-5 text-[15px] leading-7 text-[#1a1a1a]">{principle.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="page-shell pb-24 sm:pb-32">
          <div className="dark-panel relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-24">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-.04em] text-white">
                Explore our work on GitHub.
              </h2>
              <div className="mt-10">
                <a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-8 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#f0f4f8]">
                  View Third Leap Labs on GitHub <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
};
