import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ScrollToTop } from './ScrollToTop';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen overflow-x-hidden bg-[#f4f5f7] text-[#111827]">
    <ScrollToTop />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);
