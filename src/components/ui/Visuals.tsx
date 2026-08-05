import {
  Activity,
  AlertCircle,
  ArrowRight,
  Blocks,
  Box,
  BrainCircuit,
  Camera,
  CheckCircle2,
  Code2,
  Cpu,
  Eye,
  Layers,
  Link2,
  Network,
  QrCode,
  ReceiptText,
  Search,
  ShieldCheck,
  Wallet,
  WalletCards,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type TechnologyNode = {
  label: string;
  action: string;
  icon: LucideIcon;
};

const technologyNodes: TechnologyNode[] = [
  { label: 'AI', action: 'Reason', icon: BrainCircuit },
  { label: 'Vision', action: 'See', icon: Eye },
  { label: 'Web3', action: 'Verify', icon: WalletCards },
  { label: 'Open', action: 'Extend', icon: Code2 },
];

export const TechnologyMap = () => (
  <div className="dark-panel relative mx-auto aspect-[1.04] w-full max-w-[590px] overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-[0_28px_80px_rgba(7,17,31,.22)]">
    <div className="absolute inset-0 tech-grid opacity-35" />
    <div className="relative grid h-full grid-cols-2 gap-3">
      {technologyNodes.map(({ label, action, icon: Icon }) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-white/[.055] p-4 backdrop-blur-sm">
          <Icon className="h-5 w-5 text-[#7dd3fc]" />
          <p className="mt-7 text-xl font-semibold text-white">{label}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[.16em] text-white/34">{action}</p>
        </div>
      ))}
      <div className="absolute inset-x-8 bottom-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#030712]/70 p-4">
        <img src="/logo.svg" alt="" className="h-11 w-11" />
        <div>
          <p className="text-sm font-semibold text-white">Third Leap product core</p>
          <p className="mt-1 text-xs text-white/40">Edge · data · cloud · mobile · chain</p>
        </div>
      </div>
    </div>
  </div>
);

