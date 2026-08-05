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
  <footer className="border-t border-slate-800 bg-slate-950 font-sans">
    <div className="page-shell py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr_.75fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/logo.svg" alt="" className="h-10 w-10" />
            <span className="text-[18px] font-semibold tracking-tight text-white">Third Leap Labs</span>
          </Link>
          <p className="mt-5 max-w-md text-[15px] font-normal leading-7 text-slate-400">
            We build crypto products, AI and computer-vision systems, and open-source foundations for serious product engineering.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:info@thirdleaplabs.com"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-[14px] font-medium text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
            >
              <Mail className="h-4 w-4" /> info@thirdleaplabs.com
            </a>
            <a
              href="https://github.com/thirdleaplabs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-[14px] font-medium text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
            >
              <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[13px] font-semibold tracking-wide text-slate-300">{column.title}</p>
            <ul className="mt-5 space-y-3">
              {column.links.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-[15px] font-normal leading-6 text-slate-400 transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-5 border-t border-slate-800 pt-7 text-[13px] font-normal text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Third Leap Labs LLC. Built with care, curiosity and practical engineering.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/privacy-policy" className="hover:text-slate-300 transition">Privacy</Link>
          <Link to="/legal-disclaimer" className="hover:text-slate-300 transition">Legal</Link>
          <Link to="/security-notice" className="hover:text-slate-300 transition">Security</Link>
        </div>
      </div>
    </div>
  </footer>
);
