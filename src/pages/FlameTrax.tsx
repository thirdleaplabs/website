import { BellRing, Blocks, Camera, CloudCog, Cpu, Puzzle } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, Reveal, SectionIntro } from '../components/ui/Primitives';
import { FlameTraxVisual } from '../components/ui/Visuals';

export const FlameTrax = () => (
  <Layout>
    <SEO
      title="FlameTrax | Third Leap Labs"
      description="FlameTrax is a modular edge-to-cloud computer-vision platform."
      path="/work/flametrax"
    />
    <PageHero
      eyebrow="Core technology platform · Computer vision"
      title={<>From camera stream to <span className="text-gradient">actionable event.</span></>}
      description="FlameTrax is a modular edge-to-cloud computer-vision platform that transforms video into detections, alerts, evidence and operational intelligence."
    />

    <section className="pb-24 sm:pb-32">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <Reveal>
          <FlameTraxVisual />
        </Reveal>
        <Reveal delay={.08}>
          <SectionIntro
            eyebrow="Platform role"
            title="The reusable engine beneath specialised vision products."
            description="FlameTrax connects camera ingestion, edge inference, event logic, evidence, cloud delivery and custom modules. Products such as VisionX can build focused user experiences on top."
          />
        </Reveal>
      </div>
    </section>

    <section className="section-space border-y border-white/[.075] bg-[#090b11]">
      <div className="page-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          ['Camera integration', 'Connect existing streams and organise devices around sites and operational context.', Camera],
          ['Edge inference', 'Run vision workloads close to the source for lower latency and controlled bandwidth.', Cpu],
          ['Event processing', 'Turn model output into useful events with rules, states and evidence.', Blocks],
          ['Alerts and evidence', 'Deliver incidents with the context needed to understand and respond.', BellRing],
          ['Cloud coordination', 'Manage deployments, configuration and event delivery across distributed sites.', CloudCog],
          ['Plugin architecture', 'Add domain-specific models and workflows without rebuilding the complete platform.', Puzzle],
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
