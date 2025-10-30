import React, { useEffect } from 'react';
import { ExternalLink, Calendar, Users, BookOpen, Target } from 'lucide-react';
import { updateSEO } from '../utils/seo';

const Interventions = () => {
  useEffect(() => {
    updateSEO('interventions');
  }, []);

  const interventions = [
    {
      title: "My Climate Journey Badges",
      description: "Digital badges and micro-credentials that recognize young people's climate action and mental health resilience building activities.",
      type: "Digital Platform",
      status: "Available",
      link: "https://osf.io/e4sfb_v1",
      color: "#2D6AA3",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "EM-Act Group Program",
      description: "Evidence-based group intervention combining climate education, emotional regulation, and collective action planning for young people.",
      type: "Group Intervention",
      status: "In Development",
      color: "#3A9C62",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "EM-Care Clinical Guidelines",
      description: "Clinical practice guidelines for mental health professionals working with climate-distressed young people.",
      type: "Clinical Resource",
      status: "In Development",
      color: "#F4B43D",
      icon: <BookOpen className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Interventions & Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Evidence-based interventions and programs designed to support youth mental health 
            in the context of climate change.
          </p>
        </div>

        {/* Interventions */}
        <div className="space-y-6">
          {interventions.map((intervention, index) => (
            <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: intervention.color }}
                    >
                      {intervention.icon}
                    </div>
                    <span 
                      className="px-3 py-1 text-sm rounded-full font-medium text-white"
                      style={{ backgroundColor: intervention.color }}
                    >
                      {intervention.type}
                    </span>
                    <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                      intervention.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {intervention.status}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{intervention.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{intervention.description}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {intervention.link ? (
                    <a
                      href={intervention.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center whitespace-nowrap text-white hover:opacity-90"
                      style={{ backgroundColor: intervention.color }}
                    >
                      Access Resource <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="px-6 py-3 bg-gray-400 text-white rounded-lg font-semibold cursor-not-allowed flex items-center justify-center whitespace-nowrap"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interventions;