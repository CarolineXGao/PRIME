import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Landing-page.png" 
          alt="PRIME Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                  PRIME: A Research Platform for{' '}
                  <span className="text-[#2D6AA3]">Youth Mental Health</span> &{' '}
                  <span className="text-[#3A9C62]">Climate Resilience</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  Accelerating evidence-based interventions to mitigate climate distress in young people
                </p>
              </div>
            </div>

            {/* Right Column - Space for image visibility */}
            <div className="hidden lg:block">
              {/* This space allows the background image to be more visible */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;