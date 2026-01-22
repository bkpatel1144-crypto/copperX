'use client';

interface StructuredDataProps {
  type: 'organization' | 'product' | 'localBusiness' | 'breadcrumb' | 'faq';
}

export function AdvancedSeoJsonLd({ type }: StructuredDataProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CopperX',
    url: 'https://copperbar.shop',
    logo: 'https://copperbar.shop/logo.png',
    description: 'Premium pure copper supplier in Surat, Gujarat',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+91-8488801197',
      email: 'contact@copperbar.shop',
      areaServed: 'IN',
      availableLanguage: ['en', 'gu'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Block No. 334/3, Vav Road',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      postalCode: '394185',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/copperx',
      'https://www.instagram.com/copperx',
      'https://www.linkedin.com/company/copperx',
    ],
    knowsAbout: ['Copper Bars', 'Pure Copper', 'Industrial Copper', 'Copper Supply'],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Premium Pure Copper Bar 1KG',
    description: '99.9% pure copper bar - Premium quality copper for industrial and personal use',
    image: [
      'https://copperbar.shop/copper-bar-1.jpg',
      'https://copperbar.shop/copper-bar-2.jpg',
      'https://copperbar.shop/copper-bar-3.jpg',
    ],
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
      url: 'https://copperbar.shop/product',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      offerCount: '1000+',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Verified Customer',
        },
        datePublished: '2024-01-20',
        description: 'Excellent quality copper. Very professional service.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
        },
      },
    ],
    specifications: 'Weight: 1000g | Purity: 99.9% | Form: Cast Bar',
    sku: 'COPPER-1KG-001',
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://copperbar.shop',
    name: 'CopperX - Premium Copper Supplier',
    url: 'https://copperbar.shop',
    image: 'https://copperbar.shop/logo.png',
    description: 'Premium pure copper supplier in Surat',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Block No. 334/3, Vav Road, Kamrej, Jokha',
      addressLocality: 'Surat',
      addressRegion: 'Gujarat',
      postalCode: '394185',
      addressCountry: 'IN',
    },
    telephone: '+91-8488801197',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '₹₹',
    areaServed: {
      '@type': 'City',
      name: 'Surat',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.1458',
      longitude: '72.7454',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://copperbar.shop',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://copperbar.shop/product',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'About',
        item: 'https://copperbar.shop/about',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://copperbar.shop/contact',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the purity of your copper?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our copper is 99.9% pure, certified and of the highest quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact you?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact Mayank Pokiya at +91 8488801197 or via WhatsApp for inquiries.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer bulk orders?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We offer special pricing for bulk orders. Contact us directly for quotes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are you located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are located in Surat, Gujarat: Block No. 334/3, Vav Road, Kamrej, Jokha, Surat, Gujarat 394185',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the delivery options?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide reliable delivery across India with tracking. Contact us for specific delivery details.',
        },
      },
    ],
  };

  const schemas: Record<string, object> = {
    organization: organizationSchema,
    product: productSchema,
    localBusiness: localBusinessSchema,
    breadcrumb: breadcrumbSchema,
    faq: faqSchema,
  };

  const schema = schemas[type];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
