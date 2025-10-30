import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  backgroundAlt?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundAlt = "Background image"
}: HeroSectionProps) => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img  
            src={backgroundImage}
            alt={backgroundAlt}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent"></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {title}
                </h1>
                {subtitle && (
                  <h2 className="text-2xl lg:text-3xl text-[#2D6AA3] font-semibold">
                    {subtitle}
                  </h2>
                )}
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  {description}
                </p>
              </div>

              {(primaryCTA || secondaryCTA) && (
                <div className="flex flex-col sm:flex-row gap-4">
                  {primaryCTA && (
                    <Link
                      to={primaryCTA.href}
                      className="bg-[#2D6AA3] hover:bg-[#1e4d73] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-center focus:outline-none focus:ring-2 focus:ring-[#2D6AA3] focus:ring-offset-2"
                    >
                      {primaryCTA.text}
                    </Link>
                  )}
                  {secondaryCTA && (
                    <Link
                      to={secondaryCTA.href}
                      className="border-2 border-[#2D6AA3] text-[#2D6AA3] hover:bg-[#2D6AA3] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-center focus:outline-none focus:ring-2 focus:ring-[#2D6AA3] focus:ring-offset-2"
                    >
                      {secondaryCTA.text}
                    </Link>
                  )}
                </div>
              )}
            </div>

            <div className="hidden lg:block">
              {/* Space for background image visibility */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;