import { ArrowRight, Camera, Cloud, FileCheck2, Gauge, Search, ShieldCheck } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const productStats = [
  { label: 'Active feeds', value: '342' },
  { label: 'Event latency', value: '14ms' },
  { label: 'Asset uptime', value: '99.1%' },
  { label: 'Detection confidence', value: '94.8%' },
];

export function CognisenseCloud() {
  return (
    <Layout>
      <SEO
        title="Cognisense Cloud | Cloud Visual Intelligence Platform"
        description="Connect cameras, edge AI and cloud workflows in one platform for live operations, visual events, incidents, evidence and analytics."
        path="/cognisense"
      />
      <main className="site-page pt-16">
        <section className="brand-grid border-b border-[#2D3142]/15">
          <div className="page-shell py-16 text-center sm:py-20 lg:py-24">
            <span className="kicker-box"><span className="h-1.5 w-1.5 rounded-full bg-[#EF8354]" /> Live system active</span>
            <h1 className="page-display mx-auto mt-7 max-w-[960px]">Cognisense Cloud: Cloud visual intelligence for safer, smarter operations.</h1>
            <p className="copy-lg mx-auto mt-6 max-w-[820px]">Connect cameras, edge AI and cloud workflows in one platform for live operations, visual events, incidents, evidence and analytics.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="btn-primary">Visit Cognisense Cloud <ArrowRight className="h-4 w-4" /></a>
              <a href="https://cognisense.cam/contact" target="_blank" rel="noreferrer" className="btn-secondary">Request a Pilot</a>
            </div>

            <div className="browser-frame mx-auto mt-16 max-w-[1080px] text-left">
              <div className="browser-bar">
                <span className="browser-dot" /><span className="browser-dot" /><span className="browser-dot" />
                <span className="ml-3">system_overview.exe</span>
              </div>
              <div className="cognisense-ui p-3 sm:p-4">
                <div className="grid min-h-[520px] gap-3 lg:grid-cols-[1.3fr_.75fr]">
                  <div className="grid gap-3 lg:grid-rows-[1.2fr_.8fr]">
                    <div className="ui-card relative overflow-hidden p-4 sm:p-5">
                      <div className="absolute inset-0 opacity-10 brand-grid" />
                      <div className="relative flex h-full flex-col">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#BFC0C0]/15 pb-4">
                          <div><p className="mono text-[8px] uppercase tracking-[.08em] text-[#BFC0C0]">Facility Alpha / Production Line B</p><p className="mt-2 text-sm font-medium">Live visual operations</p></div>
                          <span className="border border-[#EF8354]/55 bg-[#EF8354]/10 px-2 py-1 mono text-[8px] uppercase text-[#EF8354]">AI Normal</span>
                        </div>
                        <div className="grid flex-1 grid-cols-2 gap-3 pt-4">
                          {[1, 2, 3, 4].map((camera) => (
                            <div key={camera} className="relative overflow-hidden border border-[#BFC0C0]/15 bg-[#171D25] p-3">
                              <div className="absolute inset-0 opacity-15 brand-grid" />
                              <div className="relative flex h-full flex-col justify-between">
                                <span className="mono text-[7px] uppercase text-[#BFC0C0]">CAM_{String(camera).padStart(2, '0')} / STREAMING</span>
                                {camera === 2 && <span className="self-start border border-[#EF8354]/60 bg-[#EF8354]/12 px-2 py-1 mono text-[7px] uppercase text-[#EF8354]">person detected</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="ui-card p-4"><p className="mono text-[8px] uppercase text-[#BFC0C0]">Incident queue</p><div className="mt-5 space-y-4">{[82, 64, 74, 48].map((width, index) => <div key={`${width}-${index}`}><div className="ui-line" style={{ width: `${width}%` }} /><div className="ui-line orange mt-2" style={{ width: `${Math.max(24, width - 32)}%` }} /></div>)}</div></div>
                      <div className="ui-card p-4"><p className="mono text-[8px] uppercase text-[#BFC0C0]">Critical incidents heatmap</p><div className="mt-6 grid h-28 grid-cols-5 items-end gap-2">{[36, 62, 48, 78, 55].map((height, index) => <span key={`${height}-${index}`} className="bg-[#EF8354]" style={{height:`${height}%`,opacity:.25 + index*.12}} />)}</div></div>
                    </div>
                  </div>
                  <div className="ui-card p-4 sm:p-5">
                    <div className="flex items-center justify-between"><p className="mono text-[8px] uppercase text-[#BFC0C0]">KPI panel</p><Gauge className="h-4 w-4 text-[#EF8354]" /></div>
                    <div className="mt-5 grid grid-cols-2 gap-px bg-[#BFC0C0]/15">{productStats.map((stat) => <div key={stat.label} className="bg-[#222B36] p-3"><p className="mono text-[7px] uppercase text-[#BFC0C0]">{stat.label}</p><p className="mt-2 text-lg font-semibold text-white">{stat.value}</p></div>)}</div>
                    <div className="mt-7"><p className="mono text-[8px] uppercase text-[#BFC0C0]">System load</p><div className="mt-4 flex h-28 items-end gap-2">{[31,45,42,59,52,71,67,82,74,89].map((height,index)=><span key={`${height}-${index}`} className="flex-1 bg-[#4F5D75]" style={{height:`${height}%`,opacity:.35+index*.055}} />)}</div></div>
                    <div className="mt-8 border-t border-[#BFC0C0]/15 pt-5"><p className="mono text-[8px] uppercase text-[#BFC0C0]">Network status</p><div className="mt-4 space-y-3">{['Edge connected','Cloud sync','Alert pipeline'].map((item) => <div key={item} className="flex items-center justify-between text-[9px]"><span className="text-[#BFC0C0]">{item}</span><span className="text-[#EF8354]">ACTIVE</span></div>)}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="paper border-b border-[#2D3142]/15 py-20 lg:py-24">
          <div className="page-shell">
            <p className="mono text-[10px] uppercase tracking-[.1em] text-[#EF8354]">Operational Loop</p>
            <h2 className="section-display mt-4 max-w-[760px]">From passive video to operational intelligence.</h2>
            <div className="mt-12 grid gap-px border border-[#2D3142]/15 bg-[#2D3142]/15 md:grid-cols-3">
              {[
                { title: 'See', copy: 'Monitor cameras, facilities and sites from a clear cloud command centre.', icon: Camera },
                { title: 'Understand', copy: 'Surface visual events using configurable AI rules, context and evidence.', icon: Search },
                { title: 'Respond', copy: 'Verify, assign, escalate and resolve incidents through traceable workflows.', icon: FileCheck2 },
              ].map((item) => (
                <article key={item.title} className="bg-white p-8">
                  <item.icon className="h-6 w-6 text-[#EF8354]" strokeWidth={1.7} />
                  <h3 className="mt-7 text-xl font-medium tracking-[-.025em]">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#4F5D75]">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brand-grid border-b border-[#2D3142]/15 py-20 lg:py-24">
          <div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <span className="kicker">Architecture</span>
              <h2 className="section-display mt-5">Flexible by design.</h2>
              <p className="copy-md mt-5 max-w-[520px]">Cloud, edge and hybrid deployment patterns balance central visibility with local inference, bandwidth constraints and data-handling requirements.</p>
            </div>
            <div className="panel p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto_1.2fr_auto_1fr] sm:items-center">
                <div className="border border-[#2D3142]/18 bg-white px-4 py-5 text-center text-[12px]"><Camera className="mx-auto mb-3 h-5 w-5 text-[#EF8354]" />Cameras</div>
                <ArrowRight className="mx-auto hidden h-4 w-4 text-[#4F5D75] sm:block" />
                <div className="border border-[#EF8354]/40 bg-[#EF8354]/6 px-4 py-5 text-center text-[12px]"><ShieldCheck className="mx-auto mb-3 h-5 w-5 text-[#EF8354]" />Edge Connector / Local AI</div>
                <ArrowRight className="mx-auto hidden h-4 w-4 text-[#4F5D75] sm:block" />
                <div className="border border-[#2D3142]/18 bg-white px-4 py-5 text-center text-[12px]"><Cloud className="mx-auto mb-3 h-5 w-5 text-[#EF8354]" />Cognisense Cloud</div>
              </div>
              <div className="mt-6 border-t border-[#2D3142]/15 pt-5 text-center mono text-[9px] uppercase tracking-[.07em] text-[#4F5D75]">Users / Workflows / Analytics / Integrations</div>
            </div>
          </div>
        </section>

        <section className="paper">
          <div className="page-shell flex min-h-[320px] flex-col items-center justify-center py-20 text-center">
            <h2 className="section-display max-w-[720px]">Explore the complete Cognisense platform.</h2>
            <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="btn-primary mt-8">Visit cognisense.cam <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
