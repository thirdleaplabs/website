import { Blocks, Code2, GitBranch, Github, HeartHandshake, PackageOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, PrimaryLink, Reveal, SectionIntro } from '../components/ui/Primitives';

type Principle = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const principles: Principle[] = [
  {
    title: 'Readable foundations',
    description: 'Architecture should be understandable by the people expected to operate, maintain and extend it.',
    icon: Code2,
  },
  {
    title: 'Reusable components',
    description: 'Engines, plugins and interfaces should solve more than one narrow implementation problem.',
    icon: PackageOpen,
  },
  {
    title: 'Clear contribution paths',
    description: 'Good boundaries, documentation and decision records make collaboration practical.',
    icon: GitBranch,
  },
  {
    title: 'Healthy stewardship',
    description: 'Open projects need maintenance, context and honest expectations—not publication without ownership.',
    icon: HeartHandshake,
  },
];

export const OpenSource = () => (
  <Layout>
    <SEO
      title="Open Source | Third Leap Labs"
      description="Third Leap Labs builds reusable, inspectable and extensible open engineering foundations."
      path="/open-source"
    />
    <PageHero
      eyebrow="Open source"
      title={<>Built in the open where <span className="text-gradient">openness creates value.</span></>}
      description="Open source is not a badge added at the end. It is a way to create understandable systems, reusable foundations and stronger engineering communities."
    >
      <div className="mt-9">
        <PrimaryLink to="https://github.com/thirdleaplabs" external>Explore GitHub</PrimaryLink>
      </div>
    </PageHero>

    <section className="section-space bg-white">
      <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
        <Reveal>
          <div className="surface-card relative min-h-[440px] overflow-hidden rounded-[2rem] p-7 sm:p-9">
            <div className="absolute inset-0 light-grid opacity-70" />
            <div className="relative flex min-h-[370px] flex-col justify-between rounded-[1.5rem] bg-[#07111f] p-7 text-white sm:p-9">
              <div className="flex items-center justify-between">
                <Blocks className="h-7 w-7 text-[#7dd3fc]" />
                <span className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/38">Open engineering</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Engines', 'Plugins', 'APIs', 'Tooling'].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[.06] p-4">
                    <p className="text-sm font-semibold">{item}</p>
                    <p className="mt-1 text-xs text-white/36">Designed to extend</p>
                  </div>
                ))}
              </div>
              <p className="max-w-sm text-4xl font-semibold leading-[1.02] tracking-[-.055em]">Inspectable by design.<br />Useful by default.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={.08}>
          <SectionIntro
            eyebrow="Our approach"
            title="Open where it improves trust, learning and extension."
            description="Not every product component should be public. We choose open boundaries deliberately—publishing the parts that help developers understand the architecture, adapt a platform or contribute safely."
          />
          <p className="mt-7 border-l-2 border-[#1d9bf0] pl-5 text-[15px] leading-7 text-[#5b6472]">
            The strongest open work often starts inside a real product, where the problem and operating constraints are already known.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="dark-panel section-space relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="page-shell relative">
        <Reveal>
          <SectionIntro
            eyebrow="Open-source principles"
            title="Publication is the beginning, not the finish line."
            description="Useful open technology needs clear purpose, understandable architecture and continuing stewardship."
            tone="dark"
          />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * .05}>
              <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[.055] p-7 backdrop-blur-sm">
                <Icon className="h-5 w-5 text-[#7dd3fc]" />
                <h2 className="mt-9 text-xl font-semibold tracking-[-.035em] text-white">{title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/50">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space bg-[#edf2f6]">
      <div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionIntro
            eyebrow="From product need to public foundation"
            title="Extract the reusable part without losing the context."
          />
        </Reveal>
        <Reveal delay={.08}>
          <div className="surface-card rounded-[1.7rem] p-7 sm:p-10">
            <p className="text-[17px] leading-8 text-[#5b6472]">
              A difficult integration becomes an adapter. A repeated deployment pattern becomes a toolkit. A closed implementation boundary becomes a documented plugin interface.
            </p>
            <p className="mt-6 text-[17px] leading-8 text-[#5b6472]">
              The public foundation should carry the engineering context that made it useful in the first place.
            </p>
            <a
              href="https://github.com/thirdleaplabs"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#0b7dbd] transition hover:text-[#07111f]"
            >
              <Github className="h-4 w-4" /> Visit Third Leap Labs on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);
