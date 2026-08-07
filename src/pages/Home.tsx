import { ArrowRight, Boxes, Braces, Cloud, Eye, Gauge, Network, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const platformProfile = [
  ['Camera inputs', 'IP / RTSP'],
  ['Edge runtime', 'Local AI'],
  ['Interfaces', 'APIs / Webhooks'],
  ['Deployment', 'Edge / Cloud / Hybrid'],
];

const cameraScenes = [
  { src: '/media/eyewitx/eyewitx-operations.webp', alt: 'Warehouse operations environment', label: 'FEED_01', note: 'Zone activity' },
  { src: '/media/home/hero-eyewitx-poster.webp', alt: 'Camera and infrastructure environment', label: 'FEED_02', note: 'Camera infrastructure' },
  { src: '/media/capabilities/capabilities-infrastructure.webp', alt: 'Data infrastructure corridor', label: 'FEED_03', note: 'Infrastructure view' },
  { src: '/media/company/company-engineering.webp', alt: 'Engineering workstation environment', label: 'FEED_04', note: 'Engineering station' },
];

const eyeWitXFeatures = [
  { title: 'Hardware-agnostic', copy: 'Integrates with IP cameras and RTSP streams.', icon: Eye },
  { title: 'Low-latency processing', copy: 'Edge inference patterns for responsive visual workflows.', icon: Gauge },
  { title: 'Developer-first', copy: 'APIs and webhooks for clean system integration.', icon: Network },
];

const capabilityCards = [
  { id: '01', title: 'AI & Computer Vision', copy: 'Vision pipelines for detection, spatial analysis and event understanding in challenging environments.', icon: Eye, tags: ['YOLO', 'PyTorch', 'TensorRT'] },
  { id: '02', title: 'Cloud & Edge Platforms', copy: 'Distributed architectures that process data where it is generated while coordinating operations centrally.', icon: Cloud, tags: ['Edge', 'APIs', 'Cloud'] },
  { id: '03', title: 'Web3 Intelligence', copy: 'Market, wallet and community intelligence systems designed around transparent signals and explainable data.', icon: Boxes, tags: ['Indexing', 'Signals', 'Analytics'] },
  { id: '04', title: 'Open Engineering & R&D', copy: 'Rapid experimentation, reusable engineering and technical learning that compounds into better products.', icon: Braces, tags: ['OSS', 'Research', 'Prototypes'] },
];

const HeroMedia = () => {
  const [videoAvailable, setVideoAvailable] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch('/media/home/hero-eyewitx.mp4', { method: 'HEAD' })
      .then((response) => {
        const type = response.headers.get('content-type') ?? '';
        if (mounted && response.ok && type.startsWith('video/')) setVideoAvailable(true);
      })
      .catch(() => undefined);
    return () => { mounted = false; };
  }, []);

  if (videoAvailable) {
    return (
      <video className="home-hero-media pointer-events-none absolute inset-0 h-full w-full object-cover grayscale" autoPlay muted loop playsInline poster="/media/home/hero-eyewitx-poster.webp" aria-hidden="true">
        <source src="/media/home/hero-eyewitx.mp4" type="video/mp4" />
      </video>
    );
  }

  return <img src="/media/home/hero-eyewitx-poster.webp" alt="" aria-hidden="true" className="home-hero-media pointer-events-none absolute inset-0 h-full w-full object-cover grayscale" />;
};

