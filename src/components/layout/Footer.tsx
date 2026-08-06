import { Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const columns = [
  { title: 'Explore', links: [['Cognisense Cloud', '/cognisense'], ['Products', '/products'], ['Capabilities', '/capabilities'], ['Open Source', '/open-source']] },
  { title: 'Company', links: [['About', '/company'], ['Contact', '/contact'], ['Privacy', '/privacy-policy'], ['Terms', '/legal-disclaimer']] },
];

export const Footer = () => (
  <footer className="border-t border-[#e1e6ec] bg-white text-[#1a1a1a]">
    <div className="page-shell py-12">
      <div className="grid gap-12 lg:grid-cols-[1.35fr_repeat(3,.65fr)]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/logo.svg" alt="" className="h-10 w-10" />
            <span><span className="block text-lg font-semibold tracking-[-.035em]">Third Leap <span className="font-normal">Labs</span></span><span className="mt-1 block text-[8px] font-bold uppercase tracking-[.19em] text-[#0078d4]">Build · Open · Elevate</span></span>
          </Link>
          <p className="mt-5 max-w-sm text-[13px] leading-6 text-[#667085]">Third Leap Labs builds applied AI, computer-vision and data-intelligence products for the physical and digital world.</p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[12px] font-semibold text-[#1a1a1a]">{column.title}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map(([label, to]) => <li key={`${column.title}-${label}`}><Link to={to} className="text-[12px] text-[#667085] transition hover:text-[#0078d4]">{label}</Link></li>)}
            </ul>
          </div>
        ))}
        
        <div>
          <p className="text-[12px] font-semibold text-[#1a1a1a]">Connect</p>
          <ul className="mt-4 space-y-2.5">
            <li><a href="https://linkedin.com/company/thirdleaplabs" target="_blank" rel="noreferrer" className="text-[12px] text-[#667085] transition hover:text-[#0078d4] flex items-center gap-2"><Linkedin className="h-3 w-3" /> LinkedIn</a></li>
            <li><a href="https://github.com/thirdleaplabs" target="_blank" rel="noreferrer" className="text-[12px] text-[#667085] transition hover:text-[#0078d4] flex items-center gap-2"><Github className="h-3 w-3" /> GitHub</a></li>
            <li><a href="https://twitter.com/thirdleaplabs" target="_blank" rel="noreferrer" className="text-[12px] text-[#667085] transition hover:text-[#0078d4] flex items-center gap-2"><Twitter className="h-3 w-3" /> X/Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-[#e4e9ef] pt-6 text-[11px] text-[#7a8595] sm:flex-row sm:items-center sm:justify-between">
        <p>© Third Leap Labs LLC. All rights reserved.</p>
        <div className="flex flex-wrap gap-5"><Link to="/privacy-policy" className="hover:text-[#0078d4]">Privacy Policy</Link><Link to="/legal-disclaimer" className="hover:text-[#0078d4]">Legal</Link><Link to="/security-notice" className="hover:text-[#0078d4]">Security</Link></div>
      </div>
    </div>
  </footer>
);
