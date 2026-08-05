import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero } from '../components/ui/Primitives';

export const SecurityNotice = () => (
  <Layout>
    <SEO title="Security Notice | Third Leap Labs LLC" description="Security is a core part of how Third Leap Labs thinks about software products." path="/security-notice" />
    <PageHero eyebrow="Legal" title={<>Security Notice</>} description="Security is a core part of how Third Leap Labs thinks about software products." />
    <section className="pb-24 sm:pb-32">
      <div className="page-shell">
        <div className="max-w-3xl space-y-10 rounded-[1.8rem] border border-white/[.08] bg-white/[.025] p-7 sm:p-10">
          <section>
            <h2 className="text-2xl font-semibold tracking-[-.035em]">Important Security Rules</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-7 text-white/58">
              <li className="text-coral">Third Leap Labs will never ask for your seed phrase.</li><li className="text-coral">Third Leap Labs will never ask for your private key.</li><li className="text-coral">Third Leap Labs will never ask for your wallet recovery phrase.</li><li>Third Leap Labs will never ask you to transfer funds to verify your identity.</li><li>Third Leap Labs will never guarantee financial returns.</li>
            </ul>
          </section>
          <section><h2 className="text-2xl font-semibold tracking-[-.035em]">Web3 Safety</h2><p className="mt-4 text-[15px] leading-8 text-white/52">Always verify URLs, wallet prompts, payment requests, and official communication channels. Be cautious with unknown links, impersonators, fake support accounts, and unexpected wallet connection requests.</p></section>
          <section><h2 className="text-2xl font-semibold tracking-[-.035em]">Product Boundaries</h2><p className="mt-4 text-[15px] leading-8 text-white/52">WhaleScanner is informational and does not provide trading advice. GoPaySol is designed for non-custodial payment workflows and does not hold user funds.</p></section>
          <section><h2 className="text-2xl font-semibold tracking-[-.035em]">Reporting</h2><p className="mt-4 text-[15px] leading-8 text-white/52">If you believe someone is impersonating Third Leap Labs or misusing the brand, contact <a href="mailto:info@thirdleaplabs.com" className="text-cyan hover:underline">info@thirdleaplabs.com</a>.</p></section>
        </div>
      </div>
    </section>
  </Layout>
);
