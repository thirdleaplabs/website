import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero } from '../components/ui/Primitives';

const sections = [
  ['No Financial Advice', 'Nothing on this website should be interpreted as financial advice, investment advice, trading advice, legal advice, tax advice, or any recommendation to buy, sell, hold, or trade any asset.'],
  ['Web3 Tools', 'Web3-related products, including WhaleScanner and GoPaySol, are provided as software tools. WhaleScanner is intended for informational wallet and on-chain activity visibility. It does not provide trading signals, price predictions, investment recommendations, or guarantees.'],
  ['Non-Custodial Position', 'GoPaySol is intended to support payment workflows and verification. It is designed as a non-custodial tool and does not hold user funds or request private keys, seed phrases, or wallet recovery information.'],
  ['User Responsibility', 'Users are responsible for their own decisions, wallet security, compliance obligations, and independent research.'],
  ['No Guarantees', 'Third Leap Labs LLC does not guarantee uninterrupted service, error-free data, financial outcomes, business outcomes, or specific product availability.'],
];

export const LegalDisclaimer = () => (
  <Layout>
    <SEO title="Legal Disclaimer | Third Leap Labs LLC" description="Important legal information regarding Third Leap Labs LLC." path="/legal-disclaimer" />
    <PageHero eyebrow="Legal" title={<>Legal Disclaimer</>} description="Important legal information regarding Third Leap Labs LLC." />
    <section className="pb-24 sm:pb-32">
      <div className="page-shell">
        <div className="max-w-3xl space-y-10 rounded-[1.8rem] border border-white/[.08] bg-white/[.025] p-7 sm:p-10">
          {sections.map(([title, copy]) => (
            <section key={title}>
              <h2 className="text-2xl font-semibold tracking-[-.035em]">{title}</h2>
              <p className="mt-4 text-[15px] leading-8 text-white/52">{copy}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);
