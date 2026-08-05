import { CheckCircle2, FileCheck2, Link2, QrCode, ReceiptText, WalletCards } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, PrimaryLink, Reveal, SectionIntro } from '../components/ui/Primitives';
import { GoPaySolVisual } from '../components/ui/Visuals';

export const GoPaySol = () => (
  <Layout>
    <SEO
      title="GoPaySol | Third Leap Labs"
      description="GoPaySol is a non-custodial Solana payment workflow product from Third Leap Labs."
      path="/work/gopaysol"
    />
    <PageHero
      eyebrow="Third Leap Labs product · Web3 payments"
      title={<>Simple crypto payment requests, <span className="text-gradient">without taking custody.</span></>}
      description="GoPaySol helps businesses, creators and communities create Solana payment requests, share clear payment details, verify settlement on-chain and maintain a useful receipt trail."
    >
      <div className="mt-9">
        <PrimaryLink to="https://gopaysol.com" external>Visit GoPaySol</PrimaryLink>
      </div>
    </PageHero>

    <section className="pb-24 sm:pb-32">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <Reveal>
          <GoPaySolVisual />
        </Reveal>
        <Reveal delay={.08}>
          <SectionIntro
            eyebrow="The product idea"
            title="Make a blockchain payment feel like a clear business workflow."
            description="The payer should know exactly what to send. The receiver should be able to verify what arrived. GoPaySol connects the request, payment details, on-chain confirmation and receipt without holding user funds."
          />
        </Reveal>
      </div>
    </section>

    <section className="section-space border-y border-white/[.075] bg-[#090b11]">
      <div className="page-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          ['Payment requests', 'Create a clear request with the amount, asset, recipient and useful reference information.', WalletCards],
          ['QR payment flow', 'Share payment details in a format that is easy to open from another device or wallet.', QrCode],
          ['On-chain verification', 'Confirm settlement from blockchain data instead of relying on screenshots or manual claims.', CheckCircle2],
          ['Receipt records', 'Keep a readable record that connects the original request to the completed payment.', ReceiptText],
          ['Non-custodial by design', 'The workflow does not require Third Leap Labs to hold funds or request private keys.', FileCheck2],
          ['Integration-ready', 'Connect payment requests and verification to broader business or community workflows.', Link2],
        ].map(([title, copy, Icon], index) => (
          <Reveal key={String(title)} delay={(index % 3) * .05}>
            <div className="h-full rounded-[1.55rem] border border-white/[.08] bg-white/[.025] p-7">
              <Icon className="h-5 w-5 text-cyan" />
              <h2 className="mt-7 text-xl font-semibold tracking-[-.03em]">{String(title)}</h2>
              <p className="mt-4 text-sm leading-7 text-white/46">{String(copy)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </Layout>
);
