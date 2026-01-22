'use client';

import { SeoJsonLd } from '@/components/SeoJsonLd';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AdvancedSeoJsonLd } from '@/components/AdvancedSeoJsonLd';

export default function ProductPage() {
  const phoneNumber = '8488801197';
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/product' },
  ];
  
  const handleWhatsApp = () => {
    const url = `https://wa.me/+91${phoneNumber}?text=${encodeURIComponent('Hi, I am interested in your premium copper bars. Please provide more information and pricing.')}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  return (
    <>
      <SeoJsonLd type="product" />
      <AdvancedSeoJsonLd type="product" />
      <Header />
      <main className="min-h-screen bg-white pb-20 md:pb-0 pt-16 sm:pt-20 md:pt-24">

        {/* Breadcrumb */}
        {/* <Breadcrumb items={breadcrumbItems} /> */}

        {/* Product Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg p-6 md:p-12 w-full aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src="https://cpimg.tistatic.com/07325477/b/4/Copper-Bar-Ingot.jpg"
                  alt="Premium 1KG Copper Bar"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-amber-900 mb-4">
                Premium 1KG Copper Bar
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-yellow-500">★★★★★</div>
                <span className="text-gray-600">(500+ reviews)</span>
              </div>

              <div className="bg-amber-50 p-4 md:p-6 rounded-lg mb-6 text-center">
                <p className="text-gray-600 mb-2">For pricing & availability</p>
                <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition"
                >
                  WhatsApp Us
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Weight:</span>
                    <span>1000g (1kg)</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Purity:</span>
                    <span>99.9% Pure Copper</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Dimensions:</span>
                    <span>150mm x 80mm x 30mm</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Certification:</span>
                    <span>ISO 9001 Certified</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Packaging:</span>
                    <span>Premium protective case</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our premium 1kg copper bar is crafted with exceptional precision and quality. Each bar is individually numbered and certified for 99.9% purity. Perfect for collectors, investors, or industrial use. Comes with certificate of authenticity and premium packaging.
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg text-lg transition"
                >
                  💬 Inquire via WhatsApp
                </button>
                <button
                  onClick={handleCall}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-lg transition"
                >
                  📞 Call Now
                </button>
              </div>

              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">✓ Authentic & Certified</p>
                <p className="text-green-700 text-sm mt-1">100% guarantee on quality</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Quality</h3>
              <p className="text-gray-600">ISO 9001 certified with authenticity certificate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Ships within 24 hours with tracking</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600">SSL encrypted, trusted payment methods</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
