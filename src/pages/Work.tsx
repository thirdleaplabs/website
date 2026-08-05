import { ArrowRight, Code2, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, Reveal, SectionIntro, PrimaryLink } from '../components/ui/Primitives';
import { GoPaySolVisual, OpenSourceVisual, WhaleScannerVisual } from '../components/ui/Visuals';

const visionxPhoto = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80';

export const Work = () => (
  <Layout>
    <SEO
      title="Work | Third Leap Labs"
      description="Explore Third Leap Labs products across crypto, AI, computer vision and open-source engineering."
      path="/work"
    />
    <PageHero
      eyebrow="Our work"
      title="Products built around real problems."
      description="Third Leap Labs combines specialised technology with complete product engineering—from architecture and infrastructure to the experiences people use."
    />

    <div className="flex flex-col">
      {/* 1. CRYPTO & WEB3 SECTION */}
      <section className="section-space border-b border-slate-200 bg-white">
        <div className="page-shell">
          <Reveal>
            <SectionIntro
              title="Crypto & Web3"
              description="Making blockchain activity, payments, and digital trust easier to understand and use."
            />
          </Reveal>

          <div className="mt-16 flex flex-col gap-16">
            {/* WhaleScanner */}
            <Reveal delay={0.1}>
              <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 lg:grid-cols-2">
                <div className="p-8 sm:p-12">
                  <p className="eyebrow">Crypto intelligence and community</p>
                  <h3 className="mt-4 text-3xl font-semibold text-slate-900">WhaleScanner</h3>
                  <p className="mt-4 text-lg text-slate-600">
                    A connected crypto product for discovery, context, signals and participation.
                  </p>
                  <div className="mt-8 space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900">Problem</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        On-chain activity, market data, project information and community discussion are scattered across disconnected tools.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">How we help</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        WhaleScanner brings those signals together so users can discover activity, understand context and participate with better information.
                      </p>
                    </div>
                  </div>
                  <ul className="mt-8 flex flex-col gap-3 text-sm text-slate-600">
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Wallet and market intelligence</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Project discovery</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Signals and risk context</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Community participation</li>
                  </ul>
                  <div className="mt-10">
                    <Link to="/work/whalescanner" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                      Explore WhaleScanner <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center border-t border-slate-200 bg-white p-8 lg:border-l lg:border-t-0 lg:p-16">
                  <WhaleScannerVisual />
                </div>
              </article>
            </Reveal>

            {/* GoPaySol */}
            <Reveal delay={0.2}>
              <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 lg:grid-cols-2">
                <div className="order-last flex items-center justify-center border-t border-slate-200 bg-white p-8 lg:order-first lg:border-r lg:border-t-0 lg:p-16">
                  <GoPaySolVisual />
                </div>
                <div className="p-8 sm:p-12">
                  <p className="eyebrow">Solana payment workflows</p>
                  <h3 className="mt-4 text-3xl font-semibold text-slate-900">GoPaySol</h3>
                  <p className="mt-4 text-lg text-slate-600">
                    A non-custodial workflow for creating payment requests, sharing links or QR codes, verifying settlement and keeping a record.
                  </p>
                  <div className="mt-8 space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-900">Problem</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        Requesting and confirming crypto payments often relies on copied addresses, manual checks and unclear records.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">How we help</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        GoPaySol creates a clear workflow from payment request to on-chain verification and receipt record.
                      </p>
                    </div>
                  </div>
                  <ul className="mt-8 flex flex-col gap-3 text-sm text-slate-600">
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Payment links and QR requests</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Non-custodial wallet flows</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> On-chain verification</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Payment records</li>
                  </ul>
                  <div className="mt-10">
                    <Link to="/work/gopaysol" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                      Explore GoPaySol <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. AI & COMPUTER VISION SECTION */}
      <section className="section-space border-b border-slate-200 bg-slate-50">
        <div className="page-shell">
          <Reveal>
            <SectionIntro
              title="AI & Computer Vision"
              description="Turning camera activity into useful operational events through edge-to-cloud systems."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <article className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16">
                  <p className="eyebrow">AI & Computer Vision</p>
                  <h3 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900">VisionX</h3>
                  <p className="mt-6 text-lg leading-relaxed text-slate-600">
                    An edge-to-cloud video intelligence platform helping teams see important events and respond with operational clarity.
                  </p>

                  <div className="mt-10">
                    <h4 className="text-xl font-semibold text-slate-900">Problem</h4>
                    <ul className="mt-4 flex flex-col gap-3 text-[15px] text-slate-600">
                      <li className="flex items-start gap-3"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" /> Operators cannot continuously watch every camera.</li>
                      <li className="flex items-start gap-3"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" /> Alerts may arrive without enough context.</li>
                      <li className="flex items-start gap-3"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" /> Investigation is slow when evidence is spread across systems.</li>
                    </ul>
                  </div>

                  <div className="mt-10">
                    <h4 className="text-xl font-semibold text-slate-900">Solution</h4>
                    <ul className="mt-4 flex flex-col gap-3 text-[15px] text-slate-600">
                      <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Focused monitoring</li>
                      <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> AI-generated operational events</li>
                      <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Evidence and event history</li>
                      <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Faster investigation and response</li>
                      <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Edge-to-cloud deployment</li>
                    </ul>
                  </div>

                  <div className="mt-12">
                    <PrimaryLink to="/work/visionx">Explore VisionX</PrimaryLink>
                  </div>
                </div>
                <div className="relative border-t border-slate-100 bg-slate-100 lg:border-l lg:border-t-0">
                  <img 
                    src={visionxPhoto} 
                    alt="Monitoring and data analytics dashboard in a control room" 
                    className="h-full w-full object-cover min-h-[400px]"
                  />
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* 3. OPEN ENGINEERING SECTION */}
      <section className="section-space bg-white">
        <div className="page-shell">
          <Reveal>
            <SectionIntro
              title="Open Engineering"
              description="Building reusable foundations that other engineers can understand, adapt, and extend."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <article className="mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
              <div className="grid lg:grid-cols-[1.5fr_1fr]">
                <div className="p-8 sm:p-12 lg:p-16">
                  <h3 className="text-3xl font-semibold text-slate-900">Open-source engineering</h3>
                  <p className="mt-4 max-w-xl text-lg text-slate-600">
                    We build reusable engines, APIs, plugins and developer tools from real product requirements.
                  </p>
                  
                  <div className="mt-10 grid gap-10 sm:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-slate-900">Why reusable foundations matter</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        Teams repeatedly rebuild common infrastructure. We create understandable foundations and clear extension points that support long-term engineering ownership.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">What we open</h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        We extract selected architecture patterns, APIs, plugins, and developer infrastructure built from real product needs, designing them for open extension.
                      </p>
                    </div>
                  </div>

                  <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-slate-700">
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> APIs, plugins & engines</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Developer tooling</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Documentation and stewardship</li>
                  </ul>

                  <div className="mt-12">
                    <Link to="/open-source" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                      Explore open source <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center border-t border-slate-200 bg-white p-10 lg:border-l lg:border-t-0">
                  <OpenSourceVisual />
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
      
      {/* WHAT COUNTS AS WORK */}
      <section className="section-space border-t border-slate-200 bg-slate-900">
        <div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="max-w-xl">
              <p className="eyebrow !text-slate-400 before:!bg-slate-600">What counts as work</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Products are only as strong as their foundations.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                We also work on architecture, edge runtimes, event pipelines, analytics engines, integrations and the interfaces that make complex technology manageable.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Product systems', 'End-to-end web and mobile products with the infrastructure behind them.', Layers3],
              ['Open foundations', 'Shared engines, APIs and plugin boundaries designed to support extension and reuse.', Code2],
            ].map(([title, copy, Icon]) => (
              <Reveal key={String(title)}>
                <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-7">
                  <Icon className="h-5 w-5 text-blue-400" />
                  <h3 className="mt-6 text-xl font-semibold text-white">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{String(copy)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  </Layout>
);
