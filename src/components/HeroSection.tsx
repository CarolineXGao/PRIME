import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img  
          src="/Images/Landing%20page.png" 
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
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <a 
                    href="/about"
                    className="bg-[#2D6AA3] hover:bg-[#1e4d73] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
                  >
                  <span className="text-[#2D6AA3]">Youth Mental Health</span> &{' '}
                  </a>
                  <a 
                    href="/resources"
                    className="border-2 border-[#2D6AA3] text-[#2D6AA3] hover:bg-[#2D6AA3] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-center"
                  >
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  </a>
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
  )
}