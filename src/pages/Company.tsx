import { ArrowRight, Code2, ShieldCheck, Box, Workflow, BookOpen, Layers3 } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="eyebrow">{children}</p>
);

export const Company = () => {
  return (
    <Layout>
      <SEO 
        title="Company | Third Leap Labs" 
        description="Third Leap Labs was created to turn ambitious technical ideas into working, usable platforms across applied AI, computer vision, cloud systems and data intelligence." 
      />
      <main className="bg-white pt-[74px] text-[#1a1a1a] sm:pt-[82px]">
        
        {/* Hero */}
        <section className="page-shell py-20 sm:py-28 lg:py-36 text-center">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>ABOUT THIRD LEAP LABS</SectionLabel>
            <h1 className="mt-5 page-title">A product company built by an engineer.</h1>
            <p className="mt-6 text-[17px] leading-8 text-[#5e6b7d]">
              Third Leap Labs was created to turn ambitious technical ideas into working, usable platforms across applied AI, computer vision, cloud systems and data intelligence.
            </p>
          </div>
        </section>

        {/* Founder & Facts */}
        <section className="bg-[#fbfcfe] border-y border-[#e6ebf1] py-24 sm:py-32">
          <div className="page-shell">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <SectionLabel>LEADERSHIP</SectionLabel>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">Gokul Kartha</h2>
                <p className="mt-1 text-sm font-medium text-[#0078d4]">Founder & CEO</p>
                <p className="mt-6 text-[15px] leading-7 text-[#5e6b7d]">
                  Gokul Kartha is a software engineering and technology leader with experience across embedded systems, automotive software, platform architecture, cloud applications and product development. Through Third Leap Labs, he builds and commercialises applied-AI products including Cognisense Cloud and WhaleScanner.
                </p>
              </div>
              <div>
                <SectionLabel>COMPANY FACTS</SectionLabel>
                <ul className="mt-4 flex flex-col gap-4">
                  <li className="flex items-center gap-4 rounded-xl border border-[#e1e7ee] bg-white px-6 py-4 shadow-sm">
                    <span className="w-1/3 text-[13px] font-bold text-[#5e6b7d] uppercase tracking-wider">Legal entity</span>
                    <span className="text-[15px] font-medium text-[#1a1a1a]">Third Leap Labs LLC</span>
                  </li>
                  <li className="flex items-center gap-4 rounded-xl border border-[#e1e7ee] bg-white px-6 py-4 shadow-sm">
                    <span className="w-1/3 text-[13px] font-bold text-[#5e6b7d] uppercase tracking-wider">Incorporated in</span>
                    <span className="text-[15px] font-medium text-[#1a1a1a]">New Mexico, United States</span>
                  </li>
                  <li className="flex items-center gap-4 rounded-xl border border-[#e1e7ee] bg-white px-6 py-4 shadow-sm">
                    <span className="w-1/3 text-[13px] font-bold text-[#5e6b7d] uppercase tracking-wider">Operating</span>
                    <span className="text-[15px] font-medium text-[#1a1a1a]">Eindhoven, Netherlands</span>
                  </li>
                  <li className="flex items-center gap-4 rounded-xl border border-[#e1e7ee] bg-white px-6 py-4 shadow-sm">
                    <span className="w-1/3 text-[13px] font-bold text-[#5e6b7d] uppercase tracking-wider">Expansion</span>
                    <span className="text-[15px] font-medium text-[#1a1a1a]">Qatar and the GCC</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="page-shell py-24 sm:py-32 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-title">Make complex systems understandable and actionable.</h2>
            <p className="mt-6 text-[17px] leading-8 text-[#5e6b7d]">
              We believe useful intelligence is not only a prediction. It is the complete path from signal and context to a decision, workflow and measurable outcome.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="page-shell pb-24 sm:pb-32">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Technical depth', icon: Code2 },
              { title: 'Product clarity', icon: Box },
              { title: 'Honest evidence', icon: ShieldCheck },
              { title: 'Interoperability', icon: Layers3 },
              { title: 'Responsible AI', icon: Workflow },
              { title: 'Continuous learning', icon: BookOpen },
            ].map((value) => (
              <div key={value.title} className="flex flex-col items-center justify-center rounded-2xl border border-[#e1e7ee] bg-white p-8 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf7ff] text-[#0078d4]">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="page-shell pb-24 sm:pb-32">
          <div className="dark-panel relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-24">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-.04em] text-white">
                Ready to talk about a project?
              </h2>
              <div className="mt-10">
                <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-white px-8 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#f0f4f8]">
                  Start a Conversation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
};
