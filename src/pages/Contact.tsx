import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API/CRM
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO 
        title="Contact | Third Leap Labs" 
        description="Contact Third Leap Labs about Cognisense Cloud pilots, applied-AI projects, partnerships, integrations or investment conversations." 
      />
      <main className="bg-white pt-[74px] text-[#1a1a1a] sm:pt-[82px]">
        
        {/* Hero */}
        <section className="page-shell py-20 sm:py-28 lg:py-36">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h1 className="page-title">Let’s build what comes next.</h1>
              <p className="mt-6 text-[17px] leading-8 text-[#5e6b7d]">
                Contact Third Leap Labs about Cognisense Cloud pilots, applied-AI projects, partnerships, integrations or investment conversations.
              </p>

              <div className="mt-12 flex flex-col gap-6 border-t border-[#e6ebf1] pt-12">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#8490a1]">Direct Links</p>
                  <ul className="mt-4 space-y-3">
                    <li><a href="https://cognisense.cam" target="_blank" rel="noreferrer" className="text-[15px] font-medium text-[#0078d4] hover:underline">Cognisense Cloud</a></li>
                    <li><a href="https://thirdleaplabs.com" className="text-[15px] font-medium text-[#0078d4] hover:underline">Company website</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#8490a1]">Social</p>
                  <ul className="mt-4 flex gap-4">
                    <li><a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[15px] font-medium text-[#5e6b7d] transition hover:text-[#0078d4]"><Github className="h-5 w-5" /> GitHub</a></li>
                    <li><a href="https://linkedin.com/company/thirdleaplabs" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[15px] font-medium text-[#5e6b7d] transition hover:text-[#0078d4]"><Linkedin className="h-5 w-5" /> LinkedIn</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl border border-[#e1e7ee] bg-[#fbfcfe] p-8 shadow-sm sm:p-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#edf7ff] text-[#0078d4]">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold tracking-tight">Thank you. Your message has been received.</h2>
                  <p className="mt-4 text-[15px] leading-7 text-[#5e6b7d]">
                    We will review the request and respond using the work email provided.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 text-[13px] font-semibold text-[#0078d4] hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-[#e1e7ee] bg-white p-6 shadow-[0_12px_45px_rgba(31,55,82,.08)] sm:p-10">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="block text-[13px] font-semibold text-[#1a1a1a]">Name</label>
                      <input required type="text" id="name" className="mt-2 block w-full rounded-lg border border-[#cfd7e2] px-4 py-2.5 text-sm outline-none transition focus:border-[#0078d4] focus:ring-1 focus:ring-[#0078d4]" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="block text-[13px] font-semibold text-[#1a1a1a]">Work email</label>
                      <input required type="email" id="email" className="mt-2 block w-full rounded-lg border border-[#cfd7e2] px-4 py-2.5 text-sm outline-none transition focus:border-[#0078d4] focus:ring-1 focus:ring-[#0078d4]" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="company" className="block text-[13px] font-semibold text-[#1a1a1a]">Company</label>
                      <input required type="text" id="company" className="mt-2 block w-full rounded-lg border border-[#cfd7e2] px-4 py-2.5 text-sm outline-none transition focus:border-[#0078d4] focus:ring-1 focus:ring-[#0078d4]" />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="interest" className="block text-[13px] font-semibold text-[#1a1a1a]">Area of interest</label>
                      <select required id="interest" className="mt-2 block w-full appearance-none rounded-lg border border-[#cfd7e2] bg-white px-4 py-2.5 text-sm outline-none transition focus:border-[#0078d4] focus:ring-1 focus:ring-[#0078d4]">
                        <option value="">Select an area...</option>
                        <option value="cognisense">Cognisense Cloud pilot</option>
                        <option value="applied-ai">Applied AI / computer vision</option>
                        <option value="partnership">Technology partnership</option>
                        <option value="investment">Investment / accelerator</option>
                        <option value="whalescanner">WhaleScanner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-[13px] font-semibold text-[#1a1a1a]">Message</label>
                      <textarea required id="message" rows={4} className="mt-2 block w-full resize-none rounded-lg border border-[#cfd7e2] px-4 py-2.5 text-sm outline-none transition focus:border-[#0078d4] focus:ring-1 focus:ring-[#0078d4]" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="flex items-start gap-3">
                        <input required type="checkbox" className="mt-1 h-4 w-4 shrink-0 rounded border-[#cfd7e2] text-[#0078d4] focus:ring-[#0078d4]" />
                        <span className="text-[13px] leading-5 text-[#5e6b7d]">I consent to Third Leap Labs collecting and storing my submitted data to respond to my enquiry according to the Privacy Policy.</span>
                      </label>
                    </div>
                    <div className="sm:col-span-2 mt-4">
                      <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[#006cbe]">
                        Send Message <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
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
