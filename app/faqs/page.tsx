'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { AdvancedSeoJsonLd } from '@/components/AdvancedSeoJsonLd';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Footer } from '@/components/Footer';

const faqs = [
  {
    question: 'What is the purity of your copper?',
    answer: 'Our copper is 99.9% pure, certified and of the highest quality. Each batch is tested to ensure premium standards.',
    category: 'Product Quality',
  },
  {
    question: 'How can I contact you for inquiries?',
    answer: 'Contact Mayank Pokiya directly at +91 8488801197 or via WhatsApp. We respond quickly to all inquiries.',
    category: 'Contact',
  },
  {
    question: 'Do you offer bulk orders and discounts?',
    answer: 'Yes! We offer special pricing and discounts for bulk orders. Contact us directly for custom quotes.',
    category: 'Pricing',
  },
  {
    question: 'Where are you located?',
    answer: 'We are based in Surat, Gujarat: Block No. 334/3, Vav Road, Kamrej, Jokha, Surat, Gujarat 394185',
    category: 'Location',
  },
  {
    question: 'What are the delivery options?',
    answer: 'We provide reliable delivery across India with tracking. Delivery time and charges depend on location and order size.',
    category: 'Delivery',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods. Contact Mayank to discuss options that work best for you.',
    category: 'Payment',
  },
  {
    question: 'Can I visit your facility?',
    answer: 'Yes, we welcome visits from customers. Please contact us to arrange a convenient time.',
    category: 'Facility',
  },
  {
    question: 'Do you provide certificates of authenticity?',
    answer: 'Yes, all our copper products come with proper documentation and quality certificates.',
    category: 'Certification',
  },
];

export default function FAQsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'FAQs', url: '/faqs' },
  ];

  return (
    <>
      <AdvancedSeoJsonLd type="faq" />
      <Header />
      <main className="min-h-screen bg-white pb-20 md:pb-0 pt-16 sm:pt-20 md:pt-24">

        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-700 mb-12">
            Find answers to common questions about our copper products and services
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="border border-amber-200 rounded-lg p-6 group cursor-pointer hover:bg-amber-50 transition">
                <summary className="flex items-center justify-between font-semibold text-lg text-gray-900">
                  <span className="group-open:text-amber-700">{faq.question}</span>
                  <span className="text-amber-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  <p>{faq.answer}</p>
                  <p className="text-sm text-amber-600 mt-3 font-medium">Category: {faq.category}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Didn&apos;t find your answer?</h2>
            <p className="mb-6 text-lg">Contact Mayank Pokiya directly for personalized assistance</p>
            <a
              href="tel:+918488801197"
              className="bg-white text-amber-700 font-bold py-3 px-8 rounded-lg hover:bg-amber-50 transition inline-block"
            >
              📞 Call Now: +91 8488801197
            </a>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
