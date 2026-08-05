import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Explore',
    links: [
      ['Work', '/work'],
      ['Capabilities', '/capabilities'],
      ['Open source', '/open-source'],
      ['Company', '/company'],
    ],
  },
  {
    title: 'Products',
    links: [
      ['WhaleScanner', '/work/whalescanner'],
      ['GoPaySol', '/work/gopaysol'],
      ['VisionX', '/work/visionx'],
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-white/10 bg-black font-sans text-white">
    <div className="page-shell py-16 sm:py-20">
      <div className="grid gap-14 lg:grid-cols-[1.3fr_.7fr_.7fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/logo.svg" alt="" className="h-10 w-10" />
            <span className="text-[19px] font-semibold tracking-[-0.03em]">Third Leap Labs</span>
          </Link>
          <p className="mt-6 max-w-md text-[16px] leading-8 text-white/58">
            We build AI, computer-vision and Web3 products, together with the open engineering foundations behind them.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="mailto:info@thirdleaplabs.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/68 transition hover:text-[#72c7ff]"
            >
              <Mail className="h-4 w-4" /> info@thirdleaplabs.com
            </a>
            <a
              href="https://github.com/thirdleaplabs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/68 transition hover:text-[#72c7ff]"
            >
              <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[14px] font-semibold text-white">{column.title}</p>
            <ul className="mt-5 space-y-3.5">
              {column.links.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-[15px] leading-6 text-white/52 transition hover:text-[#72c7ff]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-5 border-t border-white/12 pt-7 text-[13px] text-white/38 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Third Leap Labs LLC.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/privacy-policy" className="transition hover:text-white/70">Privacy</Link>
          <Link to="/legal-disclaimer" className="transition hover:text-white/70">Legal</Link>
          <Link to="/security-notice" className="transition hover:text-white/70">Security</Link>
        </div>
      </div>
    </div>
  </footer>
);
