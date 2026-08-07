import { ArrowRight, Boxes, BrainCircuit, Cloud, Cpu, Eye, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

const capabilities = [
  { title: 'Computer Vision', icon: Eye, description: 'Real-time inference systems, object detection, tracking and spatial pipelines optimized for demanding environments.', tags: ['YOLO', 'OpenCV', 'TensorRT'] },
  { title: 'Applied AI', icon: BrainCircuit, description: 'Custom model integration, multimodal systems, decision-support workflows and context-aware intelligence.', tags: ['PyTorch', 'Transformers', 'MLOps'] },
  { title: 'Cloud Platforms', icon: Cloud, description: 'Scalable services, event-driven processing, APIs and highly available infrastructure for intelligent products.', tags: ['Kubernetes', 'Azure', 'Terraform'] },
  { title: 'Edge & Embedded', icon: Cpu, description: 'Deploying models to resource-constrained devices with low-latency, local processing and resilient connectivity.', tags: ['Linux', 'Jetson', 'ONNX'] },
  { title: 'Product Engineering', icon: Boxes, description: 'Full-stack product development translating complex data streams into clear, performant operational interfaces.', tags: ['React', 'TypeScript', 'WebSockets'] },
  { title: 'Web3 Systems', icon: Network, description: 'Blockchain data pipelines, wallet intelligence and distributed systems for transparent digital-market products.', tags: ['Indexers', 'Solana', 'APIs'] },
];

const infrastructureImage = '/media/capabilities/capabilities-infrastructure.webp';

export const Capabilities = () => (
  <Layout>
    <SEO
      title="Capabilities | Third Leap Labs"
      description="Third Leap Labs architects end-to-end intelligence systems from model and edge runtime to cloud platform and product experience."
      path="/capabilities"
    />
    <main className="site-page pt-16">
      <section className="brand-grid border-b border-[#2D3142]/15">
        <div className="page-shell py-20 sm:py-24 lg:py-28">
          <span className="kicker">Capabilities Overview</span>
          <h1 className="page-display mt-7 max-w-[820px]">From model to product.<br />From edge to cloud.</h1>
          <p className="copy-lg mt-7 max-w-[820px]">We architect end-to-end intelligence systems, bridging advanced AI research and robust production deployments with the engineering required to operate at scale.</p>
        </div>
      </section>

      <section className="brand-grid-soft border-b border-[#2D3142]/15 py-20 lg:py-24">
        <div className="page-shell grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.title} className="panel panel-hover flex min-h-[300px] flex-col p-8">
              <capability.icon className="h-7 w-7 text-[#1DA1F2]" strokeWidth={1.7} />
              <h2 className="mt-8 text-[19px] font-medium tracking-[-.025em]">{capability.title}</h2>
              <p className="mt-4 flex-1 text-[13px] leading-6 text-[#4F5D75]">{capability.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{capability.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-grid py-20 lg:py-24">
        <div className="page-shell panel grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="mono text-[10px] uppercase tracking-[.1em] text-[#1DA1F2]">Open Engineering & R&amp;D</p>
            <h2 className="section-display mt-5 max-w-[640px]">Pushing the boundaries of intelligence.</h2>
            <p className="copy-md mt-6 max-w-[620px]">We experiment openly, prototype unconventional architectures and contribute reusable engineering that informs the next generation of Third Leap Labs products.</p>
            <Link to="/open-source" className="btn-secondary mt-8">View Research &amp; Open Engineering <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden border border-[#2D3142]/15 bg-[#F2F1F2]">
            <img src={infrastructureImage} alt="Data infrastructure and edge systems" loading="lazy" className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.18] brightness-[.56]" />
            <div className="absolute inset-0 bg-[#111827]/30" />
            <div className="relative text-center text-white/90">
              <Cpu className="mx-auto h-10 w-10" strokeWidth={1.2} />
              <p className="mono mt-5 text-[10px] tracking-[.06em]">&gt; infrastructure_online...</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);
