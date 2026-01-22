// SEO Utilities for CopperX

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

export function generateSeoTitle(mainTitle: string, brandName: string = 'CopperX'): string {
  return `${mainTitle} | ${brandName}`;
}

export function generateMetaDescription(text: string, maxLength: number = 160): string {
  return truncateText(text, maxLength);
}

export function generateKeywords(keywords: string[]): string {
  return keywords.filter(k => k.trim()).join(', ');
}

export const SEO_KEYWORDS = {
  primary: [
    'copper bar 1kg',
    'pure copper',
    'copper ingot',
    'copper supplier Surat',
  ],
  secondary: [
    'premium copper bars',
    'industrial copper',
    'copper investment',
    'copper price',
    'certified copper',
    '99.9 pure copper',
    'copper buyer',
    'bulk copper orders',
    'copper Gujarat',
    'Surat copper supplier',
  ],
  longTail: [
    'where to buy pure copper',
    'copper bar supplier near me',
    'high quality copper supplier',
    'certified pure copper 1kg',
    'copper bulk orders India',
    'industrial copper supplier Gujarat',
    'investment grade copper bars',
    'copper price Surat',
  ],
};

export function getAllKeywords(): string[] {
  return [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.secondary,
    ...SEO_KEYWORDS.longTail,
  ];
}

export function getKeywordDensity(text: string, keyword: string): number {
  const words = text.toLowerCase().split(/\s+/);
  const keywordCount = words.filter(w => w.includes(keyword.toLowerCase())).length;
  return (keywordCount / words.length) * 100;
}

export const SEO_BEST_PRACTICES = {
  titleLength: { min: 30, max: 60 },
  descriptionLength: { min: 120, max: 160 },
  headingH1: 1,
  paragraphLength: { max: 150 },
  imageAltText: true,
  internalLinks: true,
  mobileResponsive: true,
  pageLoadSpeed: '< 3 seconds',
  ssl: true,
  sitemap: true,
  robots: true,
};

export function validateSeoContent(
  title: string,
  description: string,
  content: string
): {
  isValid: boolean;
  warnings: string[];
} {
  const warnings: string[] = [];

  if (title.length < SEO_BEST_PRACTICES.titleLength.min) {
    warnings.push(`Title too short (min: ${SEO_BEST_PRACTICES.titleLength.min})`);
  }
  if (title.length > SEO_BEST_PRACTICES.titleLength.max) {
    warnings.push(`Title too long (max: ${SEO_BEST_PRACTICES.titleLength.max})`);
  }

  if (description.length < SEO_BEST_PRACTICES.descriptionLength.min) {
    warnings.push(`Description too short (min: ${SEO_BEST_PRACTICES.descriptionLength.min})`);
  }
  if (description.length > SEO_BEST_PRACTICES.descriptionLength.max) {
    warnings.push(`Description too long (max: ${SEO_BEST_PRACTICES.descriptionLength.max})`);
  }

  if (!content.includes('<h1>')) {
    warnings.push('Missing H1 heading');
  }

  if (!content.includes('alt=')) {
    warnings.push('Images missing alt text');
  }

  return {
    isValid: warnings.length === 0,
    warnings,
  };
}
