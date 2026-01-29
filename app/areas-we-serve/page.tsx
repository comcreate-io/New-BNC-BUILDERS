// BNC Builders - Areas We Serve Page

import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { MapPin, Building2, Phone, ChefHat, Bath, Home, Building, Fence, UtensilsCrossed, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: 'Kitchen Remodel San Diego | Kitchen Remodel Escondido CA | Bathroom Remodeling Escondido Areas | BNC Builders',
  description: 'BNC Builders provides kitchen remodel Escondido CA, kitchen remodel San Diego, kitchen remodel Poway, kitchen remodeling services, kitchen renovation San Diego, Escondido kitchen remodeling, bathroom remodeling San Diego, bathroom remodeling Escondido, bathroom remodel Escondido, ADUs San Diego, ADUs Los Angeles, deck repair San Diego, deck repair contractor, exterior remodeling, exterior remodelers, garage remodeling, landscape remodeling, outdoor kitchens, and remodeling Escondido throughout San Diego County.',
});

const regions = {
  coastal: {
    name: 'Coastal Communities',
    areas: ['Carlsbad', 'Encinitas', 'Oceanside', 'Solana Beach', 'La Jolla'],
  },
  inland: {
    name: 'Inland Cities',
    areas: ['Escondido', 'Poway', 'Vista', 'Valley Center', 'Rancho Santa Fe'],
  },
  south: {
    name: 'South County',
    areas: ['Chula Vista', 'El Cajon', 'La Mesa', 'National City'],
  },
};

const services = [
  { title: 'Kitchen Remodel Escondido CA', href: '/kitchen-remodeling', icon: ChefHat },
  { title: 'Bathroom Remodeling San Diego', href: '/bathroom-remodeling', icon: Bath },
  { title: 'Remodeling Escondido', href: '/home-remodeling', icon: Home },
  { title: 'ADUs San Diego & ADUs Los Angeles', href: '/adus', icon: Building },
  { title: 'Exterior Remodelers', href: '/exterior-remodeling', icon: Fence },
  { title: 'Outdoor Kitchens', href: '/outdoor-kitchens', icon: UtensilsCrossed },
];

