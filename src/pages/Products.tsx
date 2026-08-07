import { ArrowRight, BarChart3, Camera, Database, Radar, ShieldCheck, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

export const Products = () => (
  <Layout>
    <SEO
      title="Products | Third Leap Labs"
      description="Operational intelligence products from Third Leap Labs: Cognisense Cloud for visual intelligence and WhaleScanner for Web3 market and wallet intelligence."
      path="/products"
    />
    <main className="site-page pt-16">
      <section className="brand-grid border-b border-[#2D3142]/15">
        <div className="page-shell py-20 sm:py-24 lg:py-28">
          <span className="kicker">Product Portfolio</span>
          <h1 className="page-display mt-7 max-w-[900px]">Intelligent platforms, built end to end.</h1>
          <p className="copy-lg mt-7 max-w-[800px]">Our products combine domain understanding, software architecture, data systems and applied AI in operational platforms designed to be used—not simply demonstrated.</p>
        </div>
      </section>

      <section className="paper border-b border-[#2D3142]/15 py-20 lg:py-24">
        <div className="page-shell grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-center">
          <div>
            <p className="mono text-[10px] uppercase tracking-[.1em] text-[#EF8354]">Cloud Visual Intelligence / Product_01</p>
            <h2 className="section-display mt-5">Cognisense Cloud</h2>
            <p className="copy-md mt-5 max-w-[560px]">Transform existing camera infrastructure into a connected operational layer for safety, security, incidents, evidence and analytics.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [Camera, 'Live visual operations'],
                [Radar, 'AI event detection'],
                [ShieldCheck, 'Incident workflows'],
                [BarChart3, 'Operational analytics'],
              ].map(([Icon, label]) => (
                <div key={String(label)} className="flex items-center gap-3 border-t border-[#2D3142]/15 pt-3 text-[12px] text-[#2D3142]">
                  <Icon className="h-4 w-4 text-[#EF8354]" strokeWidth={1.7} />{String(label)}
                </div>
              ))}
            </div>
            <a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="btn-primary mt-9">Explore Cognisense Cloud <ArrowRight className="h-4 w-4" /></a>
          </div>

          <div className="browser-frame">
            <div className="browser-bar"><span className="text-[#EF8354]">COGNISENSE</span><span>operational_view</span></div>
            <div className="cognisense-ui grid min-h-[420px] grid-cols-[1.55fr_.75fr] gap-2 p-3">
              <div className="grid grid-rows-[1.2fr_.8fr] gap-2">
                <div className="ui-card relative overflow-hidden p-4">
                  <div className="absolute inset-0 opacity-15 brand-grid" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between mono text-[8px] uppercase text-[#BFC0C0]"><span>Live facility view</span><span className="text-[#EF8354]">12 events</span></div>
                    <div className="grid grid-cols-3 gap-3">
                      {[72, 45, 61].map((height, index) => <div key={height} className="flex h-24 items-end border border-[#BFC0C0]/10 p-2"><span className="w-full bg-[#EF8354]/40" style={{ height: `${height}%` }} /><span className="sr-only">Metric {index + 1}</span></div>)}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="ui-card p-4"><p className="mono text-[8px] uppercase text-[#BFC0C0]">Incidents</p><div className="mt-5 space-y-3">{[85,65,76].map((width) => <div key={width} className="ui-line orange" style={{width:`${width}%`}} />)}</div></div>
                  <div className="ui-card p-4"><p className="mono text-[8px] uppercase text-[#BFC0C0]">Analytics</p><div className="mt-5 space-y-3">{[64,88,52].map((width) => <div key={width} className="ui-line slate" style={{width:`${width}%`}} />)}</div></div>
                </div>
              </div>
              <div className="ui-card p-4"><p className="mono text-[8px] uppercase text-[#BFC0C0]">Event stream</p><div className="mt-5 space-y-4">{[1,2,3,4,5,6].map((item) => <div key={item} className="border-b border-[#BFC0C0]/10 pb-3"><div className="ui-line" style={{width:`${52 + (item % 3) * 12}%`}}/><div className="ui-line orange mt-2" style={{width:`${30 + (item % 2) * 18}%`}}/></div>)}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="whalescanner" className="brand-grid border-b border-[#2D3142]/15 py-20 lg:py-24 scroll-mt-20">
        <div className="page-shell grid gap-10 lg:grid-cols-[1.12fr_.88fr] lg:items-center">
          <div className="order-2 border border-[#2D3142]/35 bg-[#2D3142] p-5 text-white lg:order-1">
            <div className="flex items-center justify-between border-b border-white/15 pb-4 mono text-[8px] uppercase tracking-[.08em] text-[#BFC0C0]"><span>WhaleScanner / Market Radar</span><span className="text-[#EF8354]">Live</span></div>
            <div className="grid min-h-[390px] grid-cols-[1fr_170px] gap-4 pt-4">
              <div className="relative overflow-hidden border border-white/10 bg-[#252B3A] p-5">
                <div className="absolute inset-0 opacity-10 brand-grid" />
                <div className="relative flex h-full flex-col justify-between">
                  <div><p className="mono text-[8px] uppercase text-[#BFC0C0]">Signal intensity</p><p className="mt-2 text-3xl font-semibold tracking-[-.04em]">87.4<span className="text-[#EF8354]">%</span></p></div>
                  <div className="flex h-40 items-end gap-2">{[28,40,38,58,48,73,66,88,72,92,78,96].map((height,index)=><span key={`${height}-${index}`} className="flex-1 bg-[#EF8354]" style={{height:`${height}%`,opacity:.25 + index*.045}} />)}</div>
                </div>
              </div>
              <div className="space-y-3">{['Wallet flow','Project discovery','Signals','Community'].map((item,index)=><div key={item} className="border border-white/10 bg-[#252B3A] p-4"><p className="mono text-[7px] uppercase text-[#BFC0C0]">0{index+1}</p><p className="mt-3 text-[11px]">{item}</p><div className="mt-4 h-1 bg-white/10"><div className="h-full bg-[#EF8354]" style={{width:`${58 + index*9}%`}} /></div></div>)}</div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-5">
            <p className="mono text-[10px] uppercase tracking-[.1em] text-[#EF8354]">Web3 Intelligence / Product_02</p>
            <h2 className="section-display mt-5">WhaleScanner</h2>
            <p className="copy-md mt-5 max-w-[560px]">Market intelligence, token and wallet insight, project discovery, signals and community workflows in one product focused on transparency and informed participation.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 border-t border-[#2D3142]/15 pt-3 text-[12px]"><Waves className="h-4 w-4 text-[#EF8354]" /> Real-time market signals</div>
              <div className="flex items-center gap-3 border-t border-[#2D3142]/15 pt-3 text-[12px]"><Database className="h-4 w-4 text-[#EF8354]" /> Wallet &amp; token intelligence</div>
            </div>
            <a href="https://whalescanner.com" target="_blank" rel="noreferrer" className="text-link mt-9 text-[#EF8354]">Explore WhaleScanner <ArrowRight className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </section>

      <section className="paper">
        <div className="page-shell flex min-h-[310px] flex-col items-center justify-center py-20 text-center">
          <h2 className="section-display max-w-[760px]">Different markets. The same engineering discipline.</h2>
          <p className="copy-md mt-5 max-w-[680px]">We turn fragmented signals into structured, explainable and actionable product experiences.</p>
          <Link to="/capabilities" className="text-link mt-8">View Our Capabilities <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </main>
  </Layout>
);
