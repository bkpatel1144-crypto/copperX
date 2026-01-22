'use client';

import Link from 'next/link';

export function Footer() {
  const whatsappNumber = '918488801197';
  const phoneNumber = '+918488801197';

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">CopperX</h3>
            <p className="text-gray-400 text-xs md:text-sm">Premium pure copper supplier in Surat, Gujarat</p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/product" className="text-gray-400 hover:text-white">Product</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-2">Mayank Pokiya</p>
            <a href={`tel:${phoneNumber}`} className="text-amber-400 hover:text-amber-300 block mb-2 text-xs md:text-sm">+91 8488801197</a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-xs md:text-sm">WhatsApp</a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-xs md:text-sm">
          <p>&copy; 2024 CopperX - Premium Pure Copper Supplier</p>
          <p className="mt-2">Block No. 334/3, Vav Road, Kamrej, Jokha, Surat, Gujarat 394185</p>
        </div>
      </div>
    </footer>
  );
}
