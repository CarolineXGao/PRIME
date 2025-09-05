import React from 'react';

const avatarUrl = (name: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
    name
  )}&backgroundType=gradientLinear&fontWeight=700`;

type Member = {
  name: string;
  role: string;        // short, audience-facing role or expertise
  bio: string;         // 1–3 sentence summary
  institution: string; // include dept/unit then org/university where known
  position: string;    // title or standing; use "—" if not provided
  image?: string;
};

const InfoBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs text-gray-600 bg-gray-100 border border-gray-200 rounded px-2 py-1 mr-2 mb-2">
    {children}
  </span>
);

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

      {/* badges */}
      <div className="flex flex-wrap justify-center mb-4">
        <InfoBadge>{member.institution}</InfoBadge>
        <InfoBadge>{member.position}</InfoBadge>
      </div>

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
  // ---- Project Team (ordered) ----
  const projectTeam: Member[] = [
    {
      name: 'A/Prof Caroline Gao',
      role: 'Biostatistics, Epidemiology & Data Science',
      institution: 'Centre for Youth Mental Health (Orygen), University of Melbourne; School of Public Health & Preventive Medicine, Monash University',
      position: 'Associate Professor; Co-Head, Data Science & Analytical Methods',
      bio:
        'Develops methods for air-pollution/climate-impact evaluation, youth mental-health outcome measures, and ML on linked administrative data to improve prediction and service evaluation.',
      image: '',
    },
    {
      name: 'A/Prof Rebecca Patrick',
      role: 'Public Health, Climate & Participatory Research',
      institution: 'Melbourne School of Population & Global Health, University of Melbourne',
      position: 'Associate Professor',
      bio:
        'Public health academic focusing on climate change and youth mental health, with deep expertise in participatory action research and community health practice.',
      image: '',
    },
    {
      name: 'Dr Jana Menssink',
      role: 'Health Psychology & Program Management',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      position: 'Research Fellow; Program Manager',
      bio:
        'Clinical background in chronic pain and trauma; research spans climate & mental health, social inclusion, sexual harassment and service evaluation, with prevention/early-intervention focus.',
      image: '',
    },
    {
      name: 'Hasini Gunasiri',
      role: 'Climate Policy & Youth Mental Health',
      institution: 'Centre for Youth Mental Health (Orygen), University of Melbourne',
      position: 'Research Fellow',
      bio:
        'Works at the intersection of climate change and youth mental health using mixed methods, co-design and systems thinking to inform policy and community-led adaptation.',
      image: '',
    },
    {
      name: 'Sunny Nguyen',
      role: 'Participatory Evaluation & Strategy',
      institution: '—',
      position: 'Public Health Practitioner & Academic',
      bio:
        'Experience across government, NGOs, services and academia; specialises in participatory approaches, evaluation science and systems-level strategy for climate & health.',
      image: '',
    },
    {
      name: 'Samantha Eala',
      role: 'Development Practice & One Health',
      institution: 'University of Melbourne (MPH); Asian Institute of Management (MBA)',
      position: 'Development Practitioner',
      bio:
        'Worked with USAID, WHO and Save the Children on environmental health and gender equality; led communications on COVID-19, disasters and GBV; community work in the Philippines.',
      image: '',
    },
  ];

  // ---- Project CI (Chief Investigators) ----
  const projectCI: Member[] = [
    {
      name: 'Professor Lisa Gibbs',
      role: 'Disaster, Climate & Community Resilience',
      institution: 'Disaster, Climate & Adversity Unit, Melbourne School of Population & Global Health, University of Melbourne',
      position: 'Professor; Director, DCA Unit',
      bio:
        'Leads research on disaster recovery and resilience across individual and community levels; Academic Lead for Community Resilience & Public Health.',
      image: '',
    },
    {
      name: 'Professor Debra Rickwood',
      role: 'Youth Mental Health & Measurement-Informed Care',
      institution: 'headspace National Youth Mental Health Foundation; University of Canberra',
      position: 'Chief Scientific Advisor (headspace); Professor',
      bio:
        'Leader in youth mental health, help-seeking and early intervention; shaped national policy and routine outcome measurement (MyLifeTracker); led >$30M in projects.',
      image: '',
    },
    {
      name: 'A/Prof Magenta Simmons',
      role: 'Youth Partnerships & Shared Decision-Making',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      position: 'Principal Research Fellow; Head, Youth Involvement Research',
      bio:
        'Focus on meaningful youth partnership in research, shared decision-making in care and peer workforce development.',
      image: '',
    },
    {
      name: 'Prof Sue Cotton',
      role: 'Clinical Neuropsychology & Outcomes Research',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      position: 'Head, Health Services & Outcomes Research',
      bio:
        'Over 20 years leading trials and cohorts in psychosis, bipolar disorder and service innovation, advancing outcomes measurement and service quality.',
      image: '',
    },
    {
      name: 'A/Prof Kate Filia',
      role: 'Social Inclusion & Youth Mental Health',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      position: 'Senior Research Fellow',
      bio:
        'Leads research on relationships, work, housing and community participation as determinants of youth mental health; manages trials, data linkage and service evaluations.',
      image: '',
    },
  ];

  // ---- Project AI (Associate Investigators) ----
  const projectAI: Member[] = [
    {
      name: 'Dr Isabel Zbukvic',
      role: 'Implementation Science & Knowledge Translation',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      position: 'Senior Research Fellow; Academic Specialist (KT)',
      bio:
        'Leads implementation and KT research in mental health with strong equity and co-design focus; interdisciplinary projects incl. suicide prevention and e-health; >$20.9M funding since 2017.',
      image: '',
    },
    {
      name: 'A/Prof Lexine Stapinski',
      role: 'Intervention Evaluation & Clinical Psychology',
      institution: 'Matilda Centre for Research in Mental Health & Substance Use, University of Sydney',
      position: 'NHMRC Leadership Fellow; Lead, Intervention & Implementation',
      bio:
        '15+ years developing and evaluating mental-health interventions; 8 RCTs including large school-based trials; major translation to policy and national dissemination.',
      image: '',
    },
    {
      name: 'Dr Rebekah Anderson',
      role: 'Behaviour Change & Science Communication',
      institution: 'School of Psychological Sciences, University of Melbourne',
      position: 'ECR; Teaching Specialist (Behaviour Change)',
      bio:
        'Focus on pro-environmental behaviour change and effective science communication; prior KT in youth mental health; 20+ evidence-translation resources.',
      image: '',
    },
    {
      name: 'Phoebe Quinn',
      role: 'Disaster Recovery & Climate Health',
      institution: 'Melbourne School of Population & Global Health, University of Melbourne',
      position: 'Research Fellow (Disaster Recovery)',
      bio:
        'Policy-oriented research in resilience, social justice and climate; projects include Recovery Capitals, Red Cross Bushfire evaluation, Indigenous healing and disaster recovery.',
      image: '',
    },
    {
      name: 'Dr Ellie Brown',
      role: 'Clinical Psychology & Program Design',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      position: 'Research Fellow; Counselling Psychologist (Parkville Hub)',
      bio:
        'Early psychosis and physical health; embeds service evaluation into clinical initiatives; supports headspace Early Psychosis teams to deliver evidence-based care.',
      image: '',
    },
    {
      name: 'Dr Shu Mei Teo',
      role: 'Biostatistics & Data Science',
      institution: 'Centre for Youth Mental Health, University of Melbourne',
      position: 'Research Fellow / Biostatistician',
      bio:
        '10+ years applying statistics and data science to cohort/survey data; current focus on administrative and clinical datasets to inform youth mental-health policy.',
      image: '',
    },
    {
      name: 'Prof Eóin Killackey',
      role: 'Youth Mental Health & Knowledge Translation',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      position: 'Chief of Research & Knowledge Translation; Head, Functional Recovery',
      bio:
        'Clinical psychologist leading functional recovery research; international leadership in vocational recovery; multiple national awards.',
      image: '',
    },
    {
      name: 'Prof Tim Corney',
      role: 'Youth Work & Public Health',
      institution: 'Institute for Sustainable Industries & Liveable Cities, Victoria University',
      position: 'Professorial Research Fellow; Discipline Lead (Youth & Community Programs)',
      bio:
        'Prevention and harm-minimisation for youth; Co-Lead, Centre for Excellence—Disasters & Young People; >$20M research since 2017; leadership in youth-work standards and ethics.',
      image: '',
    },
  ];

  // ---- Project Affiliate ----
  const projectAffiliate: Member[] = [
    {
      name: 'Yan Zhang',
      role: 'Project Affiliate',
      institution: 'Dept. of Infrastructure Engineering, University of Melbourne; School of Business & Tourism, Southern Cross University',
      position: 'PhD Candidate (UoM); Lecturer in Project Management (SCU)',
      bio:
        'Focus on indoor environmental quality and occupant wellbeing using evidence-based, data-driven strategies.',
      image: '',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Meet the PRIME Team</h2>
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
