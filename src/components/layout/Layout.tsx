import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { ScrollToTop } from './ScrollToTop';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen overflow-x-hidden bg-ink text-copy">
    <ScrollToTop />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);
