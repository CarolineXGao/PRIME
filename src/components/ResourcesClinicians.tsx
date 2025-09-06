import React from 'react';
import { Stethoscope, Download, BookOpen, Video, FileText, ArrowLeft, Database } from 'lucide-react';

interface ResourcesCliniciansProps {
  setCurrentPage: (page: string) => void;
}

const ResourcesClinicians = ({ setCurrentPage }: ResourcesCliniciansProps) => {
  const resources = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Measurement Tools",
      description: "Validated instruments and assessment tools for measuring climate-related mental health impacts in clinical practice.",
      buttonText: "View Tools",
      downloadLink: "https://www.orygen.org.au/Training/Resources/Clinicians/Measurement-Tools"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "WHO's Nature-Based Solutions",
      description: "World Health Organization's comprehensive guide on nature-based solutions for health and well-being, including climate-related mental health interventions.",
      buttonText: "Access WHO Guide",
      downloadLink: "https://iris.who.int/handle/10665/381437"
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
          <div className="w-20 h-20 bg-[#3A9C62] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Stethoscope className="w-10 h-10 text-[#3A9C62]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Resources for Clinicians
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Evidence-based interventions, training materials, and clinical guidelines for treating climate-related mental health issues.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-stretch">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-[#3A9C62] hover:border-opacity-30 flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#3A9C62] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#3A9C62]">
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
                  className="w-full bg-[#3A9C62] hover:bg-[#2d7a4f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
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

export default ResourcesClinicians;