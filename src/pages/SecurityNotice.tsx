import { AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const rules = [
  'Third Leap Labs will never ask for your seed phrase.',
  'Third Leap Labs will never ask for your private key.',
  'Third Leap Labs will never ask for your wallet recovery phrase.',
  'Third Leap Labs will never ask you to transfer funds to verify your identity.',
  'Third Leap Labs will never guarantee financial returns.',
];

export const SecurityNotice = () => (
  <Layout>
    <SEO title="Security Notice | Third Leap Labs LLC" description="Security guidance and product boundaries from Third Leap Labs LLC." path="/security-notice" />
    <main className="site-page pt-16">
      <section className="border-b border-[#2D3142]/15 bg-[#F8F6F7]">
        <div className="page-shell py-14 sm:py-16">
          <span className="kicker">Legal / Security</span>
          <h1 className="section-display mt-5">Security notice</h1>
          <p className="copy-md mt-5 max-w-[760px]">Security is part of the product architecture. These rules help users recognise impersonation, unsafe requests and misleading claims.</p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="page-shell grid gap-6 lg:grid-cols-[1.08fr_.92fr]">
          <section className="panel p-7 sm:p-9">
            <div className="flex items-center gap-4 border-b border-[#2D3142]/20 pb-5">
              <div className="grid h-11 w-11 place-items-center border border-red-200 bg-red-50 text-red-600"><AlertTriangle className="h-5 w-5" /></div>
              <div><p className="mono text-[10px] uppercase tracking-[.06em] text-red-600">Important</p><h2 className="mt-1 text-[22px] font-semibold tracking-[-.035em]">Security rules</h2></div>
            </div>
            <ul className="mt-2 divide-y divide-[#2D3142]/12">
              {rules.map((rule) => (
                <li key={rule} className="flex items-start gap-4 py-5 text-[14px] leading-7 text-[#4F5D75]">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#1DA1F2]" />
                  {rule}
                </li>
              ))}
            </ul>
          </section>

          <div className="space-y-4">
            <section className="border border-[#2D3142]/25 bg-[#2D3142] p-7 text-white sm:p-8">
              <ShieldCheck className="h-6 w-6 text-[#1DA1F2]" />
              <h2 className="mt-6 text-[22px] font-semibold tracking-[-.035em]">Web3 safety</h2>
              <p className="mt-4 text-[14px] leading-7 text-white/70">Always verify URLs, wallet prompts, payment requests and official communication channels. Be cautious with unknown links, impersonators, fake support accounts and unexpected wallet connections.</p>
            </section>

            <section className="panel p-7 sm:p-8">
              <h2 className="text-[22px] font-semibold tracking-[-.035em]">Product boundaries</h2>
              <p className="mt-4 text-[14px] leading-7 text-[#4F5D75]">WhaleScanner is an information and software product and does not guarantee market or financial outcomes. EyeWitX pilot and deployment capabilities are scoped for the relevant operational environment.</p>
              <h2 className="mt-7 border-t border-[#2D3142]/15 pt-7 text-[22px] font-semibold tracking-[-.035em]">Report impersonation</h2>
              <p className="mt-4 text-[14px] leading-7 text-[#4F5D75]">Report suspected impersonation or brand misuse to <a href="mailto:hello@thirdleaplabs.com" className="font-semibold text-[#1DA1F2] hover:underline">hello@thirdleaplabs.com</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);
