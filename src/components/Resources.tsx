import React from 'react';
import { Users, Stethoscope, School, UserCheck, ArrowRight } from 'lucide-react';

interface ResourcesProps {
  setCurrentPage: (page: string) => void;
}

const Resources = ({ setCurrentPage }: ResourcesProps) => {
  const audiences = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Researchers",
      description: "Access research protocols, measurement tools, and collaboration opportunities for climate and mental health studies.",
      color: "#2D6AA3",
      resources: ["Research Protocols", "Measurement Tools", "Data Sharing Guidelines", "Collaboration Network"],
      page: "resources-researchers"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Clinicians",
      description: "Evidence-based interventions, training materials, and clinical guidelines for treating climate-related mental health issues.",
      color: "#3A9C62",
      resources: ["Clinical Guidelines", "Intervention Manuals", "Training Videos", "Assessment Tools"],
      page: "resources-clinicians"
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Schools & Communities",
      description: "Implementation guides, educational materials, and community-based intervention resources.",
      color: "#F4B43D",
      resources: ["Implementation Guides", "Educational Materials", "Community Toolkits", "Workshop Resources"],
      page: "resources-schools"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Participants",
      description: "Information for young people interested in participating in research or accessing support resources.",
      color: "#2D6AA3",
      resources: ["Participation Info", "Support Resources", "FAQs", "Contact Information"],
      page: "resources-participants"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Resources & Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access evidence-based resources, tools, and materials tailored for different audiences 
            working in climate and youth mental health.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-opacity-50 group"
              style={{ '--accent-color': audience.color } as React.CSSProperties}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200"
                  style={{ backgroundColor: `${audience.color}15`, color: audience.color }}
                >
                  {audience.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {audience.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {audience.description}
              </p>

              {/* CTA Button */}
              <button 
                onClick={() => setCurrentPage(audience.page)}
                className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center hover:shadow-lg"
                style={{ backgroundColor: audience.color }}
              >
                Explore Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Resources;