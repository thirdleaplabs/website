import { Blocks, Code2, GitBranch, Github, HeartHandshake, PackageOpen } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, PrimaryLink, Reveal, SectionIntro } from '../components/ui/Primitives';
import { OpenSourceVisual } from '../components/ui/Visuals';

export const OpenSource = () => (
  <Layout>
    <SEO
      title="Open Source | Third Leap Labs"
      description="Third Leap Labs builds reusable, inspectable and extensible open-source foundations."
      path="/open-source"
    />
    <PageHero
      eyebrow="Open source"
      title={<>Built in the open where <span className="text-gradient">openness creates value.</span></>}
      description="Open source is not a badge we add at the end. It is a way to create understandable systems, reusable foundations and stronger engineering communities."
    >
      <div className="mt-9">
        <PrimaryLink to="https://github.com/thirdleaplabs" external>Explore GitHub</PrimaryLink>
      </div>
    </PageHero>

    <section className="pb-24 sm:pb-32">
      <div className="page-shell grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
        <Reveal>
          <OpenSourceVisual />
        </Reveal>
        <Reveal delay={.08}>
          <SectionIntro
            eyebrow="Our approach"
            title="Open where it improves trust, learning and extension."
            description="Not every product component should be public. We choose open boundaries deliberately—publishing the parts that help developers understand the architecture, adapt a platform or contribute improvements safely."
          />
        </Reveal>
      </div>
    </section>

    <section className="section-space border-y border-white/[.075] bg-[#090b11]">
      <div className="page-shell grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Readable foundations', 'Architecture that can be understood by the people expected to operate and extend it.', Code2],
          ['Reusable components', 'Engines, plugins and interfaces that solve more than one narrow implementation.', PackageOpen],
          ['Clear contribution paths', 'Documentation, boundaries and decisions that make collaboration practical.', GitBranch],
          ['Healthy stewardship', 'Open projects need maintenance, context and honest expectations—not just publication.', HeartHandshake],
        ].map(([title, copy, Icon], index) => (
          <Reveal key={String(title)} delay={index * .06}>
            <div className="h-full rounded-[1.6rem] border border-white/[.08] bg-white/[.025] p-7">
              <Icon className="h-5 w-5 text-cyan" />
              <h2 className="mt-8 text-2xl font-semibold tracking-[-.035em]">{String(title)}</h2>
              <p className="mt-4 text-sm leading-7 text-white/47">{String(copy)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="section-space">
      <div className="page-shell">
        <Reveal>
          <div className="rounded-[2rem] border border-white/[.085] bg-gradient-to-br from-white/[.045] to-transparent p-7 sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <Blocks className="h-6 w-6 text-violet" />
                <h2 className="mt-7 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">From product need to public foundation.</h2>
              </div>
              <div>
                <p className="text-[16px] leading-8 text-white/54">
                  The strongest open-source work often begins inside a real product. A difficult integration becomes an adapter. A repeated deployment pattern becomes a toolkit. A closed implementation boundary becomes a documented plugin interface.
                </p>
                <p className="mt-5 text-[16px] leading-8 text-white/54">
                  We want the public work to carry the context that made it useful in the first place.
                </p>
                <a
                  href="https://github.com/thirdleaplabs"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/68 transition hover:text-white"
                >
                  <Github className="h-4 w-4" /> Visit Third Leap Labs on GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);
