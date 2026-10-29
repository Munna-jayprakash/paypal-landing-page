import React from 'react';
import { ChevronDown } from 'lucide-react';
import { navLinks } from '../data/staticData';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo & Nav items */}
          <div className="flex items-center space-x-6 sm:space-x-8 lg:space-x-10">
            {/* Logo */}
            <a href="#" className="flex items-center flex-shrink-0" aria-label="PayPal Home">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/PayPal_Logo_Icon_2014.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                alt="PayPal Logo"
                className="h-8 w-auto object-contain"
              />
            </a>

            {/* Navigation Links - Static with chevron, no popups/dropdowns */}
            <nav className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto no-scrollbar">
              {navLinks.map((link) => (
                <div
                  key={link.title}
                  className="flex items-center gap-1 text-sm font-semibold text-gray-800 hover:text-black cursor-pointer py-2 select-none whitespace-nowrap"
                >
                  <span>{link.title}</span>
                  <ChevronDown size={14} className="text-gray-600" />
                </div>
              ))}
            </nav>
          </div>

          {/* Right: Auth Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <button className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              Log In
            </button>
            <button className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-black hover:bg-neutral-800 rounded-full transition-colors shadow-sm">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
