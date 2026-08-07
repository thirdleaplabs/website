import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
                <p className="mono text-[9px] uppercase tracking-[.1em] text-[#4F5D75]">Direct contact</p>
                <div className="mt-5 space-y-4">
                  <a href="mailto:hello@thirdleaplabs.com" className="flex items-center gap-3 text-[13px] font-medium transition hover:text-[#1DA1F2]"><Mail className="h-4 w-4 text-[#1DA1F2]" /> hello@thirdleaplabs.com</a>
                  <a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[13px] font-medium transition hover:text-[#1DA1F2]"><Github className="h-4 w-4 text-[#1DA1F2]" /> GitHub</a>
                  <a href="https://linkedin.com/company/thirdleaplabs" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[13px] font-medium transition hover:text-[#1DA1F2]"><Linkedin className="h-4 w-4 text-[#1DA1F2]" /> LinkedIn</a>
                </div>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a href="https://eyewitx.com" target="_blank" rel="noreferrer" className="panel panel-hover p-5"><p className="mono text-[8px] uppercase tracking-[.08em] text-[#1DA1F2]">Product_01</p><p className="mt-3 text-sm font-medium">EyeWitX</p><p className="mt-2 text-[11px] leading-5 text-[#4F5D75]">Visual intelligence pilots and deployment discussions.</p></a>
                <a href="https://whalescanner.com" target="_blank" rel="noreferrer" className="panel panel-hover p-5"><p className="mono text-[8px] uppercase tracking-[.08em] text-[#1DA1F2]">Product_02</p><p className="mt-3 text-sm font-medium">WhaleScanner</p><p className="mt-2 text-[11px] leading-5 text-[#4F5D75]">Web3 product, partnership and acquisition conversations.</p></a>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="panel flex min-h-[520px] flex-col items-center justify-center p-8 text-center sm:p-12">
                  <div className="grid h-14 w-14 place-items-center border border-[#1DA1F2]/45 bg-[#1DA1F2]/8 text-[#1DA1F2]">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="mono mt-7 text-[9px] uppercase tracking-[.1em] text-[#1DA1F2]">Inquiry received</p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-.04em]">Thank you.</h2>
                  <p className="copy-md mt-4 max-w-[440px]">Your message has been captured in this interface. We will review the inquiry and follow up using the contact details provided.</p>
                  <button type="button" onClick={() => setSubmitted(false)} className="text-link mt-8">Send another message <ArrowRight className="h-3.5 w-3.5" /></button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="panel p-7 sm:p-9">
                  <div className="flex items-center justify-between border-b border-[#2D3142]/30 pb-5"><div><p className="mono text-[9px] uppercase tracking-[.1em] text-[#1DA1F2]">Professional Inquiry</p><h2 className="mt-2 text-xl font-semibold tracking-[-.03em]">Tell us what you are building.</h2></div><span className="mono hidden text-[8px] uppercase text-[#4F5D75] sm:block">FORM_01</span></div>
                  <div className="mt-7 grid gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2"><label htmlFor="name" className="mono text-[9px] uppercase tracking-[.07em] text-[#4F5D75]">Name</label><input required id="name" name="name" className="form-control mt-2" /></div>
                    <div><label htmlFor="email" className="mono text-[9px] uppercase tracking-[.07em] text-[#4F5D75]">Work email</label><input required type="email" id="email" name="email" className="form-control mt-2" /></div>
                    <div><label htmlFor="company" className="mono text-[9px] uppercase tracking-[.07em] text-[#4F5D75]">Company</label><input required id="company" name="company" className="form-control mt-2" /></div>
                    <div className="sm:col-span-2"><label htmlFor="interest" className="mono text-[9px] uppercase tracking-[.07em] text-[#4F5D75]">Area of interest</label><select required id="interest" name="interest" className="form-control mt-2"><option value="">Select an area...</option><option value="eyewitx">EyeWitX pilot</option><option value="applied-ai">Applied AI / computer vision</option><option value="partnership">Technology partnership</option><option value="investment">Investment / accelerator</option><option value="whalescanner">WhaleScanner</option><option value="other">Other</option></select></div>
                    <div className="sm:col-span-2"><label htmlFor="message" className="mono text-[9px] uppercase tracking-[.07em] text-[#4F5D75]">Message</label><textarea required id="message" name="message" rows={6} className="form-control mt-2 resize-none" /></div>
                    <label className="sm:col-span-2 flex items-start gap-3 text-[11px] leading-5 text-[#4F5D75]"><input required type="checkbox" className="mt-1 h-4 w-4 rounded-none border-[#4F5D75]/40 accent-[#1DA1F2]" /><span>I consent to Third Leap Labs using my submitted details to respond to this enquiry according to the Privacy Policy.</span></label>
                    <div className="sm:col-span-2"><button type="submit" className="btn-primary w-full">Submit Inquiry <ArrowRight className="h-4 w-4" /></button></div>
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
