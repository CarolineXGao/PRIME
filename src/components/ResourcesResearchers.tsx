import React from 'react';
import { Users, Download, BookOpen, Database, Network, ArrowLeft } from 'lucide-react';

interface ResourcesResearchersProps {
  setCurrentPage: (page: string) => void;
}

const ResourcesResearchers = ({ setCurrentPage }: ResourcesResearchersProps) => {
  const resources = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Research Protocols",
      description: "Standardized protocols for climate and mental health research studies",
      items: [
        "PRIME Master Protocol Framework",
        "Youth Engagement Guidelines",
        "Climate Exposure Assessment Tools",
        "Ethical Considerations for Climate Research"
      ],
      downloadLink: "#"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Measurement Tools",
      description: "Validated instruments for assessing climate-related mental health impacts",
      items: [
        "EnvironMental Health Measure",
        "Climate Anxiety Scale",
        "Eco-Grief Assessment Tool",
        "Resilience and Coping Inventory"
      ],
      downloadLink: "#"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Data Sharing Guidelines",
      description: "Best practices for ethical data sharing and collaboration",
      items: [
        "Data Management Plans",
        "Privacy Protection Protocols",
        "Cross-institutional Agreements",
        "Open Science Framework"
      ],
      downloadLink: "#"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Collaboration Network",
      description: "Connect with other researchers in the field",
      items: [
        "Researcher Directory",
        "Collaboration Opportunities",
        "Funding Resources",
        "Conference and Events"
      ],
      downloadLink: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <button
          onClick={() => setCurrentPage('resources')}
          className="flex items-center text-[#2D6AA3] hover:text-[#1e4d73] font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Resources
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-[#2D6AA3] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-[#2D6AA3]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Resources for Researchers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access research protocols, measurement tools, and collaboration opportunities for climate and mental health studies.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-[#2D6AA3] hover:border-opacity-30"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2D6AA3] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#2D6AA3]">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {resource.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Available Resources:</h4>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-[#2D6AA3] rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#2D6AA3] hover:bg-[#1e4d73] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Access Resources
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesResearchers;