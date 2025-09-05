import React from 'react';

const avatarUrl = (name: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
    name
  )}&backgroundType=gradientLinear&fontWeight=700`;

type Member = {
  name: string;
  role: string; // blue-highlighted expertise line
  bio: string;  // positions + institutions + research focus (concise)
  image?: string;
};

const Card = ({ member }: { member: Member }) => {
  const img =
    member.image && member.image.trim().length > 0
      ? member.image
      : avatarUrl(member.name);

  return (
    <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#2D6AA3] hover:border-opacity-30">
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg bg-white">
        <img src={img} alt={member.name} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-[#2D6AA3] font-semibold mb-4">{member.role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
    </div>
  );
};

const Section = ({
  title,
  members,
}: {
  title: string;
  members: Member[];
}) => (
  <div className="mb-16">
    <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">{title}</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((m, i) => (
        <Card key={`${title}-${i}-${m.name}`} member={m} />
      ))}
    </div>
  </div>
);

const StudyTeam = () => {
  // ---------- Project Team (ordered) ----------
  const projectTeam: Member[] = [
    {
      name: 'Assoc Prof Caroline Gao',
      role: 'Biostatistician & Environmental Epidemiologist',
      bio:
        'Head of EnvironMental Health and Co-Head, Data Science & Analytical Methods, Centre for Youth Mental Health (Orygen), University of Melbourne; with affiliation to Monash SPHPM. Focus on climate impacts, youth mental health outcomes and advanced data science.',
      image: '',
    },
    {
      name: 'Assoc Prof Rebecca Patrick',
      role: 'Public Health & Climate Researcher',
      bio:
        'Academic Convener, Climate CATCH Lab, and Associate Professor (Climate Change & Health), Melbourne School of Population & Global Health, University of Melbourne. Focus on climate change, youth mental health and participatory approaches.',
      image: '',
    },
    {
      name: 'Dr Jana Menssink',
      role: 'Health Psychologist & Program Manager',
      bio:
        'Research Fellow and Program Manager, Orygen/Centre for Youth Mental Health, University of Melbourne. Focus on climate-related mental health, social inclusion and service evaluation with a prevention/early-intervention lens.',
      image: '',
    },
    {
      name: 'Dr Hasini Gunasiri',
      role: 'Climate Policy & Youth Mental Health',
      bio:
        'Research Fellow, Centre for Youth Mental Health (Orygen), University of Melbourne. Focus on mixed-methods, co-design and systems approaches to climate policy and youth mental health.',
      image: '',
    },
    {
      name: 'Sunny Nguyen',
      role: 'Participatory Evaluation & Strategy',
      bio:
        'Public health practitioner and academic working across government, NGOs and services. Focus on participatory evaluation and systems-level strategy for climate and youth health.',
      image: '',
    },
    {
      name: 'Samantha Eala',
      role: 'Development Practice & One Health',
      bio:
        'Development practitioner (MPH, University of Melbourne; MBA, AIM). Focus on environmental health, gender equity and risk/public communication in disasters with community projects in the Philippines.',
      image: '',
    },
  ];

  // ---------- Project CI (Chief Investigators) ----------
  const projectCI: Member[] = [
    {
      name: 'Prof Lisa Gibbs',
      role: 'Disaster, Climate & Community Resilience',
      bio:
        'Professor and Director, Disaster, Climate & Adversity Unit, Melbourne School of Population & Global Health, University of Melbourne. Focus on disaster recovery and community resilience.',
      image: '',
    },
    {
      name: 'Prof Debra Rickwood',
      role: 'Youth Mental Health & Outcome Measurement',
      bio:
        'Chief Scientific Advisor, headspace National; Professor, University of Canberra. Focus on help-seeking, early intervention and measurement-informed care in youth mental health.',
      image: '',
    },
    {
      name: 'Assoc Prof Magenta Simmons',
      role: 'Youth Partnerships & Shared Decision-Making',
      bio:
        'Principal Research Fellow and Head, Youth Involvement Research, Orygen/Centre for Youth Mental Health, University of Melbourne. Focus on youth partnership, shared decisions and peer workforce.',
      image: '',
    },
    {
      name: 'Prof Sue Cotton',
      role: 'Clinical Neuropsychology & Outcomes Research',
      bio:
        'Head, Health Services & Outcomes Research, Orygen/Centre for Youth Mental Health, University of Melbourne. Focus on outcomes measurement and trials in youth mental health.',
      image: '',
    },
    {
      name: 'Assoc Prof Kate Filia',
      role: 'Social Inclusion & Youth Mental Health',
      bio:
        'Senior Research Fellow, Orygen/Centre for Youth Mental Health, University of Melbourne. Focus on social determinants (relationships, work, housing, community participation) and service evaluation.',
      image: '',
    },
  ];

  // ---------- Project AI (Associate Investigators) ----------
  const projectAI: Member[] = [
    {
      name: 'Dr Isabel Zbukvic',
      role: 'Implementation Science & Knowledge Translation',
      bio:
        'Senior Research Fellow and Academic Specialist (Knowledge Translation), Orygen/Centre for Youth Mental Health, University of Melbourne. Focus on behaviour change, equity and implementation across mental-health settings.',
      image: '',
    },
    {
      name: 'Assoc Prof Lexine Stapinski',
      role: 'Intervention Evaluation & Clinical Psychology',
      bio:
        'NHMRC Leadership Fellow and Lead, Intervention & Implementation, Matilda Centre, University of Sydney. Focus on school-based prevention, anxiety/substance use interventions and translation to policy/practice.',
      image: '',
    },
    {
      name: 'Dr Rebekah Anderson',
      role: 'Behaviour Change & Science Communication',
      bio:
        'Early Career Researcher and Teaching Specialist (Behaviour Change), School of Psychological Sciences, University of Melbourne. Focus on pro-environmental behaviour change and effective science communication.',
      image: '',
    },
    {
      name: 'Phoebe Quinn',
      role: 'Disaster Recovery & Climate Health',
      bio:
        'Research Fellow (Disaster Recovery), Melbourne School of Population & Global Health, University of Melbourne. Focus on resilience, climate justice and policy-oriented resources.',
      image: '',
    },
    {
      name: 'Dr Ellie Brown',
      role: 'Clinical Psychology & Program Design',
      bio:
        'Research Fellow, Orygen/Centre for Youth Mental Health; Counselling Psychologist, Parkville Hub. Focus on early psychosis, physical health and embedding service evaluation.',
      image: '',
    },
    {
      name: 'Dr Shu Mei Teo',
      role: 'Biostatistics & Data Science',
      bio:
        'Research Fellow/Biostatistician, Centre for Youth Mental Health, University of Melbourne. Focus on administrative/clinical datasets to inform youth mental-health policy and systems.',
      image: '',
    },
    {
      name: 'Prof Eóin Killackey',
      role: 'Functional Recovery & Knowledge Translation',
      bio:
        'Chief of Research & Knowledge Translation and Head, Functional Recovery Program, Orygen/Centre for Youth Mental Health, University of Melbourne. Focus on evidence-based youth functional recovery and implementation.',
      image: '',
    },
    {
      name: 'Prof Tim Corney',
      role: 'Youth Work & Public Health',
      bio:
        'Professorial Research Fellow and Discipline Lead (Youth & Community Programs), Institute for Sustainable Industries & Liveable Cities, Victoria University. Focus on prevention, harm minimisation and disaster-impacted youth.',
      image: '',
    },
  ];

  // ---------- Project Affiliate ----------
  const projectAffiliate: Member[] = [
    {
      name: 'Yan Zhang',
      role: 'Built Environment & Wellbeing',
      bio:
        'PhD Candidate, Dept. of Infrastructure Engineering, University of Melbourne; Lecturer in Project Management, Southern Cross University. Focus on indoor environmental quality and occupant wellbeing.',
      image: '',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Meet the PRIME Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our multidisciplinary collaboration brings together youth mental health, public health, data science,
            implementation science and community expertise to co-design and scale solutions for climate-related youth mental health.
          </p>
        </div>

        <Section title="Project Team" members={projectTeam} />
        <Section title="Project CI" members={projectCI} />
        <Section title="Project AI (Associate Investigators)" members={projectAI} />
        <Section title="Project Affiliate" members={projectAffiliate} />
      </div>
    </section>
  );
};

export default StudyTeam;
