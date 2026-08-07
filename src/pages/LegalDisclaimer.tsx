import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const sections = [
  ['No financial advice', 'Nothing on this website should be interpreted as financial advice, investment advice, trading advice, legal advice, tax advice, or any recommendation to buy, sell, hold, or trade any asset.'],
  ['Web3 tools', 'WhaleScanner is provided as a software and information tool for market, wallet, project and on-chain activity visibility. It does not provide guarantees or personalised investment recommendations.'],
  ['Product scope', 'EyeWitX and WhaleScanner are software products whose features, integrations, availability and deployment scope may evolve. Pilot and commercial capabilities are subject to the terms agreed for a specific engagement.'],
  ['User responsibility', 'Users are responsible for their own decisions, account and wallet security, compliance obligations, independent research and use of any Third Leap Labs product.'],
  ['No guarantees', 'Third Leap Labs LLC does not guarantee uninterrupted service, error-free data, financial outcomes, business outcomes, or specific product availability.'],
];

export const LegalDisclaimer = () => (
  <Layout>
    <SEO title="Legal Disclaimer | Third Leap Labs LLC" description="Important legal information regarding Third Leap Labs LLC." path="/legal-disclaimer" />
    <main className="site-page pt-16">
      <section className="border-b border-[#2D3142]/15 bg-[#F8F6F7]">
        <div className="page-shell py-14 sm:py-16">
          <span className="kicker">Legal</span>
          <h1 className="section-display mt-5">Legal disclaimer</h1>
          <p className="copy-md mt-5 max-w-[760px]">Important information about the website, our products and the limits of the information we provide.</p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="page-shell max-w-[980px]">
          <div className="border-b border-[#2D3142]/20 pb-5"><p className="mono text-[10px] uppercase tracking-[.06em] text-[#4F5D75]">Last reviewed / August 2026</p></div>
          <div>
            {sections.map(([title, copy], index) => (
              <section key={title} className="grid gap-4 border-b border-[#2D3142]/15 py-8 last:border-b-0 sm:grid-cols-[48px_1fr] sm:gap-7">
                <span className="mono text-[10px] text-[#4F5D75]">0{index + 1}</span>
                <div>
                  <h2 className="text-[22px] font-semibold tracking-[-.035em] text-[#2D3142]">{title}</h2>
                  <p className="mt-4 text-[14px] leading-7 text-[#4F5D75]">{copy}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  </Layout>
);
