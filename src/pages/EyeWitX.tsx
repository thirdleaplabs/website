import { ArrowRight, Camera, Cloud, FileCheck2, Gauge, Search, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const platformFacts = [
  { label: 'Camera inputs', value: 'IP / RTSP' },
  { label: 'Edge processing', value: 'Local AI' },
  { label: 'Integrations', value: 'APIs / Webhooks' },
  { label: 'Deployment', value: 'Edge / Cloud / Hybrid' },
];

const cameraScenes = [
  { src: '/media/eyewitx/eyewitx-operations.webp', alt: 'Warehouse operations environment', label: 'CAM_01', context: 'Warehouse aisle' },
  { src: '/media/home/hero-eyewitx-poster.webp', alt: 'Camera and infrastructure environment', label: 'CAM_02', context: 'Camera infrastructure' },
  { src: '/media/capabilities/capabilities-infrastructure.webp', alt: 'Infrastructure corridor', label: 'CAM_03', context: 'Infrastructure corridor' },
  { src: '/media/company/company-engineering.webp', alt: 'Engineering workstation environment', label: 'CAM_04', context: 'Engineering station' },
];

export function EyeWitX() {
  return (
    <Layout>
      <SEO
        title="EyeWitX | Cloud Visual Intelligence Platform"
        description="EyeWitX connects cameras, edge AI and cloud workflows in one platform for live operations, visual events, incidents, evidence and analytics."
        path="/eyewitx"
      />
      <main className="site-page pt-16">
        <section className="brand-grid border-b border-[#2D3142]/15">
          <div className="page-shell py-16 text-center sm:py-20 lg:py-24">
            <span className="kicker-box"><span className="h-1.5 w-1.5 rounded-full bg-[#1DA1F2]" /> Visual intelligence platform</span>
            <h1 className="page-display mx-auto mt-7 max-w-[960px]">EyeWitX: Cloud visual intelligence for safer, smarter operations.</h1>
            <p className="copy-lg mx-auto mt-6 max-w-[820px]">Connect cameras, edge AI and cloud workflows in one platform for live operations, visual events, incidents, evidence and analytics.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">Request a Pilot <ArrowRight className="h-4 w-4" /></Link>
              <a href="https://eyewitx.com" target="_blank" rel="noreferrer" className="btn-secondary">Visit eyewitx.com</a>
            </div>

            <div className="browser-frame mx-auto mt-16 max-w-[1080px] text-left">
              <div className="browser-bar">
                <span className="browser-dot" /><span className="browser-dot" /><span className="browser-dot" />
                <span className="ml-3">interface_illustration</span>
              </div>
              <div className="cognisense-ui p-3 sm:p-4">
                <div className="grid min-h-[520px] gap-3 lg:grid-cols-[1.3fr_.75fr]">
                  <div className="grid gap-3 lg:grid-rows-[1.2fr_.8fr]">
                    <div className="ui-card relative overflow-hidden p-4 sm:p-5">
                      <div className="absolute inset-0 opacity-10 brand-grid" />
                      <div className="relative flex h-full flex-col">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#BFC0C0]/15 pb-4">
                          <div><p className="mono text-[9px] uppercase tracking-[.06em] text-[#BFC0C0]">Example operational view</p><p className="mt-2 text-sm font-medium">Live visual operations</p></div>
                          <span className="border border-[#1DA1F2]/55 bg-[#1DA1F2]/10 px-2 py-1 mono text-[9px] uppercase text-[#1DA1F2]">Illustrative UI</span>
                        </div>
                        <div className="grid flex-1 grid-cols-2 gap-3 pt-4">
                          {cameraScenes.map((scene, index) => (
                            <div key={scene.label} className="relative overflow-hidden border border-[#BFC0C0]/15 bg-[#171D25] p-3">
                              <img src={scene.src} alt={scene.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.12] brightness-[.62]" />
                              <div className="absolute inset-0 bg-[#111827]/22" />
                              <div className="relative flex h-full flex-col justify-between">
                                <span className="mono text-[9px] uppercase text-white/80">{scene.label} / {scene.context}</span>
                                {index === 1 && <span className="self-start border border-[#1DA1F2]/60 bg-[#0B1720]/72 px-2 py-1 mono text-[8px] uppercase text-[#1DA1F2]">Example event</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="ui-card p-4"><p className="mono text-[9px] uppercase text-[#BFC0C0]">Workflow queue</p><div className="mt-5 space-y-4">{['Detect','Review','Assign','Resolve'].map((item, index) => <div key={item}><div className="flex items-center justify-between mono text-[8px] uppercase text-[#BFC0C0]"><span>0{index + 1}</span><span>{item}</span></div><div className="ui-line blue mt-2" style={{ width: `${58 + index * 8}%` }} /></div>)}</div></div>
                      <div className="ui-card p-4"><p className="mono text-[9px] uppercase text-[#BFC0C0]">Event activity</p><div className="mt-6 grid h-28 grid-cols-5 items-end gap-2">{[36, 62, 48, 78, 55].map((height, index) => <span key={`${height}-${index}`} className="bg-[#1DA1F2]" style={{height:`${height}%`,opacity:.25 + index*.12}} />)}</div></div>
                    </div>
                  </div>
                  <div className="ui-card p-4 sm:p-5">
                    <div className="flex items-center justify-between"><p className="mono text-[9px] uppercase text-[#BFC0C0]">Platform profile</p><Gauge className="h-4 w-4 text-[#1DA1F2]" /></div>
                    <div className="mt-5 grid grid-cols-2 gap-px bg-[#BFC0C0]/15">{platformFacts.map((fact) => <div key={fact.label} className="bg-[#222B36] p-3"><p className="mono text-[8px] uppercase text-[#BFC0C0]">{fact.label}</p><p className="mt-2 text-[13px] font-semibold leading-5 text-white">{fact.value}</p></div>)}</div>
                    <div className="mt-7"><p className="mono text-[9px] uppercase text-[#BFC0C0]">Operational flow</p><div className="mt-4 space-y-4">{['Camera input','Edge inference','Cloud workflow','Human response'].map((item, index)=><div key={item}><div className="flex items-center justify-between text-[10px]"><span className="text-[#BFC0C0]">{item}</span><span className="mono text-[8px] text-[#1DA1F2]">0{index + 1}</span></div><div className="ui-line slate mt-2"><div className="h-full bg-[#1DA1F2]" style={{width:`${52 + index * 11}%`}} /></div></div>)}</div>
                    <div className="mt-8 border-t border-[#BFC0C0]/15 pt-5"><p className="mono text-[9px] uppercase text-[#BFC0C0]">Integration surfaces</p><div className="mt-4 space-y-3">{['Edge connector','Cloud workflow','Alert webhook'].map((item) => <div key={item} className="flex items-center justify-between text-[10px]"><span className="text-[#BFC0C0]">{item}</span><span className="text-[#1DA1F2]">SUPPORTED</span></div>)}</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="paper border-b border-[#2D3142]/15 py-20 lg:py-24">
          <div className="page-shell">
            <p className="mono text-[10px] uppercase tracking-[.1em] text-[#1DA1F2]">Operational Loop</p>
            <h2 className="section-display mt-4 max-w-[760px]">From passive video to operational intelligence.</h2>
            <div className="mt-12 grid gap-px border border-[#2D3142]/15 bg-[#2D3142]/15 md:grid-cols-3">
              {[
                { title: 'See', copy: 'Monitor cameras, facilities and sites from a clear cloud command centre.', icon: Camera },
                { title: 'Understand', copy: 'Surface visual events using configurable AI rules, context and evidence.', icon: Search },
                { title: 'Respond', copy: 'Verify, assign, escalate and resolve incidents through traceable workflows.', icon: FileCheck2 },
              ].map((item) => (
                <article key={item.title} className="bg-white p-8">
                  <item.icon className="h-6 w-6 text-[#1DA1F2]" strokeWidth={1.7} />
                  <h3 className="mt-7 text-xl font-medium tracking-[-.025em]">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-[#4F5D75]">{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-[#2D3142]/15 py-20 lg:py-24">
          <div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <span className="kicker">Architecture</span>
              <h2 className="section-display mt-5">Flexible by design.</h2>
              <p className="copy-md mt-5 max-w-[520px]">Cloud, edge and hybrid deployment patterns balance central visibility with local inference, bandwidth constraints and data-handling requirements.</p>
            </div>
            <div className="panel p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto_1.2fr_auto_1fr] sm:items-center">
                <div className="border border-[#2D3142]/18 bg-white px-4 py-5 text-center text-[12px]"><Camera className="mx-auto mb-3 h-5 w-5 text-[#1DA1F2]" />Cameras</div>
                <ArrowRight className="mx-auto hidden h-4 w-4 text-[#4F5D75] sm:block" />
                <div className="border border-[#1DA1F2]/40 bg-[#1DA1F2]/6 px-4 py-5 text-center text-[12px]"><ShieldCheck className="mx-auto mb-3 h-5 w-5 text-[#1DA1F2]" />Edge Connector / Local AI</div>
                <ArrowRight className="mx-auto hidden h-4 w-4 text-[#4F5D75] sm:block" />
                <div className="border border-[#2D3142]/18 bg-white px-4 py-5 text-center text-[12px]"><Cloud className="mx-auto mb-3 h-5 w-5 text-[#1DA1F2]" />EyeWitX</div>
              </div>
              <div className="mt-6 border-t border-[#2D3142]/15 pt-5 text-center mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]">Users / Workflows / Analytics / Integrations</div>
            </div>
          </div>
        </section>

        <section className="paper">
          <div className="page-shell flex min-h-[320px] flex-col items-center justify-center py-20 text-center">
            <h2 className="section-display max-w-[720px]">Discuss an EyeWitX pilot for your environment.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/contact" className="btn-primary">Request a Pilot <ArrowRight className="h-4 w-4" /></Link><a href="https://eyewitx.com" target="_blank" rel="noreferrer" className="btn-secondary">Visit eyewitx.com</a></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
