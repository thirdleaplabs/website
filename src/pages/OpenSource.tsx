import { ArrowRight, CheckCircle2, Code2, FileText, Github, ShieldCheck, TerminalSquare } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const engineeringAreas = [
  { title: 'Edge integration', copy: 'Reusable patterns for connecting cameras, devices and constrained runtimes to larger platforms.', tag: 'EDGE' },
  { title: 'Product interfaces', copy: 'UI patterns for timelines, operational review, data-rich workflows and real-time product experiences.', tag: 'UI' },
  { title: 'Data intelligence', copy: 'Structured pipelines for turning event streams, market data and system signals into usable product context.', tag: 'DATA' },
];

const principles = [
  { title: 'Share reusable engineering', icon: Code2 },
  { title: 'Protect customer data', icon: ShieldCheck },
  { title: 'Document clearly', icon: FileText },
  { title: 'State status honestly', icon: CheckCircle2 },
];

export const OpenSource = () => (
  <Layout>
    <SEO
      title="Research & Open Engineering | Third Leap Labs"
      description="Third Leap Labs uses research, prototypes and reusable engineering to improve product architecture and publish selected work when it is ready for external use."
      path="/open-source"
    />
    <main className="site-page pt-16">
      <section className="brand-grid border-b border-[#2D3142]/15">
        <div className="page-shell py-20 lg:py-24">
          <span className="kicker">Research / Open Engineering</span>
          <h1 className="page-display mt-7 max-w-[900px]">Pushing the boundaries of intelligence.</h1>
          <p className="copy-lg mt-7 max-w-[820px]">We use research and prototypes to test ideas early, sharpen architecture decisions and turn the parts that prove useful into reusable engineering. Public work is linked only when it is ready for external use.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="btn-primary">View Public GitHub <ArrowRight className="h-4 w-4" /></a>
            <a href="#principles" className="btn-secondary">Read Engineering Principles</a>
          </div>
        </div>
      </section>

      <section className="paper border-b border-[#2D3142]/15 py-20 lg:py-24">
        <div className="page-shell">
          <div className="flex flex-col gap-4 border-b border-[#2D3142]/30 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="mono text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Engineering Areas</p><h2 className="section-display mt-3">What we make reusable.</h2></div>
            <a href="https://github.com/thirdleaplabs/website" target="_blank" rel="noreferrer" className="text-link">View this website repository <ArrowRight className="h-3.5 w-3.5" /></a>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {engineeringAreas.map((area, index) => (
              <article key={area.title} className="panel panel-hover flex min-h-[250px] flex-col p-7">
                <div className="flex items-center justify-between"><span className="mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]">Area_0{index + 1}</span><Code2 className="h-4 w-4 text-[#1DA1F2]" /></div>
                <h3 className="mt-7 text-[20px] font-medium tracking-[-.03em]">{area.title}</h3>
                <p className="mt-4 flex-1 text-[13px] leading-6 text-[#4F5D75]">{area.copy}</p>
                <div className="mt-7"><span className="tech-tag">{area.tag}</span></div>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 border-l-2 border-[#1DA1F2] bg-white p-5 sm:grid-cols-[auto_1fr] sm:items-center">
            <Github className="h-5 w-5 text-[#1DA1F2]" />
            <p className="text-[13px] leading-6 text-[#4F5D75]">The Third Leap Labs website repository is public today. Experimental, customer-specific or private product work is not presented as open source merely to make the portfolio look larger.</p>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-[#2D3142]/15 py-20 lg:py-24">
        <div className="page-shell grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="panel bg-[#2D3142] p-7 text-white sm:p-9">
            <div className="flex items-center justify-between border-b border-white/15 pb-4"><div className="flex items-center gap-2"><TerminalSquare className="h-4 w-4 text-[#1DA1F2]" /><p className="mono text-[10px] uppercase tracking-[.07em]">Research workflow</p></div><span className="mono text-[9px] uppercase text-[#BFC0C0]">R&amp;D</span></div>
            <div className="mt-7 space-y-7">
              {[
                ['01', 'Prototype a focused technical idea against a real product or systems problem.'],
                ['02', 'Measure constraints, integration cost and operational behaviour before scaling the approach.'],
                ['03', 'Turn the parts that compound into documented, reusable engineering.'],
              ].map(([step, copy]) => (
                <div key={step} className="grid grid-cols-[44px_1fr] gap-4"><span className="mono text-[9px] text-[#1DA1F2]">{step}</span><p className="text-[13px] leading-6 text-[#BFC0C0]">{copy}</p></div>
              ))}
            </div>
          </div>

          <div id="principles" className="panel p-7 sm:p-9 scroll-mt-20">
            <p className="mono text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Open-source principles</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">Build carefully. Learn quickly. Share what is useful.</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title} className="border-t border-[#2D3142]/18 pt-4"><principle.icon className="h-5 w-5 text-[#1DA1F2]" /><p className="mt-4 text-[13px] leading-5 text-[#4F5D75]">{principle.title}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="paper">
        <div className="page-shell flex min-h-[280px] flex-col items-center justify-center py-20 text-center">
          <h2 className="section-display max-w-[720px]">Open engineering should strengthen the products around it.</h2>
          <a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="btn-secondary mt-8">View Public GitHub <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>
    </main>
  </Layout>
);
