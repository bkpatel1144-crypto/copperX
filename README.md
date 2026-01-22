# CopperX - Premium 1KG Copper Bar E-Commerce Store

A modern, SEO-optimized Next.js e-commerce platform for selling premium 1kg copper bars.

## Features

✨ **Powerful SEO Optimization**
- XML Sitemap for search engines
- Robots.txt configuration
- Structured Data (JSON-LD) schema markup
- Open Graph meta tags
- Dynamic metadata for all pages
- Canonical URLs

📱 **Responsive Design**
- Mobile-first approach
- Beautiful UI with Tailwind CSS
- Smooth animations and transitions

🚀 **Performance**
- Next.js 14 with App Router
- Optimized images and assets
- Fast page load times
- Server-side rendering

🛒 **E-Commerce Ready**
- Product showcase page
- Product specifications
- Pricing and CTAs
- Contact form
- About us page
- FAQ section

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
copperX/
├── app/
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx               # Homepage
│   ├── globals.css            # Global styles
│   ├── product/
│   │   └── page.tsx           # Product details page
│   ├── about/
│   │   └── page.tsx           # About us page
│   ├── contact/
│   │   └── page.tsx           # Contact page
│   ├── sitemap.xml/
│   │   └── route.ts           # Dynamic sitemap
│   └── robots.txt/
│       └── route.ts           # Robots.txt
├── components/
│   └── SeoJsonLd.tsx          # Structured data component
├── public/                     # Static assets
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## SEO Features

### 1. **Metadata Management**
- Per-page metadata with titles, descriptions, and keywords
- Open Graph tags for social sharing
- Twitter card configuration

### 2. **Structured Data**
- Organization schema (JSON-LD)
- Product schema with ratings and offers
- Rich snippets for search results

### 3. **Technical SEO**
- XML sitemap auto-generation
- Robots.txt for crawlers
- Canonical URLs
- Mobile-friendly design
- Fast Core Web Vitals

### 4. **Content SEO**
- Keyword-rich page titles and meta descriptions
- Semantic HTML structure
- Heading hierarchy optimization
- Alt text for images

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```bash
docker build -t copperx .
docker run -p 3000:3000 copperx
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://copperbar.shop
```

## Performance Optimization

- Images: Use Next.js Image component
- Fonts: Google Fonts via `next/font`
- CSS: Tailwind CSS with PurgeCSS
- JavaScript: Code splitting and lazy loading
- Compression: Gzip and Brotli

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project as a template

## Support

For questions or support, contact: support@copperbar.shop

---

**CopperX** - Premium Copper Since 2024