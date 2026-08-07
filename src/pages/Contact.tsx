import { ArrowRight, CheckCircle2, Copy, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const contactEmail = 'hello@thirdleaplabs.com';
const projectBrief = [
  'What you are trying to build or improve',
  'Your current system, cameras, data or technical environment',
  'The outcome you want to achieve',
  'Any useful timeline, integration or deployment constraints',
];

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const projectMailto = `mailto:${contactEmail}?subject=${encodeURIComponent('Third Leap Labs project inquiry')}`;

  return (
    <Layout>
      <SEO
        title="Contact | Third Leap Labs"
        description="Contact Third Leap Labs about EyeWitX pilots, applied-AI projects, product engineering, integrations and technical partnerships."
        path="/contact"
      />
      <main className="site-page pt-16">
        <section className="brand-grid min-h-[720px] border-b border-[#2D3142]/15 py-20 lg:py-24">
          <div className="page-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="kicker">Contact</span>
              <h1 className="page-display mt-7">Get in touch.</h1>
              <p className="copy-lg mt-6 max-w-[520px]">Bring us a product idea, integration challenge or operational problem. A short technical brief is enough to start the conversation.</p>

              <div className="mt-12 border-t border-[#2D3142]/30 pt-8">
                <p className="mono text-[10px] uppercase tracking-[.08em] text-[#4F5D75]">Direct contact</p>
                <div className="mt-5 space-y-4">
                  <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 text-[13px] font-medium transition hover:text-[#1DA1F2]"><Mail className="h-4 w-4 text-[#1DA1F2]" /> {contactEmail}</a>
                  <a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[13px] font-medium transition hover:text-[#1DA1F2]"><Github className="h-4 w-4 text-[#1DA1F2]" /> GitHub</a>
                  <a href="https://linkedin.com/company/thirdleaplabs" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[13px] font-medium transition hover:text-[#1DA1F2]"><Linkedin className="h-4 w-4 text-[#1DA1F2]" /> LinkedIn</a>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Link to="/eyewitx" className="panel panel-hover p-5"><p className="mono text-[9px] uppercase tracking-[.07em] text-[#1DA1F2]">Product_01</p><p className="mt-3 text-sm font-medium">EyeWitX</p><p className="mt-2 text-[12px] leading-5 text-[#4F5D75]">Visual-intelligence pilots, integrations and deployment discussions.</p></Link>
                <a href="https://whalescanner.com" target="_blank" rel="noreferrer" className="panel panel-hover p-5"><p className="mono text-[9px] uppercase tracking-[.07em] text-[#1DA1F2]">Product_02</p><p className="mt-3 text-sm font-medium">WhaleScanner</p><p className="mt-2 text-[12px] leading-5 text-[#4F5D75]">Web3 product and partnership discussions.</p></a>
              </div>
            </div>

            <div className="panel p-7 sm:p-9">
              <div className="flex items-center justify-between border-b border-[#2D3142]/30 pb-5">
                <div><p className="mono text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Professional Inquiry</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.035em]">Start with a short project brief.</h2></div>
                <span className="mono hidden text-[9px] uppercase text-[#4F5D75] sm:block">DIRECT_01</span>
              </div>

              <p className="copy-md mt-7 max-w-[640px]">You do not need a polished specification. A concise email with the context below is enough for an initial discussion.</p>

              <div className="mt-8 divide-y divide-[#2D3142]/15 border-y border-[#2D3142]/15">
                {projectBrief.map((item, index) => (
                  <div key={item} className="grid grid-cols-[34px_1fr] gap-4 py-5">
                    <span className="mono text-[10px] text-[#1DA1F2]">0{index + 1}</span>
                    <div className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1DA1F2]" /><p className="text-[13px] leading-6 text-[#4F5D75]">{item}</p></div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border border-[#2D3142]/15 bg-[#F8F6F7] p-5">
                <p className="mono text-[10px] uppercase tracking-[.07em] text-[#4F5D75]">Email</p>
                <p className="mt-2 text-lg font-semibold tracking-[-.025em]">{contactEmail}</p>
                <p className="mt-3 text-[12px] leading-5 text-[#4F5D75]">No website form database is used here. Your message is sent from your own email service.</p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a href={projectMailto} className="btn-primary">Email Third Leap Labs <ArrowRight className="h-4 w-4" /></a>
                <button type="button" onClick={copyEmail} className="btn-secondary">{copied ? 'Email Copied' : 'Copy Email'} <Copy className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};
