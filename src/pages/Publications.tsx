import React, { useEffect } from 'react';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';
import { updateSEO } from '../utils/seo';
import CallToAction from '../components/CallToAction';

const Publications = () => {
  useEffect(() => {
    updateSEO('publications');
  }, []);

  const publications = [
    {
      title: "Climate Change and Youth: Fast-Tracking Mental Health Solutions",
      authors: "Gao, C. X., Patrick, R., Fava, N., Browne, V., Gunasiri, H., & Menssink, J. M.",
      journal: "Journal of Applied Youth Studies",
      year: "2024",
      doi: "10.1007/s43151-025-00174-1",
      type: "Commentary",
      description: "A call for urgent action to close the gap between what young people are experiencing and the slow pace of research and policy responses to climate-related mental health impacts."
    },
    {
      title: "Vulnerability and Psychosocial Impacts of Extreme Weather Events Among Young People in Australia",
      authors: "Ziou, M., Gan, D. Z. Q., Boon, B., Teo, S. M., Menssink, J. M., Yu, W., Smith, C. L., Patrick, R., Gunasiri, H., Fava, N. J., Baker, D. G., Browne, V., Simmons, M. B., Zbukvic, I., Bower, M., Stapinski, L., Killackey, E., McGorry, P., Brennan, N., Filia, K. M., & Gao, C. X.",
      journal: "Environmental Research",
      year: "2025",
      doi: "10.1016/j.envres.2025.121385",
      type: "Research Article",
      description: "Analysis of 19,501 Australian teens showing that exposure to extreme weather increases climate concerns and psychological distress."
    },
    {
      title: "Climate Change Concerns Impact on Young Australians’ Psychological Distress and Outlook for the Future",
      authors: "Teo, S. M., Gao, C. X., Brennan, N., Fava, N., Simmons, M. B., Baker, D., Zbukvic, I., Rickwood, D. J., Brown, E., Smith, C. L., Watson, A. E., Browne, V., Cotton, S., McGorry, P., Killackey, E., Freeburn, T., & Filia, K. M.",
      journal: "Journal of Environmental Psychology",
      year: "2024",
      doi: "10.1016/j.jenvp.2023.102209",
      type: "Research Article",
      description: "Study of 18,800 young Australians examining how climate change concerns relate to psychological distress and future outlook."
    },
    {
    title: "Empirical Evidence for Climate Concerns, Negative Emotions and Climate-Related Mental Ill-Health in Young People: A Scoping Review",
    authors: "Ramadan, R., Randell, A., Lavoie, S., Gao, C. X., Cruz Manrique, P., Anderson, R., McDowell, C., & Zbukvic, I.",
    journal: "Early Intervention in Psychiatry",
    year: "2023",
    doi: "10.1111/eip.13374",
    type: "Scoping Review",
    description: "A review of 26 studies published before March 2022 examining climate-related emotions and mental ill-health among young people, highlighting widespread concern about climate change and the need for further research on its psychological impacts."
}
  ];

  const reports = [
    {
      title: "Impact of Extreme Weather Events on Young People: Findings from the 2023 Mission Australia Youth Survey",
      organization: "Mission Australia & Orygen",
      year: "2023",
      description: "Comprehensive analysis of climate change impacts on Australian youth mental health based on national survey data.",
      link: "https://orygen.org.au/getmedia/61b84cfb-36fb-42d4-8a3f-33843fa614c5/91663_MA-Climate-change-report_full-report_Final_15April.aspx?ext=.pdf"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Publications & Reports
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access our latest research publications, reports, and evidence-based findings on 
            climate change and youth mental health.
          </p>
        </div>

        {/* Research Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Research Publications</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="w-5 h-5 text-[#2D6AA3]" />
                      <span className="px-3 py-1 bg-[#2D6AA3] bg-opacity-10 text-[#2D6AA3] text-sm rounded-full font-medium">
                        {pub.type}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {pub.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h4>
                    <p className="text-gray-600 mb-3">{pub.authors}</p>
                    <p className="text-gray-700 italic mb-3">{pub.journal}</p>
                    <p className="text-gray-600 leading-relaxed">{pub.description}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2D6AA3] hover:bg-[#1e4d73] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center whitespace-nowrap"
                    >
                      View Paper <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <p className="text-xs text-gray-500 text-center">DOI: {pub.doi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reports */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Reports & White Papers</h3>
          <div className="space-y-6">
            {reports.map((report, index) => (
              <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="w-5 h-5 text-[#3A9C62]" />
                      <span className="px-3 py-1 bg-[#3A9C62] bg-opacity-10 text-[#3A9C62] text-sm rounded-full font-medium">
                        Report
                      </span>
                      <span className="text-gray-500 text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {report.year}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h4>
                    <p className="text-gray-600 mb-3">{report.organization}</p>
                    <p className="text-gray-600 leading-relaxed">{report.description}</p>
                  </div>
                  <div>
                    <a
                      href={report.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3A9C62] hover:bg-[#2d7a4f] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center whitespace-nowrap"
                    >
                      Download Report <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Publications;