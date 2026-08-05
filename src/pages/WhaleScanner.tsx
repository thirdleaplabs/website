import { Activity, BellRing, Search, ShieldCheck, UsersRound, WalletCards } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, PrimaryLink, Reveal, SectionIntro } from '../components/ui/Primitives';
import { WhaleScannerVisual } from '../components/ui/Visuals';

export const WhaleScanner = () => (
  <Layout>
    <SEO
      title="WhaleScanner | Third Leap Labs"
      description="WhaleScanner is a Web3 intelligence and community platform from Third Leap Labs."
      path="/work/whalescanner"
    />
    <PageHero
      eyebrow="Third Leap Labs product · Web3"
      title={<>Crypto intelligence, without making the user <span className="text-gradient">assemble the story alone.</span></>}
      description="WhaleScanner brings wallet activity, market context, project discovery, risk awareness and community participation into one connected platform."
    >
      <div className="mt-9">
        <PrimaryLink to="https://whalescanner.com" external>Visit WhaleScanner</PrimaryLink>
      </div>
    </PageHero>

    <section className="pb-24 sm:pb-32">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <Reveal>
          <WhaleScannerVisual />
        </Reveal>
        <Reveal delay={.08}>
          <SectionIntro
            eyebrow="The product idea"
            title="Move from isolated data points to useful context."
            description="Crypto users often jump between explorers, market dashboards, social feeds and private groups. WhaleScanner is designed to connect those signals while making uncertainty and risk visible."
          />
        </Reveal>
      </div>
    </section>

    <section className="section-space border-y border-white/[.075] bg-[#090b11]">
      <div className="page-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          ['Wallet intelligence', 'Understand activity and patterns around wallets without reading raw transactions all day.', WalletCards],
          ['Market signals', 'Turn technical and market data into structured signals with context and confidence.', Activity],
          ['Project discovery', 'Explore crypto projects through richer profiles, updates and community information.', Search],
          ['Risk awareness', 'Surface suspicious patterns and safety information without pretending uncertainty has disappeared.', ShieldCheck],
          ['Community layer', 'Bring builders, users and verified project activity into the same product experience.', UsersRound],
          ['Useful alerts', 'Notify users when something meaningful changes—not every time data moves.', BellRing],
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
