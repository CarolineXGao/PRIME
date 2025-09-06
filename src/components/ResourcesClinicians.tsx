import React from 'react';
import { Stethoscope, Download, BookOpen, Video, FileText, ArrowLeft } from 'lucide-react';

interface ResourcesCliniciansProps {
  setCurrentPage: (page: string) => void;
}

const ResourcesClinicians = ({ setCurrentPage }: ResourcesCliniciansProps) => {
  const resources = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Clinical Guidelines",
      description: "Evidence-based guidelines for treating climate-related mental health issues",
      items: [
        "Climate Anxiety Treatment Protocols",
        "Eco-Grief Intervention Guidelines",
        "Youth-Specific Assessment Tools",
        "Crisis Response Frameworks"
      ],
      downloadLink: "#"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Intervention Manuals",
      description: "Step-by-step manuals for implementing climate-focused interventions",
      items: [
        "Group Therapy Manual",
        "Individual Counseling Guide",
        "Family Intervention Protocols",
        "Peer Support Programs"
      ],
      downloadLink: "#"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Training Videos",
      description: "Professional development videos and webinar recordings",
      items: [
        "Climate Psychology Fundamentals",
        "Youth Engagement Strategies",
        "Cultural Competency Training",
        "Supervision and Support"
      ],
      downloadLink: "#"
    },
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Assessment Tools",
      description: "Validated assessment instruments for clinical practice",
      items: [
        "Climate Distress Scale",
        "Functional Impairment Measure",
        "Treatment Progress Tracker",
        "Risk Assessment Tools"
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
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-[#3A9C62] hover:border-opacity-30"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#3A9C62] bg-opacity-10 rounded-lg flex items-center justify-center mr-4 text-[#3A9C62]">
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
                      <div className="w-2 h-2 bg-[#3A9C62] rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#3A9C62] hover:bg-[#2d7a4f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Access Resources
              </button>
            </div>
          ))}
        </div>

        {/* Professional Development */}
        <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Professional Development Pathway
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A9C62] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#3A9C62]">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Foundation</h4>
              <p className="text-gray-600 text-sm">
                Learn climate psychology basics and assessment techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A9C62] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#3A9C62]">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Intervention</h4>
              <p className="text-gray-600 text-sm">
                Master evidence-based treatment approaches and protocols.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A9C62] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#3A9C62]">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Specialization</h4>
              <p className="text-gray-600 text-sm">
                Develop expertise in specific populations or approaches.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3A9C62] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#3A9C62]">4</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Leadership</h4>
              <p className="text-gray-600 text-sm">
                Train others and contribute to field advancement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesClinicians;