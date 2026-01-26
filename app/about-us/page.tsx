// BNC Builders - About Us Page (SEO Optimized)

'use client';

import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages, contentImages } from '@/lib/constants/images';
import { coreValues } from '@/lib/constants/company';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { CheckCircle, Heart, Award, Users, Calendar, Home, Star, Shield } from 'lucide-react';
import { useInView } from '@/lib/hooks/useInView';

const stats = [
  { value: '900+', label: 'Projects Completed', icon: Home },
  { value: '30+', label: 'Years Experience', icon: Calendar },
  { value: '100%', label: 'Customer Focused', icon: Heart },
  { value: 'A+', label: 'BBB Rating', icon: Award },
];

const coreValueIcons: Record<string, React.ElementType> = {
  honesty_transparency: Shield,
  extreme_ownership: Award,
  team_first: Users,
  clear_communication: CheckCircle,
  client_obsessed: Heart,
  growth_adaptability: Star,
  pride_passion: Star,
  positive_attitude: Heart,
};

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="About BNC Builders Inc."
        subtitle="Your Trusted Partner for Kitchen Remodel Escondido CA, Bathroom Remodeling San Diego, ADUs San Diego & More"
        backgroundImage={bannerImages.faq}
      />

      {/* Stats Bar */}
      <Section background="dark" padding="md">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="fade-in-up" delay={index * 100}>
                <div className="text-center hover:scale-105 transition-transform">
                  <stat.icon className="w-8 h-8 text-zinc-800 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-zinc-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-zinc-800 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who We Are */}
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                BNC Builders: Kitchen Remodeling Services & Remodeling Escondido Experts
              </h2>
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  At BNC Builders Inc., we are contracting professionals, project managers, and builders who deliver exceptional kitchen remodel San Diego, bathroom remodeling Escondido, ADUs San Diego, and exterior remodeling services. Our licensed and insured team transforms homes using our 30+ years of hard-earned experience and skill.
                </p>
                <p>
                  During every kitchen remodel Escondido CA, bathroom remodeling San Diego, deck repair San Diego, or room addition San Diego project, we strive to make working with us stress-free. Since our founding in 2019, our consistent efforts have earned the trust of hundreds of homeowners in Escondido and across San Diego County.
                </p>
                <p className="font-medium text-dark">
                  For kitchen remodeling services, bathroom remodeling Escondido, ADUs Los Angeles, landscape remodeling, outdoor kitchens, and all your remodeling Escondido needs, choose BNC Builders for affordable, top-notch solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm text-zinc-600 hover:text-gold transition-colors">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600 hover:text-gold transition-colors">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-600 hover:text-gold transition-colors">
                  <CheckCircle className="w-5 h-5 text-gold" />
                  <span>Hablamos Espanol</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right" delay={200}>
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-2xl hover-lift image-reveal">
                  <CloudinaryImage
                    publicId={contentImages.contentre1}
                    alt="BNC Builders team for kitchen remodel Escondido and bathroom remodeling San Diego"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
                {/* Accent box */}
                <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-lg hidden md:block animate-pulse-gold">
                  <div className="text-4xl font-bold text-white">2019</div>
                  <div className="text-white/80 text-sm">Founded</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Mission Statement */}
      <Section background="gray" padding="lg">
        <Container>
          <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Our Mission
            </span>
            <div className="relative mt-8">
              <svg className="w-12 h-12 text-gold/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-2xl md:text-3xl text-dark leading-relaxed font-light">
                Our mission is to provide exceptional kitchen remodel San Diego, bathroom remodeling Escondido, ADUs San Diego, exterior remodeling, and remodeling Escondido services that make a real difference in our customers&apos; lives and set the standard for excellence in construction.
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Mission Pillars */}
      <Section background="white" padding="lg">
        <Container>
          <AnimatedSection animation="fade-in-up" className="text-center mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2">
              Our Mission Pillars
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={0}>
              <div className="group bg-gray-50 rounded-xl p-8 hover:bg-gold transition-all duration-300 h-full hover-lift">
                <div className="w-16 h-16 bg-gold group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <CheckCircle className="w-8 h-8 text-white group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-dark group-hover:text-white mb-4 transition-colors">
                  Exceptional Kitchen Remodeling Services
                </h3>
                <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                  Our project managers and expert craftsmen work transparently on every kitchen remodel Escondido CA, bathroom remodeling San Diego, and ADUs San Diego project. From start to finish, we deliver results you love.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={150}>
              <div className="group bg-gray-50 rounded-xl p-8 hover:bg-gold transition-all duration-300 h-full hover-lift">
                <div className="w-16 h-16 bg-gold group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <Heart className="w-8 h-8 text-white group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-dark group-hover:text-white mb-4 transition-colors">
                  Make a Real Difference
                </h3>
                <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                  We enhance lives through kitchen renovation San Diego, bathroom remodeling Escondido, room addition San Diego, and landscape remodeling that make houses feel more like homes, improving accessibility and meeting growing families&apos; needs.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="group bg-gray-50 rounded-xl p-8 hover:bg-gold transition-all duration-300 h-full hover-lift">
                <div className="w-16 h-16 bg-gold group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <Award className="w-8 h-8 text-white group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-dark group-hover:text-white mb-4 transition-colors">
                  Standard for Excellence
                </h3>
                <p className="text-zinc-600 group-hover:text-white/90 transition-colors">
                  We hold ourselves to high standards for kitchen remodel Poway, bathroom remodeling San Diego, deck repair contractor, and exterior remodelers work. We use premium outdoor decking material and quality craftsmanship.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <CoreValuesSection />

      {/* Why Choose Us */}
      <Section background="white" padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left" className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '900+', label: 'Projects Completed' },
                  { value: '30+', label: 'Years Experience' },
                  { value: 'A+', label: 'BBB Rating' },
                  { value: '5 Star', label: 'Customer Reviews' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-6 hover-lift hover:bg-white hover:shadow-lg transition-all">
                    <div className="text-3xl font-bold text-gold mb-2">{stat.value}</div>
                    <div className="text-zinc-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right" delay={200} className="order-1 lg:order-2">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Why Choose BNC Builders
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-6">
                Trusted for Kitchen Remodel San Diego & Remodeling Escondido
              </h2>
              <div className="space-y-4 text-zinc-600">
                <p>
                  When you choose BNC Builders for kitchen remodeling Escondido CA, bathroom remodeling San Diego, ADUs Los Angeles, or any remodeling project, you are choosing a team that treats your home like our own.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing for kitchen remodel Escondido and bathroom remodeling</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span>Clear communication throughout ADUs San Diego and deck repair San Diego projects</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span>Quality craftsmanship backed by warranty for exterior remodelers</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                    <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span>On-time kitchen renovation San Diego and room addition San Diego completion</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready for Kitchen Remodel Escondido CA, Bathroom Remodeling San Diego, or ADUs?"
        subtitle="Contact BNC Builders today for a free consultation and estimate on kitchen remodeling services, remodeling Escondido, deck repair contractor, and exterior remodeling."
      />
    </>
  );
}

// Core Values Section with animations
function CoreValuesSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="dark" padding="lg">
      <Container>
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <span className="text-zinc-800 font-semibold uppercase tracking-wider text-sm">
            What We Stand For
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mt-2">
            Our Core Values
          </h2>
        </AnimatedSection>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {coreValues.map((value, index) => {
            const IconComponent = coreValueIcons[value.id] || CheckCircle;
            return (
              <div
                key={value.id}
                className={`bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-gold/30 transition-all group hover-lift card-animate ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                  <IconComponent className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-semibold text-zinc-900 text-sm md:text-base">
                  {value.name}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
