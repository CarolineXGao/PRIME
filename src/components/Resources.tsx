import React from 'react';
import { Users, Stethoscope, School, UserCheck, ArrowRight } from 'lucide-react';

const Resources = () => {
  const audiences = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Researchers",
      description: "Access research protocols, measurement tools, and collaboration opportunities for climate and mental health studies.",
      color: "#2D6AA3",
      resources: ["Research Protocols", "Measurement Tools", "Data Sharing Guidelines", "Collaboration Network"]
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Clinicians",
      description: "Evidence-based interventions, training materials, and clinical guidelines for treating climate-related mental health issues.",
      color: "#3A9C62",
      resources: ["Clinical Guidelines", "Intervention Manuals", "Training Videos", "Assessment Tools"]
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Schools & Communities",
      description: "Implementation guides, educational materials, and community-based intervention resources.",
      color: "#F4B43D",
      resources: ["Implementation Guides", "Educational Materials", "Community Toolkits", "Workshop Resources"]
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Participants",
      description: "Information for young people interested in participating in research or accessing support resources.",
      color: "#2D6AA3",
      resources: ["Participation Info", "Support Resources", "FAQs", "Contact Information"]
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

              {/* Resource List */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Available Resources:</h4>
                <ul className="space-y-2">
                  {audience.resources.map((resource, resourceIndex) => (
                    <li key={resourceIndex} className="flex items-center text-gray-600">
                      <div 
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: audience.color }}
                      ></div>
                      {resource}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button 
                className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center hover:shadow-lg"
                style={{ backgroundColor: audience.color }}
              >
                Explore Resources
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Resources
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#2D6AA3] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-[#2D6AA3] rounded"></div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Database</h4>
              <p className="text-gray-600 mb-4">
                Access our comprehensive database of climate and mental health research publications.
              </p>
              <button className="text-[#2D6AA3] hover:text-[#1e4d73] font-semibold">
                Browse Database →
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A9C62] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-[#3A9C62] rounded"></div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Training Portal</h4>
              <p className="text-gray-600 mb-4">
                Online training modules for professionals working with climate-affected youth.
              </p>
              <button className="text-[#3A9C62] hover:text-[#2d7a4f] font-semibold">
                Start Training →
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4B43D] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-[#F4B43D] rounded"></div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Support Network</h4>
              <p className="text-gray-600 mb-4">
                Connect with other professionals and organizations in the field.
              </p>
              <button className="text-[#F4B43D] hover:text-[#e5a334] font-semibold">
                Join Network →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;