export const Home = () => (
  <Layout>
    <SEO
      title="Third Leap Labs | AI, Computer Vision & Web3 Product Engineering"
      description="Third Leap Labs builds applied AI, computer-vision, cloud-edge and Web3 products that turn complex signals into usable operational intelligence."
      path="/"
    />

    <main className="site-page pt-16">
      <section className="brand-grid relative overflow-hidden border-b border-[#2D3142]/15">
        <HeroMedia />
        <div className="home-hero-overlay pointer-events-none absolute inset-0" />
        <div className="page-shell relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.18fr_.82fr] lg:py-24">
          <div className="max-w-[760px]">
            <span className="kicker-box"><span className="h-1.5 w-1.5 rounded-full bg-[#1DA1F2]" /> Applied intelligence systems</span>
            <h1 className="display-xl mt-7">Engineering intelligence for the <span className="accent">physical and digital</span> world.</h1>
            <p className="copy-lg mt-7 max-w-[720px]">Third Leap Labs builds applied AI, computer-vision and data-intelligence products that transform complex signals into clear, actionable decisions.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/eyewitx" className="btn-primary">Explore EyeWitX <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="btn-secondary">Start a Project <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-10 grid max-w-[720px] gap-px border border-[#2D3142]/15 bg-[#2D3142]/15 sm:grid-cols-3">
              <div className="bg-white/88 p-4 backdrop-blur-sm"><p className="mono text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Products</p><p className="mt-2 text-[12px] font-medium">EyeWitX · WhaleScanner</p></div>
              <div className="bg-white/88 p-4 backdrop-blur-sm"><p className="mono text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Build</p><p className="mt-2 text-[12px] font-medium">AI / CV · Cloud / Edge · Web3</p></div>
              <div className="bg-white/88 p-4 backdrop-blur-sm"><p className="mono text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Approach</p><p className="mt-2 text-[12px] font-medium">Product engineering end to end</p></div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[440px] border border-[#2D3142]/20 bg-white/78 p-5 backdrop-blur-md lg:justify-self-end">
            <div className="flex items-center justify-between border-b border-[#2D3142]/25 pb-4 mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]"><span>Platform profile</span><span className="text-[#1DA1F2]">EyeWitX</span></div>
            <div className="mt-2">
              {platformProfile.map(([label, value]) => <div key={label} className="metric-row"><span>{label}</span><span className="text-right text-[#2D3142]">{value}</span></div>)}
            </div>
            <p className="mono mt-5 border-t border-[#2D3142]/15 pt-4 text-[10px] uppercase leading-5 tracking-[.06em] text-[#4F5D75]">Camera → Edge AI → Cloud workflows → Operational response</p>
          </div>
        </div>
      </section>

      <section className="paper border-b border-[#2D3142]/15">
        <div className="page-shell py-20 lg:py-24">
          <div className="mb-14"><p className="mono text-[10px] uppercase tracking-[.12em] text-[#1DA1F2]">Flagship Product</p><h2 className="mt-3 text-[clamp(2rem,3.4vw,3.4rem)] font-semibold tracking-[-.045em]">EyeWitX</h2><p className="mt-1 text-[13px] text-[#4F5D75]">Turn camera infrastructure into operational intelligence.</p></div>

          <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
            <div className="browser-frame">
              <div className="browser-bar"><span className="text-[#1DA1F2]">AI VISION</span><span>INTERFACE ILLUSTRATION</span></div>
              <div className="cognisense-ui grid min-h-[330px] grid-cols-[1fr_150px] gap-2 p-3">
                <div className="grid grid-cols-2 grid-rows-2 gap-2">{cameraScenes.map((scene) => <div key={scene.label} className="ui-card relative overflow-hidden p-3"><img src={scene.src} alt={scene.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.12] brightness-[.62]" /><div className="absolute inset-0 bg-[#111827]/22" /><div className="relative flex h-full flex-col justify-between"><span className="mono text-[9px] uppercase tracking-[.06em] text-white/80">{scene.label}</span><div><div className="mb-2 h-px bg-white/20" /><div className="inline-flex border border-[#1DA1F2]/60 bg-[#0B1720]/72 px-2 py-1 mono text-[8px] uppercase text-[#1DA1F2]">{scene.note}</div></div></div></div>)}</div>
                <div className="ui-card p-3"><p className="mono text-[9px] uppercase tracking-[.06em] text-[#BFC0C0]">Workflow Events</p><div className="mt-4 space-y-3">{['Detection','Review','Assign','Escalate','Resolve'].map((item, index) => <div key={item} className="border-b border-[#BFC0C0]/10 pb-3"><p className="mono text-[8px] uppercase text-[#BFC0C0]">0{index + 1} / {item}</p><div className="ui-line blue mt-2" style={{ width: `${46 + index * 8}%` }} /></div>)}</div></div>
              </div>
            </div>

            <div className="lg:pl-4">
              <p className="copy-md max-w-[560px]">Deploy computer-vision models to existing camera infrastructure, combine edge inference with cloud workflows, and turn video into structured operational data.</p>
              <div className="mt-8 space-y-6">{eyeWitXFeatures.map((feature) => <div key={feature.title} className="grid grid-cols-[22px_1fr] gap-3"><feature.icon className="mt-0.5 h-4 w-4 text-[#1DA1F2]" strokeWidth={1.7} /><div><p className="text-[13px] font-medium">{feature.title}</p><p className="mt-1 text-[12px] leading-5 text-[#4F5D75]">{feature.copy}</p></div></div>)}</div>
              <Link to="/eyewitx" className="text-link mt-9 text-[#1DA1F2]">Explore the platform <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-grid border-b border-[#2D3142]/15">
        <div className="page-shell py-20 lg:py-24">
          <p className="mono text-[10px] uppercase tracking-[.12em] text-[#1DA1F2]">Core Capabilities</p>
          <h2 className="mt-3 section-display">Four engineering domains.</h2>
          <div className="mt-12 grid gap-px border border-[#2D3142]/15 bg-[#2D3142]/15 md:grid-cols-2">{capabilityCards.map((item) => <article key={item.id} className="bg-white p-7 sm:p-9"><div className="flex items-center justify-between"><span className="mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]">Capability_{item.id}</span><item.icon className="h-4 w-4 text-[#1DA1F2]" strokeWidth={1.6} /></div><h3 className="mt-6 text-lg font-medium tracking-[-.02em]">{item.title}</h3><p className="mt-3 max-w-[520px] text-[13px] leading-6 text-[#4F5D75]">{item.copy}</p><div className="mt-8 flex flex-wrap gap-2">{item.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div></article>)}</div>
          <div className="mt-8 grid gap-6 border-t border-[#2D3142]/20 pt-7 md:grid-cols-[1fr_auto] md:items-start"><div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 text-[#1DA1F2]" /><p className="max-w-2xl text-[12px] leading-5 text-[#4F5D75]">Engineering discipline across model, platform, interface, deployment and operations—not isolated prototypes.</p></div><div className="mono text-[10px] uppercase leading-5 tracking-[.06em] text-[#4F5D75]">Engineering scope<br /><span className="text-[#2D3142]">Model → Edge → Cloud → Product</span></div></div>
        </div>
      </section>

      <section className="paper border-b border-[#2D3142]/15"><div className="page-shell flex min-h-[330px] flex-col items-center justify-center py-20 text-center"><h2 className="section-display max-w-[720px]">Have a hard operational problem to solve?</h2><p className="copy-md mt-5 max-w-[640px]">Partner with Third Leap Labs to build applied-AI products or integrate our platforms into your operational stack.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Link to="/contact" className="btn-primary">Start a Project <ArrowRight className="h-4 w-4" /></Link><Link to="/products" className="btn-secondary">View Products</Link></div></div></section>
    </main>
  </Layout>
);
