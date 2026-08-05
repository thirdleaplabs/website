import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero } from '../components/ui/Primitives';

export const PrivacyPolicy = () => (
  <Layout>
    <SEO title="Privacy Policy | Third Leap Labs LLC" description="Privacy policy outlining how Third Leap Labs LLC collects and uses information to operate the website." path="/privacy-policy" />
    <PageHero eyebrow="Legal" title={<>Privacy Policy</>} description="Third Leap Labs LLC respects user privacy and aims to collect only the information necessary to operate the website and respond to inquiries." />
    <section className="pb-24 sm:pb-32">
      <div className="page-shell">
        <div className="max-w-3xl space-y-10 rounded-[1.8rem] border border-white/[.08] bg-white/[.025] p-7 sm:p-10">
          <section>
            <h2 className="text-2xl font-semibold tracking-[-.035em]">Information We May Collect</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-white/52">
              <li>Name and contact details when submitted through forms</li><li>Email address when contacting us</li><li>Basic website analytics information</li><li>Technical information such as browser type, device type, and pages visited</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold tracking-[-.035em]">How Information Is Used</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-white/52">
              <li>To respond to inquiries</li><li>To improve website content</li><li>To understand product interest</li><li>To maintain security and reliability</li><li>To communicate about Third Leap Labs products or services when appropriate</li>
            </ul>
          </section>
          <section><h2 className="text-2xl font-semibold tracking-[-.035em]">What We Do Not Request</h2><p className="mt-4 text-[15px] leading-8 text-white/52">Third Leap Labs does not request seed phrases, private keys, wallet recovery phrases, or sensitive wallet credentials.</p></section>
          <section><h2 className="text-2xl font-semibold tracking-[-.035em]">Third-Party Services</h2><p className="mt-4 text-[15px] leading-8 text-white/52">The website may use hosting, analytics, form handling, or infrastructure services provided by third parties. These services may process limited technical information according to their own policies.</p></section>
          <section><h2 className="text-2xl font-semibold tracking-[-.035em]">Contact</h2><p className="mt-4 text-[15px] leading-8 text-white/52">For privacy-related questions, contact <a href="mailto:info@thirdleaplabs.com" className="text-cyan hover:underline">info@thirdleaplabs.com</a>.</p></section>
        </div>
      </div>
    </section>
  </Layout>
);
