import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const contactEmail = 'hello@thirdleaplabs.com';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? 'Website visitor');
    const email = String(data.get('email') ?? '');
    const company = String(data.get('company') ?? '');
    const interest = String(data.get('interest') ?? 'Website inquiry');
    const message = String(data.get('message') ?? '');
    const subject = `Third Leap Labs inquiry: ${interest}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Area of interest: ${interest}`,
      '',
      message,
    ].join('\n');

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO
        title="Contact | Third Leap Labs"
        description="Contact Third Leap Labs about EyeWitX pilots, applied-AI projects, partnerships, integrations or investment conversations."
        path="/contact"
      />
      <main className="site-page pt-16">
        <section className="brand-grid min-h-[760px] border-b border-[#2D3142]/15 py-20 lg:py-24">
          <div className="page-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <span className="kicker">Contact</span>
              <h1 className="page-display mt-7">Get in touch.</h1>
              <p className="copy-lg mt-6 max-w-[520px]">We partner with forward-thinking teams to build robust technical products and operational intelligence systems. Reach out to discuss your next initiative.</p>

              <div className="mt-12 border-t border-[#2D3142]/30 pt-8">
                <p className="mono text-[10px] uppercase tracking-[.08em] text-[#4F5D75]">Direct contact</p>
                <div className="mt-5 space-y-4">
                  <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 text-[13px] font-medium transition hover:text-[#1DA1F2]"><Mail className="h-4 w-4 text-[#1DA1F2]" /> {contactEmail}</a>
                  <a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[13px] font-medium transition hover:text-[#1DA1F2]"><Github className="h-4 w-4 text-[#1DA1F2]" /> GitHub</a>
                  <a href="https://linkedin.com/company/thirdleaplabs" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[13px] font-medium transition hover:text-[#1DA1F2]"><Linkedin className="h-4 w-4 text-[#1DA1F2]" /> LinkedIn</a>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a href="https://eyewitx.com" target="_blank" rel="noreferrer" className="panel panel-hover p-5"><p className="mono text-[9px] uppercase tracking-[.07em] text-[#1DA1F2]">Product_01</p><p className="mt-3 text-sm font-medium">EyeWitX</p><p className="mt-2 text-[12px] leading-5 text-[#4F5D75]">Visual intelligence pilots and deployment discussions.</p></a>
                <a href="https://whalescanner.com" target="_blank" rel="noreferrer" className="panel panel-hover p-5"><p className="mono text-[9px] uppercase tracking-[.07em] text-[#1DA1F2]">Product_02</p><p className="mt-3 text-sm font-medium">WhaleScanner</p><p className="mt-2 text-[12px] leading-5 text-[#4F5D75]">Web3 product, partnership and acquisition conversations.</p></a>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="panel flex min-h-[520px] flex-col items-center justify-center p-8 text-center sm:p-12">
                  <div className="grid h-14 w-14 place-items-center border border-[#1DA1F2]/45 bg-[#1DA1F2]/8 text-[#1DA1F2]">
                    <Mail className="h-6 w-6" />
                  </div>
                  <p className="mono mt-7 text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Email draft opened</p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">Finish sending from your email app.</h2>
                  <p className="copy-md mt-4 max-w-[480px]">This website does not claim to have received your message until you send it from your email client. If no email app opened, contact us directly at <a href={`mailto:${contactEmail}`} className="font-semibold text-[#1DA1F2]">{contactEmail}</a>.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="text-link mt-8">Create another email <ArrowRight className="h-3.5 w-3.5" /></button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="panel p-7 sm:p-9">
                  <div className="flex items-center justify-between border-b border-[#2D3142]/30 pb-5"><div><p className="mono text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Professional Inquiry</p><h2 className="mt-2 text-xl font-semibold tracking-[-.03em]">Tell us what you are building.</h2></div><span className="mono hidden text-[9px] uppercase text-[#4F5D75] sm:block">EMAIL_FORM</span></div>
                  <div className="mt-7 grid gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2"><label htmlFor="name" className="mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]">Name</label><input required id="name" name="name" className="form-control mt-2" /></div>
                    <div><label htmlFor="email" className="mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]">Work email</label><input required type="email" id="email" name="email" className="form-control mt-2" /></div>
                    <div><label htmlFor="company" className="mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]">Company</label><input id="company" name="company" className="form-control mt-2" /></div>
                    <div className="sm:col-span-2"><label htmlFor="interest" className="mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]">Area of interest</label><select required id="interest" name="interest" className="form-control mt-2"><option value="">Select an area...</option><option value="EyeWitX pilot">EyeWitX pilot</option><option value="Applied AI / computer vision">Applied AI / computer vision</option><option value="Technology partnership">Technology partnership</option><option value="Investment / accelerator">Investment / accelerator</option><option value="WhaleScanner">WhaleScanner</option><option value="Other">Other</option></select></div>
                    <div className="sm:col-span-2"><label htmlFor="message" className="mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]">Message</label><textarea required id="message" name="message" rows={6} className="form-control mt-2 resize-none" /></div>
                    <p className="sm:col-span-2 text-[12px] leading-5 text-[#4F5D75]">Submitting this form opens a pre-addressed email draft in your default mail application. The website does not store this form submission.</p>
                    <div className="sm:col-span-2"><button type="submit" className="btn-primary w-full">Create Email <ArrowRight className="h-4 w-4" /></button></div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};
