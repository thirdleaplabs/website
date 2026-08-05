import { BellRing, Camera, Cpu, FileSearch, LayoutDashboard, ShieldCheck, Smartphone } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, Reveal, SectionIntro } from '../components/ui/Primitives';
import { VisionXVisual } from '../components/ui/Visuals';

export const VisionX = () => (
  <Layout>
    <SEO
      title="VisionX | Third Leap Labs"
      description="VisionX is the AI and computer-vision platform from Third Leap Labs for video security, safety and operations."
      path="/work/visionx"
    />
    <PageHero
      eyebrow="Third Leap Labs product · AI & computer vision"
      title={<>A calmer way to understand what is happening <span className="text-gradient">across your cameras.</span></>}
      description="VisionX is an edge-to-cloud video intelligence platform for live monitoring, AI event detection, alerts, investigation and operational response."
    />

    <section className="pb-24 sm:pb-32">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <Reveal>
          <VisionXVisual />
        </Reveal>
        <Reveal delay={.08}>
          <SectionIntro
            eyebrow="One complete platform"
            title="From camera stream to an event a team can act on."
            description="VisionX brings camera integration, edge inference, AI models, event processing, evidence, alerts, cloud coordination and operator workflows together under one product name."
          />
        </Reveal>
      </div>
    </section>

    <section className="section-space border-y border-white/[.075] bg-[#090b11]">
      <div className="page-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          ['Live monitoring', 'See the cameras and sites that matter without crowding the screen with unnecessary controls.', Camera],
          ['Edge AI', 'Run visual intelligence close to the camera for responsive detection and controlled bandwidth.', Cpu],
          ['AI event detection', 'Turn model output into structured events with context, severity and evidence.', ShieldCheck],
          ['Focused alerts', 'Route meaningful incidents to the right people with the information needed to respond.', BellRing],
          ['Incident investigation', 'Move from an alert to related footage, event details and evidence quickly.', FileSearch],
          ['Cloud and mobile access', 'Manage sites, review activity and keep response available beyond the control room.', Smartphone],
          ['Operational dashboards', 'Understand system health, recurring event patterns and site-level activity.', LayoutDashboard],
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
