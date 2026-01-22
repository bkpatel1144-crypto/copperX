'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AdvancedSeoJsonLd } from '@/components/AdvancedSeoJsonLd';

export default function ContactPage() {
  const phoneNumber = '8488801197';

  const handleWhatsApp = () => {
    const url = `https://wa.me/+91${phoneNumber}`;
    window.open(url, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pb-20 md:pb-0 pt-16 sm:pt-20 md:pt-24">
        <AdvancedSeoJsonLd type="localBusiness" />
        <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Name</h3>
                <p className="text-gray-700 text-lg">Mayank Pokiya</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📞 Phone</h3>
                <a href={`tel:+91${phoneNumber}`} className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
                  +91 {phoneNumber}
                </a>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">💬 WhatsApp</h3>
                <button
                  onClick={handleWhatsApp}
                  className="text-green-600 hover:text-green-800 text-lg font-semibold"
                >
                  +91 {phoneNumber}
                </button>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">📍 Address</h3>
                <p className="text-gray-700">Block No. 334/3, Vav Road</p>
                <p className="text-gray-700">Kamrej, Jokha</p>
                <p className="text-gray-700">Surat, Gujarat 394185</p>
                <p className="text-gray-700">India</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">⏰ Hours</h3>
                <p className="text-gray-700">24/7 Customer Support</p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-3 mt-8">
              <button
                onClick={handleCall}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
              >
                📞 Call Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
              >
                💬 WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 p-4 md:p-6 rounded-lg hover:border-amber-300 transition">
              <h3 className="font-bold text-gray-900 mb-2">How long does shipping take?</h3>
              <p className="text-gray-700">Domestic orders typically arrive within 3-5 business days. International orders 7-14 business days.</p>
            </div>
            <div className="border border-gray-200 p-4 md:p-6 rounded-lg hover:border-amber-300 transition">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer bulk discounts?</h3>
              <p className="text-gray-700">Yes! Contact us via WhatsApp or Call for bulk orders of 5 or more bars.</p>
            </div>
            <div className="border border-gray-200 p-4 md:p-6 rounded-lg hover:border-amber-300 transition">
              <h3 className="font-bold text-gray-900 mb-2">Is your copper certified?</h3>
              <p className="text-gray-700">Absolutely! All our copper bars come with ISO 9001 certification and authenticity certificate.</p>
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
