import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [{ color: '#d97706', media: '(prefers-color-scheme: light)' }],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://copperbar.shop'),
  title: {
    default: 'Premium Pure Copper 99.9% | Copper Bars | Copper Supplier Surat | CopperX',
    template: '%s | CopperX - Copper Supplier',
  },
  description: 'Premium 99.9% pure copper bars supplier in Surat, Gujarat. Certified quality copper ingots, sheets & plates. Direct from Mayank Pokiya. ISO certified. Fast delivery. Bulk orders. +91 8488801197',
  keywords: [
    'copper bar 1kg',
    'pure copper supplier',
    'copper ingot',
    'copper supplier Surat',
    'copper supplier Gujarat',
    'premium copper bars',
    'industrial copper',
    'copper investment',
    'certified copper 99.9',
    'bulk copper orders',
    'copper manufacturing',
    'copper trading',
    'copper per kg price',
    'best quality copper',
    'certified copper supplier',
    'industrial copper supplier',
  ],
  authors: [{ name: 'Mayank Pokiya', url: 'https://copperbar.shop' }],
  creator: 'Mayank Pokiya',
  publisher: 'CopperX',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://copperbar.shop',
    siteName: 'CopperX - Premium Copper Supplier',
    title: 'Premium Pure Copper 99.9% | Copper Bars | CopperX Surat',
    description: 'Premium 99.9% pure copper bars supplier in Surat, Gujarat. ISO certified. Direct from Mayank Pokiya. +91 8488801197',
    images: [
      {
        url: 'https://copperbar.shop/copper-bar-main.jpg',
        width: 1200,
        height: 630,
        alt: 'CopperX Premium Copper Bar - 99.9% Pure Certified',
        type: 'image/jpeg',
      },
      {
        url: 'https://copperbar.shop/copper-bar-og.jpg',
        width: 800,
        height: 800,
        alt: 'CopperX Premium Copper Bars',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Pure Copper 99.9% | CopperX Surat',
    description: 'Premium pure copper bars supplier. 99.9% certified. Fast delivery. Contact: +91 8488801197',
    images: ['https://copperbar.shop/copper-bar-main.jpg'],
    creator: '@copperx',
    site: '@copperx',
  },
  alternates: {
    canonical: 'https://copperbar.shop',
    languages: {
      'en-US': 'https://copperbar.shop',
      'en-IN': 'https://copperbar.shop',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'Business',
  referrer: 'strict-origin-when-cross-origin',
  applicationName: 'CopperX - Premium Copper Supplier',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'CopperX',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d97706" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
