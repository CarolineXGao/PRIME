import React from 'react';
import { School, Download, BookOpen, Users, Presentation, ArrowLeft } from 'lucide-react';

interface ResourcesSchoolsProps {
  setCurrentPage: (page: string) => void;
}

const ResourcesSchools = ({ setCurrentPage }: ResourcesSchoolsProps) => {
  const resources = [
    {
      icon: <School className="w-6 h-6" />,
      title: "Orygen's Climate Emotions: Teacher Guide",
      description: "Practical classroom tips to recognise, validate and support students’ climate emotions while building resilience and agency.",
      buttonText: "Access Orygen's Toolkit",
      downloadLink: "https://www.orygen.org.au/Training/Resources/Schools/Toolkits/Climate-emotions-in-the-classroom"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "STTOP Education Program",
      description: "Comprehensive educational resources and programs designed to engage students in climate action and sustainability through storytelling and practical solutions.",
      buttonText: "Explore STTOP Program",
      downloadLink: "https://sttop2030.com/"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Climate Superpower",
      description: "Interactive platform and resources designed to empower young people with climate action skills and knowledge through engaging activities and community building.",
      buttonText: "Visit Climate Superpower",
      downloadLink: "https://climatesuperpowers.org/"
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
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-stretch">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-[#F4B43D] hover:border-opacity-30 flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#F4B43D] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#F4B43D]">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                {resource.description}
              </p>

              <div className="mt-auto">
                <a
                  href={resource.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#F4B43D] hover:bg-[#e5a334] text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {resource.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSchools;