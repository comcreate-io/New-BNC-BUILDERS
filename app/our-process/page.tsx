// BNC Builders - Our Process Page

'use client';

import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { Phone, ClipboardList, Hammer, Key } from 'lucide-react';
import { useInView } from '@/lib/hooks/useInView';

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We start by listening. Tell us about your vision, your needs, and your budget. We\'ll visit your home, take measurements, and discuss possibilities.',
    icon: Phone,
  },
  {
    number: '02',
    title: 'Design & Proposal',
    description: 'Our team creates a detailed plan with material selections, timelines, and transparent pricing. No surprises, no hidden fees.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Construction',
    description: 'Our skilled craftsmen bring your vision to life. You\'ll have a dedicated project manager keeping you informed every step of the way.',
    icon: Hammer,
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: 'We inspect every detail together. Your project isn\'t complete until you\'re 100% satisfied with the results.',
    icon: Key,
  },
];

export default function OurProcessPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Our Kitchen Remodel Escondido CA & Bathroom Remodeling San Diego Process"
        subtitle="Simple. Transparent. Stress-free. Whether you need kitchen remodeling services, kitchen remodel San Diego, bathroom remodeling Escondido, ADUs San Diego, deck repair San Diego, or remodeling Escondido, BNC Builders makes it easy."
        backgroundImage={bannerImages.faq}
      />

      {/* Main Process Section */}
      <ProcessSection steps={steps} />

      {/* Promise Banner */}
      <Section background="dark" padding="md">
        <Container>
          <AnimatedSection animation="fade-in-up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-1">Our Promise to You</h3>
                <p className="text-zinc-800">Clear communication. Quality craftsmanship. On-time delivery.</p>
              </div>
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors whitespace-nowrap btn-animated hover-glow"
              >
                Get Started Today
              </a>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* What to Expect */}
      <WhatToExpectSection />

      {/* CTA */}
      <CTABanner
        title="Ready to Get Started with Kitchen Remodel Escondido CA, Bathroom Remodeling San Diego, or ADUs?"
        subtitle="Schedule your free consultation today for kitchen remodeling services, kitchen remodel San Diego, kitchen remodel Poway, kitchen renovation San Diego, bathroom remodeling Escondido, bathroom remodel Escondido, ADUs San Diego, ADUs Los Angeles, deck repair San Diego, deck repair contractor, room addition San Diego, exterior remodeling, exterior remodelers, garage remodeling, landscape remodeling, outdoor kitchens, and remodeling Escondido."
        primaryAction={{ label: 'Contact Us', href: '/contact-us' }}
      />
    </>
  );
}

// Process Section with animations
interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

function ProcessSection({ steps }: { steps: Step[] }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="white">
      <Container>
        <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            From Vision to Reality in 4 Steps
          </h2>
          <p className="text-lg text-zinc-600">
            We&apos;ve refined our process over 25 years to make your remodeling experience as smooth as possible.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`group relative bg-zinc-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 hover-lift card-animate ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span className="absolute top-4 right-6 text-8xl font-bold text-zinc-200 group-hover:text-gold/20 transition-colors select-none">
                  {step.number}
                </span>

                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-gold flex items-center justify-center mb-6 shadow-lg shadow-gold/25 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// What to Expect Section with animations
function WhatToExpectSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const items = [
    { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope. A bathroom remodel typically takes 2-4 weeks, while a full kitchen renovation may take 6-10 weeks. We\'ll provide a detailed timeline during your consultation.' },
    { q: 'Do you handle permits?', a: 'Yes! We handle all necessary permits and inspections. Our team ensures your project meets all local building codes and regulations.' },
    { q: 'Can I live in my home during construction?', a: 'In most cases, yes. We take great care to minimize disruption and keep work areas clean and contained. We\'ll discuss logistics during planning.' },
    { q: 'What about unexpected issues?', a: 'We communicate immediately if we discover anything unexpected. Any changes to scope or budget are discussed and approved by you before we proceed.' },
  ];

  return (
    <Section background="gray">
      <Container size="md">
        <AnimatedSection animation="fade-in-up">
          <h2 className="text-3xl font-bold text-dark text-center mb-12">
            What to Expect
          </h2>
        </AnimatedSection>

        <div ref={ref} className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover-lift transition-all card-animate ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h4 className="font-bold text-dark mb-2">{item.q}</h4>
              <p className="text-zinc-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
