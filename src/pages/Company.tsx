import { ArrowRight, BookOpen, Boxes, Code2, Network, ShieldCheck, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const principles = [
  { title: 'Technical Depth', copy: 'Rigorous engineering standards applied to complex algorithmic and systems challenges.', icon: Code2 },
  { title: 'Product Clarity', copy: 'Distilling intricate processes into intuitive, high-performance product experiences.', icon: Boxes },
  { title: 'Honest Evidence', copy: 'Data-driven decision making without inflated claims or black-box positioning.', icon: ShieldCheck },
  { title: 'Interoperability', copy: 'Building systems designed to integrate and scale within existing enterprise architectures.', icon: Network },
  { title: 'Responsible AI', copy: 'Thoughtful deployment, transparent model operations and appropriate human oversight.', icon: Workflow },
  { title: 'Continuous Learning', copy: 'Iterative refinement of technical capabilities, product quality and engineering practice.', icon: BookOpen },
];

const engineeringImage = '/media/company/company-engineering.webp';

export const Company = () => (
  <Layout>
    <SEO
      title="Company | Third Leap Labs"
      description="Third Leap Labs is an engineering-led product company building applied AI, visual intelligence and data-intelligence products."
      path="/company"
    />
    <main className="site-page pt-16">
      <section className="brand-grid border-b border-[#2D3142]/15">
        <div className="page-shell py-20 lg:py-24">
          <span className="kicker-box"><span className="h-1.5 w-1.5 rounded-full bg-[#1DA1F2]" /> Company profile</span>
          <h1 className="page-display mt-8 max-w-[900px]">Engineering-led. <span className="accent">Product-focused.</span></h1>
          <p className="copy-lg mt-7 max-w-[760px]">Third Leap Labs turns complex technical ideas into usable products across applied AI, computer vision, cloud-edge systems and data intelligence.</p>

          <div className="mt-10 border-t border-[#2D3142]/35 pt-7" />

          <div className="grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
            <section className="panel grid gap-7 p-7 md:grid-cols-[190px_1fr] md:p-8">
              <div className="relative flex min-h-[260px] items-end overflow-hidden bg-[#2D3142] p-5 text-white">
                <img src={engineeringImage} alt="Illustrative precision engineering environment" loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.15] brightness-[.5]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/92 via-[#111827]/35 to-transparent" />
                <div className="relative">
                  <p className="mono text-[9px] uppercase tracking-[.08em] text-[#1DA1F2]">Illustrative environment</p>
                  <p className="mono mt-3 text-[10px] uppercase leading-5 tracking-[.07em] text-white/75">Engineering systems<br />Edge · cloud · data</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="border-b border-[#2D3142]/35 pb-5">
                  <p className="mono text-[10px] uppercase tracking-[.08em] text-[#4F5D75]">Leadership</p>
                  <h2 className="mt-3 text-[28px] font-semibold tracking-[-.04em]">Gokul Kartha</h2>
                  <p className="mono mt-2 text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Founder &amp; CEO</p>
                </div>
                <p className="copy-md mt-6">Software engineering and technology leader with experience spanning embedded systems, automotive software, platform architecture, cloud applications and product development. Through Third Leap Labs, he leads product development across EyeWitX, WhaleScanner and related applied-intelligence systems.</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-8"><span className="tech-tag text-[#2D3142] bg-[#BFC0C0]/25">SYSTEMS ARCHITECTURE</span><span className="tech-tag text-[#2D3142] bg-[#BFC0C0]/25">PRODUCT STRATEGY</span></div>
              </div>
            </section>

            <aside className="panel p-7 md:p-8">
              <div className="flex items-center justify-between border-b border-[#2D3142]/35 pb-4"><p className="mono text-[10px] uppercase tracking-[.07em]">Company Data</p><Boxes className="h-4 w-4 text-[#4F5D75]" /></div>
              <dl className="mt-7 space-y-6">
                <div className="border-l-2 border-[#2D3142] pl-4"><dt className="mono text-[9px] uppercase tracking-[.08em] text-[#4F5D75]">Legal entity</dt><dd className="mt-1 text-[13px]">Third Leap Labs LLC</dd></div>
                <div className="border-l-2 border-[#2D3142] pl-4"><dt className="mono text-[9px] uppercase tracking-[.08em] text-[#4F5D75]">Jurisdiction</dt><dd className="mt-1 text-[13px]">New Mexico, USA</dd></div>
                <div className="border-l-2 border-[#2D3142] pl-4"><dt className="mono text-[9px] uppercase tracking-[.08em] text-[#4F5D75]">Product focus</dt><dd className="mt-1 text-[13px]">Applied AI &amp; data intelligence</dd></div>
                <div className="border-l-2 border-[#2D3142] pl-4"><dt className="mono text-[9px] uppercase tracking-[.08em] text-[#4F5D75]">Engagement model</dt><dd className="mt-1 text-[13px]">Products, pilots &amp; technical partnerships</dd></div>
              </dl>
              <div className="mt-8 flex min-h-[120px] items-center justify-center border border-[#2D3142]/15 bg-[#2D3142] px-6 text-center">
                <p className="mono text-[9px] uppercase leading-5 tracking-[.07em] text-[#BFC0C0]">Product engineering<br />Applied intelligence<br />Operational systems</p>
              </div>
            </aside>
          </div>

          <section className="panel mt-4 p-7 md:p-8">
            <p className="mono text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Mission Directive</p>
            <div className="mt-7 border-l-4 border-[#1DA1F2] py-2 pl-6">
              <blockquote className="text-[clamp(1.55rem,3vw,2.55rem)] font-medium tracking-[-.04em]">“Make complex systems understandable and actionable.”</blockquote>
            </div>
          </section>
        </div>
      </section>

      <section className="paper border-b border-[#2D3142]/15 py-16 lg:py-20">
        <div className="page-shell">
          <div className="flex items-center justify-between border-b border-[#2D3142]/35 pb-4"><p className="mono text-[10px] uppercase tracking-[.07em]">Core Operating Principles</p><Network className="h-4 w-4 text-[#4F5D75]" /></div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.title} className="panel panel-hover min-h-[190px] p-6">
                <principle.icon className="h-5 w-5 text-[#1DA1F2]" strokeWidth={1.7} />
                <h3 className="mt-6 text-[17px] font-medium tracking-[-.025em]">{principle.title}</h3>
                <p className="mt-3 text-[13px] leading-5 text-[#4F5D75]">{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-shell flex min-h-[300px] flex-col items-center justify-center py-20 text-center">
          <h2 className="section-display">Have a product or system worth building?</h2>
          <Link to="/contact" className="btn-primary mt-8">Start a Project <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  </Layout>
);
