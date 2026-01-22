'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AdvancedSeoJsonLd } from '@/components/AdvancedSeoJsonLd';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pb-20 md:pb-0 pt-16 sm:pt-20 md:pt-24">
        <AdvancedSeoJsonLd type="organization" />

      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8">About CopperX</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              CopperX is dedicated to providing the finest quality 1kg copper bars to customers worldwide. We believe in transparency, quality, and exceptional customer service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Why We Stand Out</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-base md:text-lg">
              <li>Premium 99.9% pure copper bars</li>
              <li>ISO 9001 certified production</li>
              <li>Competitive pricing and fast shipping</li>
              <li>Authentic guarantee on all products</li>
              <li>Expert customer support</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Quality Assurance</h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Each copper bar undergoes rigorous quality testing to ensure it meets our high standards. We provide a certificate of authenticity with every purchase.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">Global Reach</h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              We ship worldwide with reliable tracking and fast delivery times. Whether you&apos;re a collector, investor, or industrial buyer, we&apos;re here to serve you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">About the Owner</h2>
            <div className="bg-amber-50 p-6 rounded-lg">
              <p className="text-xl font-bold text-amber-900">Mayank Pokiya</p>
              <p className="text-gray-700 mt-2">
                Founder & Owner of CopperX, dedicated to delivering authentic premium copper bars with excellent customer service.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                Block No. 334/3, Vav Road, Kamrej, Jokha, Surat, Gujarat 394185, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
    </>
  );
}
