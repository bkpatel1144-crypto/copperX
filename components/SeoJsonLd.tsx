export function SeoJsonLd({ type = 'organization' }: { type?: 'organization' | 'product' }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CopperX',
    url: 'https://copperbar.shop',
    logo: 'https://copperbar.shop/logo.png',
    description: 'Premium 1kg Copper Bars Online Store',
    sameAs: [
      'https://www.facebook.com/copperx',
      'https://www.twitter.com/copperx',
      'https://www.instagram.com/copperx',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+1-800-COPPER-X',
      email: 'support@copperbar.shop',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Premium 1KG Copper Bar',
    description: '99.9% pure copper bar, 1kg weight, ISO 9001 certified',
    brand: {
      '@type': 'Brand',
      name: 'CopperX',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://copperbar.shop/product',
      priceCurrency: 'USD',
      price: '49.99',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'CopperX',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: 'Excellent quality copper bar. Highly recommended!',
      author: {
        '@type': 'Person',
        name: 'Verified Customer',
      },
    },
  };

  const schema = type === 'product' ? productSchema : organizationSchema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
