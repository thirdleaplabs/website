import {
  AlertCircle,
  ArrowRight,
  Blocks,
  Box,
  Camera,
  Code2,
  Eye,
  GitBranch,
  Github,
  Layers,
  Link2,
  Network,
  QrCode,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  Wallet,
  WalletCards,
} from 'lucide-react';

export const TechnologyMap = () => (
  <div className="relative mx-auto aspect-[1.05] w-full max-w-[590px]">
    <div className="absolute inset-[8%] rounded-[2.4rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-transparent shadow-xl" />
    <div className="absolute inset-[17%] rounded-full border border-dashed border-slate-200" />
    <div className="absolute inset-[29%] rounded-full border border-slate-200" />

    <div className="absolute left-[34%] top-[33%] grid h-[32%] w-[32%] place-items-center rounded-[2rem] border border-blue-200 bg-white shadow-lg">
      <div className="text-center">
        <img src="/logo.svg" alt="" className="mx-auto h-14 w-14 sm:h-16 sm:w-16" />
        <p className="mt-3 text-xs font-semibold tracking-widest text-slate-800">THIRD LEAP</p>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-blue-600">Product core</p>
      </div>
    </div>

    {[
      { label: 'AI', sub: 'Think', className: 'left-[6%] top-[14%]', icon: Sparkles, color: 'text-blue-600' },
      { label: 'Vision', sub: 'See', className: 'right-[4%] top-[16%]', icon: Eye, color: 'text-blue-600' },
      { label: 'Web3', sub: 'Verify', className: 'left-[3%] bottom-[13%]', icon: WalletCards, color: 'text-blue-600' },
      { label: 'Open', sub: 'Scale', className: 'right-[5%] bottom-[12%]', icon: Code2, color: 'text-blue-600' },
    ].map(({ label, sub, className, icon: Icon, color }) => (
      <div key={label} className={`absolute ${className} w-[29%] rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:p-4`}>
        <div className={`grid h-8 w-8 place-items-center rounded-xl bg-slate-100 ${color}`}>
          <Icon className="h-4 w-4" />
        </div>
        <p className="mt-3 text-sm font-semibold text-slate-900">{label}</p>
        <p className="text-[10px] uppercase tracking-widest text-slate-500">{sub}</p>
      </div>
    ))}
  </div>
);

export const WhaleScannerVisual = () => (
  <div className="flex w-full items-center justify-center py-10">
    <div className="flex items-center gap-4 sm:gap-6 text-slate-300">
      <div className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white shadow-sm text-blue-600">
        <Wallet className="h-5 w-5" />
      </div>
      <div className="h-px w-8 sm:w-12 border-t border-dashed border-slate-300" />
      <div className="grid h-16 w-16 place-items-center rounded-full border border-blue-200 bg-blue-50 shadow-sm text-blue-600">
        <Network className="h-7 w-7" />
      </div>
      <div className="h-px w-8 sm:w-12 border-t border-dashed border-slate-300" />
      <div className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white shadow-sm text-blue-600">
        <Search className="h-5 w-5" />
      </div>
    </div>
  </div>
);

export const GoPaySolVisual = () => (
  <div className="flex w-full items-center justify-center py-10">
    <div className="flex items-center gap-3 sm:gap-6 text-slate-300">
      <div className="grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white shadow-sm text-blue-600">
        <Link2 className="h-5 w-5" />
      </div>
      <ArrowRight className="h-4 w-4 text-slate-300" />
      <div className="grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white shadow-sm text-blue-600">
        <QrCode className="h-5 w-5" />
      </div>
      <ArrowRight className="h-4 w-4 text-slate-300" />
      <div className="grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white shadow-sm text-blue-600">
        <ReceiptText className="h-5 w-5" />
      </div>
    </div>
  </div>
);

export const VisionXVisual = () => (
  <div className="flex w-full items-center justify-center py-10">
    <div className="flex items-center gap-3 sm:gap-6 text-slate-300">
      <div className="grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm text-blue-600">
        <Camera className="h-5 w-5" />
      </div>
      <div className="h-px w-6 sm:w-10 bg-slate-200" />
      <div className="grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm text-blue-600">
        <AlertCircle className="h-5 w-5" />
      </div>
      <div className="h-px w-6 sm:w-10 bg-slate-200" />
      <div className="grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-white shadow-sm text-blue-600">
        <ShieldCheck className="h-5 w-5" />
      </div>
    </div>
  </div>
);

export const OpenSourceVisual = () => (
  <div className="flex w-full items-center justify-center py-10">
    <div className="relative flex items-center justify-center">
      <div className="absolute -left-6 top-4 grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-blue-500 shadow-sm">
        <Box className="h-4 w-4" />
      </div>
      <div className="absolute -right-6 top-4 grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-blue-500 shadow-sm">
        <Layers className="h-4 w-4" />
      </div>
      <div className="relative z-10 grid h-14 w-14 place-items-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 shadow-md">
        <Blocks className="h-6 w-6" />
      </div>
    </div>
  </div>
);
