import { ArrowRight, CheckCircle2, Code2, FileText, Github, ShieldCheck, TerminalSquare } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const repositories = [
  { name: 'vision-edge-connector', purpose: 'Secure, low-latency edge services for connecting camera infrastructure to cloud intelligence.', tech: 'Rust' },
  { name: 'react-timeline-scrubber', purpose: 'Accessible, high-performance video timeline components for operational review workflows.', tech: 'TypeScript' },
  { name: 'web3-wallet-signals', purpose: 'Extensible pipelines for converting on-chain wallet activity into structured intelligence events.', tech: 'Python' },
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
      description="Third Leap Labs experiments openly, contributes reusable engineering and turns technical research into working systems."
      path="/open-source"
    />
    <main className="site-page pt-16">
      <section className="brand-grid border-b border-[#2D3142]/15">
        <div className="page-shell py-20 lg:py-24">
          <span className="kicker">Research / Open Engineering</span>
          <h1 className="page-display mt-7 max-w-[900px]">Pushing the boundaries of intelligence.</h1>
          <p className="copy-lg mt-7 max-w-[820px]">We use research, prototypes and open engineering to test ideas early, sharpen architecture decisions and contribute useful building blocks to the wider technology community.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="btn-primary">Explore GitHub <ArrowRight className="h-4 w-4" /></a>
            <a href="#principles" className="btn-secondary">Read Engineering Principles</a>
          </div>
        </div>
      </section>

      <section className="brand-grid-soft border-b border-[#2D3142]/15 py-20 lg:py-24">
        <div className="page-shell">
          <div className="flex flex-col gap-4 border-b border-[#2D3142]/30 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="mono text-[9px] uppercase tracking-[.1em] text-[#EF8354]">Featured Engineering</p><h2 className="section-display mt-3">Selected repositories.</h2></div>
            <a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="text-link">View archive <ArrowRight className="h-3.5 w-3.5" /></a>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {repositories.map((repo, index) => (
              <article key={repo.name} className="panel panel-hover flex min-h-[280px] flex-col p-7">
                <div className="flex items-center justify-between"><span className="mono text-[9px] uppercase tracking-[.08em] text-[#4F5D75]">Repo_0{index + 1}</span><Github className="h-4 w-4 text-[#EF8354]" /></div>
                <h3 className="mt-7 break-words text-[20px] font-medium tracking-[-.03em]">{repo.name}</h3>
                <p className="mt-4 flex-1 text-[13px] leading-6 text-[#4F5D75]">{repo.purpose}</p>
                <div className="mt-7 flex items-center justify-between"><span className="tech-tag">{repo.tech}</span><a href={`https://github.com/thirdleaplabs/${repo.name}`} target="_blank" rel="noreferrer" className="text-link">Open <ArrowRight className="h-3 w-3" /></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-grid border-b border-[#2D3142]/15 py-20 lg:py-24">
        <div className="page-shell grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="panel bg-[#2D3142] p-7 text-white sm:p-9">
            <div className="flex items-center justify-between border-b border-white/15 pb-4"><div className="flex items-center gap-2"><TerminalSquare className="h-4 w-4 text-[#EF8354]" /><p className="mono text-[9px] uppercase tracking-[.08em]">Engineering Logs</p></div><span className="mono text-[8px] uppercase text-[#BFC0C0]">live</span></div>
            <div className="mt-7 space-y-7">
              {[
                ['08.06', 'Optimized tensor allocation routines and reduced inference latency in constrained edge pipelines.'],
                ['08.04', 'Refined lock-free event ingestion architecture for higher-frequency operational streams.'],
                ['08.01', 'Expanded validation coverage around model-confidence and evidence-handling workflows.'],
              ].map(([date, log]) => (
                <div key={date} className="grid grid-cols-[60px_1fr] gap-4"><span className="mono text-[8px] text-[#EF8354]">{date}</span><p className="mono text-[9px] leading-5 text-[#BFC0C0]">{log}</p></div>
              ))}
            </div>
          </div>

          <div id="principles" className="panel p-7 sm:p-9 scroll-mt-20">
            <p className="mono text-[9px] uppercase tracking-[.1em] text-[#EF8354]">Open-source principles</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">Build openly. Learn quickly. Share what compounds.</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title} className="border-t border-[#2D3142]/18 pt-4"><principle.icon className="h-5 w-5 text-[#EF8354]" /><p className="mt-4 text-[12px] leading-5 text-[#4F5D75]">{principle.title}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="paper">
        <div className="page-shell flex min-h-[300px] flex-col items-center justify-center py-20 text-center">
          <h2 className="section-display max-w-[720px]">Open engineering should strengthen the products around it.</h2>
          <a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="text-link mt-8">View Third Leap Labs on GitHub <ArrowRight className="h-3.5 w-3.5" /></a>
        </div>
      </section>
    </main>
  </Layout>
);
