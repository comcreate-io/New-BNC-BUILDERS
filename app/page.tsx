// BNC Builders - Home Page (SEO Optimized)

'use client';

import Link from 'next/link';
import { HeroMain, ServiceGrid, TrustBadges, CTABanner, ContentSection, ServiceAreaContact, TeamContactInfo, ProcessSteps } from '@/components/sections';
import { QuickContactForm } from '@/components/forms';
import { Container, Section, Carousel, AnimatedSection } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { interiorServices, exteriorServices } from '@/lib/constants/services';
import { contentImages } from '@/lib/constants/images';
import { portfolioCategories } from '@/lib/constants/portfolio';
import { Star, Quote, Shield, Clock, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from '@/lib/hooks/useInView';

const processSteps = [
  {
    number: 1,
    title: 'Free Consultation',
    description: 'We start by listening to your vision and assessing your space. Whether you need kitchen remodel Escondido CA, kitchen remodel San Diego, bathroom remodeling San Diego, bathroom remodeling Escondido, or ADUs San Diego, we understand your goals and budget.',
  },
  {
    number: 2,
    title: 'Design & Planning',
    description: 'Our experts create detailed plans with 3D landscape design near me technology and renderings so you can visualize your remodeling Escondido project before we begin exterior remodeling or landscape remodeling construction.',
  },
  {
    number: 3,
    title: 'Quality Construction',
    description: 'Our skilled craftsmen bring your vision to life with precision, quality outdoor decking material, and open communication throughout your kitchen remodeling services, garage remodeling, or exterior remodelers project.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Escondido, CA',
    rating: 5,
    text: 'BNC Builders transformed our outdated kitchen into a modern masterpiece. The kitchen remodel Escondido CA team was professional, communicative, and delivered beyond our expectations. Highly recommend their kitchen remodeling services and Escondido kitchen remodeling expertise!',
  },
  {
    name: 'Michael R.',
    location: 'Carlsbad, CA',
    rating: 5,
    text: 'We hired BNC Builders for our ADUs San Diego project and could not be happier. They also do ADUs Los Angeles! They handled everything from permits to final inspection. The quality of work is outstanding for ADU construction.',
  },
  {
    name: 'Jennifer L.',
    location: 'Encinitas, CA',
    rating: 5,
    text: 'Professional, punctual, and perfect results. Our bathroom remodeling Escondido project was completed on time and on budget. BNC Builders bathroom remodeling San Diego and bathroom remodel Escondido attention to detail was impressive.',
  },
];

const coreValues = [
  {
    icon: Shield,
    title: 'Honesty & Transparency',
    description: 'Clear communication and upfront pricing with no hidden surprises for your remodeling Escondido or Escondido remodeling project',
    highlight: 'Trust',
    points: ['Upfront pricing', 'No hidden fees', 'Clear contracts'],
  },
  {
    icon: Award,
    title: 'Quality Craftsmanship',
    description: '30+ years of industry expertise in kitchen remodel San Diego, kitchen remodel Poway, bathroom remodeling San Diego, and exterior remodelers services',
    highlight: '30+ Years',
    points: ['Premium materials', 'Expert techniques', 'Lasting results'],
  },
  {
    icon: Users,
    title: 'Client Focused',
    description: 'Your vision is our priority from consultation to completion on every kitchen remodeling Escondido CA, kitchen renovation San Diego, and ADUs Los Angeles project',
    highlight: 'Priority',
    points: ['Personalized service', 'Open communication', 'Your vision first'],
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Projects completed as promised, on schedule and within budget for deck repair San Diego, deck repair contractor, room addition San Diego, and garage remodeling',
    highlight: 'Reliable',
    points: ['On schedule', 'Within budget', 'No surprises'],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroMain />

      {/* Quick Contact Form */}
      <QuickContactForm />

      {/* Trust Badges */}
      <TrustBadges showBadges={false} showSellingPoints={true} />

      {/* About/Intro Section */}
      <ContentSection
        title="Your Trusted Remodeling Escondido & Escondido Remodeling Partner"
        content={[
          'At BNC Builders Inc., we are your go-to for high-quality remodeling Escondido and Escondido remodeling services throughout San Diego County. Since our founding in 2019, we have completed over 900 projects, leveraging our 30+ years of industry experience and passion for making homeowners\' dreams reality.',
          'Accredited by the Better Business Bureau and a top-rated service provider, you can count on our licensed and insured company for kitchen remodel Escondido CA, kitchen remodel Escondido, kitchen remodel San Diego, kitchen remodel Poway, bathroom remodeling San Diego, bathroom remodeling Escondido, bathroom remodel Escondido, ADUs San Diego, ADUs Los Angeles, room addition San Diego, deck repair San Diego, deck repair contractor, and deck repair services. From Escondido kitchen remodeling and kitchen remodeling Escondido CA to landscape remodeling, outdoor kitchens, and 3D landscape design near me, BNC Builders has you covered.',
          'No matter the job, expect us to make the process stress-free. We communicate openly, perform frequent quality control measures, and work to detail to deliver kitchen renovation San Diego, kitchen remodeling services, bathroom remodeling Escondido, exterior remodeling, exterior remodelers, and garage remodeling results without cost overruns or setbacks. We use quality outdoor decking material for all deck projects.',
        ]}
        image={contentImages.contentImg}
        imageAlt="BNC Builders team at work on remodeling Escondido, kitchen remodel Escondido CA, and bathroom remodeling San Diego project"
        imagePosition="right"
      />

      {/* Stats Section */}
      <StatsSection />

      {/* Interior Services */}
      <ServiceGrid
        title="Interior Remodeling Services"
        subtitle="Transform your home with expert kitchen remodel San Diego, kitchen remodel Escondido CA, kitchen remodeling services, kitchen renovation San Diego, bathroom remodeling Escondido, bathroom remodeling San Diego, bathroom remodel Escondido, garage remodeling, and room addition San Diego services from BNC Builders."
        services={interiorServices}
        columns={3}
      />

      {/* Process Steps */}
      <ProcessSteps
        title="Our Simple 3-Step Process"
        subtitle="BNC Builders makes kitchen remodeling services, kitchen remodel Escondido CA, bathroom remodeling San Diego, bathroom remodeling Escondido, ADUs Los Angeles, ADUs San Diego, and remodeling Escondido stress-free from start to finish."
        steps={processSteps}
        background="gray"
      />

      {/* Exterior Services */}
      <ServiceGrid
        title="Exterior Remodeling Services"
        subtitle="Enhance your outdoor spaces with landscape remodeling, outdoor kitchens, deck repair San Diego, deck repair contractor, deck repair, ADUs San Diego, ADUs Los Angeles, hardscaping, exterior remodeling, exterior remodelers, outdoor decking material, and 3D landscape design near me services from BNC Builders."
        services={exteriorServices}
        columns={3}
      />

      {/* Portfolio Showcase Carousel */}
      <Section background="white">
        <Container>
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
              Recent Kitchen Remodel Escondido CA & Bathroom Remodeling San Diego Projects
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Browse our portfolio to see the quality craftsmanship BNC Builders brings to every kitchen remodeling Escondido CA, kitchen remodel San Diego, kitchen renovation San Diego, bathroom remodeling San Diego, bathroom remodeling Escondido, ADUs San Diego, ADUs Los Angeles, deck repair San Diego, and exterior remodelers project.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200} className="px-4 lg:px-8">
            <Carousel
              autoPlay={true}
              autoPlayInterval={4000}
              showDots={true}
              showArrows={true}
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            >
              {portfolioCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/portfolio/${category.slug}`}
                  className="group relative h-80 rounded-xl overflow-hidden block shadow-lg hover-lift"
                >
                  <CloudinaryImage
                    publicId={category.featuredImage}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors mb-2 drop-shadow-lg">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2 drop-shadow-md">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-3 group-hover:gap-2 transition-all drop-shadow-md">
                      View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </Carousel>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400} className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3 rounded-lg transition-all hover:gap-3 btn-animated"
            >
              View Full Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Core Values - Why Choose Us */}
      <CoreValuesSection coreValues={coreValues} />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Trust Section with Badges */}
      <TrustBadges showBadges={true} showSellingPoints={false} />

      {/* Service Area & Contact Form */}
      <ServiceAreaContact />

      {/* CTA */}
      <CTABanner
        title="Ready for Kitchen Remodel Escondido CA, Bathroom Remodeling San Diego, ADUs San Diego, or Exterior Remodeling?"
        subtitle="Contact BNC Builders for a free estimate on kitchen remodeling services, kitchen remodel San Diego, kitchen renovation San Diego, bathroom remodeling Escondido, bathroom remodel Escondido, ADUs San Diego, ADUs Los Angeles, deck repair San Diego, deck repair contractor, room addition San Diego, exterior remodelers, landscape remodeling, outdoor kitchens, garage remodeling, and remodeling Escondido. We offer financing and warranties."
        primaryAction={{ label: 'Get Free Estimate', href: '/contact-us' }}
        secondaryAction={{ label: 'View Our Portfolio', href: '/portfolio' }}
      />

      {/* Team Contact Info */}
      <TeamContactInfo />
    </>
  );
}

// Stats Section with animations
function StatsSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const stats = [
    { value: '900+', label: 'Projects Completed' },
    { value: '30+', label: 'Years Experience' },
    { value: '5.0', label: 'Star Rating' },
    { value: '100%', label: 'Satisfaction' },
  ];

  return (
    <Section background="dark" padding="md">
      <Container>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`card-animate ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 hover:scale-110 transition-transform cursor-default">
                {stat.value}
              </div>
              <div className="text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Core Values Section with animations
interface CoreValue {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight: string;
  points: string[];
}

function CoreValuesSection({ coreValues }: { coreValues: CoreValue[] }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="dark" padding="lg">
      <Container>
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <span className="text-white font-semibold uppercase tracking-wider text-sm">
            Why Choose BNC Builders
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            The BNC Builders Difference
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            We are not just contractors - we are your partners in creating the home of your dreams through kitchen remodel Poway, kitchen remodel Escondido, kitchen remodel San Diego, bathroom remodeling Escondido, bathroom remodeling San Diego, ADUs Los Angeles, ADUs San Diego, deck repair contractor, and remodeling Escondido services.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-gold/30 transition-all duration-300 hover-lift card-animate ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{value.title}</h3>
                <p className="text-zinc-600 text-sm mb-4">{value.description}</p>
                <ul className="space-y-2 text-left">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// Testimonials Section with animations
interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="white">
      <Container>
        <AnimatedSection animation="fade-in-up" className="text-center mb-12">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
            What Our Clients Say About BNC Builders
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Hear from homeowners who trusted BNC Builders with their kitchen remodel Escondido CA, kitchen remodel San Diego, kitchen remodeling services, bathroom remodeling San Diego, bathroom remodeling Escondido, ADUs San Diego, ADUs Los Angeles, deck repair San Diego, and remodeling Escondido projects.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-zinc-50 rounded-xl p-6 relative hover-lift card-animate ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-gold/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-zinc-600 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={500} className="text-center mt-8">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-semibold transition-all hover:gap-3 link-underline"
          >
            Read More Reviews
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
