import React from 'react';
import { Leaf, Sun, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Landing-page.png" 
          alt="PRIME Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-gray-100/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Centered Content */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-center">
                PRIME: A Research Platform for{' '}
                <span className="text-[#2D6AA3]">Youth Mental Health</span> &{' '}
                <span className="text-[#3A9C62]">Climate Resilience</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Accelerating evidence-based interventions to mitigate climate distress in young people
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;