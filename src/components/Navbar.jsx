import React, { useState, useEffect, useRef } from 'react';
import { PaypalLogo } from './PaypalLogo';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navLinks } from '../data/staticData';

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo & Nav items */}
          <div className="flex items-center space-x-8 lg:space-x-10">
            {/* Logo */}
            <a href="#" className="flex items-center flex-shrink-0" aria-label="PayPal Home">
              <PaypalLogo className="h-8 w-auto text-[#003087]" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link, idx) => (
                <div key={link.title} className="relative group">
                  <button
                    onClick={() => toggleDropdown(idx)}
                    className="flex items-center gap-1.5 text-sm font-semibold text-gray-800 hover:text-black transition-colors py-2 focus:outline-none"
                    aria-expanded={openDropdown === idx}
                  >
                    <span>{link.title}</span>
                    <ChevronDown
                      size={14}
                      className={`text-gray-600 transition-transform duration-200 ${
                        openDropdown === idx ? 'rotate-180 text-black' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === idx && (
                    <div className="absolute left-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      {link.items.map((item) => (
                        <a
                          key={item.name}
                          href="#"
                          className="block px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group/item"
                        >
                          <div className="text-sm font-semibold text-gray-900 group-hover/item:text-[#003087]">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            {item.desc}
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right: Auth Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button className="px-5 py-2 text-sm font-semibold text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
              Log In
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-white bg-black hover:bg-neutral-800 rounded-full transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg animate-in fade-in">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <div key={link.title} className="py-1">
                <div className="text-sm font-bold text-gray-900 mb-2 flex items-center justify-between">
                  {link.title}
                </div>
                <div className="pl-3 border-l-2 border-gray-100 space-y-2">
                  {link.items.map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className="block text-xs text-gray-600 hover:text-black py-0.5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <button className="w-full py-2.5 text-sm font-semibold text-gray-900 bg-gray-100 rounded-full text-center">
              Log In
            </button>
            <button className="w-full py-2.5 text-sm font-semibold text-white bg-black rounded-full text-center">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
