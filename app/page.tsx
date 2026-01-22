'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { SeoJsonLd } from '@/components/SeoJsonLd';
import { AdvancedSeoJsonLd } from '@/components/AdvancedSeoJsonLd';

export default function Home() {
  const whatsappNumber = '918488801197';
  const phoneNumber = '+918488801197';
  const msg = 'Hi! I am interested in your premium copper bars.';
  const whatsappMessage = encodeURIComponent(msg);
  
  return (
    <>
      <SeoJsonLd />
      <AdvancedSeoJsonLd type="organization" />
      <Header />
      <main className="min-h-screen bg-white pt-16 sm:pt-20 md:pt-24">

        {/* Hero Section with Image */}
        <section className="bg-gradient-to-b from-amber-50 to-white py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://t4.ftcdn.net/jpg/06/45/80/31/360_F_645803185_FiqKXwetmc2H6VyiZwIrJR3zT1I6QpDQ.jpg"
                    alt="Premium Pure Copper Bars - Stacked"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 md:mb-6 leading-tight">
                  Premium Pure <span className="text-amber-600">Copper</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-700 mb-4 md:mb-8 leading-relaxed">
                  Experience excellence with our premium copper bars and ingots. Direct supplier from Surat, Gujarat with world-class quality standards.
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-8">
                  ✓ 99.9% Pure Copper | ✓ Certified Quality | ✓ Bulk Orders Welcome | ✓ Fast Delivery
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-center transition transform hover:scale-105 w-full sm:w-auto text-lg shadow-lg"
                  >
                    💬 WhatsApp Now
                  </a>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 px-8 rounded-lg text-center transition transform hover:scale-105 w-full sm:w-auto text-lg shadow-lg"
                  >
                    📞 Call +91 8488801197
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-amber-50 py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-amber-700">15+</p>
                <p className="text-sm md:text-base text-gray-700">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-amber-700">1000+</p>
                <p className="text-sm md:text-base text-gray-700">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-amber-700">99.9%</p>
                <p className="text-sm md:text-base text-gray-700">Pure Copper</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-amber-700">24/7</p>
                <p className="text-sm md:text-base text-gray-700">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-4">Our Premium Products</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">Choose from our carefully curated selection of premium copper products</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Copper Bars */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-wHig2MwQRqUjywvpPtTva64UOG4pQurO1LDPbnhIw&s"
                    alt="Premium Copper Bars"
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">Copper Bars</h3>
                  <p className="text-gray-600 mb-4">Pure 99.9% copper bars in various sizes. Perfect for industrial applications and investment purposes.</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>✓ Premium quality 99.9% pure</li>
                    <li>✓ Available in multiple sizes</li>
                    <li>✓ Certified and tested</li>
                  </ul>
                  <Link href="/product" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition">
                    View Details →
                  </Link>
                </div>
              </div>

              {/* Copper Ingots */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://www.multimetcopper.com/wp-content/uploads/2022/07/copper-round-bars.jpg"
                    alt="Copper Ingots"
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">Copper Ingots</h3>
                  <p className="text-gray-600 mb-4">High-purity copper ingots for various industrial and commercial applications.</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>✓ Pure copper ingots</li>
                    <li>✓ Industry standard quality</li>
                    <li>✓ Bulk orders available</li>
                  </ul>
                  <Link href="/product" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition">
                    View Details →
                  </Link>
                </div>
              </div>

              {/* Sheets & Plates */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://www.metelec.com/wp-content/uploads/2023/02/copper-bar-copper-busbar.jpg"
                    alt="Copper Sheets & Plates"
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">Sheets & Plates</h3>
                  <p className="text-gray-600 mb-4">Premium copper sheets and plates for construction and manufacturing needs.</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li>✓ Multiple thickness options</li>
                    <li>✓ Excellent conductivity</li>
                    <li>✓ Custom sizes available</li>
                  </ul>
                  <Link href="/product" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">Why Choose CopperX?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Premium Quality</h3>
                <p className="text-gray-600">99.9% pure copper with ISO certification and rigorous quality testing</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">Quick shipping across India with reliable logistics partners</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Best Prices</h3>
                <p className="text-gray-600">Competitive pricing with bulk order discounts</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">👨‍💼</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Direct Contact</h3>
                <p className="text-gray-600">Direct communication with Mayank Pokiya for personalized service</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Certified</h3>
                <p className="text-gray-600">ISO certified and industry-verified supplier</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold text-amber-900 mb-3">Flexible Orders</h3>
                <p className="text-gray-600">Accommodate bulk orders and custom requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">Quality Specifications</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-amber-600">
                    <th className="p-3 md:p-4 font-bold text-amber-900">Property</th>
                    <th className="p-3 md:p-4 font-bold text-amber-900">Standard</th>
                    <th className="p-3 md:p-4 font-bold text-amber-900">CopperX Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-amber-50">
                    <td className="p-3 md:p-4">Purity</td>
                    <td className="p-3 md:p-4">99.5% min</td>
                    <td className="p-3 md:p-4 font-bold text-amber-700">99.9%</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-amber-50">
                    <td className="p-3 md:p-4">Weight Tolerance</td>
                    <td className="p-3 md:p-4">±2%</td>
                    <td className="p-3 md:p-4 font-bold text-amber-700">±0.5%</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-amber-50">
                    <td className="p-3 md:p-4">Conductivity</td>
                    <td className="p-3 md:p-4">58 MS/m</td>
                    <td className="p-3 md:p-4 font-bold text-amber-700">59.6 MS/m</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-amber-50">
                    <td className="p-3 md:p-4">Certification</td>
                    <td className="p-3 md:p-4">ISO 9001</td>
                    <td className="p-3 md:p-4 font-bold text-amber-700">ISO 9001:2015</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Quality Assurance Process */}
        <section className="py-16 md:py-24 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">Our Quality Assurance Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-700">1</span>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Raw Material Selection</h3>
                <p className="text-gray-600 text-sm">Premium raw materials sourced from verified suppliers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-700">2</span>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Production Control</h3>
                <p className="text-gray-600 text-sm">Strict production standards and regular monitoring</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-700">3</span>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Laboratory Testing</h3>
                <p className="text-gray-600 text-sm">Comprehensive testing of purity and quality standards</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-700">4</span>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Final Certification</h3>
                <p className="text-gray-600 text-sm">Certificate of authenticity for every shipment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">Customer Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {'★★★★★'.split('').map((star, i) => <span key={i} className="text-2xl text-yellow-400">{star}</span>)}
                </div>
                <p className="text-gray-700 mb-4">"Excellent quality copper bars! The purity is outstanding and delivery was faster than expected. Mayank is very professional."</p>
                <p className="font-bold text-amber-900">Rajesh Kumar</p>
                <p className="text-sm text-gray-600">Industrial Supplier, Mumbai</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {'★★★★★'.split('').map((star, i) => <span key={i} className="text-2xl text-yellow-400">{star}</span>)}
                </div>
                <p className="text-gray-700 mb-4">"Best prices in the market for 99.9% pure copper. Great customer service and reliable shipping. Highly recommended!"</p>
                <p className="font-bold text-amber-900">Priya Sharma</p>
                <p className="text-sm text-gray-600">Electronics Manufacturer, Bangalore</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {'★★★★★'.split('').map((star, i) => <span key={i} className="text-2xl text-yellow-400">{star}</span>)}
                </div>
                <p className="text-gray-700 mb-4">"15 years of consistent quality! CopperX is my first choice for all copper needs. Mayank's expertise is unmatched."</p>
                <p className="font-bold text-amber-900">Vikram Singh</p>
                <p className="text-sm text-gray-600">Factory Owner, Ahmedabad</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-amber-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
                <summary className="font-bold text-amber-900 text-lg">What is the purity of your copper?</summary>
                <p className="mt-3 text-gray-700">Our copper is 99.9% pure, certified and tested. We maintain industry's highest standards.</p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
                <summary className="font-bold text-amber-900 text-lg">Do you provide bulk orders?</summary>
                <p className="mt-3 text-gray-700">Yes! We specialize in bulk orders. Contact us for wholesale pricing and custom quantities.</p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
                <summary className="font-bold text-amber-900 text-lg">What is your delivery time?</summary>
                <p className="mt-3 text-gray-700">We ship within 24-48 hours of payment confirmation. Delivery typically takes 3-5 days across India.</p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
                <summary className="font-bold text-amber-900 text-lg">Do you ship internationally?</summary>
                <p className="mt-3 text-gray-700">Yes, we ship globally. Contact Mayank at +91 8488801197 for international shipping quotes.</p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
                <summary className="font-bold text-amber-900 text-lg">Is there a money-back guarantee?</summary>
                <p className="mt-3 text-gray-700">100% satisfaction guaranteed. If you're not satisfied, we offer a full refund within 7 days.</p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
                <summary className="font-bold text-amber-900 text-lg">How do I place an order?</summary>
                <p className="mt-3 text-gray-700">Contact us via WhatsApp at +91 8488801197 or call for assistance. We handle custom orders personally.</p>
              </details>
            </div>
            <div className="mt-8 text-center">
              <Link href="/faqs" className="text-amber-700 hover:text-amber-900 font-semibold">View All FAQs →</Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-amber-600 to-amber-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience Premium Copper?</h2>
            <p className="text-xl text-amber-50 mb-8">Get in touch with Mayank Pokiya today for the best quality copper at competitive prices</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/918488801197?text=Hi, I am interested in your premium copper bars. Please provide more information.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-lg"
              >
                💬 WhatsApp Us
              </a>
              <a
                href="tel:+918488801197"
                className="bg-white hover:bg-gray-100 text-amber-700 font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-lg"
              >
                📞 Call Now
              </a>
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105 shadow-lg"
              >
                ✉️ Contact Form
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">CopperX</h3>
                <p className="text-gray-400 text-sm">Premium pure copper supplier in Surat, Gujarat. Direct contact with Mayank Pokiya for personalized service.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link href="/product" className="text-gray-400 hover:text-white">Product</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-400 text-sm mb-2">Mayank Pokiya</p>
                <a href={`tel:+91${phoneNumber}`} className="text-amber-400 hover:text-amber-300 block mb-2 text-sm">+91 8488801197</a>
                <a href={`https://wa.me/91${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm">WhatsApp</a>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 CopperX - Premium Pure Copper Supplier</p>
              <p className="mt-2">Block No. 334/3, Vav Road, Kamrej, Jokha, Surat, Gujarat 394185</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
