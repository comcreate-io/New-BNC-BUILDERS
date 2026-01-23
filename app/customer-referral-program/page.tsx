// BNC Builders - Customer Referral Program Page

import { Metadata } from 'next';
import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, Button } from '@/components/ui';
import { CloudinaryImage } from '@/components/ui/CloudinaryImage';
import { bannerImages, specialImages } from '@/lib/constants/images';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Customer Referral Program',
  description: 'Refer friends and family to BNC Builders Inc. and earn rewards! Join our Refer and Dine program today.',
});

export default function CustomerReferralProgramPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Customer Referral Program"
        subtitle="Refer and Dine - Earn rewards for sharing the BNC experience"
        backgroundImage={bannerImages.faq}
      />

      {/* Program Info */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">
                Refer and Dine Program
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                Know someone who could use our services? Refer them to BNC Builders Inc. and when they complete a project with us, you&apos;ll receive a reward as our thank you!
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">Easy to participate - just fill out the referral form</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">Earn rewards when your referral completes a project</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-zinc-700">No limit on referrals - the more you refer, the more you earn</span>
                </li>
              </ul>
            </div>
            <div>
              <CloudinaryImage
                publicId={specialImages.referAndDine}
                alt="Refer and Dine Program"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Referral Form */}
      <Section background="gray">
        <Container size="md">
          <h2 className="text-2xl font-bold text-zinc-900 text-center mb-8">
            Submit a Referral
          </h2>
          <form className="bg-white rounded-lg p-8 shadow-md space-y-6">
            <h3 className="font-semibold text-zinc-900">Your Information</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="referrerName" className="block text-sm font-medium text-zinc-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="referrerName"
                  name="referrerName"
                  required
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="referrerEmail" className="block text-sm font-medium text-zinc-700 mb-1">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="referrerEmail"
                  name="referrerEmail"
                  required
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="referrerPhone" className="block text-sm font-medium text-zinc-700 mb-1">
                  Your Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="referrerPhone"
                  name="referrerPhone"
                  required
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            <h3 className="font-semibold text-zinc-900 pt-4">Referral Information</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="referredName" className="block text-sm font-medium text-zinc-700 mb-1">
                  Their Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="referredName"
                  name="referredName"
                  required
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="referredEmail" className="block text-sm font-medium text-zinc-700 mb-1">
                  Their Email
                </label>
                <input
                  type="email"
                  id="referredEmail"
                  name="referredEmail"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label htmlFor="referredPhone" className="block text-sm font-medium text-zinc-700 mb-1">
                  Their Phone
                </label>
                <input
                  type="tel"
                  id="referredPhone"
                  name="referredPhone"
                  className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                Additional Notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full px-4 py-3 border border-zinc-300 rounded-md focus:ring-2 focus:ring-gold"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Referral
            </Button>
          </form>
        </Container>
      </Section>
    </>
  );
}
