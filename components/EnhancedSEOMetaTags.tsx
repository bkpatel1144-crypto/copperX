'use client';

import React from 'react';

interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
}

interface SEOMetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  datePublished?: string;
  dateModified?: string;
  structuredData?: Record<string, any>;
}

export function EnhancedSEOMetaTags({
  title,
  description,
  keywords = [],
  image = 'https://t4.ftcdn.net/jpg/06/45/80/31/360_F_645803185_FiqKXwetmc2H6VyiZwIrJR3zT1I6QpDQ.jpg',
  url = 'https://copperbar.shop',
  type = 'website',
  author = 'Mayank Pokiya',
  datePublished,
  dateModified,
  structuredData,
}: SEOMetaTagsProps) {
  const ogImages: OpenGraphImage[] = [
    {
      url: image,
      width: 1200,
      height: 630,
      alt: title,
      type: 'image/jpeg',
    },
  ];

  const structuredDataScript = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'NewsArticle' : type === 'product' ? 'Product' : 'LocalBusiness',
    headline: title,
    description: description,
    image: ogImages,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CopperX',
      logo: {
        '@type': 'ImageObject',
        url: 'https://copperbar.shop/logo.png',
      },
    },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...structuredData,
  };

  return (
    <>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <meta name="author" content={author} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="CopperX - Premium Copper Supplier" />
      {ogImages.map((img, idx) => (
        <React.Fragment key={idx}>
          <meta property="og:image" content={img.url} />
          {img.width && <meta property="og:image:width" content={img.width.toString()} />}
          {img.height && <meta property="og:image:height" content={img.height.toString()} />}
          {img.alt && <meta property="og:image:alt" content={img.alt} />}
        </React.Fragment>
      ))}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@copperx" />
      <meta name="twitter:site" content="@copperx" />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="en-US" />
      <meta httpEquiv="content-language" content="en-us" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataScript),
        }}
      />
    </>
  );
}
