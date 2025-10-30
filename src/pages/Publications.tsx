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
      title: "Over 3,000 Voices: Understanding How Climate Change Shapes the Minds and Lives of Young People in Australia",
      authors: "Eala, S. J. L., Gao, C. X., Zhang, Y., Gunasiri, H., Patrick, R., Filia, K., Nguyen, S. N., Singh, N., Teo, S. M., Lawrance, E., Wray, B., Boon, B., Brennan, N., & Menssink, J.",
      journal: "OSF Preprints",
      year: "2025",
      doi: "10.31234/osf.io/e4sfb_v1",
      type: "National Survey Study",
      description: "A large-scale Australian survey of over 3,000 young people examining how climate change shapes emotions, wellbeing, and engagement, revealing multidimensional climate responses across affective, cognitive, and behavioural domains."
    },
    {
      title: "Climate Change and Social Health: An Urgent Call to Action",
      authors: "Bower, M., Filia, K. M., Lawrance, E., Card, K., Teesson, L., Smout, S., Gao, C. X., Naderpajouh, N., Donohoe-Bales, A., Lagi, R. K., Njeru, M. W., Kim, Y., Anchang, K. Y., Misawa, N., Zhang, Y., Spallek, S., Howard, A., Stapinski, L., Herrman, H., & Atwoli, L.",
      journal: "PsyArXiv",
      year: "2025",
      doi: "10.31219/osf.io/5w9r8",
      type: "Narrative Review",
      description: "A narrative synthesis exploring how climate change and social health interact, highlighting how social connection, trust, and community resilience influence both vulnerability and capacity for climate action, and proposing a new framework linking social health with climate resilience."
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
      title: "Healthy Me, Healthy Planet: Evaluation of a Pilot Planetary Health Library Program",
      authors: "Patrick, R., Bruges, N., Gunasiri, H., Wang, Y., & Henderson-Wilson, C.",
      journal: "Health Promotion Journal of Australia",
      year: "2024",
      doi: "10.1002/hpja.882",
      type: "Research Article",
      description: "A mixed-methods evaluation of the Healthy Me, Healthy Planet library program involving 136 adult participants, demonstrating improvements in wellbeing, social connection, and pro-environmental attitudes, highlighting libraries as key community settings for planetary health promotion."
    },
    {
      title: "Coping with the Mental Health Impacts of Climate Change: A Green Script for Sustainable Action",
      authors: "Gunasiri, H., Patrick, R., Garad, R., Enticott, J., Meadows, G., & Snell, T.",
      journal: "Sustainability",
      year: "2024",
      doi: "10.3390/su16031022",
      type: "Research Article",
      description: "A cross-sectional survey of 5,483 Australians examining coping strategies for the mental health impacts of climate change, identifying key adaptive approaches including contact with nature, sustainable action, and mental health help-seeking, and proposing green prescribing as a framework for sustainable health practice."
    },   
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
    }, 
    {
      title: "Prevalence and Determinants of Mental Health Related to Climate Change in Australia",
      authors: "Patrick, R., Snell, T., Gunasiri, H., Garad, R., Meadows, G., & Enticott, J.",
      journal: "Australian & New Zealand Journal of Psychiatry",
      year: "2023",
      doi: "10.1177/00048674221107872",
      type: "Research Article",
      description: "A national Australian survey of 5,483 adults linking climate change experiences to mental health outcomes, identifying high rates of eco-anxiety, pre-traumatic, and post-traumatic stress, with younger people, women, and disadvantaged populations most affected."
    },
    {
      title: "Minding Our Futures: Understanding Climate-Related Mental Wellbeing Using Systems Science",
      authors: "Patrick, R., Noy, S., Henderson-Wilson, C., Hayward, J., Allender, S., Gunasiri, H., Bruges, N., Snell, T., & Capetola, T.",
      journal: "Health & Place",
      year: "2023",
      doi: "10.1016/j.healthplace.2023.103134",
      type: "Qualitative Research Article",
      description: "A systems science study using Group Model Building workshops with health, youth, and climate experts to map the complex factors affecting young Australians' climate-related mental wellbeing, identifying policy, community, and nature-based pathways for resilience."
    }, 
    {
      title: "Young People's Mental Health in a Changing Climate",
      authors: "Gunasiri, H., Patrick, R., Snell, T., Garad, R., Enticott, J., Meadows, G., & Gao, C. X.",
      journal: "The Lancet Planetary Health",
      year: "2022",
      doi: "10.1016/S2542-5196(22)00243-1",
      type: "Research Article",
      description: "A quantitative analysis of an Australian national survey (n = 5,483) showing that young people aged 18–24 experience significantly higher rates of eco-anxiety, pre-trauma, and PTSD linked to climate change, highlighting the need for health systems to integrate climate-related mental health responses."
    }
  ];

  const reports = [
    {
      title: "Impact of Extreme Weather Events on Young People: Findings from the 2023 Mission Australia Youth Survey",
      organization: "Mission Australia & Orygen",
      year: "2023",
      description: "Comprehensive analysis of climate change impacts on Australian youth mental health based on national survey data.",
      link: "https://orygen.org.au/getmedia/61b84cfb-36fb-42d4-8a3f-33843fa614c5/91663_MA-Climate-change-report_full-report_Final_15April.aspx?ext=.pdf"
    },
    {
      title: "Climate of Distress: Addressing the Mental Health Impacts of Climate Change on Young People in Australia",
      organization: "Orygen",
      year: "2023",
      description: "Policy paper outlining the growing mental health impacts of climate change on young Australians, calling for systemic action through prevention, early intervention, and youth-led climate resilience strategies.",
      link: "https://www.orygen.org.au/getmedia/ef72906e-b7ea-4486-8ad7-47d3122784f3/Climate-of-Distress-policy-paper-Aug-2023.aspx?ext=.pdf"
    },
    {
      title: "Mission Australia & Orygen Climate Change and Youth Mental Health Report – 17 April",
      organization: "Mission Australia & Orygen",
      year: "2024",
      description: "Report examining how climate change influences mental health among young Australians using national survey data and qualitative insights.",
      link: "https://www.orygen.org.au/getmedia/4d21728e-f589-40a1-a271-ba9a070e86ff/Mission-Australia-Orygen-climatechange-report-17APRIL.aspx?ext=.pdf"
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