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

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className={`page-shell flex h-[66px] items-center justify-between rounded-full border px-3 pl-4 transition-all duration-300 sm:h-[72px] sm:px-4 sm:pl-5 ${
          scrolled || open
            ? 'border-black/10 bg-white/95 shadow-[0_16px_45px_rgba(7,17,31,.12)] backdrop-blur-xl'
            : 'border-white/65 bg-white/88 shadow-[0_10px_35px_rgba(7,17,31,.08)] backdrop-blur-lg'
        }`}
      >
        <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Third Leap Labs home">
          <img
            src="/logo.svg"
            alt=""
            className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-11 sm:w-11"
          />
          <span className="min-w-0">
            <span className="block truncate text-[16px] font-semibold tracking-[-.035em] text-[#07111f] sm:text-[18px]">
              Third Leap Labs
            </span>
            <span className="hidden text-[9px] font-semibold uppercase tracking-[.15em] text-[#5b6472] sm:block">
              Applied technology studio
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-2 text-[14px] font-semibold transition ${
                  active ? 'text-[#0b7dbd]' : 'text-[#4b5563] hover:text-[#07111f]'
                }`}
              >
                {link.label}
                {active && <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[#1d9bf0]" />}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#07111f] px-6 py-2.5 text-[14px] font-semibold text-white transition hover:bg-[#1d9bf0]"
          >
            Build with us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-[#f4f5f7] text-[#07111f] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: .98 }}
            className="page-shell mt-2 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white p-3 shadow-[0_24px_70px_rgba(7,17,31,.16)] lg:hidden"
          >
            {links.map((link) => {
              const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-[16px] font-semibold transition ${
                    active ? 'bg-[#e8f5fd] text-[#0b7dbd]' : 'text-[#374151] hover:bg-[#f4f5f7]'
                  }`}
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 opacity-45" />
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#07111f] px-6 py-3 text-sm font-semibold text-white"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
