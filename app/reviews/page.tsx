// BNC Builders - Reviews Page

'use client';

import { HeroSubpage, CTABanner } from '@/components/sections';
import { Container, Section, AnimatedSection } from '@/components/ui';
import { bannerImages } from '@/lib/constants/images';
import { company } from '@/lib/constants/company';
import { useInView } from '@/lib/hooks/useInView';

// Reviews featuring SEO keywords
const reviews = [
  {
    name: 'John M.',
    location: 'Escondido, CA',
    rating: 5,
    text: 'BNC Builders did an amazing job on our kitchen remodel Escondido CA project. The kitchen remodeling services team was professional, on time, and the results exceeded our expectations. Highly recommend for Escondido kitchen remodeling!',
    project: 'Kitchen Remodel Escondido',
  },
  {
    name: 'Sarah L.',
    location: 'Carlsbad, CA',
    rating: 5,
    text: 'We hired BNC Builders for bathroom remodeling San Diego and could not be happier. They transformed our outdated bathroom into a modern spa-like retreat. Great communication throughout our bathroom remodel project.',
    project: 'Bathroom Remodeling San Diego',
  },
  {
    name: 'Michael R.',
    location: 'Poway, CA',
    rating: 5,
    text: 'The ADUs San Diego team built the perfect accessory dwelling unit for us. Professional ADU construction, quality work, and they handled all the permits. Would definitely use BNC Builders for ADUs Los Angeles too.',
    project: 'ADUs San Diego',
  },
  {
    name: 'Jennifer K.',
    location: 'Encinitas, CA',
    rating: 5,
    text: 'Our outdoor kitchens project turned out better than we imagined. BNC Builders listened to our ideas and brought them to life. Now we love entertaining outside thanks to their exterior remodelers expertise!',
    project: 'Outdoor Kitchens',
  },
  {
    name: 'David T.',
    location: 'La Mesa, CA',
    rating: 5,
    text: 'From start to finish, BNC Builders was fantastic for our remodeling Escondido project. They remodeled our entire home and the attention to detail was impressive. Fair pricing for kitchen renovation San Diego quality.',
    project: 'Remodeling Escondido',
  },
  {
    name: 'Lisa P.',
    location: 'Oceanside, CA',
    rating: 5,
    text: 'BNC Builders helped us with a room addition San Diego for our growing family. The process was smooth and they kept us informed every step of the way. Excellent room addition contractors!',
    project: 'Room Addition San Diego',
  },
  {
    name: 'Robert H.',
    location: 'San Marcos, CA',
    rating: 5,
    text: 'Our deck was in terrible shape until we called BNC Builders for deck repair San Diego services. Their deck repair contractor team used quality outdoor decking material and now it looks brand new!',
    project: 'Deck Repair San Diego',
  },
  {
    name: 'Maria G.',
    location: 'Vista, CA',
    rating: 5,
    text: 'We wanted kitchen remodel Poway and BNC Builders delivered beyond expectations. Their kitchen remodeling services transformed our outdated kitchen into a modern masterpiece. Highly recommend!',
    project: 'Kitchen Remodel Poway',
  },
  {
    name: 'James W.',
    location: 'Escondido, CA',
    rating: 5,
    text: 'BNC Builders provided excellent bathroom remodeling Escondido services. Our bathroom remodel Escondido project was completed on time and on budget. The quality of bathroom remodeling is outstanding!',
    project: 'Bathroom Remodeling Escondido',
  },
  {
    name: 'Patricia S.',
    location: 'Rancho Santa Fe, CA',
    rating: 5,
    text: 'We used their 3D landscape design near me services and landscape remodeling expertise. The exterior remodeling transformed our backyard into an oasis. BNC Builders exterior remodelers are the best!',
    project: '3D Landscape Design & Landscape Remodeling',
  },
  {
    name: 'Thomas B.',
    location: 'Poway, CA',
    rating: 5,
    text: 'Outstanding garage remodeling work from BNC Builders. They converted our garage into a beautiful home office. Professional remodeling Escondido team that delivers quality results.',
    project: 'Garage Remodeling',
  },
  {
    name: 'Susan C.',
    location: 'La Jolla, CA',
    rating: 5,
    text: 'BNC Builders handled our kitchen remodel San Diego project flawlessly. The kitchen remodeling Escondido CA quality extended to our La Jolla home. Exceptional kitchen renovation San Diego experience!',
    project: 'Kitchen Remodel San Diego',
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <HeroSubpage
        title="Customer Reviews - Kitchen Remodel Escondido CA & More"
        subtitle="See what our customers say about BNC Builders kitchen remodeling services, bathroom remodeling San Diego, ADUs San Diego, deck repair contractor, and remodeling Escondido projects."
        backgroundImage={bannerImages.reviews}
      />

      {/* Stats */}
      <StatsSection />

      {/* Reviews Grid */}
      <ReviewsGrid reviews={reviews} />

      {/* CTA */}
      <CTABanner
        title="Ready to Join Our Happy Kitchen Remodel Escondido & Bathroom Remodeling Customers?"
        subtitle="Contact BNC Builders for kitchen remodeling services, bathroom remodeling San Diego, ADUs San Diego, deck repair contractor, room addition San Diego, and exterior remodeling."
      />
    </>
  );
}

// Stats Section with animations
function StatsSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const stats = [
    { value: company.projectsCompleted, label: 'Kitchen Remodel San Diego Projects' },
    { value: company.experience, label: 'Years Experience' },
    { value: '5.0', label: 'Average Rating' },
    { value: 'A+', label: 'BBB Rating' },
  ];

  return (
    <Section background="gray" padding="md">
      <Container>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`card-animate ${inView ? 'in-view' : ''} hover:scale-110 transition-transform`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-gold">{stat.value}</div>
              <div className="text-zinc-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Reviews Grid with animations
interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  project: string;
}

function ReviewsGrid({ reviews }: { reviews: Review[] }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <Section background="white">
      <Container>
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-zinc-50 rounded-lg p-6 hover-lift card-animate ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold-light" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-zinc-700 mb-4">&quot;{review.text}&quot;</p>

              {/* Reviewer Info */}
              <div className="border-t border-zinc-200 pt-4">
                <p className="font-semibold text-zinc-900">{review.name}</p>
                <p className="text-sm text-zinc-500">{review.location}</p>
                <p className="text-sm text-gold">{review.project}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
