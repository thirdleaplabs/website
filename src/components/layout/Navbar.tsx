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
  const isHome = pathname === '/';
  const solid = !isHome || scrolled || open;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 font-sans transition-colors duration-300 ${
        solid ? 'border-b border-black/10 bg-[#efeeec]/94 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Primary navigation" className="page-shell flex h-[76px] items-center justify-between sm:h-[88px]">
        <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Third Leap Labs home">
          <img
            src="/logo.svg"
            alt=""
            className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:rotate-3 sm:h-10 sm:w-10"
          />
          <span className="min-w-0">
            <span className="block truncate text-[17px] font-semibold tracking-[-0.03em] text-black sm:text-[19px]">
              Third Leap Labs
            </span>
            <span className="hidden text-[10px] font-medium tracking-[0.12em] text-black/45 sm:block">
              Product & engineering lab
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[15px] font-medium transition ${
                  active ? 'text-[#1177b8]' : 'text-black/68 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1d9bf0] px-6 py-2.5 text-[14px] font-semibold text-white transition hover:bg-black"
          >
            Build with us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white/55 text-black backdrop-blur-sm lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-black/10 bg-[#efeeec] lg:hidden"
          >
            <div className="page-shell py-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex min-h-12 items-center justify-between border-b border-black/10 py-3 text-[17px] font-medium ${
                    pathname === link.to ? 'text-[#1177b8]' : 'text-black/72'
                  }`}
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 opacity-45" />
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1d9bf0] px-6 py-3 text-sm font-semibold text-white"
              >
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
