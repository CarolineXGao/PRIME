import React from 'react';
import { 
  Stethoscope, 
  Download, 
  BookOpen, 
  ArrowLeft, 
  Database, 
  Users 
} from 'lucide-react';

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
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Climate Superpower",
      description:
        "Interactive platform and resources designed to empower young people with climate action skills and knowledge through engaging activities and community building.",
      buttonText: "Visit Climate Superpower",
      downloadLink: "https://climatesuperpowers.org/"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Understanding & Managing Psychological Distress (AJGP)",
      description:
        "Article from the Australian Journal of General Practice exploring climate distress (including eco-anxiety), its prevalence, and evidence-based approaches to assessment and management.",
      buttonText: "Read AJGP Article",
      downloadLink:
        "https://www1.racgp.org.au/ajgp/2023/may/understanding-and-managing-psychological-distress"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Brief Guide to Individual Therapy for Climate-Related Mental Distress",
      description:
        "A practical guide by Robert Feder and colleagues offering therapeutic approaches for clinicians addressing climate-related mental distress.",
      buttonText: "Download Therapy Guide",
      downloadLink:
        "https://static1.squarespace.com/static/612cd210a8d3d07eb4886599/t/63a09eb8ed5d7c496f6eb131/1671470776778/A+Brief+Guide+to+Individual+Therapy+for+Climate-Related+Mental+Distress.+(with+justice+edits).pdf"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Prescribing Toolkit (NHS Green SP)",
      description:
        "NHS toolkit offering insights and practical wisdom on implementing green social prescribing to prevent mental ill-health through nature-based interventions.",
      buttonText: "View Toolkit",
      downloadLink:
        "https://socialprescribingacademy.org.uk/media/3ozd3tv2/nhs-green-social-prescribing-toolkit.pdf"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mental Health Professionals & Climate Change (PMC)",
      description:
        "A research article discussing the role of mental health professionals in addressing climate change impacts on psychological well-being.",
      buttonText: "Explore PMC Article",
      downloadLink:
        "https://pmc.ncbi.nlm.nih.gov/articles/PMC8499631/"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Google Drive Resource (private)",
      description:
        "A resource accessible via Google Drive link; content may require permission or sign-in to view.",
      buttonText: "Open Drive File",
      downloadLink:
        "https://drive.google.com/file/d/1Cq4gdK70Tnahi8n0RD1MFuWVgOzXrqJZ/view"
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
                  href={resource.title === 'Measurement Tools' ? '#' : resource.downloadLink}
                  onClick={(e) => {
                    if (resource.title === 'Measurement Tools') {
                      e.preventDefault();
                      setCurrentPage('measurement-tools');
                    }
                  }}
                  target={resource.title === 'Measurement Tools' ? undefined : "_blank"}
                  rel={resource.title === 'Measurement Tools' ? undefined : "noopener noreferrer"}
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
