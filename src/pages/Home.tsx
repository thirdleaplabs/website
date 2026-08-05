import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { Reveal } from '../components/ui/Primitives';

const heroPhoto =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85';
const processPhoto =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=85';

const TextLink = ({ to, children }: { to: string; children: string }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3 hover:text-blue-900"
  >
    {children}
    <ArrowRight className="h-4 w-4" />
  </Link>
);

const ProblemSolution = ({
  problem,
  solution,
}: {
  problem: string;
  solution: string;
}) => (
  <div className="grid gap-3 border-t border-slate-200 py-5 sm:grid-cols-[0.85fr_1.15fr] sm:gap-8">
    <p className="text-sm font-semibold leading-6 text-slate-900">{problem}</p>
    <p className="text-sm leading-6 text-slate-600">{solution}</p>
  </div>
);

export const Home = () => (
  <Layout>
    <SEO
      title="Third Leap Labs | Product Engineering for AI, Vision and Web3"
      description="Third Leap Labs builds practical products across AI, computer vision, crypto, Web3 and open-source engineering."
      path="/"
    />

    <section className="border-b border-slate-200 bg-[#f7f8fa] pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
            Product and engineering company
          </p>
          <h1 className="mt-6 text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950">
            We build intelligent systems for the real world.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Third Leap Labs turns difficult technical ideas into useful products across AI, computer vision, crypto and open-source engineering.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
            We work across the whole system: the product, the architecture, the data, the deployment and the experience people use every day.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Explore our work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <Reveal delay={0.08}>
          <figure>
            <div className="overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
              <img
                src={heroPhoto}
                alt="Software product team collaborating in a modern office"
                className="aspect-[4/3] w-full rounded-xl object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <figcaption className="mt-4 text-sm leading-6 text-slate-500">
              From product thinking and architecture to working software.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
      <div className="page-shell grid gap-8 md:grid-cols-3 md:gap-0">
        {[
          [
            'AI and computer vision',
            'Systems that interpret information, understand visual events and support better operational decisions.',
          ],
          [
            'Crypto and Web3',
            'Products that make wallet activity, market context and non-custodial payments easier to understand and use.',
          ],
          [
            'Open engineering',
            'Reusable foundations, APIs and extension points designed for long-term product ownership.',
          ],
        ].map(([title, copy], index) => (
          <div
            key={title}
            className={`md:px-9 ${index > 0 ? 'border-t border-slate-200 pt-8 md:border-l md:border-t-0 md:pt-0' : ''}`}
          >
            <p className="text-lg font-semibold tracking-[-0.02em] text-slate-950">{title}</p>
            <p className="mt-3 text-[15px] leading-7 text-slate-600">{copy}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#f7f8fa] py-20 sm:py-28">
      <div className="page-shell">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">Selected work</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
                Products built around real problems.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              We do not begin with a technology demo. We begin with what users are trying to understand, decide or complete—and build the system around that.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 border-y border-slate-300 bg-white">
          <Reveal>
            <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
              <div className="border-b border-slate-200 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-700">Crypto and Web3</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">WhaleScanner</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  A crypto intelligence and community product that brings wallet activity, market context, project discovery and participation into one connected experience.
                </p>
                <div className="mt-8">
                  <TextLink to="/work/whalescanner">Explore WhaleScanner</TextLink>
                </div>
              </div>
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="grid gap-10 xl:grid-cols-2 xl:gap-14">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">The problem</p>
                    <p className="mt-3 text-[15px] leading-7 text-slate-600">
                      Crypto users move between explorers, market dashboards, project pages and social channels just to understand what is happening.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">How we solve it</p>
                    <p className="mt-3 text-[15px] leading-7 text-slate-600">
                      WhaleScanner connects those signals so users can discover activity, understand context and participate with better information.
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid gap-x-8 gap-y-3 border-t border-slate-200 pt-7 text-sm text-slate-600 sm:grid-cols-2">
                  <span>Wallet and market intelligence</span>
                  <span>Project discovery</span>
                  <span>Signals and risk context</span>
                  <span>Community participation</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid border-t border-slate-300 lg:grid-cols-[0.34fr_0.66fr]">
              <div className="border-b border-slate-200 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700">Crypto and Web3</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">GoPaySol</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  A non-custodial Solana payment workflow for creating requests, sharing links or QR codes, verifying settlement and keeping a clear record.
                </p>
                <div className="mt-8">
                  <TextLink to="/work/gopaysol">Explore GoPaySol</TextLink>
                </div>
              </div>
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="grid gap-10 xl:grid-cols-2 xl:gap-14">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">The problem</p>
                    <p className="mt-3 text-[15px] leading-7 text-slate-600">
                      A bare wallet address does not explain the amount, purpose or status of a payment, and verification often becomes a manual task.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">How we solve it</p>
                    <p className="mt-3 text-[15px] leading-7 text-slate-600">
                      GoPaySol creates a structured path from payment request to wallet approval, on-chain verification and receipt record.
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid gap-x-8 gap-y-3 border-t border-slate-200 pt-7 text-sm text-slate-600 sm:grid-cols-2">
                  <span>Payment links and QR requests</span>
                  <span>Non-custodial wallet flows</span>
                  <span>On-chain verification</span>
                  <span>Payment records</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <article className="mt-16 overflow-hidden rounded-2xl bg-[#111827] text-white">
            <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
              <div className="border-b border-white/10 p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-blue-300">AI and computer vision</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.045em]">VisionX</h3>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  An edge-to-cloud video intelligence platform helping teams see important events and respond with operational clarity.
                </p>
                <div className="mt-9">
                  <Link
                    to="/work/visionx"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3"
                  >
                    Explore VisionX
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 text-slate-950 sm:p-12 lg:p-14">
                <div className="grid gap-12 xl:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">What teams struggle with</p>
                    <div className="mt-5">
                      <ProblemSolution
                        problem="Too many cameras, not enough clarity"
                        solution="Important events can still be missed when operators are expected to watch many feeds across sites and shifts."
                      />
                      <ProblemSolution
                        problem="Alerts without enough context"
                        solution="A raw detection rarely explains what happened, how serious it is or what the operator should do next."
                      />
                      <ProblemSolution
                        problem="Slow investigation and response"
                        solution="Teams lose time when live feeds, recorded footage, alerts and evidence sit in separate systems."
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-950">How VisionX helps</p>
                    <div className="mt-5">
                      <ProblemSolution
                        problem="Focused monitoring"
                        solution="Organise sites, zones and events around what requires attention instead of presenting another wall of video."
                      />
                      <ProblemSolution
                        problem="AI events with operational context"
                        solution="Turn detections into meaningful events with severity, supporting evidence and useful history."
                      />
                      <ProblemSolution
                        problem="A connected response workflow"
                        solution="Bring monitoring, alerts, investigation and evidence together so teams can act with confidence."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="mt-12 border-y border-slate-300 bg-white py-10 sm:py-14">
            <div className="grid gap-10 px-7 sm:px-10 lg:grid-cols-[0.38fr_0.62fr] lg:px-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Open engineering</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Open-source foundations</h3>
                <div className="mt-7">
                  <TextLink to="/open-source">Explore open source</TextLink>
                </div>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-slate-950">The problem</p>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    Teams repeatedly rebuild common infrastructure, while closed or poorly documented systems become expensive to extend and hand over.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">How we help</p>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    We create reusable engines, clear extension points, APIs and developer tooling designed for long-term engineering ownership.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>

    <section className="border-t border-slate-200 bg-white py-20 sm:py-28">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal>
          <figure>
            <img
              src={processPhoto}
              alt="Software engineers reviewing a product together"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">How we work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
              Serious engineering, without the theatre.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We keep the people shaping the architecture close to the product and its users. Difficult assumptions are tested early, decisions stay visible and working software is delivered in focused increments.
            </p>

            <ol className="mt-9 border-t border-slate-200">
              {[
                ['01', 'Understand', 'Learn the users, workflow, constraints and existing system.'],
                ['02', 'Architect', 'Shape the product, data, infrastructure and deployment model together.'],
                ['03', 'Build', 'Deliver a serious first version without overengineering every future possibility.'],
                ['04', 'Evolve', 'Use real feedback and operational evidence to improve what ships.'],
              ].map(([number, title, copy]) => (
                <li key={number} className="grid gap-2 border-b border-slate-200 py-5 sm:grid-cols-[3rem_8rem_1fr] sm:items-start">
                  <span className="text-sm font-semibold text-blue-700">{number}</span>
                  <span className="font-semibold text-slate-950">{title}</span>
                  <span className="text-sm leading-6 text-slate-600">{copy}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="page-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Building something technically ambitious?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Tell us about the product, the users and the part that is difficult to get right. We will help turn it into working software.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Start a conversation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);
