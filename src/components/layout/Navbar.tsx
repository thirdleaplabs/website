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
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className={`page-shell flex h-[68px] items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-5 ${
          scrolled || open
            ? 'border border-white/10 bg-[#0b0d15]/88 shadow-2xl shadow-black/25 backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <Link to="/" className="group flex items-center gap-3" aria-label="Third Leap Labs home">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.045]">
            <img src="/logo.svg" alt="" className="h-8 w-8 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105" />
          </span>
          <span className="leading-none">
            <span className="block text-[15px] font-semibold tracking-[-.02em] text-white">Third Leap Labs</span>
            <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[.19em] text-white/42 sm:block">Product & engineering lab</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-xl px-4 py-2 text-[14px] font-medium transition ${
                  active ? 'bg-white/[.075] text-white' : 'text-white/58 hover:bg-white/[.045] hover:text-white'
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
            className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white px-4 py-2.5 text-[13px] font-semibold text-[#0a0b10] transition hover:-translate-y-0.5 hover:bg-[#dffdf8]"
          >
            Build with us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.05] text-white lg:hidden"
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
            className="page-shell mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d15]/96 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium ${
                  pathname === link.to ? 'bg-white/[.075] text-white' : 'text-white/66 hover:bg-white/[.045] hover:text-white'
                }`}
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 opacity-50" />
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-black"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
