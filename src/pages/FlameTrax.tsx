import { Boxes, Camera, Cloud, Cpu, Network, Plug, Workflow } from 'lucide-react';
import { ProductDetailPage } from '../components/ui/ProductDetailPage';
import { FlameTraxVisual } from '../components/ui/Visuals';

export const FlameTrax = () => (
  <ProductDetailPage
    seoTitle="FlameTrax | Third Leap Labs"
    seoDescription="FlameTrax is the reusable edge-to-cloud computer-vision platform from Third Leap Labs."
    path="/work/flametrax"
    eyebrow="Third Leap Labs platform · Computer vision"
    title={<>The reusable engine behind <span className="text-gradient">serious video-intelligence products.</span></>}
    description="FlameTrax is a modular edge-to-cloud computer-vision platform for camera integration, visual inference, event processing, deployment and product integration."
    visual={<FlameTraxVisual />}
    storyEyebrow="The platform idea"
    storyTitle="Stop rebuilding the same vision foundation for every product."
    storyDescription="Computer-vision products repeatedly need stream handling, edge inference, model orchestration, event pipelines, cloud coordination and APIs. FlameTrax brings those foundations into one extensible platform."
    problems={[
      'Camera protocols, stream reliability and edge-device constraints create significant work before product-specific intelligence can begin.',
      'Model output needs filtering, enrichment, event rules and evidence before another system can use it reliably.',
      'Tightly coupling the engine to one interface makes new products, customers and deployment models expensive to support.',
    ]}
    relationship="VisionX is one complete product built on FlameTrax. FlameTrax remains the reusable platform layer, while VisionX provides the operator-facing security and operations experience."
    features={[
      {
        title: 'Camera and stream integration',
        description: 'Connect, normalise and supervise live video sources across different camera and site environments.',
        icon: Camera,
      },
      {
        title: 'Edge inference',
        description: 'Run visual models close to the source with practical controls for latency, compute and bandwidth.',
        icon: Cpu,
      },
      {
        title: 'Event processing',
        description: 'Turn detections into structured, enriched events with rules, severity, evidence and history.',
        icon: Workflow,
      },
      {
        title: 'Cloud coordination',
        description: 'Coordinate devices, sites, configuration, event delivery and system health across deployments.',
        icon: Cloud,
      },
      {
        title: 'Integration APIs',
        description: 'Expose cameras, events, evidence and platform operations through stable interfaces.',
        icon: Network,
      },
      {
        title: 'Plugin-ready architecture',
        description: 'Add models, event processors, storage adapters and product-specific integrations without rewriting the core.',
        icon: Plug,
      },
      {
        title: 'Reusable product foundation',
        description: 'Support multiple computer-vision products and customer experiences from the same engineering platform.',
        icon: Boxes,
      },
    ]}
  />
);
