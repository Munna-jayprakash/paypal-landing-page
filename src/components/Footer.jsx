import React from 'react';
import { footerLinks, legalLinks } from '../data/staticData';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-[#fafbfc] text-xs text-gray-600 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-6 border-b border-gray-200/60 font-semibold text-gray-700">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-black transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom row: Copyright & Legal */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-gray-500">
            © 1999–{new Date().getFullYear()} PayPal, Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-gray-500">
            {legalLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-black transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
