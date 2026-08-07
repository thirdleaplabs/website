import { ArrowRight, Boxes, Braces, Cloud, Eye, Gauge, Network, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const bars = [34, 56, 40, 67, 48, 76, 62, 57];

const cognisenseFeatures = [
  { title: 'Hardware Agnostic', copy: 'Integrates with IP cameras and RTSP streams.', icon: Eye },
  { title: 'Ultra-Low Latency', copy: 'Optimized inference engines for responsive processing.', icon: Gauge },
  { title: 'Developer First', copy: 'APIs and webhooks for clean system integration.', icon: Network },
];

const capabilityCards = [
  { id: '01', title: 'AI & Computer Vision', copy: 'Proprietary vision pipelines for detection, spatial analysis and event understanding in challenging environments.', icon: Eye, tags: ['YOLO', 'PyTorch', 'TensorRT'] },
  { id: '02', title: 'Cloud & Edge Platforms', copy: 'Distributed architectures that process data where it is generated while coordinating operations centrally.', icon: Cloud, tags: ['Edge', 'APIs', 'Cloud'] },
  { id: '03', title: 'Web3 Intelligence', copy: 'Market, wallet and community intelligence systems designed around transparent signals and explainable data.', icon: Boxes, tags: ['Indexing', 'Signals', 'Analytics'] },
  { id: '04', title: 'Open Engineering & R&D', copy: 'Rapid experimentation, reusable engineering and public technical learning that compounds into products.', icon: Braces, tags: ['OSS', 'Research', 'Prototypes'] },
];

export const Home = () => (
  <Layout>
    <SEO
      title="Third Leap Labs | Applied AI, Computer Vision, Intelligent Platforms"
      description="Third Leap Labs builds applied AI, computer-vision and data-intelligence products that turn complex signals into clear, real-time decisions."
      path="/"
    />

    <main className="site-page pt-16">
      <section className="brand-grid border-b border-[#2D3142]/15">
        <div className="page-shell grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.18fr_.82fr] lg:py-24">
          <div className="max-w-[760px]">
            <span className="kicker-box"><span className="h-1.5 w-1.5 rounded-full bg-[#1DA1F2]" /> Operational intelligence v2.0</span>
            <h1 className="display-xl mt-7">Engineering intelligence for the <span className="accent">physical and digital</span> world.</h1>
            <p className="copy-lg mt-7 max-w-[720px]">Third Leap Labs builds applied AI, computer-vision and data-intelligence products that transform complex signals into clear, actionable decisions.</p>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4">
              <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="text-link">Explore Cognisense Cloud <ArrowRight className="h-3.5 w-3.5" /></a>
              <Link to="/products" className="text-link">View Our Products <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[440px] lg:justify-self-end">
            <div className="grid grid-cols-[1fr_auto] items-start gap-x-6 border-b border-[#2D3142]/25 pb-3 mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]"><span>System_Status<br />Node_01</span><span className="text-[#1DA1F2]">Active</span></div>
            <div className="metric-row"><span>Throughput</span><span className="text-[#2D3142]">94.2 TB/s</span></div>
            <div className="metric-row"><span>Latency</span><span className="text-[#2D3142]">12ms</span></div>
            <div className="mt-12 flex h-28 items-end gap-2.5 border-b border-[#2D3142]/8 pb-px">{bars.map((height, index) => <span key={`${height}-${index}`} className="flex-1 bg-[#1DA1F2]/20" style={{ height: `${height}%`, opacity: .48 + index * .055 }} />)}</div>
          </div>
        </div>
      </section>

      <section className="paper border-b border-[#2D3142]/15">
        <div className="page-shell py-20 lg:py-24">
          <div className="mb-14"><p className="mono text-[9px] uppercase tracking-[.12em] text-[#1DA1F2]">Flagship Product</p><h2 className="mt-3 text-[clamp(2rem,3.4vw,3.4rem)] font-semibold tracking-[-.045em]">Cognisense Cloud</h2><p className="mt-1 text-[13px] text-[#4F5D75]">Give every camera intelligence.</p></div>

          <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
            <div className="browser-frame">
              <div className="browser-bar"><span className="text-[#1DA1F2]">AI VISION</span><span>LIVE DASHBOARD</span></div>
              <div className="cognisense-ui grid min-h-[330px] grid-cols-[1fr_150px] gap-2 p-3">
                <div className="grid grid-cols-2 grid-rows-2 gap-2">{[0, 1, 2, 3].map((item) => <div key={item} className="ui-card relative overflow-hidden p-3"><div className="absolute inset-0 opacity-20 brand-grid" /><div className="relative flex h-full flex-col justify-between"><span className="mono text-[7px] uppercase tracking-[.08em] text-[#BFC0C0]">CAM_{String(item + 1).padStart(2, '0')} / ACTIVE</span><div><div className="mb-2 h-px bg-[#BFC0C0]/20" /><div className="inline-flex border border-[#1DA1F2]/60 bg-[#1DA1F2]/10 px-2 py-1 mono text-[7px] uppercase text-[#1DA1F2]">Object event detected</div></div></div></div>)}</div>
                <div className="ui-card p-3"><p className="mono text-[7px] uppercase tracking-[.08em] text-[#BFC0C0]">Event Stream</p><div className="mt-4 space-y-3">{[75, 58, 88, 47, 70].map((width, index) => <div key={`${width}-${index}`} className="border-b border-[#BFC0C0]/10 pb-3"><div className="ui-line" style={{ width: `${width}%` }} /><div className="ui-line blue mt-2" style={{ width: `${Math.max(24, width - 30)}%` }} /></div>)}</div></div>
              </div>
            </div>

            <div className="lg:pl-4">
              <p className="copy-md max-w-[560px]">Deploy computer-vision models to existing camera infrastructure, combine edge inference with cloud workflows, and turn video into structured operational data in real time.</p>
              <div className="mt-8 space-y-6">{cognisenseFeatures.map((feature) => <div key={feature.title} className="grid grid-cols-[22px_1fr] gap-3"><feature.icon className="mt-0.5 h-4 w-4 text-[#1DA1F2]" strokeWidth={1.7} /><div><p className="text-[12px] font-medium">{feature.title}</p><p className="mt-1 text-[11px] leading-5 text-[#4F5D75]">{feature.copy}</p></div></div>)}</div>
              <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="text-link mt-9 text-[#1DA1F2]">Explore the platform <ArrowRight className="h-3.5 w-3.5" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-grid border-b border-[#2D3142]/15">
        <div className="page-shell py-20 lg:py-24">
          <p className="mono text-[9px] uppercase tracking-[.12em] text-[#1DA1F2]">Core Capabilities</p>
          <h2 className="mt-3 section-display">Four areas of build.</h2>
          <div className="mt-12 grid gap-px border border-[#2D3142]/15 bg-[#2D3142]/15 md:grid-cols-2">{capabilityCards.map((item) => <article key={item.id} className="bg-white p-7 sm:p-9"><div className="flex items-center justify-between"><span className="mono text-[9px] uppercase tracking-[.08em] text-[#4F5D75]">Capability_{item.id}</span><item.icon className="h-4 w-4 text-[#1DA1F2]" strokeWidth={1.6} /></div><h3 className="mt-6 text-lg font-medium tracking-[-.02em]">{item.title}</h3><p className="mt-3 max-w-[520px] text-[12px] leading-6 text-[#4F5D75]">{item.copy}</p><div className="mt-8 flex flex-wrap gap-2">{item.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div></article>)}</div>
          <div className="mt-8 grid gap-6 border-t border-[#2D3142]/20 pt-7 md:grid-cols-[1fr_auto] md:items-start"><div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 text-[#1DA1F2]" /><p className="max-w-2xl text-[11px] leading-5 text-[#4F5D75]">Engineering discipline across model, platform, interface, deployment and operations—not isolated prototypes.</p></div><div className="mono text-[9px] uppercase leading-5 tracking-[.08em] text-[#4F5D75]">Latest_Commit<br /><span className="text-[#2D3142]">Operational intelligence system</span></div></div>
        </div>
      </section>

      <section className="paper border-b border-[#2D3142]/15"><div className="page-shell flex min-h-[330px] flex-col items-center justify-center py-20 text-center"><h2 className="section-display max-w-[720px]">Ready to engineer your operational intelligence?</h2><p className="copy-md mt-5 max-w-[640px]">Partner with Third Leap Labs to build applied-AI products or integrate our platforms into your operational stack.</p><Link to="/contact" className="text-link mt-9">Start a Conversation <ArrowRight className="h-3.5 w-3.5" /></Link></div></section>
    </main>
  </Layout>
);
