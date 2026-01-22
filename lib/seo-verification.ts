// lib/seo-verification.ts
// SEO Verification and Monitoring Configuration

export const SEO_VERIFICATION = {
  google: 'google_site_verification_key_here',
  bing: 'msvalidate.01_key_here',
  yandex: 'yandex-verification_key_here',
};

export const SEARCH_CONSOLE_PROPERTIES = {
  google: {
    propertyUrl: 'https://copperbar.shop',
    method: 'HTML tag verification',
    xmlSitemapUrl: 'https://copperbar.shop/sitemap.xml',
  },
};

export const SEO_MONITORING_KEYWORDS = {
  highPriority: [
    'copper bar 1kg',
    'pure copper',
    'copper supplier',
  ],
  mediumPriority: [
    'copper price',
    'bulk copper',
    'premium copper bars',
  ],
  niche: [
    'copper investment',
    'industrial copper',
    'certified copper',
  ],
};

export const ANALYTICS_TRACKING = {
  googleAnalytics: {
    id: 'G-XXXXXXXXXX',
    events: [
      'page_view',
      'scroll',
      'click',
      'form_submit',
      'phone_call',
      'whatsapp_click',
      'product_view',
      'contact_inquiry',
    ],
  },
  hotjar: {
    id: 'hj_id_here',
  },
};

export const PERFORMANCE_TARGETS = {
  coreWebVitals: {
    lcp: 2500, // Largest Contentful Paint (ms)
    fid: 100,  // First Input Delay (ms)
    cls: 0.1,  // Cumulative Layout Shift
  },
  lighthouse: {
    performance: 90,
    accessibility: 90,
    bestPractices: 90,
    seo: 95,
  },
};

export const CRAWL_BUDGET_OPTIMIZATION = {
  robots: {
    maxSnippet: 160,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  sitemapPriority: {
    home: 1.0,
    product: 0.95,
    about: 0.8,
    contact: 0.8,
    blog: 0.7,
    faqs: 0.7,
  },
};

export const SEO_CONTENT_STRATEGY = {
  targetAudience: 'Businesses and investors interested in premium copper bars',
  contentPillars: [
    'Product Quality & Purity',
    'Business Solutions',
    'Educational Content',
    'Local Availability',
    'Customer Trust & Testimonials',
  ],
  contentTypes: [
    'Blog Posts',
    'FAQs',
    'Product Information',
    'Case Studies',
    'Video Content',
    'Infographics',
  ],
  updateFrequency: 'Weekly (Blog), Monthly (Product)', 
};
