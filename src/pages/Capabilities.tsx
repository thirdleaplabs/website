import { BrainCircuit, Camera, Code2, Cpu, Network, ShieldCheck, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { CapabilityCard, PageHero, PrimaryLink, Reveal, SectionIntro } from '../components/ui/Primitives';

type Capability = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  items: string[];
};

const capabilities: Capability[] = [
  {
    icon: BrainCircuit,
    number: '01',
    title: 'Artificial intelligence',
    description: 'AI belongs inside a useful decision, workflow or product experience—not as a decorative feature.',
    items: ['AI agents and orchestration', 'Retrieval and knowledge systems', 'Signal and decision engines', 'AI-assisted product experiences'],
  },
  {
    icon: Camera,
    number: '02',
    title: 'Computer vision and edge AI',
    description: 'We build systems that understand visual events while respecting latency, bandwidth and operational constraints.',
    items: ['Real-time detection', 'Edge inference', 'Camera and stream integration', 'Evidence and alert pipelines'],
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Web3 and digital trust',
    description: 'We turn blockchain activity into understandable products with explicit custody, risk and trust boundaries.',
    items: ['Wallet intelligence', 'Blockchain data pipelines', 'Smart-contract integrations', 'Transparent reputation systems'],
  },
  {
    icon: Code2,
    number: '04',
    title: 'Open platform engineering',
    description: 'We create reusable foundations teams can inspect, extend and operate without being trapped inside a black box.',
    items: ['Plugin architectures', 'APIs and SDKs', 'Developer tooling', 'Open infrastructure'],
  },
];

const systemLayers: { number: string; title: string; copy: string; icon: LucideIcon }[] = [
  { number: '01', title: 'Devices', copy: 'Cameras, sensors and local compute', icon: Camera },
  { number: '02', title: 'Intelligence', copy: 'Models, agents and decision logic', icon: BrainCircuit },
  { number: '03', title: 'Event systems', copy: 'Reliable processing and orchestration', icon: Workflow },
  { number: '04', title: 'Cloud products', copy: 'APIs, dashboards and mobile apps', icon: Network },
  { number: '05', title: 'Trust networks', copy: 'Blockchain and external ecosystems', icon: ShieldCheck },
];

export const Capabilities = () => (
  <Layout>
    <SEO
      title="Capabilities | Third Leap Labs"
      description="AI, computer vision, Web3 and open-source product engineering from Third Leap Labs."
      path="/capabilities"
    />
    <PageHero
      eyebrow="Capabilities"
      title={<>Specialised technology, connected by <span className="text-gradient">strong product engineering.</span></>}
      description="We work across the complete system—from cameras and edge devices to AI pipelines, cloud platforms, mobile experiences and blockchain networks."
    />

    <section className="section-space bg-white">
      <div className="page-shell">
        <Reveal>
          <SectionIntro
            eyebrow="Technology depth"
            title="Four disciplines, designed to work together."
            description="The best result rarely comes from one technology in isolation. We combine the layers around the actual user and operating environment."
          />
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={(index % 2) * .05}>
              <CapabilityCard {...capability} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="dark-panel section-space relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="page-shell relative">
        <Reveal>
          <SectionIntro
            eyebrow="From edge to cloud to chain"
            title="The complete system matters."
            description="A polished interface cannot rescue an unreliable pipeline. A powerful model is not useful without a clear workflow. We design the layers together."
            tone="dark"
          />
        </Reveal>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {systemLayers.map(({ number, title, copy, icon: Icon }, index) => (
            <Reveal key={number} delay={index * .04}>
              <div className="h-full rounded-[1.4rem] border border-white/10 bg-white/[.055] p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/28">{number}</span>
                  <Icon className="h-4 w-4 text-[#7dd3fc]" />
                </div>
                <h3 className="mt-12 text-lg font-semibold tracking-[-.03em] text-white">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-white/44">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space bg-[#edf2f6]">
      <div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-20">
        <Reveal>
          <SectionIntro
            eyebrow="How we deliver"
            title="Architecture close to the product."
            description="The people shaping the system stay close to the workflow, the constraints and the users throughout delivery."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ['01', 'Understand', 'Map the user, operating environment, existing system and real constraints.'],
            ['02', 'Architect', 'Shape product boundaries, data, infrastructure and deployment as one system.'],
            ['03', 'Build', 'Deliver a serious first version without burying the product in unnecessary complexity.'],
            ['04', 'Evolve', 'Use real feedback and operational evidence to improve the system with discipline.'],
          ].map(([number, title, copy]) => (
            <Reveal key={number}>
              <div className="surface-card h-full rounded-[1.5rem] p-6">
                <span className="font-mono text-xs text-[#9ca3af]">{number}</span>
                <h3 className="mt-10 text-xl font-semibold tracking-[-.035em] text-[#07111f]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5b6472]">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-black/10 bg-white py-20 sm:py-24">
      <div className="page-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <div>
            <Cpu className="h-6 w-6 text-[#0b7dbd]" />
            <h2 className="section-title mt-6 max-w-4xl text-[#07111f]">Bring us the difficult part—not a perfect specification.</h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#5b6472]">We can help clarify the problem, choose the architecture and define the smallest version worth building properly.</p>
          </div>
        </Reveal>
        <PrimaryLink to="/contact">Discuss a project</PrimaryLink>
      </div>
    </section>
  </Layout>
);
