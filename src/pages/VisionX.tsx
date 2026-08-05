import { BellRing, Camera, FileSearch, LayoutDashboard, ShieldCheck, Smartphone } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, Reveal, SectionIntro } from '../components/ui/Primitives';
import { VisionXVisual } from '../components/ui/Visuals';

export const VisionX = () => (
  <Layout>
    <SEO
      title="VisionX | Third Leap Labs"
      description="VisionX is an AI-powered video security and operations product powered by FlameTrax."
      path="/work/visionx"
    />
    <PageHero
      eyebrow="Third Leap Labs product · Computer vision"
      title={<>A calmer way to understand what is happening <span className="text-gradient">across your cameras.</span></>}
      description="VisionX helps security and operations teams monitor live sites, understand AI-generated events and investigate incidents from one focused experience."
    />

    <section className="pb-24 sm:pb-32">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <Reveal>
          <VisionXVisual />
        </Reveal>
        <Reveal delay={.08}>
          <SectionIntro
            eyebrow="Product relationship"
            title="A security product powered by the FlameTrax vision engine."
            description="FlameTrax handles camera streams, models and event processing. VisionX turns that capability into the screens, alerts and investigation workflows used by security and operational teams."
          />
        </Reveal>
      </div>
    </section>

    <section className="section-space border-y border-white/[.075] bg-[#090b11]">
      <div className="page-shell grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          ['Live monitoring', 'See the cameras and sites that matter without crowding the screen with unnecessary controls.', Camera],
          ['AI event detection', 'Bring important detections into a structured event workflow instead of an endless video wall.', ShieldCheck],
          ['Focused alerts', 'Route meaningful incidents to the right people with context and evidence.', BellRing],
          ['Incident investigation', 'Move from an alert to related footage, event details and evidence quickly.', FileSearch],
          ['Operational dashboards', 'Understand system health, recurring event patterns and site-level activity.', LayoutDashboard],
          ['Cloud and mobile access', 'Keep monitoring and response available beyond the control room.', Smartphone],
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
