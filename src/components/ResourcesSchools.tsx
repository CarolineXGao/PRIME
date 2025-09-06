import React from 'react';
import { School, Download, BookOpen, Users, Presentation, ArrowLeft } from 'lucide-react';

interface ResourcesSchoolsProps {
  setCurrentPage: (page: string) => void;
}

const ResourcesSchools = ({ setCurrentPage }: ResourcesSchoolsProps) => {
  const resources = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Implementation Guides",
      description: "Step-by-step guides for implementing climate mental health programs in schools",
      items: [
        "School-Based Program Setup",
        "Staff Training Protocols",
        "Student Engagement Strategies",
        "Parent and Family Involvement"
      ],
      downloadLink: "#"
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "Educational Materials",
      description: "Age-appropriate educational resources and curriculum materials",
      items: [
        "Climate Psychology Curriculum",
        "Interactive Workshop Materials",
        "Student Workbooks",
        "Teacher Resource Kits"
      ],
      downloadLink: "#"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Toolkits",
      description: "Resources for engaging the broader school community",
      items: [
        "Community Engagement Plans",
        "Stakeholder Communication Tools",
        "Event Planning Resources",
        "Partnership Development Guides"
      ],
      downloadLink: "#"
    },
    {
      icon: <School className="w-6 h-6" />,
      title: "Workshop Resources",
      description: "Ready-to-use materials for running climate mental health workshops",
      items: [
        "Facilitator Guides",
        "Activity Templates",
        "Assessment Tools",
        "Follow-up Resources"
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
          <div className="w-20 h-20 bg-[#F4B43D] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <School className="w-10 h-10 text-[#F4B43D]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Resources for Schools & Communities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Implementation guides, educational materials, and community-based intervention resources for schools and community organizations.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-[#F4B43D] hover:border-opacity-30"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#F4B43D] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#F4B43D]">
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
                      <div className="w-2 h-2 bg-[#F4B43D] rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#F4B43D] hover:bg-[#e5a334] text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
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

export default ResourcesSchools;