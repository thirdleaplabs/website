import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Layout } from '../layout/Layout';
import { SEO } from '../layout/SEO';
import { PageHero, PrimaryLink, Reveal, SectionIntro, SecondaryLink } from './Primitives';

type ProductFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProductDetailPageProps = {
  seoTitle: string;
  seoDescription: string;
  path: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  externalUrl?: string;
  externalLabel?: string;
  visual: ReactNode;
  storyEyebrow: string;
  storyTitle: string;
  storyDescription: string;
  problems: string[];
  features: ProductFeature[];
  relationship?: string;
};

export const ProductDetailPage = ({
  seoTitle,
  seoDescription,
  path,
  eyebrow,
  title,
  description,
  externalUrl,
  externalLabel,
  visual,
  storyEyebrow,
  storyTitle,
  storyDescription,
  problems,
  features,
  relationship,
}: ProductDetailPageProps) => (
  <Layout>
    <SEO title={seoTitle} description={seoDescription} path={path} />
    <PageHero eyebrow={eyebrow} title={title} description={description}>
      {externalUrl && externalLabel && (
        <div className="mt-9">
          <PrimaryLink to={externalUrl} external>{externalLabel}</PrimaryLink>
        </div>
      )}
    </PageHero>

    <section className="section-space bg-white">
      <div className="page-shell grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-20">
        <Reveal>
          <div className="surface-card relative overflow-hidden rounded-[2rem] p-7 sm:p-10">
            <div className="absolute inset-0 light-grid opacity-70" />
            <div className="relative min-h-[280px] rounded-[1.5rem] border border-black/10 bg-[#f7f9fb] p-5 sm:p-8">
              {visual}
            </div>
          </div>
        </Reveal>
        <Reveal delay={.08}>
          <div>
            <SectionIntro eyebrow={storyEyebrow} title={storyTitle} description={storyDescription} />
            <div className="mt-9 border-t border-black/10">
              {problems.map((problem, index) => (
                <div key={problem} className="grid grid-cols-[auto_1fr] gap-4 border-b border-black/10 py-5">
                  <span className="font-mono text-xs text-[#9ca3af]">0{index + 1}</span>
                  <p className="text-[15px] leading-7 text-[#4b5563]">{problem}</p>
                </div>
              ))}
            </div>
            {relationship && (
              <p className="mt-7 border-l-2 border-[#1d9bf0] pl-5 text-[15px] leading-7 text-[#4b5563]">
                {relationship}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>

    <section className="dark-panel section-space relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="page-shell relative">
        <Reveal>
          <SectionIntro
            eyebrow="Product capabilities"
            title="Built as an operating system, not a feature demo."
            description="The value comes from connecting the underlying technology to a complete, usable workflow."
            tone="dark"
          />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ title: featureTitle, description: featureDescription, icon: Icon }, index) => (
            <Reveal key={featureTitle} delay={(index % 3) * .05}>
              <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[.055] p-7 backdrop-blur-sm">
                <Icon className="h-5 w-5 text-[#7dd3fc]" />
                <h2 className="mt-7 text-xl font-semibold tracking-[-.035em] text-white">{featureTitle}</h2>
                <p className="mt-4 text-sm leading-7 text-white/52">{featureDescription}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space bg-[#edf2f6]">
      <div className="page-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <div>
            <p className="eyebrow">Build with Third Leap Labs</p>
            <h2 className="section-title mt-5 max-w-3xl text-[#07111f]">Need a product built around difficult technology?</h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#5b6472]">
              We can help shape the workflow, architecture and serious first release.
            </p>
          </div>
        </Reveal>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SecondaryLink to="/work">View all work</SecondaryLink>
          <PrimaryLink to="/contact">Start a conversation</PrimaryLink>
        </div>
      </div>
    </section>
  </Layout>
);
