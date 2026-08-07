import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';

export const NotFound = () => (
  <Layout>
    <SEO title="Page Not Found | Third Leap Labs" description="The requested page could not be found." path="/404" />
    <main className="site-page pt-16">
      <section className="brand-grid border-b border-[#2D3142]/15">
        <div className="page-shell flex min-h-[620px] flex-col justify-center py-20">
          <p className="mono text-[10px] uppercase tracking-[.08em] text-[#1DA1F2]">Error / 404</p>
          <h1 className="page-display mt-6 max-w-[820px]">This page does not exist.</h1>
          <p className="copy-lg mt-6 max-w-[640px]">The address may be outdated or mistyped. Use the links below to return to a current Third Leap Labs page.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/" className="btn-primary">Back to Home <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/products" className="btn-secondary">View Products</Link>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);
