import { Compass, Heart, Lightbulb, ShieldCheck, UsersRound } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, PrimaryLink, Reveal, SectionIntro } from '../components/ui/Primitives';

type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const values: Value[] = [
  {
    title: 'Curiosity with discipline',
    description: 'Explore ambitious ideas, then test them honestly against real users, systems and constraints.',
    icon: Lightbulb,
  },
  {
    title: 'Trust by design',
    description: 'Make security, ownership, custody and system boundaries clear from the beginning.',
    icon: ShieldCheck,
  },
  {
    title: 'Product empathy',
    description: 'Understand what the user is trying to accomplish—not only what the feature should do.',
    icon: Heart,
  },
  {
    title: 'Long-view engineering',
    description: 'Build the first release with enough structure to support the versions that follow.',
    icon: Compass,
  },
];

export const Company = () => (
  <Layout>
    <SEO
      title="Company | Third Leap Labs"
      description="Third Leap Labs is an applied technology studio building across AI, computer vision, Web3 and open source."
      path="/company"
    />
    <PageHero
      eyebrow="Company"
      title={<>A lab for technologies that are <span className="text-gradient">becoming products.</span></>}
      description="Third Leap Labs LLC builds its own technology products and selectively works with teams facing difficult engineering problems."
    />

    <section className="section-space bg-white">
      <div className="page-shell grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">Why we exist</p>
            <h2 className="section-title mt-5 text-[#07111f]">Good technology should become useful technology.</h2>
          </div>
        </Reveal>
        <Reveal delay={.08}>
          <div className="space-y-7 text-[18px] leading-9 text-[#5b6472]">
            <p>
              Third Leap Labs started from a simple frustration: ambitious technology is often presented brilliantly and experienced poorly.
            </p>
            <p>
              We want to close that gap. That means caring about the model and the interface, the architecture and the workflow, the launch and the months after launch.
            </p>
            <p>
              Our work sits where intelligent software, visual perception, decentralized systems and open technology meet. We are building depth in the areas where we already have serious hands-on experience.
            </p>
            <p className="border-l-2 border-[#1d9bf0] pl-6 text-2xl font-semibold leading-9 tracking-[-.035em] text-[#07111f]">
              We are engineers who build products—not a presentation-led innovation consultancy.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="dark-panel section-space relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="page-shell relative">
        <Reveal>
          <SectionIntro
            eyebrow="How we show up"
            title="Small-team clarity. Serious-system thinking."
            description="We prefer direct conversations, visible decisions and practical ownership. The work is stronger when the people shaping the architecture stay close to the people using the product."
            tone="dark"
          />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {values.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * .05}>
              <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[.055] p-7 backdrop-blur-sm">
                <Icon className="h-5 w-5 text-[#7dd3fc]" />
                <h3 className="mt-9 text-xl font-semibold tracking-[-.035em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/50">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space bg-[#edf2f6]">
      <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <div className="surface-card relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
            <div className="absolute inset-0 light-grid opacity-70" />
            <div className="relative rounded-[1.5rem] bg-[#07111f] p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-white/40">Third Leap operating model</p>
              <div className="mt-10 space-y-4">
                {[
                  ['01', 'Own the problem'],
                  ['02', 'Keep architecture visible'],
                  ['03', 'Ship working increments'],
                  ['04', 'Learn from operations'],
                ].map(([number, label]) => (
                  <div key={number} className="flex items-center gap-5 border-b border-white/10 pb-4">
                    <span className="font-mono text-xs text-white/30">{number}</span>
                    <span className="text-lg font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={.08}>
          <UsersRound className="h-7 w-7 text-[#0b7dbd]" />
          <h2 className="section-title mt-6 max-w-4xl text-[#07111f]">A good collaboration starts with an honest technical conversation.</h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#5b6472]">
            Bring the idea, the current system or the part that keeps getting stuck. We will tell you where we can genuinely help.
          </p>
          <div className="mt-9">
            <PrimaryLink to="/contact">Talk to Third Leap Labs</PrimaryLink>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);
