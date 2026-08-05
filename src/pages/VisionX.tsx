import { BellRing, Camera, Cpu, FileSearch, LayoutDashboard, ShieldCheck, Smartphone } from 'lucide-react';
import { ProductDetailPage } from '../components/ui/ProductDetailPage';
import { VisionXVisual } from '../components/ui/Visuals';

export const VisionX = () => (
  <ProductDetailPage
    seoTitle="VisionX | Third Leap Labs"
    seoDescription="VisionX is the AI video security and operations product from Third Leap Labs."
    path="/work/visionx"
    eyebrow="Third Leap Labs product · AI video operations"
    title={<>A calmer way to understand what is happening <span className="text-gradient">across your cameras.</span></>}
    description="VisionX is an edge-to-cloud video intelligence product for live monitoring, AI event detection, alerts, investigation, evidence and operational response."
    visual={<VisionXVisual />}
    storyEyebrow="The product idea"
    storyTitle="Turn camera activity into an event a team can act on."
    storyDescription="VisionX organises cameras, detections, alerts, footage and incident evidence around the operator’s job instead of presenting another crowded wall of video."
    problems={[
      'Operators cannot maintain full attention across many cameras, sites and shifts.',
      'A raw AI detection is not operationally useful until it includes location, severity, time and supporting evidence.',
      'Live monitoring, recorded footage, alerts and incident investigation are often fragmented across separate systems.',
    ]}
    relationship="VisionX is powered by the FlameTrax computer-vision engine. FlameTrax provides the reusable edge, inference and event platform; VisionX turns that capability into a complete security and operations product."
    features={[
      {
        title: 'Live monitoring',
        description: 'See the cameras and sites that matter without crowding the screen with unnecessary controls.',
        icon: Camera,
      },
      {
        title: 'Edge AI',
        description: 'Run visual intelligence close to the camera for responsive detection and controlled bandwidth.',
        icon: Cpu,
      },
      {
        title: 'AI event detection',
        description: 'Transform model output into structured events with context, severity and supporting evidence.',
        icon: ShieldCheck,
      },
      {
        title: 'Focused alerts',
        description: 'Route meaningful incidents to the right people with the information needed to respond.',
        icon: BellRing,
      },
      {
        title: 'Incident investigation',
        description: 'Move quickly from an alert to related footage, event details, history and evidence.',
        icon: FileSearch,
      },
      {
        title: 'Cloud and mobile access',
        description: 'Manage sites, review activity and keep response available beyond the control room.',
        icon: Smartphone,
      },
      {
        title: 'Operational dashboards',
        description: 'Understand system health, recurring event patterns and site-level activity.',
        icon: LayoutDashboard,
      },
    ]}
  />
);
