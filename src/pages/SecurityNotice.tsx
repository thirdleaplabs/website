import { AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, Reveal } from '../components/ui/Primitives';

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
    <PageHero eyebrow="Legal" title={<>Security notice</>} description="Security is part of the product architecture. These rules help users recognise impersonation, unsafe requests and misleading claims." />
    <section className="section-space bg-white">
      <div className="page-shell grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <Reveal>
          <div className="surface-card rounded-[1.8rem] p-7 sm:p-10">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-red-50 text-red-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-red-600">Important</p>
                <h2 className="mt-1 text-2xl font-semibold tracking-[-.04em] text-[#07111f]">Security rules</h2>
              </div>
            </div>
            <ul className="mt-8 divide-y divide-black/10 border-y border-black/10">
              {rules.map((rule) => (
                <li key={rule} className="flex items-start gap-4 py-5 text-[15px] leading-7 text-[#4b5563]">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#0b7dbd]" />
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={.05}>
            <div className="dark-panel relative overflow-hidden rounded-[1.8rem] p-7 sm:p-8">
              <div className="absolute inset-0 tech-grid opacity-25" />
              <div className="relative">
                <ShieldCheck className="h-6 w-6 text-[#7dd3fc]" />
                <h2 className="mt-7 text-2xl font-semibold tracking-[-.04em] text-white">Web3 safety</h2>
                <p className="mt-4 text-[15px] leading-8 text-white/54">Always verify URLs, wallet prompts, payment requests and official communication channels. Be cautious with unknown links, impersonators, fake support accounts and unexpected wallet connections.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={.1}>
            <div className="surface-card rounded-[1.8rem] p-7 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-[-.04em] text-[#07111f]">Product boundaries</h2>
              <p className="mt-4 text-[15px] leading-8 text-[#5b6472]">WhaleScanner is informational and does not guarantee outcomes. GoPaySol is designed for non-custodial payment workflows and does not hold user funds.</p>
              <h2 className="mt-8 border-t border-black/10 pt-8 text-2xl font-semibold tracking-[-.04em] text-[#07111f]">Report impersonation</h2>
              <p className="mt-4 text-[15px] leading-8 text-[#5b6472]">Report suspected impersonation or brand misuse to <a href="mailto:info@thirdleaplabs.com" className="font-semibold text-[#0b7dbd] hover:underline">info@thirdleaplabs.com</a>.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </Layout>
);
