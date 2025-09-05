import React from 'react';
import { Microscope, Globe, Users, TrendingUp } from 'lucide-react';

const CoreHighlights = () => {
  const highlights = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Research-Driven",
      description: "Evidence-based interventions built on rigorous scientific methodology and peer-reviewed research.",
      color: "#2D6AA3"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Youth-Focused",
      description: "Specifically designed for young people, addressing their unique needs and climate-related concerns.",
      color: "#3A9C62"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Approach",
      description: "Co-designed with youth, researchers, clinicians, and communities for maximum impact and relevance.",
      color: "#F4B43D"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Impact-Oriented",
      description: "Focused on measurable outcomes and real-world applications to create lasting positive change.",
      color: "#2D6AA3"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Explainer */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Empowering Youth Through Climate-Informed Mental Health Research
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            PRIME bridges the gap between climate science and youth mental health, creating evidence-based solutions 
            that help young people build resilience in the face of environmental challenges.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-opacity-50 group"
              style={{ '--accent-color': highlight.color } as React.CSSProperties}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: `${highlight.color}15`, color: highlight.color }}
              >
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreHighlights;