import { Compass, Heart, Lightbulb, ShieldCheck, UsersRound } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, PrimaryLink, Reveal, SectionIntro } from '../components/ui/Primitives';

export const Company = () => (
  <Layout>
    <SEO
      title="Company | Third Leap Labs"
      description="Third Leap Labs is a product and engineering company building across AI, computer vision, Web3 and open source."
      path="/company"
    />
    <PageHero
      eyebrow="Company"
      title={<>A lab for technologies that are <span className="text-gradient">becoming products.</span></>}
      description="Third Leap Labs LLC builds its own technology products and selectively works with teams facing difficult engineering problems."
    />

    <section className="pb-24 sm:pb-32">
      <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <div className="sticky top-32">
            <p className="eyebrow">Why we exist</p>
            <h2 className="section-title mt-5">Good technology should become useful technology.</h2>
          </div>
        </Reveal>
        <Reveal delay={.08}>
          <div className="space-y-6 text-[17px] leading-8 text-white/54">
            <p>
              Third Leap Labs started from a simple frustration: ambitious technology is often presented brilliantly and experienced poorly.
            </p>
            <p>
              We want to close that gap. That means caring about the model and the interface, the architecture and the workflow, the launch and the months after launch.
            </p>
            <p>
              Our work sits where intelligent software, visual perception, decentralized systems and open technology meet. We are not trying to be everything to everyone. We are building depth in the areas where we already have serious hands-on experience.
            </p>
            <p className="border-l border-cyan/35 pl-6 text-xl font-medium leading-8 text-white/82">
              We are engineers who build products—not a presentation-led innovation consultancy.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section-space border-y border-white/[.075] bg-[#090b11]">
      <div className="page-shell">
        <Reveal>
          <SectionIntro
            eyebrow="How we show up"
            title="Small-team clarity. Serious-system thinking."
            description="We prefer direct conversations, visible decisions and practical ownership. The work feels better when the people shaping the architecture remain close to the people using the product."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Curiosity with discipline', 'Explore ambitious ideas, then test them against real constraints.', Lightbulb],
            ['Trust by design', 'Make security, ownership and system boundaries clear from the beginning.', ShieldCheck],
            ['Product empathy', 'Understand what the user is trying to accomplish, not only what the feature should do.', Heart],
            ['Long-view engineering', 'Build the first version with enough structure to support the versions that follow.', Compass],
          ].map(([title, copy, Icon], index) => (
            <Reveal key={String(title)} delay={index * .06}>
              <div className="h-full rounded-[1.6rem] border border-white/[.08] bg-white/[.025] p-7">
                <Icon className="h-5 w-5 text-cyan" />
                <h3 className="mt-8 text-xl font-semibold tracking-[-.03em]">{String(title)}</h3>
                <p className="mt-4 text-sm leading-7 text-white/46">{String(copy)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="page-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal>
          <div>
            <UsersRound className="h-6 w-6 text-violet" />
            <h2 className="section-title mt-6 max-w-4xl">A good collaboration starts with an honest technical conversation.</h2>
            <p className="mt-6 max-w-2xl text-[16px] leading-8 text-white/52">
              Bring the idea, the current system or the part that keeps getting stuck. We will tell you where we can genuinely help.
            </p>
          </div>
        </Reveal>
        <PrimaryLink to="/contact">Talk to Third Leap Labs</PrimaryLink>
      </div>
    </section>
  </Layout>
);
