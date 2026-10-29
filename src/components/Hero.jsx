import React, { useState } from 'react';
import { heroContent } from '../data/staticData';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState('business');
  const current = heroContent[activeTab];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Toggle Pills: Personal / Business */}
        <div className="inline-flex items-center p-1 bg-[#eaeff5] rounded-full shadow-inner mb-10 transition-all">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-7 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none ${
              activeTab === 'personal'
                ? 'bg-white text-black shadow-sm'
                : 'text-slate-600 hover:text-black'
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => setActiveTab('business')}
            className={`px-7 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none ${
              activeTab === 'business'
                ? 'bg-white text-black shadow-sm'
                : 'text-slate-600 hover:text-black'
            }`}
          >
            Business
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-black mb-4">
          {current.title}
        </h1>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">
          {current.subtitle}
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-9">
          {current.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button className="bg-black hover:bg-neutral-800 text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-150 shadow-sm hover:shadow active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            {current.primaryCta}
          </button>
          <button className="bg-[#eaeff5] hover:bg-[#dfe6ef] text-black font-semibold text-sm sm:text-base px-8 py-3 rounded-full transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300">
            {current.secondaryCta}
          </button>
        </div>

      </div>
    </section>
  );
};
