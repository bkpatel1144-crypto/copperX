import { Metadata } from 'next';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Generate comprehensive metadata for any page
 */
export function generateMetadata(props: SEOProps): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage,
    ogType = 'website',
    canonical,
    author,
    publishedTime,
    modifiedTime,
  } = props;

  return {
    title,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title,
      description,
      type: ogType as any,
      url: canonical || 'https://copperbar.shop',
      siteName: 'CopperX',
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
      creator: '@copperx',
    },
    alternates: {
      canonical: canonical || 'https://copperbar.shop',
    },
  };
}

/**
 * Generate structured data for Organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://copperbar.shop',
    name: 'CopperX',
    alternateName: 'Copper Bar Supplier Surat',
    url: 'https://copperbar.shop',
    logo: 'https://copperbar.shop/logo.png',
    image: 'https://copperbar.shop/copper-bar-main.jpg',
    description:
      'Premium 99.9% pure copper bars supplier in Surat, Gujarat. ISO certified quality.',
    telephone: '+91-8488801197',
    email: 'contact@copperbar.shop',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Block No. 334/3, Vav Road, Kamrej, Jokha',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      postalCode: '394185',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.1458',
      longitude: '72.8479',
    },
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      'https://www.facebook.com/copperx',
      'https://www.instagram.com/copperx',
      'https://www.twitter.com/copperx',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-8488801197',
        contactType: 'Sales',
        areaServed: ['IN', 'Global'],
        availableLanguage: ['en', 'hi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-8488801197',
        contactType: 'Customer Service',
        availableLanguage: ['en', 'hi'],
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
  };
}

/**
 * Generate structured data for Product
 */
export function generateProductSchema(
  productName: string,
  description: string,
  image?: string,
  price?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://copperbar.shop/product#${productName}`,
    name: productName,
    description: description,
    image: image || 'https://copperbar.shop/copper-bar-main.jpg',
    brand: {
      '@type': 'Brand',
      name: 'CopperX',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'CopperX',
      url: 'https://copperbar.shop',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      price: price || 'Contact for price',
      availability: 'https://schema.org/InStock',
      url: 'https://copperbar.shop/product',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Rajesh Kumar',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody:
          'Excellent quality copper bars! The purity is exactly as promised.',
      },
    ],
  };
}

/**
 * Generate structured data for FAQPage
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate structured data for BreadcrumbList
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate JSON-LD script tag
 */
export function generateJsonLd(data: any): string {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

/**
 * Get canonical URL
 */
export function getCanonicalUrl(path: string = ''): string {
  return `https://copperbar.shop${path}`;
}

/**
 * Generate SEO-friendly slug from text
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Optimize image alt text
 */
export function getOptimizedImageAlt(
  filename: string,
  fallback: string = 'Product Image',
): string {
  const mapping: Record<string, string> = {
    'copper-bars-stacked': 'Stacked Premium Copper Bars - 99.9% Pure',
    'copper-bars-pile': 'Premium Copper Bars Pile - Industrial Grade',
    'copper-ingot-hand': 'Copper Ingot in Hand - Premium Quality',
    'copper-bar-main': 'CopperX Premium Copper Bar 1KG',
    'copper-bar-og': 'CopperX Copper Bar - Social Share',
  };

  return mapping[filename] || fallback;
}

export const SEO_KEYWORDS = {
  primary: [
    'copper bar',
    'pure copper',
    'copper supplier',
    'copper ingot',
    'copper sheets',
  ],
  secondary: [
    'Surat copper',
    'copper manufacturer',
    'industrial copper',
    'copper investment',
    'bulk copper orders',
  ],
  location: ['Surat', 'Gujarat', 'India'],
  brand: ['CopperX', 'Mayank Pokiya'],
};
