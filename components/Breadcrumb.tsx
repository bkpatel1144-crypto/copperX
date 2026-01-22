'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  name?: string;
  label?: string;
  url?: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="bg-gray-50 py-3 px-4 md:py-4">
      <div className="max-w-7xl mx-auto">
        <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
          {items.map((item, index) => {
            const itemName = item.name || item.label || '';
            const itemUrl = item.url || item.href || '/';
            
            return (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-gray-400">/</span>}
                {index === items.length - 1 ? (
                  <span className="text-amber-700 font-semibold" itemProp="name">
                    {itemName}
                  </span>
                ) : (
                  <Link href={itemUrl} className="text-amber-600 hover:text-amber-700 underline">
                    {itemName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
