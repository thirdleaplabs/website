import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { Reveal } from '../components/ui/Primitives';

const heroPhoto =
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=88';
const processPhoto =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=2200&q=88';

const ProductLink = ({
  to,
  children,
  inverse = false,
}: {
  to: string;
  children: string;
  inverse?: boolean;
}) => (
  <Link
    to={to}
    className={`inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3 ${
      inverse ? 'text-white hover:text-[#8fd3ff]' : 'text-[#1177b8] hover:text-black'
    }`}
  >
    {children}
    <ArrowRight className="h-4 w-4" />
  </Link>
);

const Statement = ({ title, copy, inverse = false }: { title: string; copy: string; inverse?: boolean }) => (
  <div className={`border-t py-6 ${inverse ? 'border-white/20' : 'border-black/15'}`}>
    <h4 className={`text-base font-semibold ${inverse ? 'text-white' : 'text-black'}`}>{title}</h4>
    <p className={`mt-2 max-w-xl text-[15px] leading-7 ${inverse ? 'text-white/68' : 'text-black/62'}`}>{copy}</p>
  </div>
);

export const Home = () => (
  <Layout>
    <SEO
      title="Third Leap Labs | AI, Computer Vision, Web3 and Open Engineering"
      description="Third Leap Labs builds practical products across AI, computer vision, crypto, Web3 and open-source engineering."
      path="/"
    />

    <section className="relative overflow-hidden bg-[#efeeec] text-black lg:min-h-[100svh]">
      <div className="relative h-[48svh] min-h-[340px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:min-h-0 lg:w-[58%]">
        <img
          src={heroPhoto}
          alt="Software product team collaborating in a bright modern workspace"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#efeeec] lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#efeeec]" />
      </div>

      <div className="page-shell relative z-10 grid pb-16 pt-8 lg:min-h-[100svh] lg:grid-cols-2 lg:items-center lg:pb-20 lg:pt-28">
        <div className="hidden lg:block" />
        <div className="flex flex-col items-center text-center lg:pl-10">
          <img src="/logo.svg" alt="" className="h-20 w-20 sm:h-24 sm:w-24" />
          <p className="mt-5 text-[13px] font-medium uppercase tracking-[0.24em] text-black/55">Third Leap Labs</p>
          <h1 className="mt-7 max-w-xl text-[clamp(2.75rem,5vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-black">
            Intelligent products for the real world.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-black/62 sm:text-lg sm:leading-8">
            We build AI, computer-vision and Web3 products—from edge systems and data platforms to the software people use every day.
          </p>
          <div className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <Link
              to="/work"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1d9bf0] px-7 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Explore our products
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/20 bg-white/45 px-7 py-3 text-sm font-semibold text-black transition hover:border-black hover:bg-white"
            >
              Start a conversation
            </Link>
          </div>
          <Link to="#products" className="mt-6 text-sm text-black/45 transition hover:text-black">
            Learn more
          </Link>
        </div>
      </div>

      <a
        href="#focus"
        aria-label="Scroll to what Third Leap Labs builds"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-black/45 transition hover:text-black lg:block"
      >
        <ArrowDown className="h-7 w-7" strokeWidth={1.5} />
      </a>
    </section>

    <section id="focus" className="border-y border-black/10 bg-white py-20 sm:py-28">
      <div className="page-shell">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-[#1177b8]">What we build</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-black sm:text-6xl">
              Three areas. One engineering mindset.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
          {[
            [
              'AI and computer vision',
              'Systems that interpret information, understand visual events and help teams make better operational decisions.',
            ],
            [
              'Crypto and Web3',
              'Products that make wallet activity, market context and non-custodial payment workflows easier to understand and use.',
            ],
            [
              'Open engineering',
              'Reusable foundations, APIs and extension points designed for long-term ownership and continuous improvement.',
            ],
          ].map(([title, copy], index) => (
            <Reveal key={title} delay={index * 0.06}>
              <div className={`h-full md:px-10 ${index > 0 ? 'border-t border-black/10 pt-10 md:border-l md:border-t-0 md:pt-0' : ''}`}>
                <p className="text-2xl font-semibold tracking-[-0.035em] text-black">{title}</p>
                <p className="mt-5 text-[16px] leading-8 text-black/58">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section id="products" className="bg-[#efeeec] py-20 sm:py-28">
      <div className="page-shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-medium text-[#1177b8]">Selected products</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-black sm:text-6xl">
                Technology with a clear job to do.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-black/60 lg:justify-self-end">
              Each product starts with a real problem: something people struggle to understand, verify, monitor or complete.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-black/20">
          <Reveal>
            <article className="grid border-b border-black/20 py-12 sm:py-16 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
              <div>
                <p className="text-sm font-medium text-[#1177b8]">Crypto intelligence and community</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-black sm:text-5xl">WhaleScanner</h3>
                <p className="mt-6 max-w-lg text-lg leading-8 text-black/60">
                  One connected place for wallet activity, market context, project discovery, signals and crypto communities.
                </p>
                <div className="mt-8">
                  <ProductLink to="/work/whalescanner">Explore WhaleScanner</ProductLink>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <Statement
                  title="The problem"
                  copy="Crypto users jump between explorers, market dashboards, project pages and social channels just to understand what is happening."
                />
                <Statement
                  title="How WhaleScanner helps"
                  copy="It brings those signals together so users can discover activity, understand context and participate with better information."
                />
                <p className="border-t border-black/15 pt-6 text-sm leading-7 text-black/52">
                  Wallet intelligence · Market context · Project discovery · Signals and risk awareness · Community participation
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="grid border-b border-black/20 py-12 sm:py-16 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
              <div>
                <p className="text-sm font-medium text-[#1177b8]">Solana payment workflows</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-black sm:text-5xl">GoPaySol</h3>
                <p className="mt-6 max-w-lg text-lg leading-8 text-black/60">
                  A non-custodial way to create payment requests, share links or QR codes, verify settlement and keep a clear record.
                </p>
                <div className="mt-8">
                  <ProductLink to="/work/gopaysol">Explore GoPaySol</ProductLink>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <Statement
                  title="The problem"
                  copy="A wallet address alone does not explain the amount, purpose or status of a payment, and verification often becomes a manual task."
                />
                <Statement
                  title="How GoPaySol helps"
                  copy="It creates a clear path from payment request to wallet approval, on-chain verification and receipt record—without taking custody of funds."
                />
                <p className="border-t border-black/15 pt-6 text-sm leading-7 text-black/52">
                  Payment links · QR requests · Non-custodial wallet flows · On-chain verification · Payment records
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="bg-black py-20 text-white sm:py-28">
      <div className="page-shell">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <div>
              <p className="text-sm font-medium text-[#72c7ff]">AI and computer vision</p>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.055em] sm:text-7xl">VisionX</h2>
              <p className="mt-7 max-w-lg text-lg leading-8 text-white/62">
                An edge-to-cloud video intelligence platform helping teams detect important events, understand what happened and respond faster.
              </p>
              <div className="mt-9">
                <ProductLink to="/work/visionx" inverse>Explore VisionX</ProductLink>
              </div>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-lg font-semibold">The operational problem</p>
                <Statement
                  inverse
                  title="Continuous monitoring does not scale"
                  copy="Operators cannot maintain full attention across many cameras, sites and shifts."
                />
                <Statement
                  inverse
                  title="Detections lack useful context"
                  copy="An alert needs location, time, severity and evidence before it becomes operationally meaningful."
                />
                <Statement
                  inverse
                  title="Investigation is fragmented"
                  copy="Live feeds, recorded footage, alerts and incident evidence are often spread across separate systems."
                />
              </div>
              <div>
                <p className="text-lg font-semibold">How VisionX helps</p>
                <Statement
                  inverse
                  title="Focused monitoring"
                  copy="Organise cameras, sites and events around what requires attention instead of presenting another wall of video."
                />
                <Statement
                  inverse
                  title="AI events with context"
                  copy="Transform detections into meaningful events with severity, supporting evidence and history."
                />
                <Statement
                  inverse
                  title="Connected response"
                  copy="Bring monitoring, alerts, investigation and evidence into one operational workflow."
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-white py-20 sm:py-28">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
        <Reveal>
          <div>
            <p className="text-sm font-medium text-[#1177b8]">Open engineering</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-black sm:text-6xl">
              Foundations built to be understood and extended.
            </h2>
            <div className="mt-8">
              <ProductLink to="/open-source">Explore open source</ProductLink>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div>
            <Statement
              title="The problem"
              copy="Teams repeatedly rebuild common infrastructure, while closed or poorly documented systems become expensive to extend and hand over."
            />
            <Statement
              title="How we help"
              copy="We create reusable engines, clear extension points, APIs and developer tools designed for long-term engineering ownership."
            />
            <p className="border-t border-black/15 pt-6 text-sm leading-7 text-black/52">
              Reusable components · Plugin-ready architecture · APIs and SDKs · Developer tooling · Documentation and stewardship
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="relative min-h-[70svh] overflow-hidden bg-black text-white">
      <img
        src={processPhoto}
        alt="Software engineers reviewing a product together"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/62" />
      <div className="page-shell relative z-10 flex min-h-[70svh] items-center py-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#72c7ff]">How we work</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Serious engineering, without the theatre.
            </h2>
            <p className="mt-7 text-lg leading-8 text-white/72">
              We keep the people shaping the architecture close to the product and its users. Difficult assumptions are tested early, decisions stay visible and working software is delivered in focused increments.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                ['01', 'Understand', 'Learn the users, workflow, constraints and existing system.'],
                ['02', 'Architect', 'Shape the product, data, infrastructure and deployment model together.'],
                ['03', 'Build', 'Deliver a serious first version without unnecessary complexity.'],
                ['04', 'Evolve', 'Use real feedback and operational evidence to improve what ships.'],
              ].map(([number, title, copy]) => (
                <div key={number} className="border-t border-white/35 pt-4">
                  <p className="text-xs text-[#72c7ff]">{number}</p>
                  <p className="mt-2 text-lg font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/62">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-[#1d9bf0] py-20 text-white sm:py-24">
      <div className="page-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal>
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Building something technically ambitious?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Tell us about the product, the users and the part that is difficult to get right. We will help turn it into working software.
            </p>
          </div>
        </Reveal>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
        >
          Start a conversation
        </Link>
      </div>
    </section>
  </Layout>
);
