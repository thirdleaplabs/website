import { Layout } from '../components/layout/Layout';
import { SEO } from '../components/layout/SEO';
import { PageHero, Reveal } from '../components/ui/Primitives';

const sections = [
  {
    title: 'Information we may collect',
    items: [
      'Name and contact details when submitted through forms or email',
      'Email address and message content when contacting us',
      'Basic website analytics information',
      'Technical information such as browser type, device type and pages visited',
    ],
  },
  {
    title: 'How information is used',
    items: [
      'To respond to enquiries',
      'To improve website content and product communication',
      'To understand interest in Third Leap Labs products and capabilities',
      'To maintain website security and reliability',
      'To communicate about products or services when appropriate',
    ],
  },
];

export const PrivacyPolicy = () => (
  <Layout>
    <SEO title="Privacy Policy | Third Leap Labs LLC" description="Privacy policy outlining how Third Leap Labs LLC collects and uses information to operate the website." path="/privacy-policy" />
    <PageHero eyebrow="Legal" title={<>Privacy policy</>} description="Third Leap Labs LLC aims to collect only the information necessary to operate the website, maintain security and respond to enquiries." />
    <section className="section-space bg-white">
      <div className="page-shell">
        <Reveal>
          <div className="surface-card max-w-4xl rounded-[1.8rem] p-7 sm:p-10 lg:p-12">
            <p className="border-b border-black/10 pb-7 text-sm leading-7 text-[#6b7280]">Last reviewed: August 2026</p>
            <div className="divide-y divide-black/10">
              {sections.map((section, index) => (
                <section key={section.title} className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <span className="font-mono text-xs text-[#9ca3af]">0{index + 1}</span>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-[-.04em] text-[#07111f]">{section.title}</h2>
                    <ul className="mt-5 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[15px] leading-7 text-[#5b6472]">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d9bf0]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              ))}

              <section className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                <span className="font-mono text-xs text-[#9ca3af]">03</span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-.04em] text-[#07111f]">What we do not request</h2>
                  <p className="mt-4 text-[15px] leading-8 text-[#5b6472]">Third Leap Labs does not request seed phrases, private keys, wallet recovery phrases or sensitive wallet credentials.</p>
                </div>
              </section>

              <section className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                <span className="font-mono text-xs text-[#9ca3af]">04</span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-.04em] text-[#07111f]">Third-party services</h2>
                  <p className="mt-4 text-[15px] leading-8 text-[#5b6472]">The website may use hosting, analytics, email or infrastructure services provided by third parties. These services may process limited technical information according to their own policies.</p>
                </div>
              </section>

              <section className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-8">
                <span className="font-mono text-xs text-[#9ca3af]">05</span>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-.04em] text-[#07111f]">Contact</h2>
                  <p className="mt-4 text-[15px] leading-8 text-[#5b6472]">For privacy-related questions, contact <a href="mailto:info@thirdleaplabs.com" className="font-semibold text-[#0b7dbd] hover:underline">info@thirdleaplabs.com</a>.</p>
                </div>
              </section>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
);
