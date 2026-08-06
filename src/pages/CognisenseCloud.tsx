import { ArrowRight, Eye, PlaySquare, FileCheck2 } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

export function CognisenseCloud() {
  return (
    <Layout>
      <SEO 
        title="Cognisense Cloud | Cloud Visual Intelligence Platform" 
        description="Connect existing cameras, edge AI and cloud workflows in one browser-based platform for live operations and visual event detection." 
        path="/cognisense"
      />
      <main className="bg-white pt-[74px] text-[#1a1a1a] sm:pt-[82px]">
        
        {/* Hero */}
        <section className="page-shell py-20 sm:py-28 text-center">
          <p className="eyebrow">FLAGSHIP PRODUCT</p>
          <h1 className="mt-5 display">Cognisense Cloud</h1>
          <p className="mt-6 text-2xl font-medium tracking-tight text-[#1a1a1a]">
            Cloud visual intelligence for safer, smarter operations.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-[#5e6b7d]">
            Connect existing cameras, edge AI and cloud workflows in one browser-based platform for live operations, visual event detection, incidents, evidence and analytics.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-7 text-sm font-semibold text-white transition hover:bg-[#006cbe]">
              Visit Cognisense Cloud <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://cognisense.cam/contact" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#cfd7e2] bg-white px-7 text-sm font-semibold text-[#1a1a1a] transition hover:border-[#0078d4] hover:text-[#0078d4]">
              Request a Pilot
            </a>
          </div>
          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-[#e1e7ee] bg-[#f8fafc] shadow-[0_12px_45px_rgba(31,55,82,.08)]">
            <div className="h-10 border-b border-[#e1e7ee] bg-white flex items-center px-4">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#dfe5ec]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#dfe5ec]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#dfe5ec]" />
              </div>
            </div>
            <div className="h-[400px] w-full light-grid bg-[#f8fafc] md:h-[500px]" />
          </div>
        </section>

        {/* Product story */}
        <section className="bg-[#fbfcfe] border-y border-[#e6ebf1] py-24 sm:py-32">
          <div className="page-shell">
            <h2 className="section-title text-center">From passive video to operational intelligence.</h2>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="surface-card rounded-2xl p-8">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#edf7ff] text-[#0078d4]">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">See</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5e6b7d]">
                  Monitor cameras and sites from a clear cloud command centre.
                </p>
              </div>
              <div className="surface-card rounded-2xl p-8">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#edf7ff] text-[#0078d4]">
                  <PlaySquare className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Understand</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5e6b7d]">
                  Surface visual events using configurable AI rules and evidence.
                </p>
              </div>
              <div className="surface-card rounded-2xl p-8">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#edf7ff] text-[#0078d4]">
                  <FileCheck2 className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Respond</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5e6b7d]">
                  Verify, assign, escalate and resolve incidents through traceable workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture preview */}
        <section className="page-shell py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <div>
              <p className="eyebrow">ARCHITECTURE</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Flexible by design.</h2>
              <p className="mt-6 text-[15px] leading-7 text-[#5e6b7d]">
                Cognisense supports flexible cloud, edge and hybrid deployment patterns so organisations can balance central visibility with local processing, bandwidth and data-handling requirements.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e1e7ee] bg-white p-6 shadow-sm sm:p-10">
              <div className="flex flex-col gap-4 text-sm font-medium text-[#1a1a1a] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex h-14 items-center justify-center rounded-lg border border-[#e1e7ee] bg-[#fbfcfe] px-6 text-center sm:w-40">Cameras</div>
                <ArrowRight className="hidden h-5 w-5 text-[#8490a1] sm:block" />
                <div className="flex h-14 items-center justify-center rounded-lg border border-[#0078d4]/30 bg-[#edf7ff] px-6 text-center text-[#0078d4] sm:w-40">Edge Connector / Local AI</div>
                <ArrowRight className="hidden h-5 w-5 text-[#8490a1] sm:block" />
                <div className="flex h-14 items-center justify-center rounded-lg border border-[#e1e7ee] bg-[#fbfcfe] px-6 text-center sm:w-40">Cognisense Cloud</div>
              </div>
              <div className="mt-8 border-t border-[#e1e7ee] pt-6 text-center text-[13px] font-medium text-[#5e6b7d]">
                Users, Workflows, Analytics and Integrations
              </div>
            </div>
          </div>
        </section>

        {/* Use-case preview */}
        <section className="bg-[#fbfcfe] border-y border-[#e6ebf1] py-24 sm:py-32">
          <div className="page-shell">
            <h2 className="section-title text-center">Built for physical operations.</h2>
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'Industrial safety',
                'Logistics and warehouses',
                'Critical infrastructure',
                'Commercial facilities',
                'Construction',
                'Transport environments'
              ].map((useCase) => (
                <div key={useCase} className="flex h-20 items-center justify-center rounded-xl border border-[#e1e7ee] bg-white px-6 text-center text-[15px] font-semibold text-[#1a1a1a] shadow-sm">
                  {useCase}
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
                Explore the complete Cognisense platform.
              </h2>
              <div className="mt-10">
                <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-8 text-sm font-semibold text-white transition hover:bg-[#006cbe]">
                  Visit cognisense.cam <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
