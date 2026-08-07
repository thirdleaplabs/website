import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="border-t border-[#2D3142]/20 bg-white text-[#2D3142]">
    <div className="page-shell flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
      <Link to="/" className="inline-flex items-center gap-2.5">
        <img src="/logo.svg" alt="" className="h-7 w-7" />
        <span className="text-[16px] font-semibold tracking-[-.025em]">Third Leap Labs</span>
      </Link>

      <nav className="flex flex-wrap gap-x-7 gap-y-3 text-[11px] text-[#4F5D75]" aria-label="Footer navigation">
        <Link to="/privacy-policy" className="transition hover:text-[#EF8354]">Privacy</Link>
        <Link to="/security-notice" className="transition hover:text-[#EF8354]">Security</Link>
        <Link to="/legal-disclaimer" className="transition hover:text-[#EF8354]">Legal</Link>
      </nav>

      <p className="mono text-[9px] uppercase tracking-[.08em] text-[#4F5D75]">© {new Date().getFullYear()} Third Leap Labs LLC. Applied Intelligence.</p>
    </div>
  </footer>
);
