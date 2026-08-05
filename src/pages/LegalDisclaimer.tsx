import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, Reveal } from '../components/ui/Primitives';

const sections = [
  ['No financial advice', 'Nothing on this website should be interpreted as financial advice, investment advice, trading advice, legal advice, tax advice, or any recommendation to buy, sell, hold, or trade any asset.'],
  ['Web3 tools', 'Web3-related products, including WhaleScanner and GoPaySol, are provided as software tools. WhaleScanner is intended for informational wallet, market and on-chain activity visibility. It does not provide guarantees or personalised investment recommendations.'],
  ['Non-custodial position', 'GoPaySol is intended to support payment workflows and verification. It is designed as a non-custodial tool and does not hold user funds or request private keys, seed phrases, or wallet recovery information.'],
  ['User responsibility', 'Users are responsible for their own decisions, wallet security, compliance obligations, independent research and use of any Third Leap Labs product.'],
  ['No guarantees', 'Third Leap Labs LLC does not guarantee uninterrupted service, error-free data, financial outcomes, business outcomes, or specific product availability.'],
];

export const LegalDisclaimer = () => (
  <Layout>
    <SEO title="Legal Disclaimer | Third Leap Labs LLC" description="Important legal information regarding Third Leap Labs LLC." path="/legal-disclaimer" />
    <PageHero eyebrow="Legal" title={<>Legal disclaimer</>} description="Important information about the website, our products and the limits of the information we provide." />
    <section className="section-space bg-white">
      <div className="page-shell">
        <Reveal>
          <div className="surface-card max-w-4xl rounded-[1.8rem] p-7 sm:p-10 lg:p-12">
            <p className="border-b border-black/10 pb-7 text-sm leading-7 text-[#6b7280]">Last reviewed: August 2026</p>
            <div className="mt-3 divide-y divide-black/10">
              {sections.map(([title, copy], index) => (
                <section key={title} className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <span className="font-mono text-xs text-[#9ca3af]">0{index + 1}</span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-.04em] text-[#07111f]">{title}</h2>
                    <p className="mt-4 text-[15px] leading-8 text-[#5b6472]">{copy}</p>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);
