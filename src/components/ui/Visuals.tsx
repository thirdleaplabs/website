import {
  ArrowRight,
  BellRing,
  Blocks3,
  Camera,
  Code2,
  Eye,
  GitBranch,
  Github,
  Network,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from 'lucide-react';

export const TechnologyMap = () => (
  <div className="relative mx-auto aspect-[1.05] w-full max-w-[590px]">
    <div className="absolute inset-[8%] rounded-[2.4rem] border border-white/[.075] bg-gradient-to-br from-white/[.045] to-transparent shadow-2xl shadow-black/30" />
    <div className="absolute inset-[17%] rounded-full border border-dashed border-white/10" />
    <div className="absolute inset-[29%] rounded-full border border-white/[.08]" />

    <div className="float-a absolute left-[34%] top-[33%] grid h-[32%] w-[32%] place-items-center rounded-[2rem] border border-cyan/30 bg-[#0b1119]/95 shadow-[0_0_90px_rgba(57,230,208,.12)]">
      <div className="text-center">
        <img src="/logo.svg" alt="" className="mx-auto h-14 w-14 sm:h-16 sm:w-16" />
        <p className="mt-3 text-xs font-semibold tracking-[.16em] text-white/80">THIRD LEAP</p>
        <p className="mt-1 text-[10px] uppercase tracking-[.18em] text-cyan/65">Product core</p>
      </div>
    </div>

    {[
      { label: 'AI', sub: 'Think', className: 'left-[6%] top-[14%]', icon: Sparkles, color: 'text-violet' },
      { label: 'Vision', sub: 'See', className: 'right-[4%] top-[16%]', icon: Eye, color: 'text-cyan' },
      { label: 'Web3', sub: 'Verify', className: 'left-[3%] bottom-[13%]', icon: WalletCards, color: 'text-electric' },
      { label: 'Open', sub: 'Scale', className: 'right-[5%] bottom-[12%]', icon: Code2, color: 'text-[#ff89ad]' },
    ].map(({ label, sub, className, icon: Icon, color }) => (
      <div key={label} className={`float-b absolute ${className} w-[29%] rounded-2xl border border-white/10 bg-[#0d1019]/94 p-3 shadow-xl shadow-black/30 sm:p-4`}>
        <div className={`grid h-8 w-8 place-items-center rounded-xl bg-white/[.05] ${color}`}>
          <Icon className="h-4 w-4" />
        </div>
        <p className="mt-3 text-sm font-semibold">{label}</p>
        <p className="text-[10px] uppercase tracking-[.15em] text-white/32">{sub}</p>
      </div>
    ))}

    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-55" viewBox="0 0 600 570" fill="none" aria-hidden="true">
      <path d="M215 210 132 143M382 210l84-65M215 360l-92 72M382 360l91 69" stroke="url(#line)" strokeWidth="1.4" strokeDasharray="5 7"/>
      <defs>
        <linearGradient id="line" x1="100" y1="100" x2="500" y2="480">
          <stop stopColor="#39E6D0"/>
          <stop offset=".5" stopColor="#5C7CFF"/>
          <stop offset="1" stopColor="#B15CFF"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const ProductStep = ({
  label,
  detail,
  icon: Icon,
}: {
  label: string;
  detail: string;
  icon: typeof WalletCards;
}) => (
  <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/[.08] bg-white/[.035] px-4 py-3.5">
    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/[.08] bg-black/20 text-cyan">
      <Icon className="h-4 w-4" />
    </div>
    <div className="min-w-0">
      <p className="text-xs font-semibold text-white/82">{label}</p>
      <p className="mt-1 text-[10px] leading-4 text-white/34">{detail}</p>
    </div>
  </div>
);

export const WhaleScannerVisual = () => (
  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#0c1820,#0b0e16_58%,#101226)] p-5 shadow-2xl shadow-black/25 sm:p-6">
    <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan/16 blur-[80px]" />
    <div className="relative">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-cyan/65">Product story</p>
          <p className="mt-3 max-w-sm text-xl font-semibold leading-7 tracking-[-.035em] text-white sm:text-2xl">
            Make on-chain activity easier to follow and understand.
          </p>
        </div>
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-cyan/20 bg-cyan/[.07] text-2xl font-bold tracking-[-.08em] text-cyan">
          WS
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <ProductStep icon={WalletCards} label="Discover" detail="Wallets, projects and activity" />
        <ProductStep icon={Network} label="Understand" detail="Context, patterns and signals" />
        <ProductStep icon={Sparkles} label="Participate" detail="People, communities and insight" />
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/[.07] pt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/30">
        Data <ArrowRight className="h-3.5 w-3.5 text-cyan/60" /> Context <ArrowRight className="h-3.5 w-3.5 text-cyan/60" /> Better judgement
      </div>
    </div>
  </div>
);

export const VisionXVisual = () => (
  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#12152a,#0b0e17_58%,#101823)] p-5 shadow-2xl shadow-black/25 sm:p-6">
    <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-electric/18 blur-[80px]" />
    <div className="relative">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-electric/72">Product story</p>
          <p className="mt-3 max-w-sm text-xl font-semibold leading-7 tracking-[-.035em] text-white sm:text-2xl">
            Help teams see important events and respond with confidence.
          </p>
        </div>
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-electric/22 bg-electric/[.08] text-2xl font-bold tracking-[-.08em] text-[#91a4ff]">
          VX
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <ProductStep icon={Camera} label="Monitor" detail="Sites, zones and live activity" />
        <ProductStep icon={Eye} label="Investigate" detail="Events, context and evidence" />
        <ProductStep icon={ShieldCheck} label="Respond" detail="Clear actions and ownership" />
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/[.07] pt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/30">
        Observe <ArrowRight className="h-3.5 w-3.5 text-electric/70" /> Understand <ArrowRight className="h-3.5 w-3.5 text-electric/70" /> Act
      </div>
    </div>
  </div>
);

export const FlameTraxVisual = () => (
  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#181124,#0b0e16_58%,#15101c)] p-5 shadow-2xl shadow-black/25 sm:p-6">
    <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-violet/18 blur-[80px]" />
    <div className="relative">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-violet/75">Platform story</p>
          <p className="mt-3 max-w-sm text-xl font-semibold leading-7 tracking-[-.035em] text-white sm:text-2xl">
            Turn existing cameras into an operational safety network.
          </p>
        </div>
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-violet/22 bg-violet/[.08] text-2xl font-bold tracking-[-.08em] text-[#cd9dff]">
          FT
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <ProductStep icon={Camera} label="Detect" detail="Visual events at the edge" />
        <ProductStep icon={Blocks3} label="Verify" detail="Context, rules and severity" />
        <ProductStep icon={BellRing} label="Coordinate" detail="Alerts, evidence and response" />
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/[.07] pt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/30">
        Camera <ArrowRight className="h-3.5 w-3.5 text-violet/70" /> Edge intelligence <ArrowRight className="h-3.5 w-3.5 text-violet/70" /> Coordinated response
      </div>
    </div>
  </div>
);

export const OpenSourceVisual = () => (
  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(145deg,#20121b,#0b0e16_58%,#17111a)] p-5 shadow-2xl shadow-black/25 sm:p-6">
    <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-coral/15 blur-[80px]" />
    <div className="relative">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-coral/72">Engineering approach</p>
          <p className="mt-3 max-w-sm text-xl font-semibold leading-7 tracking-[-.035em] text-white sm:text-2xl">
            Build foundations that other engineers can understand and extend.
          </p>
        </div>
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-coral/20 bg-coral/[.07] text-coral">
          <Github className="h-7 w-7" />
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <ProductStep icon={Code2} label="Build" detail="Readable, reusable foundations" />
        <ProductStep icon={GitBranch} label="Extend" detail="Plugins, APIs and clear boundaries" />
        <ProductStep icon={Github} label="Contribute" detail="Documentation and stewardship" />
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/[.07] pt-5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/30">
        Understand <ArrowRight className="h-3.5 w-3.5 text-coral/70" /> Adapt <ArrowRight className="h-3.5 w-3.5 text-coral/70" /> Improve
      </div>
    </div>
  </div>
);
