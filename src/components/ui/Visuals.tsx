import { Activity, Bell, Camera, CheckCircle2, Code2, Database, Eye, Github, Radio, ShieldCheck, Sparkles, WalletCards } from 'lucide-react';

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

export const WhaleScannerVisual = () => (
  <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#070a11] p-3 shadow-2xl shadow-black/30 sm:p-4">
    <div className="flex items-center justify-between border-b border-white/[.07] pb-3">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-cyan data-dot text-cyan" />
        <span className="text-[11px] font-semibold tracking-[.14em] text-white/50">MARKET PULSE</span>
      </div>
      <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[.14em] text-cyan">Live</span>
    </div>
    <div className="mt-3 grid grid-cols-[1fr_.9fr] gap-3">
      <div className="rounded-xl border border-white/[.07] bg-white/[.025] p-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-white/35">Market regime</span>
          <Activity className="h-3.5 w-3.5 text-cyan" />
        </div>
        <p className="mt-2 text-lg font-semibold">Constructive</p>
        <div className="mt-5 flex h-24 items-end gap-1">
          {[34, 44, 31, 58, 51, 72, 64, 81, 76, 92, 84, 96].map((height, index) => (
            <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-electric/30 to-cyan/85" style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {[
          ['Whale movement', 'Detected', WalletCards],
          ['Risk pattern', 'Clear', ShieldCheck],
          ['Signal confidence', 'High', Sparkles],
        ].map(([label, value, Icon]) => (
          <div key={String(label)} className="rounded-xl border border-white/[.07] bg-white/[.025] p-3">
            <Icon className="h-3.5 w-3.5 text-electric" />
            <p className="mt-3 text-[9px] uppercase tracking-[.14em] text-white/30">{String(label)}</p>
            <p className="mt-1 text-xs font-semibold text-white/78">{String(value)}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const VisionXVisual = () => (
  <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#080a0f] p-3 shadow-2xl shadow-black/30">
    <div className="flex items-center justify-between border-b border-white/[.07] pb-3">
      <div className="flex items-center gap-2">
        <Camera className="h-3.5 w-3.5 text-cyan" />
        <span className="text-[10px] font-semibold tracking-[.14em] text-white/50">SITE OVERVIEW</span>
      </div>
      <span className="flex items-center gap-1.5 text-[9px] text-white/38"><Radio className="h-3 w-3 text-cyan" /> 8 cameras online</span>
    </div>
    <div className="mt-3 grid grid-cols-2 gap-2">
      {[
        ['Warehouse A', 'Person detected'],
        ['Loading dock', 'Clear'],
        ['Production line', 'PPE verified'],
        ['North entrance', 'Clear'],
      ].map(([name, status], index) => (
        <div key={name} className="relative aspect-video overflow-hidden rounded-lg border border-white/[.07] bg-[radial-gradient(circle_at_70%_30%,rgba(57,230,208,.12),transparent_35%),linear-gradient(135deg,#111824,#090b10)] p-2">
          <div className="absolute inset-x-2 top-2 flex items-center justify-between">
            <span className="rounded bg-black/45 px-1.5 py-1 text-[8px] text-white/55">{name}</span>
            <span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? 'bg-coral' : 'bg-cyan'}`} />
          </div>
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span className="text-[8px] text-white/48">{status}</span>
            {index === 0 ? <Bell className="h-3 w-3 text-coral" /> : <CheckCircle2 className="h-3 w-3 text-cyan" />}
          </div>
          {index === 0 && <div className="absolute left-[45%] top-[30%] h-[42%] w-[20%] rounded border border-coral/80" />}
        </div>
      ))}
    </div>
  </div>
);

export const FlameTraxVisual = () => (
  <div className="rounded-[1.35rem] border border-white/10 bg-[#090b12] p-4 shadow-2xl shadow-black/30">
    <div className="flex items-center justify-between">
      <span className="text-[10px] font-semibold uppercase tracking-[.15em] text-white/42">Edge event pipeline</span>
      <span className="rounded-full border border-cyan/20 bg-cyan/8 px-2 py-1 text-[8px] font-semibold text-cyan">Healthy</span>
    </div>
    <div className="mt-5 space-y-3">
      {[
        ['Camera streams', '12 active', Camera, 'from-electric/80 to-electric/25'],
        ['Vision models', '5 loaded', Eye, 'from-cyan/80 to-cyan/25'],
        ['Event engine', '43 ms', Activity, 'from-violet/80 to-violet/25'],
        ['Cloud delivery', 'Connected', Database, 'from-coral/80 to-coral/25'],
      ].map(([label, value, Icon, gradient], index) => (
        <div key={String(label)} className="relative flex items-center gap-3 rounded-xl border border-white/[.07] bg-white/[.025] p-3">
          <div className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${String(gradient)}`}>
            <Icon className="h-4 w-4 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-white/72">{String(label)}</p>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[.06]">
              <div className="h-full rounded-full bg-gradient-to-r from-electric via-cyan to-violet" style={{ width: `${68 + index * 8}%` }} />
            </div>
          </div>
          <span className="text-[10px] text-white/38">{String(value)}</span>
        </div>
      ))}
    </div>
  </div>
);

export const OpenSourceVisual = () => (
  <div className="rounded-[1.35rem] border border-white/10 bg-[#090b11] p-4 shadow-2xl shadow-black/30">
    <div className="flex items-center gap-2 border-b border-white/[.07] pb-3">
      <Github className="h-4 w-4 text-white/70" />
      <span className="text-[10px] font-semibold uppercase tracking-[.15em] text-white/46">Built to be extended</span>
    </div>
    <div className="mt-4 space-y-3">
      {[
        ['core/event-engine', 'Composable event processing'],
        ['edge/plugin-sdk', 'Custom vision modules'],
        ['data/signal-kit', 'Reusable analytics pipelines'],
      ].map(([name, description], index) => (
        <div key={name} className="rounded-xl border border-white/[.07] bg-white/[.025] p-3">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] text-cyan/75">{name}</p>
            <span className="text-[9px] text-white/25">0{index + 1}</span>
          </div>
          <p className="mt-2 text-xs text-white/58">{description}</p>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-electric" />
            <span className="text-[8px] uppercase tracking-[.15em] text-white/28">Architecture pattern</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
