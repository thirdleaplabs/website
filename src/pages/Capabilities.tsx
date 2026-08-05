import { BrainCircuit, Camera, Code2, Network, ShieldCheck, Workflow } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { CapabilityCard, PageHero, PrimaryLink, Reveal, SectionIntro } from '../components/ui/Primitives';

const capabilities = [
  {
    icon: BrainCircuit,
    number: '01',
    title: 'Artificial intelligence',
    description: 'We build AI into the product where it can improve a decision, reduce repetitive work or make complex information easier to act on.',
    items: ['AI agents and orchestration', 'Retrieval and knowledge systems', 'Signal and decision engines', 'AI-assisted product experiences'],
  },
  {
    icon: Camera,
    number: '02',
    title: 'Computer vision and edge AI',
    description: 'We design systems that understand events from live camera streams and remain practical in bandwidth, latency and operational constraints.',
    items: ['Real-time detection', 'Edge inference', 'Camera and stream integration', 'Evidence and alert pipelines'],
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Web3 and digital trust',
    description: 'We turn wallet, token and market activity into clearer products while keeping custody, risk and trust boundaries explicit.',
    items: ['Wallet intelligence', 'Blockchain data pipelines', 'Smart-contract integrations', 'Transparent reputation systems'],
  },
  {
    icon: Code2,
    number: '04',
    title: 'Open-source platform engineering',
    description: 'We create reusable foundations that teams can inspect, extend and operate without being trapped inside a black box.',
    items: ['Plugin architectures', 'APIs and SDKs', 'Developer tooling', 'Open infrastructure'],
  },
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
      description="We work across the full system—from cameras and edge devices to cloud platforms, mobile experiences, AI pipelines and blockchain networks."
    />

    <section className="pb-24 sm:pb-32">
      <div className="page-shell grid gap-4 md:grid-cols-2">
        {capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={(index % 2) * .07}>
            <CapabilityCard {...capability} />
          </Reveal>
        ))}
      </div>
    </section>

    <section className="section-space border-y border-white/[.075] bg-[#090b11]">
      <div className="page-shell">
        <Reveal>
          <SectionIntro
            eyebrow="From edge to cloud to chain"
            title="The complete system matters."
            description="A polished interface cannot rescue an unreliable pipeline. A powerful model is not useful without a clear workflow. We design the layers together."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.8rem] border border-white/[.08] bg-white/[.08] md:grid-cols-2 xl:grid-cols-5">
          {[
            ['01', 'Devices', 'Cameras, sensors and local compute', Camera],
            ['02', 'Intelligence', 'Models, agents and decision logic', BrainCircuit],
            ['03', 'Event systems', 'Reliable processing and orchestration', Workflow],
            ['04', 'Cloud products', 'APIs, dashboards and mobile apps', Network],
            ['05', 'Trust networks', 'Blockchain and external ecosystems', ShieldCheck],
          ].map(([number, title, copy, Icon]) => (
            <div key={String(number)} className="bg-[#0b0d14] p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/24">{String(number)}</span>
                <Icon className="h-4 w-4 text-cyan/72" />
              </div>
              <h3 className="mt-10 text-xl font-semibold tracking-[-.03em]">{String(title)}</h3>
              <p className="mt-3 text-xs leading-6 text-white/43">{String(copy)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-space">
      <div className="page-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal>
          <div>
            <p className="eyebrow">A practical starting point</p>
            <h2 className="section-title mt-5 max-w-4xl">Bring us the difficult part, not a perfect specification.</h2>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/54">
              We can help clarify the problem, choose the architecture and define the smallest version worth building properly.
            </p>
          </div>
        </Reveal>
        <PrimaryLink to="/contact">Discuss a project</PrimaryLink>
      </div>
    </section>
  </Layout>
);
