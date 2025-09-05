import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const avatarUrl = (name: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundType=gradientLinear&fontWeight=700`;

const StudyTeam = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const membersPerPage = 9;

  const teamMembers = [
    {
      name: "A/Prof Caroline Gao",
      role: "Co-Head, Data Science & Analytical Methods; Biostatistician & Epidemiologist",
      bio: "Biostatistician, machine-learning researcher and epidemiologist at CYMH (UoM) and Monash SPHPM. Research spans environmental health and psychology, including new statistical methods for air-pollution/climate-change impacts, psychological assessment development, and ML with linked admin data for outcome evaluation and prediction.",
      image: ""
    },
    {
      name: "A/Prof Rebecca Patrick",
      role: "Public Health & Climate; Participatory Action Research",
      bio: "Public health academic with expertise in climate change, youth mental health, and participatory action research. Before joining the University of Melbourne (MSPGH) she worked as a health-promotion practitioner across youth and community health services.",
      image: ""
    },
    {
      name: "Professor Lisa Gibbs",
      role: "Disaster, Climate & Adversity; Community Resilience",
      bio: "Professor of Public Health; Director, Disaster, Climate & Adversity Unit (MSPGH) and Academic Lead for Community Resilience & Public Health at the Centre for Disaster Management & Public Safety. Research focuses on disaster recovery and resilience at individual/community levels.",
      image: ""
    },
    {
      name: "Professor Debra Rickwood",
      role: "Chief Scientific Advisor, headspace; Youth Mental Health",
      bio: "Leading psychologist specialising in youth mental health, help-seeking and early intervention. Her work shaped national policy and service delivery, including MyLifeTracker (routine outcome measure across 150+ headspace centres). Has led national/international projects >$30M; pioneer of measurement-informed care and digital innovation.",
      image: ""
    },
    {
      name: "A/Prof Magenta Simmons",
      role: "Head of Youth Involvement Research, Orygen",
      bio: "Principal Research Fellow (Orygen/CYMH). Focus on meaningful youth partnership in research, shared decision-making in care, and peer-workforces supporting other young people.",
      image: ""
    },
    {
      name: "Prof Sue Cotton",
      role: "Clinical Neuropsychologist & Biostatistician",
      bio: "Head, Health Services & Outcomes Research (Orygen/CYMH). 20+ years in youth mental-health research; extensive trials and cohorts in psychosis, bipolar disorder and service innovation.",
      image: ""
    },
    {
      name: "A/Prof Kate Filia",
      role: "Social Inclusion & Youth Mental Health",
      bio: "Senior Research Fellow (Orygen/CYMH). Leads research on social determinants—relationships, work, housing, community participation—and access to care; manages large trials, data linkage and service evaluations.",
      image: ""
    },
    {
      name: "Dr Jana Menssink",
      role: "Health Psychologist; Program Manager (Orygen)",
      bio: "Clinical background in chronic pain and trauma; research across climate & mental health, social inclusion, sexual harassment, and service evaluation. Strong focus on prevention/early intervention and risk/protective factors for youth socio-emotional issues.",
      image: ""
    },
    {
      name: "Hasini Gunasiri",
      role: "Research Fellow (CYMH/Orygen); PRIME Platform",
      bio: "Research on climate change and youth mental health. Uses mixed methods, co-design and systems thinking to inform public policy and community-led adaptation. Committed to equitable, youth-centred, action-oriented research including work in Indo-Pacific contexts.",
      image: ""
    },
    {
      name: "Sunny Nguyen",
      role: "Public Health Practitioner & Academic",
      bio: "Trained in participatory approaches, evaluation science and strategy. Systems-level experience across academia, government, NGOs and services. Youth leader with strong engagement in climate & health.",
      image: ""
    },
    {
      name: "Samantha Eala",
      role: "Development Practitioner; MPH (UoM) & MBA (AIM)",
      bio: "Experience with USAID, WHO, Save the Children and Ateneo SOMPH on national strategies in environmental health, gender equality and One Health. Led communications on COVID-19, climate disasters and GBV; community work in the Philippines on climate impacts on women and children.",
      image: ""
    },
    {
      name: "Yan Zhang",
      role: "PhD Candidate (Infrastructure Engineering, UoM); Lecturer (SCU)",
      bio: "Researches indoor environmental quality and occupant wellbeing using evidence-based, data-driven strategies.",
      image: ""
    }
  ];

  const researchAreas = [
    "Youth Mental Health",
    "Public Health",
    "Biostatistics",
    "Participatory Research",
    "Cultural Wellbeing",
    "Clinical Psychology"
  ];

  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  const currentMembers = teamMembers.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Meet the PRIME Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our multidisciplinary team brings together expertise from psychology, public health, 
            statistics, and community engagement to address the complex challenges of climate-related youth mental health.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentMembers.map((member, index) => {
            const img = member.image && member.image.trim().length > 0
              ? member.image
              : avatarUrl(member.name);
            return (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#2D6AA3] hover:border-opacity-30"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg bg-white">
                  <img
                    src={img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#2D6AA3] font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mb-16">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-lg border-2 border-gray-200 hover:border-[#2D6AA3] disabled:opacity-50 disabled:hover:border-gray-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPage ? 'bg-[#2D6AA3]' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-lg border-2 border-gray-200 hover:border-[#2D6AA3] disabled:opacity-50 disabled:hover:border-gray-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Research Areas */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Research Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-[#3A9C62] hover:border-opacity-30 transition-colors"
              >
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#3A9C62] rounded" />
                </div>
                <p className="text-sm font-medium text-gray-800">{area}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborators Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Collaborators & Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-[#2D6AA3] hover:border-opacity-30 transition-colors"
              >
                <div className="h-12 bg-gray-200 rounded mb-2"></div>
                <p className="text-xs text-gray-600">Partner {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyTeam;
