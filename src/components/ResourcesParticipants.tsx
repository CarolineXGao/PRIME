import React from 'react';
import { UserCheck, Download, Heart, Phone, MessageCircle, ArrowLeft } from 'lucide-react';

interface ResourcesParticipantsProps {
  setCurrentPage: (page: string) => void;
}

const ResourcesParticipants = ({ setCurrentPage }: ResourcesParticipantsProps) => {
  const resources = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Participation Information",
      description: "Everything you need to know about participating in PRIME research, including what to expect, your rights as a participant, data protection, and compensation information.",
      buttonText: "View Information",
      downloadLink: "https://www.orygen.org.au/Training/Resources/Participants/Participation-Information"
    }
  ];

  const supportServices = [
    {
      name: "Lifeline",
      number: "13 11 14",
      description: "24/7 crisis support and suicide prevention",
      website: "lifeline.org.au"
    },
    {
      name: "Kids Helpline",
      number: "1800 55 1800",
      description: "Free counselling for young people aged 5-25",
      website: "kidshelpline.com.au"
    },
    {
      name: "headspace",
      number: "1800 650 890",
      description: "Mental health support for 12-25 year olds",
      website: "headspace.org.au"
    },
    {
      name: "Beyond Blue",
      number: "1300 22 4636",
      description: "Support for anxiety, depression and suicide prevention",
      website: "beyondblue.org.au"
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
            <UserCheck className="w-10 h-10 text-[#2D6AA3]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Resources for Participants
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Information for young people interested in participating in research or accessing support resources for climate-related mental health concerns.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-stretch">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-[#2D6AA3] hover:border-opacity-30 flex flex-col h-full"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2D6AA3] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#2D6AA3]">
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
                  className="w-full bg-[#2D6AA3] hover:bg-[#1e4d73] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {resource.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Crisis Support Section */}
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
            Need Immediate Support?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center border border-red-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-2xl font-bold text-red-600 mb-2">{service.number}</p>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <a 
                  href={`https://${service.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 text-sm font-semibold underline"
                >
                  {service.website}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesParticipants;