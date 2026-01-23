// BNC Builders - Portfolio Data
// Images pulled from https://bnc-builders.vercel.app

export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  location: string;
  description?: string;
  featuredImage: string;
  images: string[];
}

export interface PortfolioCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  featuredImage: string;
}

// Portfolio Categories
export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'kitchens',
    name: 'Kitchens',
    slug: 'kitchens',
    description: 'Beautiful kitchen transformations featuring modern designs, custom cabinetry, and premium finishes.',
    featuredImage: 'v1767037548/BNC-BUILDERS/photo-gallery_47th-street-san-diego_A7402402.2506130843199.jpg',
  },
  {
    id: 'bathrooms',
    name: 'Bathrooms',
    slug: 'bathrooms',
    description: 'Luxurious bathroom remodels with spa-like features, elegant fixtures, and custom tilework.',
    featuredImage: 'v1767037551/BNC-BUILDERS/photo-gallery_47-street-san-diego_A7402606.2506130858026.jpg',
  },
  {
    id: 'adus',
    name: 'ADUs',
    slug: 'adus',
    description: 'Accessory Dwelling Units that maximize your property value with thoughtful design and quality construction.',
    featuredImage: 'v1767037552/BNC-BUILDERS/photo-gallery_granite-rd-san-marcos-adu_ADU-1235-GRANITE-RD.jpg',
  },
  {
    id: 'exterior',
    name: 'Exterior Remodeling',
    slug: 'exterior',
    description: 'Stunning outdoor transformations including outdoor kitchens, patios, and landscape enhancements.',
    featuredImage: 'v1767037550/BNC-BUILDERS/photo-gallery_paxton-way-encinitas_PAXTON-WAY-OUTDOOKITCHEN.jpg',
  },
  {
    id: 'common-areas',
    name: 'Common Areas',
    slug: 'common-areas',
    description: 'Living spaces, dining rooms, and entryways transformed with attention to detail and craftsmanship.',
    featuredImage: 'v1767037547/BNC-BUILDERS/photo-gallery_common-areas_A7402357.2506130852409.jpg',
  },
];

// All Portfolio Projects with unique images
export const portfolioProjects: PortfolioProject[] = [
  // KITCHEN PROJECTS - Each with unique image
  {
    id: 'kitchen-47th-street-san-diego',
    title: '47th Street, San Diego',
    slug: '47th-street-san-diego',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'San Diego, CA',
    description: 'A stunning kitchen transformation featuring modern cabinetry, quartz countertops, and contemporary lighting.',
    featuredImage: 'v1767037548/BNC-BUILDERS/photo-gallery_47th-street-san-diego_A7402402.2506130843199.jpg',
    images: [
      'v1767037548/BNC-BUILDERS/photo-gallery_47th-street-san-diego_A7402402.2506130843199.jpg',
    ],
  },
  {
    id: 'kitchen-ezze-street-encinitas',
    title: 'Ezze Street, Encinitas',
    slug: 'ezze-street-encinitas',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'Encinitas, CA',
    description: 'Complete kitchen remodel with custom island, premium appliances, and elegant finishes.',
    featuredImage: 'v1767035994/BNC-BUILDERS/images_kitchen-remodel.2505221027173.jpg',
    images: [
      'v1767035994/BNC-BUILDERS/images_kitchen-remodel.2505221027173.jpg',
    ],
  },
  {
    id: 'kitchen-granite-rd-san-marcos',
    title: 'Granite Rd, San Marcos',
    slug: 'granite-rd-san-marcos',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'San Marcos, CA',
    description: 'Modern kitchen renovation with open floor plan, shaker-style cabinets, and stainless steel appliances.',
    featuredImage: 'v1767048051/BNC-BUILDERS/assets_content_BNC-contentre2.2506231256004.jpg',
    images: [
      'v1767048051/BNC-BUILDERS/assets_content_BNC-contentre2.2506231256004.jpg',
    ],
  },
  {
    id: 'kitchen-south-elm-st-escondido',
    title: 'South Elm St, Escondido',
    slug: 'south-elm-st-escondido',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'Escondido, CA',
    description: 'Elegant kitchen transformation featuring white cabinetry, marble countertops, and modern fixtures.',
    featuredImage: 'v1767048052/BNC-BUILDERS/assets_content_BNC-contentre3.2506231256005.jpg',
    images: [
      'v1767048052/BNC-BUILDERS/assets_content_BNC-contentre3.2506231256005.jpg',
    ],
  },
  {
    id: 'kitchen-stewart-way-encinitas',
    title: 'Stewart Way, Encinitas',
    slug: 'stewart-way-encinitas',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'Encinitas, CA',
    description: 'Contemporary kitchen design with waterfall island, custom lighting, and high-end finishes.',
    featuredImage: 'v1767047232/BNC-BUILDERS/assets_content_v1.2505221433335.jpg',
    images: [
      'v1767047232/BNC-BUILDERS/assets_content_v1.2505221433335.jpg',
    ],
  },
  {
    id: 'kitchen-caminitos-vecinos-san-diego',
    title: 'Caminitos Vecinos, San Diego',
    slug: 'caminitos-vecinos-san-diego',
    category: 'Kitchens',
    categorySlug: 'kitchens',
    location: 'San Diego, CA',
    description: 'Full kitchen renovation with modern design, custom cabinetry, and premium countertops.',
    featuredImage: 'v1767047233/BNC-BUILDERS/assets_content_v2.2505221425034.jpg',
    images: [
      'v1767047233/BNC-BUILDERS/assets_content_v2.2505221425034.jpg',
    ],
  },

  // BATHROOM PROJECTS
  {
    id: 'bathroom-47-street-san-diego',
    title: '47 Street, San Diego',
    slug: '47-street-san-diego',
    category: 'Bathrooms',
    categorySlug: 'bathrooms',
    location: 'San Diego, CA',
    description: 'Luxurious master bathroom remodel with walk-in shower, freestanding tub, and custom vanity.',
    featuredImage: 'v1767037551/BNC-BUILDERS/photo-gallery_47-street-san-diego_A7402606.2506130858026.jpg',
    images: [
      'v1767037551/BNC-BUILDERS/photo-gallery_47-street-san-diego_A7402606.2506130858026.jpg',
    ],
  },
  {
    id: 'bathroom-dexter-place-escondido',
    title: 'Dexter Place, Escondido',
    slug: 'dexter-place-escondido',
    category: 'Bathrooms',
    categorySlug: 'bathrooms',
    location: 'Escondido, CA',
    description: 'Complete bathroom renovation with modern fixtures, custom tilework, and spa-like features.',
    featuredImage: 'v1767035986/BNC-BUILDERS/images_bathroom-remodel.2505221027170.jpg',
    images: [
      'v1767035986/BNC-BUILDERS/images_bathroom-remodel.2505221027170.jpg',
    ],
  },

  // ADU PROJECTS
  {
    id: 'adu-granite-rd-san-marcos',
    title: 'Granite Rd, San Marcos ADU',
    slug: 'granite-rd-san-marcos-adu',
    category: 'ADUs',
    categorySlug: 'adus',
    location: 'San Marcos, CA',
    description: 'Custom-built ADU featuring modern design, full kitchen, and separate living space.',
    featuredImage: 'v1767037552/BNC-BUILDERS/photo-gallery_granite-rd-san-marcos-adu_ADU-1235-GRANITE-RD.jpg',
    images: [
      'v1767037552/BNC-BUILDERS/photo-gallery_granite-rd-san-marcos-adu_ADU-1235-GRANITE-RD.jpg',
    ],
  },
  {
    id: 'adu-ezze-street-encinitas',
    title: 'Ezze Street, Encinitas ADU',
    slug: 'ezze-street-encinitas-adu',
    category: 'ADUs',
    categorySlug: 'adus',
    location: 'Encinitas, CA',
    description: 'Beautiful detached ADU with contemporary design, full amenities, and private entrance.',
    featuredImage: 'v1767037549/BNC-BUILDERS/photo-gallery_our-latest-masterpieces_ADU-EZZE-ST.jpg',
    images: [
      'v1767037549/BNC-BUILDERS/photo-gallery_our-latest-masterpieces_ADU-EZZE-ST.jpg',
    ],
  },

  // EXTERIOR PROJECTS
  {
    id: 'exterior-paxton-way-encinitas',
    title: 'Paxton Way, Encinitas',
    slug: 'paxton-way-encinitas',
    category: 'Exterior Remodeling',
    categorySlug: 'exterior',
    location: 'Encinitas, CA',
    description: 'Stunning outdoor kitchen and patio renovation with custom BBQ island, pergola, and landscape design.',
    featuredImage: 'v1767037550/BNC-BUILDERS/photo-gallery_paxton-way-encinitas_PAXTON-WAY-OUTDOOKITCHEN.jpg',
    images: [
      'v1767037550/BNC-BUILDERS/photo-gallery_paxton-way-encinitas_PAXTON-WAY-OUTDOOKITCHEN.jpg',
    ],
  },
  {
    id: 'exterior-rancho-santa-fe',
    title: 'Rancho Santa Fe, CA',
    slug: 'rancho-santa-fe-ca',
    category: 'Exterior Remodeling',
    categorySlug: 'exterior',
    location: 'Rancho Santa Fe, CA',
    description: 'Comprehensive exterior renovation including new facade, landscaping, and outdoor living space.',
    featuredImage: 'v1767111456/BNC-BUILDERS/assets_content_e1.2505221440455.jpg',
    images: [
      'v1767111456/BNC-BUILDERS/assets_content_e1.2505221440455.jpg',
    ],
  },
  {
    id: 'exterior-el-amigo-rd-del-mar',
    title: 'El Amigo Rd, Del Mar',
    slug: 'el-amigo-rd-del-mar',
    category: 'Exterior Remodeling',
    categorySlug: 'exterior',
    location: 'Del Mar, CA',
    description: 'Beautiful exterior transformation with new siding, windows, and landscaping.',
    featuredImage: 'v1767111458/BNC-BUILDERS/assets_content_e2.2505221442245.jpg',
    images: [
      'v1767111458/BNC-BUILDERS/assets_content_e2.2505221442245.jpg',
    ],
  },
  {
    id: 'exterior-ezze-street-encinitas',
    title: 'Ezze Street, Encinitas',
    slug: 'ezze-street-encinitas-exterior',
    category: 'Exterior Remodeling',
    categorySlug: 'exterior',
    location: 'Encinitas, CA',
    description: 'Complete exterior remodel with modern finishes, new entry, and landscape design.',
    featuredImage: 'v1767035991/BNC-BUILDERS/images_outdoor-kitchen-exterior.2506130542203.jpg',
    images: [
      'v1767035991/BNC-BUILDERS/images_outdoor-kitchen-exterior.2506130542203.jpg',
    ],
  },

  // COMMON AREAS
  {
    id: 'common-areas-showcase',
    title: 'Living Space Transformations',
    slug: 'living-space-transformations',
    category: 'Common Areas',
    categorySlug: 'common-areas',
    location: 'San Diego County',
    description: 'Collection of beautifully transformed living rooms, dining areas, and entryways.',
    featuredImage: 'v1767037547/BNC-BUILDERS/photo-gallery_common-areas_A7402357.2506130852409.jpg',
    images: [
      'v1767037547/BNC-BUILDERS/photo-gallery_common-areas_A7402357.2506130852409.jpg',
      'v1767046827/BNC-BUILDERS/assets_content_v4.2505221425034.jpg',
      'v1767035993/BNC-BUILDERS/images_home-remodel.2505221027177.jpg',
    ],
  },
];

// Helper functions
export function getProjectsByCategory(categorySlug: string): PortfolioProject[] {
  return portfolioProjects.filter(project => project.categorySlug === categorySlug);
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.slug === slug);
}

export function getCategoryBySlug(slug: string): PortfolioCategory | undefined {
  return portfolioCategories.find(category => category.slug === slug);
}

export function getAllProjectSlugs(): { category: string; slug: string }[] {
  return portfolioProjects.map(project => ({
    category: project.categorySlug,
    slug: project.slug,
  }));
}
