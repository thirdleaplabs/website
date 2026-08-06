import { ArrowRight, BrainCircuit, Box, Eye, Layers3, Cpu, Braces, Cloud } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow">{children}</p>
);

export const Capabilities = () => {
  return (
    <Layout>
      <SEO 
        title="Capabilities | Third Leap Labs" 
        description="Third Leap Labs builds the complete system around applied intelligence: data ingestion, models, distributed runtime, APIs, workflows, interfaces, deployment and monitoring." 
        path="/capabilities"
      />
      <main className="bg-white pt-[74px] text-[#1a1a1a] sm:pt-[82px]">
        
        {/* Hero */}
        <section className="page-shell py-20 sm:py-28 lg:py-36 text-center">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>ENGINEERING CAPABILITIES</SectionLabel>
            <h1 className="mt-5 page-title">From model to product. From edge to cloud.</h1>
            <p className="mt-6 text-[17px] leading-8 text-[#5e6b7d]">
              Third Leap Labs builds the complete system around applied intelligence: data ingestion, models, distributed runtime, APIs, workflows, interfaces, deployment and monitoring.
            </p>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="bg-[#fbfcfe] border-y border-[#e6ebf1] py-24 sm:py-32">
          <div className="page-shell">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Computer Vision',
                  icon: Eye,
                  items: [
                    'Object and event detection',
                    'Tracking and zone-based logic',
                    'Video-processing pipelines',
                    'Model evaluation and tuning',
                    'Human-in-the-loop review',
                    'Edge inference integration'
                  ]
                },
                {
                  title: 'Applied AI',
                  icon: BrainCircuit,
                  items: [
                    'Multimodal systems',
                    'Decision-support workflows',
                    'Retrieval and contextual intelligence',
                    'AI agents and automation',
                    'Explainable outputs and evidence',
                    'Model/provider integration'
                  ]
                },
                {
                  title: 'Cloud Platforms',
                  icon: Cloud,
                  items: [
                    'Multi-tenant SaaS architecture',
                    'Event-driven services',
                    'APIs and integrations',
                    'Authentication and role-based access',
                    'Observability and operational tooling',
                    'Scalable data processing'
                  ]
                },
                {
                  title: 'Edge & Embedded',
                  icon: Cpu,
                  items: [
                    'Edge services and device connectivity',
                    'Local inference',
                    'Linux-based deployment',
                    'Camera and sensor integration',
                    'Offline and intermittent-connectivity strategies',
                    'Secure update and monitoring patterns'
                  ]
                },
                {
                  title: 'Product Engineering',
                  icon: Box,
                  items: [
                    'Product architecture',
                    'Web and mobile interfaces',
                    'Operational dashboards',
                    'Workflow design',
                    'DevOps and CI/CD',
                    'Rapid MVP-to-platform execution'
                  ]
                },
                {
                  title: 'Open Source & R&D',
                  icon: Braces,
                  items: [
                    'Technical prototypes',
                    'Reusable engineering components',
                    'Architecture experiments',
                    'Public technical learning',
                    'Collaboration with developers and research communities'
                  ]
                }
              ].map((cap, i) => (
                <div key={cap.title} className="surface-card flex flex-col rounded-2xl p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf7ff] text-[#0078d4]">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold">{cap.title}</h2>
                  <ul className="mt-6 flex-1 space-y-3">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[14px] leading-6 text-[#5e6b7d]">
                        <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0078d4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="page-shell py-24 sm:py-32">
          <div className="dark-panel relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-24">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-.04em] text-white">
                Need a complete applied-AI platform—not another isolated prototype?
              </h2>
              <div className="mt-10">
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-8 text-sm font-semibold text-white transition hover:bg-[#006cbe]">
                  Talk to Third Leap Labs <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
};
