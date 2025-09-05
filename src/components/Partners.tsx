import React from 'react';

const Partners = () => {
  const partners = [
    "University Research Centre",
    "Climate Health Alliance",
    "Youth Mental Health Institute",
    "Community Partners Network",
    "Government Health Dept",
    "International Collaboration"
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
          Trusted by Leading Organizations
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-[#2D6AA3] hover:border-opacity-30 transition-all duration-200"
            >
              <div className="h-12 flex items-center justify-center mb-2">
                <div className="w-full h-8 bg-gray-300 rounded"></div>
              </div>
              <p className="text-xs text-gray-600 font-medium">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;