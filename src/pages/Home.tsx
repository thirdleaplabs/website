import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PrimaryLink, Reveal, SecondaryLink } from '../components/ui/Primitives';
import { OpenSourceVisual } from '../components/ui/Visuals';

const heroPhoto = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80';
const processPhoto = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80';

export const Home = () => (
  <Layout>
    <SEO
      title="Third Leap Labs | Modern Product Engineering"
      description="Third Leap Labs creates production-ready products across AI, computer vision, Web3 and open-source technology."
      path="/"
    />

    {/* SECTION 1 — HERO */}
    <section className="relative overflow-hidden bg-slate-50 pb-20 pt-36 sm:pb-28 sm:pt-48">
      <div className="page-shell relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="max-w-xl">
          <p className="eyebrow">Product & Engineering Lab</p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[4rem]">
            We build intelligent systems for the real world.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Third Leap Labs creates production-ready products across AI, computer vision, Web3 and open-source technology.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We work across the complete system—from product thinking and architecture to the software people use every day.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PrimaryLink to="/work">Explore our work</PrimaryLink>
            <SecondaryLink to="/contact">Start a conversation</SecondaryLink>
          </div>
        </div>
        
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
              <img
                src={heroPhoto}
                alt="Engineering team collaborating in a modern office"
                className="h-[400px] w-full object-cover lg:h-[600px]"
              />
            </div>
            <p className="mt-4 text-sm text-slate-500 text-center lg:text-right">
              From product thinking to working software.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* SECTION 2 — WHAT WE WORK ACROSS */}
    <section className="section-space border-y border-slate-200 bg-white">
      <div className="page-shell">
        <Reveal>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 h-px w-12 bg-blue-600" />
              <h3 className="text-xl font-semibold text-slate-900">Artificial Intelligence</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                AI agents, analytical engines and intelligent product workflows shaped around real decisions.
              </p>
            </div>
            <div>
              <div className="mb-4 h-px w-12 bg-blue-600" />
              <h3 className="text-xl font-semibold text-slate-900">Computer Vision</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                Edge-to-cloud systems that turn camera activity into useful operational events.
              </p>
            </div>
            <div>
              <div className="mb-4 h-px w-12 bg-blue-600" />
              <h3 className="text-xl font-semibold text-slate-900">Crypto & Web3</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                Products that make blockchain activity, payments and digital trust easier to understand.
              </p>
            </div>
            <div>
              <div className="mb-4 h-px w-12 bg-blue-600" />
              <h3 className="text-xl font-semibold text-slate-900">Open Source</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                Reusable engineering foundations that teams can understand, extend and improve.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* SECTION 3 — SELECTED PRODUCTS */}
    <section className="section-space bg-slate-50">
      <div className="page-shell">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Selected products</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Our products apply advanced technology to clear operational problems. Each one is designed around what users need to understand, decide or complete.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col gap-12 lg:gap-16">
          
          {/* GROUP A — CRYPTO & WEB3 */}
          <Reveal delay={0.1}>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* WhaleScanner */}
              <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 sm:p-12">
                <p className="eyebrow">Crypto intelligence and community</p>
                <h3 className="mt-5 text-3xl font-semibold text-slate-900">WhaleScanner</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  WhaleScanner brings wallet activity, market context, project discovery and community participation into one connected crypto experience.
                </p>
                <div className="mt-8">
                  <h4 className="font-semibold text-slate-900">Problem</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                    Crypto users often move between explorers, market dashboards, project pages and social channels to understand what is happening.
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-slate-900">How we solve it</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                    WhaleScanner brings those signals together so users can discover activity, understand context and participate with better information.
                  </p>
                </div>
                <ul className="mt-8 mb-10 flex flex-col gap-3 text-sm text-slate-600">
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Wallet and market intelligence</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Project discovery</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Signals and risk context</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Community participation</li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link to="/work/whalescanner" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Explore WhaleScanner <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* GoPaySol */}
              <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 sm:p-12">
                <p className="eyebrow">Solana payment workflows</p>
                <h3 className="mt-5 text-3xl font-semibold text-slate-900">GoPaySol</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  GoPaySol helps people and teams request, verify and record Solana payments without taking custody of user funds.
                </p>
                <div className="mt-8">
                  <h4 className="font-semibold text-slate-900">Problem</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                    Crypto payments may be fast, but requesting the correct amount, sharing payment details, verifying settlement and keeping a record are often fragmented.
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-slate-900">How we solve it</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                    GoPaySol creates a clear workflow from payment request to on-chain verification and receipt record.
                  </p>
                </div>
                <ul className="mt-8 mb-10 flex flex-col gap-3 text-sm text-slate-600">
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Payment links and QR requests</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Non-custodial wallet flows</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> On-chain verification</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Payment records</li>
                </ul>
                <div className="mt-auto pt-4">
                  <Link to="/work/gopaysol" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Explore GoPaySol <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* GROUP B — AI & COMPUTER VISION */}
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-16">
                  <p className="eyebrow">AI & Computer Vision</p>
                  <h3 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900">VisionX</h3>
                  <p className="mt-6 text-lg leading-relaxed text-slate-600">
                    An edge-to-cloud video intelligence platform helping teams see important events and respond with operational clarity.
                  </p>
                  <ul className="mt-10 flex flex-col gap-3 text-[15px] text-slate-600">
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Live monitoring</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Edge AI and event detection</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Alerts and evidence</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Incident investigation</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Cloud and mobile access</li>
                    <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Extensible computer-vision modules</li>
                  </ul>
                  <div className="mt-12">
                    <PrimaryLink to="/work/visionx">Explore VisionX</PrimaryLink>
                  </div>
                </div>
                <div className="border-t border-slate-100 bg-slate-50 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-16">
                  <div className="max-w-md">
                    <h4 className="text-xl font-semibold text-slate-900">The problem</h4>
                    <div className="mt-6 space-y-6">
                      <div>
                        <h5 className="font-medium text-slate-900">Too many cameras, not enough clarity</h5>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">Security and operations teams may monitor many video feeds, but important events can still be missed.</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Too many alerts, too little context</h5>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">Raw detections do not always explain what happened, how serious it is or what the operator should do next.</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Slow investigation and response</h5>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">Teams can lose time switching between live feeds, recorded footage, alerts and separate evidence systems.</p>
                      </div>
                    </div>

                    <h4 className="mt-12 text-xl font-semibold text-slate-900">How VisionX helps</h4>
                    <div className="mt-6 space-y-6">
                      <div>
                        <h5 className="font-medium text-slate-900">Focused monitoring</h5>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">VisionX helps teams concentrate on the sites, zones and events that require attention.</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">AI events with operational context</h5>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">Detections are transformed into meaningful events with supporting information, evidence and severity.</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-slate-900">Faster investigation and response</h5>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">Monitoring, alerts, event history and evidence are brought into a connected workflow.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* GROUP C — OPEN ENGINEERING */}
          <Reveal delay={0.2}>
            <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-[1.5fr_1fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <h3 className="text-3xl font-semibold text-slate-900">Open-source engineering</h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                  We build reusable engines, APIs, plugins and developer tools from real product requirements.
                </p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-slate-900">Problem</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Teams repeatedly rebuild common infrastructure, while closed or poorly documented systems become difficult to extend.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">How we help</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      We create understandable foundations, clear extension points and tools that support long-term engineering ownership.
                    </p>
                  </div>
                </div>
                <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Reusable platform components</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Plugin-ready architecture</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> APIs and developer tooling</li>
                  <li className="flex items-center gap-3"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Documentation and stewardship</li>
                </ul>
                <div className="mt-12">
                  <Link to="/open-source" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Explore open source <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center border-t border-slate-100 bg-slate-50 p-10 lg:border-l lg:border-t-0">
                <OpenSourceVisual />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>

    {/* SECTION 4 — HOW WE WORK */}
    <section className="section-space border-t border-slate-200 bg-white">
      <div className="page-shell">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl bg-slate-200">
              <img
                src={processPhoto}
                alt="Engineering team reviewing architecture"
                className="h-auto w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Serious engineering, without the theatre.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We keep the people shaping the architecture close to the product and its users. Decisions are made openly, difficult assumptions are tested early and working software is delivered in focused increments.
              </p>
              
              <div className="mt-12 space-y-8">
                <div className="relative pl-8">
                  <span className="absolute left-0 top-0 font-mono text-sm font-semibold text-blue-600">01</span>
                  <h3 className="text-lg font-semibold text-slate-900">Understand</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    Learn the users, workflow, constraints and existing system.
                  </p>
                </div>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-0 font-mono text-sm font-semibold text-blue-600">02</span>
                  <h3 className="text-lg font-semibold text-slate-900">Architect</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    Shape the product, data, infrastructure and deployment model together.
                  </p>
                </div>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-0 font-mono text-sm font-semibold text-blue-600">03</span>
                  <h3 className="text-lg font-semibold text-slate-900">Build</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    Deliver a serious first version without overengineering every future possibility.
                  </p>
                </div>
                <div className="relative pl-8">
                  <span className="absolute left-0 top-0 font-mono text-sm font-semibold text-blue-600">04</span>
                  <h3 className="text-lg font-semibold text-slate-900">Evolve</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    Use real feedback and operational evidence to improve what ships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* SECTION 5 — FINAL CTA */}
    <section className="section-space border-t border-slate-200 bg-slate-900">
      <div className="page-shell text-center">
        <Reveal>
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Building something technically ambitious?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Tell us about the product, the users and the part that is difficult to get right. We will help turn it into working software.
            </p>
            <div className="mt-10">
              <PrimaryLink to="/contact">Start a conversation</PrimaryLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);
