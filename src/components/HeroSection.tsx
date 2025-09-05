import React from "react";

interface Props {
  onExplore?: () => void;
  onGetInvolved?: () => void;
}

const HeroSection: React.FC<Props> = ({ onExplore, onGetInvolved }) => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                PRIME: A Research Platform for{" "}
                <span className="text-[#2D6AA3]">Youth Mental Health</span> &{" "}
                <span className="text-[#3A9C62]">Climate Resilience</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Accelerating evidence-based interventions to mitigate climate distress in young people
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onExplore}
                className="bg-[#2D6AA3] hover:bg-[#1e4d73] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Our Research
              </button>
              <button
                onClick={onGetInvolved}
                className="bg-[#F4B43D] hover:bg-[#e5a334] text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Involved
              </button>
            </div>
          </div>

          {/* Right: Your Landing Image */}
          <div className="relative flex justify-center">
            <img
              src="/landing-page.png" // make sure file exists in /public
              alt="PRIME landing"
              className="w-full max-w-lg rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
