'use client';

import React from 'react';
import Link from 'next/link';
import { SeoJsonLd } from '@/components/SeoJsonLd';
import { AdvancedSeoJsonLd } from '@/components/AdvancedSeoJsonLd';
import image1 from 'public/copper-bars-pile.jpg';
export default function Home() {
  const whatsappNumber = '918488801197';
  const phoneNumber = '+918488801197';
  const msg = 'Hi! I am interested in your premium copper bars.';
  const whatsappMessage = encodeURIComponent(msg);
  
  return (
    <>
      <SeoJsonLd />
      <AdvancedSeoJsonLd type="organization" />
      <main className="min-h-screen bg-white">
        {/* Header/Navigation */}
        <header className="bg-gradient-to-r from-amber-600 to-amber-700 sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-2xl md:text-3xl font-bold text-white">🔶 CopperX</div>
            <nav className="flex gap-6 md:gap-10">
              <a href="/" className="text-white font-semibold hover:text-amber-200 text-sm md:text-base transition">Home</a>
              <a href="/product" className="text-white hover:text-amber-200 text-sm md:text-base transition">Products</a>
              <a href="/about" className="text-white hover:text-amber-200 text-sm md:text-base transition">About</a>
              <a href="/contact" className="text-white hover:text-amber-200 text-sm md:text-base transition">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section with Image */}
        <section className="bg-gradient-to-b from-amber-50 to-white py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl md:text-9xl mb-4">🔷</div>
                    <p className="text-white text-xl md:text-2xl font-bold">Premium Copper Bars</p>
                  </div>
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
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-lg text-center transition transform hover:scale-105 w-full sm:w-auto text-lg shadow-lg"
                  >
                    📞 Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-amber-900 text-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
                <p className="text-amber-100">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
                <p className="text-amber-100">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                <p className="text-amber-100">Pure Copper</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <p className="text-amber-100">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section className="py-16 md:py-28 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-4">Our Premium Products</h2>
            <p className="text-center text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto">Discover our wide range of high-quality copper products, carefully crafted to meet international standards</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Copper Bars */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="relative w-full h-64 bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl">📦</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">Copper Bars</h3>
                  <p className="text-gray-700 mb-4">High-purity copper bars perfect for industrial and commercial applications. Available in various sizes and weights.</p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ 99.9% Pure</li>
                    <li>✓ ISO Certified</li>
                    <li>✓ Custom Sizes</li>
                  </ul>
                  <a href="/product" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
                </div>
              </div>

              {/* Copper Ingots */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="relative w-full h-64 bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl">💎</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">Copper Ingots</h3>
                  <p className="text-gray-700 mb-4">Premium copper ingots ideal for jewelry, electronics, and specialized manufacturing needs.</p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ Investment Grade</li>
                    <li>✓ Laboratory Tested</li>
                    <li>✓ Bulk Pricing</li>
                  </ul>
                  <a href="/product" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
                </div>
              </div>

              {/* Sheet & Plates */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="relative w-full h-64 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl">📊</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">Sheets & Plates</h3>
                  <p className="text-gray-700 mb-4">Precision-cut copper sheets and plates for construction and industrial manufacturing applications.</p>
                  <ul className="text-sm text-gray-600 space-y-2 mb-6">
                    <li>✓ Precise Cutting</li>
                    <li>✓ Various Thicknesses</li>
                    <li>✓ Made to Order</li>
                  </ul>
                  <a href="/product" className="text-amber-600 font-semibold hover:text-amber-700">Learn More →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose CopperX */}
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-4">Why Choose CopperX?</h2>
            <p className="text-center text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto">We stand out from the competition with our commitment to quality, service, and customer satisfaction</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-amber-600 text-white text-2xl">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">100% Pure Copper</h3>
                  <p className="text-gray-700">All our products are certified 99.9% pure copper with complete lab testing and quality assurance.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-amber-600 text-white text-2xl">🚚</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-700">Prompt shipping and handling of orders with tracking support to ensure timely delivery.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-amber-600 text-white text-2xl">💰</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-700">Best market prices for bulk orders with flexible payment terms and special discounts available.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-amber-600 text-white text-2xl">👥</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Expert Support</h3>
                  <p className="text-gray-700">Dedicated customer support team available 24/7 to answer queries and assist with orders.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-amber-600 text-white text-2xl">📋</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Certified Quality</h3>
                  <p className="text-gray-700">ISO certified products with international standards compliance and comprehensive documentation.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-amber-600 text-white text-2xl">🌍</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Global Reach</h3>
                  <p className="text-gray-700">Experience exporting copper globally with trusted logistics and customs support for international orders.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Specifications */}
        <section className="py-16 md:py-28 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">Quality Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-amber-600">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">Physical Properties</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-700">Purity</span>
                    <span className="font-bold text-amber-900">99.9%</span>
                  </li>
                  <li className="flex justify-between pb-3 border-b">
                    <span className="text-gray-700">Density</span>
                    <span className="font-bold text-amber-900">8.96 g/cm³</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Melting Point</span>
                    <span className="font-bold text-amber-900">1084.62°C</span>
                  </li>
                  <li className="flex justify-between pb-3 border-b">
                    <span className="text-gray-700">Boiling Point</span>
                    <span className="font-bold text-amber-900">2562°C</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-700">Electrical Conductivity</span>
                    <span className="font-bold text-amber-900">Excellent</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-amber-600">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">Certifications & Standards</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-amber-600 text-xl">✓</span>
                    <span className="text-gray-700">ISO 9001:2015 Certified</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 text-xl">✓</span>
                    <span className="text-gray-700">ASTM B75 Standard Compliant</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 text-xl">✓</span>
                    <span className="text-gray-700">BS 2870 Specifications</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 text-xl">✓</span>
                    <span className="text-gray-700">Laboratory Tested</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-600 text-xl">✓</span>
                    <span className="text-gray-700">Export Certified</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">How We Ensure Quality</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                  <h3 className="text-lg font-bold text-amber-900 mb-3 text-center">Raw Material Selection</h3>
                  <p className="text-gray-700 text-center text-sm">We source only premium copper from verified suppliers worldwide.</p>
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                  <h3 className="text-lg font-bold text-amber-900 mb-3 text-center">Purification Process</h3>
                  <p className="text-gray-700 text-center text-sm">Advanced refining techniques to achieve 99.9% purity levels.</p>
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                  <h3 className="text-lg font-bold text-amber-900 mb-3 text-center">Quality Testing</h3>
                  <p className="text-gray-700 text-center text-sm">Rigorous lab testing and analysis for every batch produced.</p>
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
                  <h3 className="text-lg font-bold text-amber-900 mb-3 text-center">Safe Packaging</h3>
                  <p className="text-gray-700 text-center text-sm">Professional packaging to ensure safe delivery worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-28 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">Customer Testimonials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-600">
                <div className="flex mb-4">
                  <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"Excellent quality copper bars! The purity is exactly as promised. Reliable supplier and fast delivery. Highly recommended!"</p>
                <p className="font-bold text-amber-900">- Rajesh Kumar</p>
                <p className="text-sm text-gray-600">Industrial Manufacturer</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-600">
                <div className="flex mb-4">
                  <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"CopperX provides the best quality at competitive prices. Their customer service is outstanding. Been ordering for 5+ years!"</p>
                <p className="font-bold text-amber-900">- Priya Patel</p>
                <p className="text-sm text-gray-600">Import/Export Business</p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-600">
                <div className="flex mb-4">
                  <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-gray-700 mb-4 italic">"Perfect for my jewelry business. The copper ingots are pure and consistent. Mayank's support team is always helpful!"</p>
                <p className="font-bold text-amber-900">- Vikram Singh</p>
                <p className="text-sm text-gray-600">Jewelry Manufacturer</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-2">Q: What is the minimum order quantity?</h3>
                <p className="text-gray-700">A: We accept orders starting from 1 kg. However, bulk orders (100+ kg) get special discounts.</p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-2">Q: Do you provide international shipping?</h3>
                <p className="text-gray-700">A: Yes! We export worldwide with proper documentation, customs support, and insurance options.</p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-2">Q: What are your payment options?</h3>
                <p className="text-gray-700">A: We accept bank transfers, UPI, credit/debit cards, and online payment methods. Flexible payment terms for bulk orders.</p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-2">Q: How do I verify the purity of copper?</h3>
                <p className="text-gray-700">A: Each shipment comes with lab certification and testing report. We can also arrange third-party verification.</p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-2">Q: What is the delivery timeline?</h3>
                <p className="text-gray-700">A: Local deliveries within 2-3 days. Pan-India delivery in 5-7 days. International shipping varies by location.</p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-white p-6 rounded-lg border border-amber-200">
                <h3 className="text-lg font-bold text-amber-900 mb-2">Q: Do you offer custom sizes and shapes?</h3>
                <p className="text-gray-700">A: Yes! We can customize copper bars, ingots, and sheets according to your specifications.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-16 md:py-24 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Order Premium Copper?</h2>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">Get in touch with us today for competitive pricing and expert guidance</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-amber-700 hover:bg-amber-50 font-bold py-4 px-8 rounded-lg text-center transition transform hover:scale-105 text-lg shadow-lg w-full sm:w-auto"
              >
                💬 WhatsApp Us
              </a>
              <a 
                href={`tel:${phoneNumber}`}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center transition transform hover:scale-105 text-lg shadow-lg w-full sm:w-auto"
              >
                📞 Call Now
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-amber-700 font-bold py-4 px-8 rounded-lg text-center transition transform hover:scale-105 text-lg w-full sm:w-auto"
              >
                📧 Send Message
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">CopperX</h3>
                <p className="text-gray-400 text-sm">Premium pure copper supplier in Surat, Gujarat</p>
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
                <a href={`tel:${phoneNumber}`} className="text-amber-400 hover:text-amber-300 block mb-2 text-sm">+91 8488801197</a>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm">WhatsApp</a>
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
