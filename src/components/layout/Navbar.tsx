import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Work', to: '/work' },
  { label: 'Capabilities', to: '/capabilities', dropdown: true },
  { label: 'Open Source', to: '/open-source', dropdown: true },
  { label: 'Company', to: '/company', dropdown: true },
  { label: 'Contact', to: '/contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${scrolled || open ? 'border-[#dfe5ec] bg-white/95 shadow-[0_8px_28px_rgba(31,55,82,.08)] backdrop-blur-xl' : 'border-[#e7ebf0] bg-white/90 backdrop-blur-lg'}`}>
      <nav className="page-shell flex h-[74px] items-center justify-between sm:h-[82px]" aria-label="Primary navigation">
        <Link to="/" className="group flex items-center gap-3" aria-label="Third Leap Labs home">
          <img src="/logo.svg" alt="" className="h-9 w-9 sm:h-10 sm:w-10" />
          <span>
            <span className="block text-[17px] font-semibold leading-none tracking-[-.035em] text-[#17191e] sm:text-[19px]">Third Leap <span className="font-normal">Labs</span></span>
            <span className="mt-1.5 block text-[8px] font-bold uppercase tracking-[.2em] text-[#0078d4]">Build · Open · Elevate</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <Link key={link.to} to={link.to} className={`inline-flex items-center gap-1 py-3 text-[13px] font-semibold transition ${active ? 'text-[#0078d4]' : 'text-[#495566] hover:text-[#0078d4]'}`}>
                {link.label}{link.dropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="inline-flex min-h-11 items-center gap-3 rounded-lg bg-[#0078d4] px-5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(0,120,212,.2)] transition hover:bg-[#006cbe]">
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} className="grid h-11 w-11 place-items-center rounded-lg border border-[#dfe5ec] bg-white text-[#17191e] lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-[#e5e9ef] bg-white px-[var(--page-x)] py-4 lg:hidden">
            <div className="page-shell space-y-1">
              {links.map((link) => (
                <Link key={link.to} to={link.to} className="flex min-h-12 items-center justify-between rounded-lg px-4 text-[15px] font-semibold text-[#374151] transition hover:bg-[#f2f7fc] hover:text-[#0078d4]">
                  {link.label}<ArrowRight className="h-4 w-4 opacity-45" />
                </Link>
              ))}
              <Link to="/contact" className="mt-3 flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#0078d4] px-5 text-sm font-semibold text-white">Start a project <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
