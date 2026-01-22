// lib/og-image-config.ts
// Configuration for Open Graph images

export const OG_IMAGE_CONFIG = {
  width: 1200,
  height: 630,
  fonts: {
    title: 'bold 60px system-ui',
    description: '24px system-ui',
  },
  colors: {
    background: '#FEF3C7', // amber-100
    primary: '#B45309',    // amber-700
    text: '#44260F',       // amber-900
    accent: '#F59E0B',     // amber-400
  },
};

export const OG_IMAGES = {
  default: 'https://copperbar.shop/og-image.png',
  home: 'https://copperbar.shop/og-home.png',
  product: 'https://copperbar.shop/og-product.png',
  about: 'https://copperbar.shop/og-about.png',
  contact: 'https://copperbar.shop/og-contact.png',
  blog: 'https://copperbar.shop/og-blog.png',
  faqs: 'https://copperbar.shop/og-faqs.png',
};

export function generateOgImageUrl(
  title: string,
  description: string,
  page: 'home' | 'product' | 'about' | 'contact' | 'blog' | 'faqs' = 'home'
): string {
  // In production, you would use a service like Vercel OG Image Generation
  // For now, return a placeholder URL
  return OG_IMAGES[page] || OG_IMAGES.default;
}