export default function AreasWeServePage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Kitchen Remodel San Diego, Kitchen Remodel Escondido CA & Bathroom Remodeling San Diego Service Areas"
        subtitle="BNC Builders proudly serves kitchen remodeling services, kitchen remodel Poway, kitchen renovation San Diego, Escondido kitchen remodeling, bathroom remodeling San Diego, bathroom remodeling Escondido, bathroom remodel Escondido, ADUs San Diego, ADUs Los Angeles, deck repair San Diego, deck repair contractor, deck repair, room addition San Diego, exterior remodeling, exterior remodelers, garage remodeling, landscape remodeling, outdoor kitchens, 3D landscape design near me, and remodeling Escondido throughout San Diego County."
        backgroundImage={bannerImages.areasWeServe}
      />

      {/* Headquarters Feature */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                Our Home Base
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mt-2 mb-4">
                Remodeling Escondido Headquarters Serving All of San Diego County
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                From our remodeling Escondido and Escondido remodeling headquarters, BNC Builders proudly delivers kitchen remodel San Diego, kitchen remodel Escondido CA, kitchen remodel Escondido, kitchen remodel Poway, kitchen remodeling services, kitchen renovation San Diego, Escondido kitchen remodeling, bathroom remodeling Escondido, bathroom remodeling San Diego, bathroom remodel Escondido, ADUs San Diego, ADUs Los Angeles, deck repair San Diego, deck repair contractor, deck repair, exterior remodeling, exterior remodelers, garage remodeling, landscape remodeling, outdoor kitchens, and 3D landscape design near me. Our local expertise means we understand architectural styles, climate considerations, and permitting requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Get a Free Quote
                </a>
                <a
                  href="https://maps.google.com/?q=101+State+Pl+Suite+N,+Escondido,+CA+92029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-zinc-800 text-zinc-800 font-semibold px-6 py-3 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Visit Our Office
                </a>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gold rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-zinc-900 mb-1">14+</div>
                  <div className="text-zinc-800 text-sm">Cities Served</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-zinc-900 mb-1">900+</div>
                  <div className="text-zinc-800 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-zinc-900 mb-1">30+</div>
                  <div className="text-zinc-800 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-zinc-900 mb-1">5.0</div>
                  <div className="text-zinc-800 text-sm">Star Rating</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-zinc-800/20">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-zinc-800 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-zinc-900">101 State Pl Suite N</div>
                    <div className="text-zinc-800 text-sm">Escondido, CA 92029</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service Areas by Region */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Kitchen Remodel Escondido CA & Bathroom Remodeling San Diego Communities
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              No matter where you are in San Diego County, BNC Builders brings expert kitchen remodeling services, kitchen remodel San Diego, kitchen remodel Poway, kitchen renovation San Diego, bathroom remodeling Escondido, bathroom remodeling San Diego, bathroom remodel Escondido, ADUs San Diego, ADUs Los Angeles, deck repair San Diego, deck repair contractor, deck repair, exterior remodelers, exterior remodeling, garage remodeling, landscape remodeling, and outdoor kitchens quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(regions).map(([key, region]) => (
              <div key={key} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="bg-gold px-6 py-4">
                  <h3 className="text-xl font-bold text-zinc-900">{region.name}</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {region.areas.map((area) => (
                    <li key={area} className="flex items-center gap-3 group">
                      <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                        <MapPin className="w-4 h-4 text-gold group-hover:text-white transition-colors" />
                      </span>
                      <span className="font-medium text-zinc-700">{area}, CA</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-zinc-500 mt-8">
            Don&apos;t see your city? <Link href="/contact-us" className="text-gold hover:underline font-medium">Contact us</Link> — we likely serve your area too!
          </p>
        </Container>
      </Section>

      {/* Services Available */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Full-Service Kitchen Remodeling Services & Remodeling Escondido in Every Location
            </h2>
            <p className="text-zinc-600">
              All kitchen remodel San Diego, kitchen remodel Escondido CA, kitchen remodel Poway, kitchen renovation San Diego, bathroom remodeling Escondido, bathroom remodeling San Diego, ADUs San Diego, ADUs Los Angeles, deck repair San Diego, deck repair contractor, exterior remodeling, exterior remodelers, garage remodeling, landscape remodeling, outdoor kitchens, and remodeling Escondido services available throughout San Diego County
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center gap-4 bg-zinc-50 rounded-xl p-5 hover:bg-gold hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold text-dark group-hover:text-white transition-colors flex-1">
                    {service.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why Local Matters */}
      <Section background="dark" padding="md">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: 'Local Expertise',
                description: 'We know San Diego building codes, permit processes, and architectural styles inside and out.',
              },
              {
                title: 'Quick Response',
                description: 'Being local means faster consultations, quicker project starts, and responsive service.',
              },
              {
                title: 'Community Focused',
                description: 'We live and work here too. Your neighbors are our neighbors, and your referrals are our reputation.',
              },
            ].map((item, index) => (
              <div key={index} className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-800">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready for Kitchen Remodel Escondido CA, Kitchen Remodel San Diego, or Bathroom Remodeling San Diego?"
        subtitle="Contact BNC Builders for kitchen remodeling services, kitchen remodel Poway, kitchen renovation San Diego, Escondido kitchen remodeling, bathroom remodeling Escondido, bathroom remodel Escondido, ADUs San Diego, ADUs Los Angeles, deck repair San Diego, deck repair contractor, deck repair, room addition San Diego, exterior remodeling, exterior remodelers, garage remodeling, landscape remodeling, outdoor kitchens, outdoor decking material, 3D landscape design near me, and remodeling Escondido anywhere in San Diego County."
        primaryAction={{ label: 'Get Free Quote', href: '/contact-us' }}
      />
    </>
  );
}
