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
      ['VisionX', '/work/visionx'],
      ['FlameTrax', '/work/flametrax'],
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-white/[.075] bg-[#06070b]">
    <div className="page-shell py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr_.75fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/logo.svg" alt="" className="h-10 w-10" />
            <span className="text-lg font-semibold tracking-[-.025em]">Third Leap Labs</span>
          </Link>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-white/52">
            We build intelligent, visual and decentralized products—and the open foundations that help them keep evolving.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:info@thirdleaplabs.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.035] px-4 py-2.5 text-sm text-white/70 transition hover:border-white/20 hover:text-white"
            >
              <Mail className="h-4 w-4" /> info@thirdleaplabs.com
            </a>
            <a
              href="https://github.com/thirdleaplabs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.035] px-4 py-2.5 text-sm text-white/70 transition hover:border-white/20 hover:text-white"
            >
              <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-white/34">{column.title}</p>
            <ul className="mt-5 space-y-3">
              {column.links.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/58 transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-5 border-t border-white/[.075] pt-7 text-xs text-white/36 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Third Leap Labs LLC. Built with care, curiosity and practical engineering.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/privacy-policy" className="hover:text-white/70">Privacy</Link>
          <Link to="/legal-disclaimer" className="hover:text-white/70">Legal</Link>
          <Link to="/security-notice" className="hover:text-white/70">Security</Link>
        </div>
      </div>
    </div>
  </footer>
);
