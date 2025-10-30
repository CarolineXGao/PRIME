import React, { useEffect } from 'react';
import StudyDesign from '../components/StudyDesign';
import { updateSEO } from '../utils/seo';

const Programs = () => {
  useEffect(() => {
    updateSEO('programs');
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Programs & Interventions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our evidence-based programs and interventions designed to support youth mental health 
            in the context of climate change.
          </p>
        </div>
        <StudyDesign />
      </div>
    </section>
  );
};

export default Programs;