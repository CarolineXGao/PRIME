import React from 'react';
import { Leaf, Sun, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                PRIME: A Research Platform for{' '}
                <span className="text-[#2D6AA3]">Youth Mental Health</span> &{' '}
                <span className="text-[#3A9C62]">Climate Resilience</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Accelerating evidence-based interventions to mitigate climate distress in young people
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#2D6AA3] hover:bg-[#1e4d73] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Explore Our Research
              </button>
              <button className="bg-[#F4B43D] hover:bg-[#e5a334] text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Involved
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
              <div className="col-span-3 mb-4">
                <div className="w-32 h-32 bg-[#3A9C62] bg-opacity-10 rounded-full flex items-center justify-center">
                  <Users className="w-16 h-16 text-[#3A9C62] stroke-2" />
                </div>
              </div>
              <div className="w-20 h-20 bg-[#2D6AA3] bg-opacity-10 rounded-full flex items-center justify-center">
                <Leaf className="w-10 h-10 text-[#2D6AA3] stroke-2" />
              </div>
              <div className="w-24 h-24 bg-[#F4B43D] bg-opacity-10 rounded-full flex items-center justify-center">
                <Sun className="w-12 h-12 text-[#F4B43D] stroke-2" />
              </div>
              <div className="w-20 h-20 bg-[#3A9C62] bg-opacity-10 rounded-full flex items-center justify-center">
                <Leaf className="w-10 h-10 text-[#3A9C62] stroke-2" />
              </div>
            </div>
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <path d="M50,150 Q200,50 350,150 Q200,250 50,150" stroke="#3A9C62" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;