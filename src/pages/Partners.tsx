import React, { useEffect } from 'react';
import PartnersComponent from '../components/Partners';
import { updateSEO } from '../utils/seo';

const Partners = () => {
  useEffect(() => {
    updateSEO('partners');
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Partners & Collaborators
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            PRIME works with leading organizations across Australia and internationally to advance 
            climate-informed mental health research and practice.
          </p>
        </div>
        <PartnersComponent />
      </div>
    </section>
  );
};

export default Partners;