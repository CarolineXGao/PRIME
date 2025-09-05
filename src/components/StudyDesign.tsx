import React from 'react';
import { UserPlus, Users, FlaskConical, TrendingUp } from 'lucide-react';

const StudyDesign = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Recruitment",
      description: "Engage diverse youth participants through community partnerships and digital outreach strategies."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Co-Design",
      description: "Collaborate with young people to design interventions that are relevant, acceptable, and effective."
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Trial Testing",
      description: "Conduct rigorous randomized controlled trials to evaluate intervention effectiveness and safety."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scaling",
      description: "Implement successful interventions across communities and integrate into existing health systems."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            How PRIME Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive research methodology ensures that interventions are not only scientifically sound 
            but also practically relevant and culturally appropriate for diverse youth populations.
          </p>
        </div>

        {/* 4-Step Process */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-300 z-0">
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              )}
              
              <div className="relative z-10 bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#2D6AA3] hover:border-opacity-30 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-[#2D6AA3] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#2D6AA3]">
                    {step.icon}
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block w-8 h-8 bg-[#2D6AA3] text-white rounded-full text-sm font-bold flex items-center justify-center mb-3">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Information */}
        <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Research Framework
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#2D6AA3] mb-3">Participatory Design</h4>
              <p className="text-gray-600">
                Young people are partners in every stage of research, ensuring interventions meet real needs.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#3A9C62] mb-3">Mixed Methods</h4>
              <p className="text-gray-600">
                Combining quantitative and qualitative approaches for comprehensive understanding.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#F4B43D] mb-3">Implementation Science</h4>
              <p className="text-gray-600">
                Focus on translating research into sustainable, scalable real-world solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyDesign;