import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Work', to: '/work' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Open source', to: '/open-source' },
  { label: 'Company', to: '/company' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 font-sans sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className="page-shell flex h-[76px] items-center justify-between rounded-2xl border border-slate-200/80 bg-white/95 px-4 shadow-[0_14px_45px_rgba(15,23,42,.10)] backdrop-blur-xl sm:px-6"
      >
        <Link to="/" className="group flex min-w-0 items-center gap-3.5" aria-label="Third Leap Labs home">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-50">
            <img src="/logo.svg" alt="" className="h-8.5 w-8.5 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105" />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate text-[18px] font-semibold tracking-[-.025em] text-slate-950 sm:text-[20px]">Third Leap Labs</span>
            <span className="mt-1.5 hidden text-[10px] font-medium uppercase tracking-[.16em] text-slate-500 sm:block">Product & engineering lab</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-xl px-4 py-2.5 text-[15px] font-medium tracking-normal transition ${
                  active
                    ? 'bg-slate-100 text-slate-950'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-[14px] font-medium tracking-normal text-white shadow-[0_10px_28px_rgba(37,99,235,.24)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(37,99,235,.30)]"
          >
            Build with us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: .985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: .985 }}
            className="page-shell mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/98 p-3 font-sans shadow-2xl shadow-slate-900/15 backdrop-blur-xl lg:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[16px] font-medium tracking-normal ${
                  pathname === link.to
                    ? 'bg-slate-100 text-slate-950'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                }`}
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 opacity-45" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3.5 text-sm font-medium tracking-normal text-white"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
