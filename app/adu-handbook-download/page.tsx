// BNC Builders - ADU Handbook Download Page

import { Metadata } from 'next';
import { HeroSubpage } from '@/components/sections';
import { Container, Section, Button } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { bannerImages, specialImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Download Our ADU Handbook | ADUs San Diego & ADUs Los Angeles | BNC Builders',
  description: 'Get your free ADU Handbook from BNC Builders Inc. Learn everything about ADUs San Diego and ADUs Los Angeles construction, permits, and financing. The same experts trusted for kitchen remodel Escondido CA, bathroom remodeling San Diego, and remodeling Escondido.',
});

export default function ADUHandbookDownloadPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Download Our ADUs San Diego & ADUs Los Angeles Handbook"
        subtitle="Your comprehensive guide to ADUs San Diego and ADUs Los Angeles construction from BNC Builders - the same experts trusted for kitchen remodel Escondido CA, kitchen remodel San Diego, bathroom remodeling San Diego, bathroom remodeling Escondido, deck repair San Diego, and remodeling Escondido."
        backgroundImage={bannerImages.adu}
      />

      {/* Content */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Everything You Need to Know About ADUs San Diego & ADUs Los Angeles
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                Our comprehensive ADUs San Diego and ADUs Los Angeles Handbook covers everything from regulations and permits to design considerations and construction timelines. Whether you&apos;re looking to create rental income, house extended family, or add a home office, this guide from BNC Builders has you covered. We&apos;re the same team trusted for kitchen remodel Escondido CA, kitchen remodeling services, bathroom remodeling San Diego, bathroom remodeling Escondido, deck repair San Diego, exterior remodeling, and remodeling Escondido.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">What&apos;s Inside:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">San Diego County ADU regulations and requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">Step-by-step permitting guide</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">Design options and floor plan ideas</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">Cost estimates and financing options</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">ROI and rental income potential</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <CloudinaryImage
                publicId={specialImages.aduHandbookCover}
                alt="ADU Handbook Cover"
                width={400}
                height={500}
                className="rounded-lg shadow-xl mx-auto mb-6"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Download Form */}
      <Section background="gray">
        <Container size="sm">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-zinc-900 text-center mb-6">
              Get Your Free Copy
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Download Free Handbook
              </Button>
              <p className="text-xs text-zinc-500 text-center">
                By downloading, you agree to receive occasional updates from BNC Builders Inc.
              </p>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
