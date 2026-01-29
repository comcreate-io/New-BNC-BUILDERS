// BNC Builders - ADU Handbook Download Page

import { Metadata } from 'next';
import { HeroSubpage } from '@/components/sections';
import { Container, Section, Button } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { bannerImages, specialImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Free ADU Planning Guide | ADUs San Diego & ADUs Los Angeles | BNC Builders',
  description: 'Download our comprehensive guide to building ADUs San Diego and ADUs Los Angeles. Learn about permits, costs, design options, and ROI potential from BNC Builders - the same team trusted for kitchen remodel Escondido CA and bathroom remodeling San Diego.',
});

export default function ADUHandbookDownloadPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Your Complete Guide to Building ADUs San Diego and ADUs Los Angeles"
        subtitle="Planning an accessory dwelling unit? This free handbook covers everything from regulations to ROI - created by the same BNC Builders team trusted for kitchen remodel Escondido CA, bathroom remodeling San Diego, and remodeling Escondido projects throughout San Diego County."
        backgroundImage={bannerImages.adu}
      />

      {/* Content */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Everything You Need to Know Before Building an ADU
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                ADUs San Diego and ADUs Los Angeles represent significant investments with significant returns - when done right. This handbook distills our experience building dozens of accessory dwelling units into a practical guide that answers the questions homeowners actually ask. Whether you are considering rental income, housing for family, or simply adding value to your property, this resource from BNC Builders sets you up for success.
              </p>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">What You Will Learn:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">San Diego and Los Angeles ADU regulations - what you can build and where</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">Step-by-step permit process navigation tips that save months</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">Design options and floor plan concepts for different lot sizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">Realistic cost breakdowns and financing options for ADUs San Diego</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">ROI calculations and rental income potential in today market</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <CloudinaryImage
                publicId={specialImages.aduHandbookCover}
                alt="BNC Builders ADU Handbook - Your Complete Guide to ADUs San Diego and ADUs Los Angeles"
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
              Download Your Free ADU Guide
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
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Get My Free ADU Handbook
              </Button>
              <p className="text-xs text-zinc-500 text-center">
                By downloading, you agree to receive occasional updates from BNC Builders about ADUs San Diego, kitchen remodel Escondido CA, bathroom remodeling San Diego, and other remodeling Escondido news.
              </p>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
