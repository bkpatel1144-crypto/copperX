// components/SeoHead.tsx
'use client';

import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  keywords?: string;
  author?: string;
  robots?: string;
  viewport?: string;
}

export function SeoHead({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  keywords,
  author = 'Mayank Pokiya',
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1.0',
}: SeoHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to set meta tags
    const setMetaTag = (name: string, content: string, isProperty: boolean = false) => {
      let element = document.querySelector(`meta[${isProperty ? 'property' : 'name'}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(isProperty ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Set standard meta tags
    setMetaTag('description', description);
    setMetaTag('viewport', viewport);
    setMetaTag('robots', robots);
    setMetaTag('author', author);
    
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Set OpenGraph meta tags
    setMetaTag('og:title', ogTitle || title, true);
    setMetaTag('og:description', ogDescription || description, true);
    setMetaTag('og:type', 'website', true);
    
    if (ogUrl) {
      setMetaTag('og:url', ogUrl, true);
    }
    
    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
    }

    // Set Twitter meta tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    
    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
    }

    // Set canonical URL
    if (canonical) {
      let canonicalElement = document.querySelector('link[rel="canonical"]');
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.setAttribute('href', canonical);
    }

    // Set additional SEO meta tags
    setMetaTag('language', 'English');
    setMetaTag('revisit-after', '7 days');
    setMetaTag('theme-color', '#b45309');
    
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogUrl, keywords, author, robots, viewport, twitterCard]);

  return null;
}
