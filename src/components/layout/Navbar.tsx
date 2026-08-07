import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'EyeWitX', to: '/eyewitx' },
  { label: 'Products', to: '/products' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Research', to: '/open-source' },
  { label: 'Company', to: '/company' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2D3142]/15 bg-white/95 backdrop-blur-md">
      <nav className="page-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Third Leap Labs home">
          <img src="/logo.svg" alt="" className="h-7 w-7" />
          <span className="text-[15px] font-semibold tracking-[-.025em] text-[#2D3142] sm:text-[17px]">Third Leap Labs</span>
        </Link>

        <div className="hidden items-stretch self-stretch lg:flex">
          {links.map((link) => {
            const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
            return (
              <Link key={link.to} to={link.to} className={`relative flex items-center px-4 text-[11px] font-medium tracking-[.02em] transition ${active ? 'text-[#1DA1F2]' : 'text-[#2D3142] hover:text-[#1DA1F2]'}`}>
                {link.label}
                {active && <span className="absolute inset-x-4 bottom-0 h-[2px] bg-[#1DA1F2]" />}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary min-h-9 px-5 py-2 text-[11px]">Get Started</Link>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} className="grid h-10 w-10 place-items-center border border-[#2D3142]/25 bg-white text-[#2D3142] lg:hidden">
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .16 }} className="border-t border-[#2D3142]/10 bg-white lg:hidden">
            <div className="page-shell py-3">
              {links.map((link) => {
                const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
                return (
                  <Link key={link.to} to={link.to} className={`flex min-h-12 items-center justify-between border-b border-[#2D3142]/10 px-1 text-sm font-medium ${active ? 'text-[#1DA1F2]' : 'text-[#2D3142]'}`}>
                    {link.label}<ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                );
              })}
              <Link to="/contact" className="btn-primary mt-4 w-full">Get Started <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
