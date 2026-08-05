import { Mail, MapPin, MessageSquareText } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { ContactForm } from '../components/ui/ContactForm';
import { PageHero, Reveal } from '../components/ui/Primitives';

export const Contact = () => (
  <Layout>
    <SEO
      title="Contact | Third Leap Labs"
      description="Talk to Third Leap Labs about AI, computer vision, Web3, open source or product engineering."
      path="/contact"
    />
    <PageHero
      eyebrow="Contact"
      title={<>Tell us about the part that is <span className="text-gradient">hard to get right.</span></>}
      description="A new product, a system that needs rethinking or a specialised technical problem—we are happy to start with a practical conversation."
    />

    <section className="pb-24 sm:pb-32">
      <div className="page-shell grid gap-8 lg:grid-cols-[.78fr_1.22fr]">
        <Reveal>
          <div className="space-y-4">
            <div className="rounded-[1.6rem] border border-white/[.08] bg-white/[.025] p-7">
              <MessageSquareText className="h-5 w-5 text-cyan" />
              <h2 className="mt-7 text-2xl font-semibold tracking-[-.035em]">What makes a useful first message?</h2>
              <p className="mt-4 text-sm leading-7 text-white/48">
                Tell us what the user needs to accomplish, what already exists and what currently feels uncertain. You do not need a polished requirements document.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/[.08] bg-white/[.025] p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[.17em] text-white/30">Contact details</p>
              <a href="mailto:info@thirdleaplabs.com" className="mt-6 flex items-center gap-3 text-sm text-white/68 transition hover:text-white">
                <Mail className="h-4 w-4 text-electric" /> info@thirdleaplabs.com
              </a>
              <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-white/45">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-violet" />
                <address className="not-italic">
                  Third Leap Labs LLC<br />
                  1209 Mountain Road PL NE STE N<br />
                  Albuquerque, NM 87110, USA
                </address>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={.08}>
          <div className="glass rounded-[1.8rem] p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[.17em] text-cyan/65">Start a conversation</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-.04em]">What are you working on?</h2>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);