export const WhaleScannerVisual = () => (
  <div className="flex min-h-[250px] w-full flex-col justify-between rounded-[1.35rem] bg-[#07111f] p-5 text-white sm:p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1d9bf0]/18 text-[#7dd3fc]"><WalletCards className="h-5 w-5" /></div>
        <div>
          <p className="text-sm font-semibold">WhaleScanner</p>
          <p className="text-[10px] uppercase tracking-[.14em] text-white/34">Market intelligence</p>
        </div>
      </div>
      <span className="inline-flex items-center gap-2 text-xs text-white/44"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Live</span>
    </div>
    <div className="mt-7 grid grid-cols-3 gap-3">
      {[
        { label: 'Wallets', value: 'Track', icon: Wallet },
        { label: 'Signals', value: 'Read', icon: Activity },
        { label: 'Projects', value: 'Discover', icon: Search },
      ].map(({ label, value, icon: Icon }) => (
        <div key={label} className="rounded-xl border border-white/10 bg-white/[.055] p-3">
          <Icon className="h-4 w-4 text-[#7dd3fc]" />
          <p className="mt-5 text-sm font-semibold">{value}</p>
          <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-white/32">{label}</p>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-3 text-xs text-white/44">
      <span>Wallet activity → market context → community</span>
      <ShieldCheck className="h-4 w-4 text-[#7dd3fc]" />
    </div>
  </div>
);

export const GoPaySolVisual = () => (
  <div className="flex min-h-[250px] w-full flex-col justify-between rounded-[1.35rem] bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f5fd] text-[#0b7dbd]"><Link2 className="h-5 w-5" /></div>
        <div>
          <p className="text-sm font-semibold text-[#07111f]">GoPaySol</p>
          <p className="text-[10px] uppercase tracking-[.14em] text-[#9ca3af]">Payment request</p>
        </div>
      </div>
      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-emerald-700">Non-custodial</span>
    </div>
    <div className="mt-8 flex items-center justify-between gap-2">
      {[
        { label: 'Create', icon: Link2 },
        { label: 'Share', icon: QrCode },
        { label: 'Verify', icon: CheckCircle2 },
        { label: 'Record', icon: ReceiptText },
      ].map(({ label, icon: Icon }, index) => (
        <div key={label} className="contents">
          <div className="flex flex-1 flex-col items-center rounded-xl border border-black/10 bg-[#f7f9fb] p-3 text-center">
            <Icon className="h-5 w-5 text-[#0b7dbd]" />
            <p className="mt-3 text-xs font-semibold text-[#4b5563]">{label}</p>
          </div>
          {index < 3 && <ArrowRight className="h-4 w-4 shrink-0 text-[#c4c9d1]" />}
        </div>
      ))}
    </div>
  </div>
);

export const VisionXVisual = () => (
  <div className="flex min-h-[250px] w-full flex-col rounded-[1.35rem] bg-[#07111f] p-5 text-white sm:p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1d9bf0]/18 text-[#7dd3fc]"><Camera className="h-5 w-5" /></div>
        <div>
          <p className="text-sm font-semibold">VisionX</p>
          <p className="text-[10px] uppercase tracking-[.14em] text-white/34">Video operations</p>
        </div>
      </div>
      <span className="inline-flex items-center gap-2 text-xs text-white/44"><span className="h-2 w-2 rounded-full bg-emerald-400" /> 12 cameras</span>
    </div>
    <div className="mt-7 grid grid-cols-[1.15fr_.85fr] gap-3">
      <div className="relative min-h-[145px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-700 to-slate-900">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute left-[28%] top-[20%] h-[58%] w-[38%] rounded border border-[#7dd3fc]" />
        <span className="absolute left-[28%] top-[12%] rounded bg-[#1d9bf0] px-2 py-1 text-[9px] font-semibold">PERSON · 94%</span>
        <Camera className="absolute bottom-3 right-3 h-5 w-5 text-white/38" />
      </div>
      <div className="space-y-3">
        <div className="rounded-xl border border-amber-300/20 bg-amber-400/10 p-3">
          <AlertCircle className="h-4 w-4 text-amber-300" />
          <p className="mt-3 text-xs font-semibold">Restricted zone</p>
          <p className="mt-1 text-[10px] text-white/38">Evidence attached</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[.055] p-3">
          <Workflow className="h-4 w-4 text-[#7dd3fc]" />
          <p className="mt-3 text-xs font-semibold">Response routed</p>
        </div>
      </div>
    </div>
  </div>
);

export const FlameTraxVisual = () => (
  <div className="flex min-h-[250px] w-full flex-col justify-between rounded-[1.35rem] bg-white p-5 shadow-sm sm:p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#e8f5fd] text-[#0b7dbd]"><Cpu className="h-5 w-5" /></div>
        <div>
          <p className="text-sm font-semibold text-[#07111f]">FlameTrax</p>
          <p className="text-[10px] uppercase tracking-[.14em] text-[#9ca3af]">Vision platform</p>
        </div>
      </div>
      <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-[#6b7280]">Modular</span>
    </div>
    <div className="mt-8 grid grid-cols-4 gap-2">
      {[
        { label: 'Streams', icon: Camera },
        { label: 'Inference', icon: Cpu },
        { label: 'Events', icon: Workflow },
        { label: 'APIs', icon: Network },
      ].map(({ label, icon: Icon }, index) => (
        <div key={label} className="relative rounded-xl border border-black/10 bg-[#f7f9fb] p-3 text-center">
          <Icon className="mx-auto h-5 w-5 text-[#0b7dbd]" />
          <p className="mt-3 text-[11px] font-semibold text-[#4b5563]">{label}</p>
          {index < 3 && <span className="absolute -right-2 top-1/2 z-10 h-px w-4 bg-[#b9c1cc]" />}
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center gap-3 rounded-xl border border-black/10 bg-[#07111f] p-3 text-white">
      <Layers className="h-4 w-4 text-[#7dd3fc]" />
      <p className="text-xs text-white/58">Shared engine for multiple computer-vision products</p>
    </div>
  </div>
);

export const OpenSourceVisual = () => (
  <div className="flex min-h-[240px] w-full items-center justify-center rounded-[1.35rem] bg-[#07111f] p-6 text-white">
    <div className="relative grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-white/10 bg-white/[.055] p-4"><Box className="h-5 w-5 text-[#7dd3fc]" /><p className="mt-5 text-sm font-semibold">Components</p></div>
      <div className="rounded-xl border border-white/10 bg-white/[.055] p-4"><Layers className="h-5 w-5 text-[#7dd3fc]" /><p className="mt-5 text-sm font-semibold">Platforms</p></div>
      <div className="col-span-2 flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4">
        <Blocks className="h-6 w-6 text-[#7dd3fc]" />
        <div><p className="text-sm font-semibold">Open engineering core</p><p className="mt-1 text-xs text-white/38">Inspect · extend · own</p></div>
      </div>
    </div>
  </div>
);
