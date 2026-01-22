'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { AdvancedSeoJsonLd } from '@/components/AdvancedSeoJsonLd';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Footer } from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Why 99.9% Pure Copper Matters: Quality Standards Explained',
    excerpt: 'Understanding copper purity grades and why 99.9% pure copper is the industry standard for industrial and investment purposes.',
    category: 'Product Knowledge',
    date: '2024-01-20',
    readTime: '5 min read',
    image: '/blog-1.jpg',
    slug: 'pure-copper-quality',
  },
  {
    id: 2,
    title: 'Copper Investment Guide: Everything You Need to Know',
    excerpt: 'A comprehensive guide to investing in copper bars, market trends, and why copper remains a valuable commodity.',
    category: 'Investment',
    date: '2024-01-18',
    readTime: '7 min read',
    image: '/blog-2.jpg',
    slug: 'copper-investment-guide',
  },
  {
    id: 3,
    title: 'Industrial Uses of Copper: From Conductivity to Construction',
    excerpt: 'Explore the diverse applications of copper in various industries and why high-quality copper is essential.',
    category: 'Industry',
    date: '2024-01-15',
    readTime: '6 min read',
    image: '/blog-3.jpg',
    slug: 'industrial-uses-copper',
  },
  {
    id: 4,
    title: 'Copper Price Trends 2024: Market Analysis',
    excerpt: 'Current copper market trends, price analysis, and factors affecting copper prices in 2024.',
    category: 'Market Analysis',
    date: '2024-01-12',
    readTime: '8 min read',
    image: '/blog-4.jpg',
    slug: 'copper-price-trends-2024',
  },
  {
    id: 5,
    title: 'How to Store and Handle Copper Bars Safely',
    excerpt: 'Best practices for storing, handling, and preserving copper bars to maintain their quality and value.',
    category: 'Tips',
    date: '2024-01-10',
    readTime: '5 min read',
    image: '/blog-5.jpg',
    slug: 'copper-storage-guide',
  },
  {
    id: 6,
    title: 'Copper Supply Chain: From Mining to Your Doorstep',
    excerpt: 'Understanding the copper supply chain and how CopperX ensures quality products reach you directly.',
    category: 'Industry',
    date: '2024-01-08',
    readTime: '6 min read',
    image: '/blog-6.jpg',
    slug: 'copper-supply-chain',
  },
];

export default function BlogPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  return (
    <>
      <AdvancedSeoJsonLd type="organization" />
      <Header />
      <main className="min-h-screen bg-white pb-20 md:pb-0 pt-16 sm:pt-20 md:pt-24">

        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Blog Section */}
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Copper Insights & Market Updates</h1>
            <p className="text-lg text-gray-700">
              Stay informed about copper products, market trends, and industry insights from CopperX
            </p>
          </div>

          {/* Featured Post */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg overflow-hidden mb-12 border border-amber-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <span className="text-amber-600 font-semibold text-sm mb-2">FEATURED</span>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-700 text-lg mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>📅 {blogPosts[0].date}</span>
                  <span>⏱️ {blogPosts[0].readTime}</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-200 to-amber-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📰</div>
                  <p className="text-amber-900 font-semibold">{blogPosts[0].category}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-br from-amber-100 to-amber-50 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-amber-700 text-sm font-semibold">{post.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-amber-600 hover:text-amber-700 font-semibold">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Expert Advice</h2>
            <p className="mb-6 text-lg">Contact Mayank Pokiya for personalized copper solutions</p>
            <a
              href="https://wa.me/918488801197"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-700 font-bold py-3 px-8 rounded-lg hover:bg-amber-50 transition inline-block"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
