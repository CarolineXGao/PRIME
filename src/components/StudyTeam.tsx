import React from 'react';

const avatarUrl = (name: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
    name
  )}&backgroundType=gradientLinear&fontWeight=700`;

type Member = {
  name: string;
  role: string;
  bio: string;
  institution?: string;
  position?: string;
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
      <p className="text-[#2D6AA3] font-semibold mb-3">{member.role}</p>
      {member.institution && (
        <p className="text-xs text-gray-500 mb-2">{member.institution}</p>
      )}
      {member.position && (
        <p className="text-xs text-gray-500 mb-2">{member.position}</p>
      )}
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
    <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
      {title}
    </h3>
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
      name: 'Assoc Prof Caroline Gao',
      role:
        'Biostatistician & Epidemiologist',
      institution: 'University of Melbourne (Orygen/CYMH)',
      bio:
        'Biostatistician and epidemiologist. Methods for air-pollution/climate impacts, outcome measures, and ML on linked admin data for evaluation and prediction.',
      image: '',
    },
    {
      name: 'Assoc Prof Rebecca Patrick',
      role: 'Public Health & Climate; Participatory Action Research',
      bio:
        'Public health academic focused on climate and youth mental health, participatory action research; prior practice roles across youth and community health services.',
      image: '',
    },
    {
      name: 'Dr Jana Menssink',
      role: 'Health Psychologist; Program Manager (Orygen)',
      bio:
        'Clinical background in chronic pain/trauma; research across climate & mental health, social inclusion, sexual harassment, and service evaluation; prevention/early intervention focus.',
      image: '',
    },
    {
      name: 'Hasini Gunasiri',
      role: 'Research Fellow (CYMH/Orygen); PRIME Platform',
      bio:
        'Research at the intersection of climate change and youth mental health. Mixed methods, co-design and systems thinking informing policy and community-led adaptation.',
      image: '',
    },
    {
      name: 'Sunny Nguyen',
      role: 'Public Health Practitioner & Academic',
      bio:
        'Participatory approaches, evaluation science and strategy across academia, government and NGOs; youth leadership in climate & health.',
      image: '',
    },
    {
      name: 'Samantha Eala',
      role: 'Development Practitioner; MPH (UoM) & MBA (AIM)',
      bio:
        'Experience with USAID, WHO and Save the Children on environmental health, gender equality and One Health; comms on COVID-19, disasters and GBV; community work in the Philippines.',
      image: '',
    },
  ];

  // ---- Project CI (Chief Investigators) ----
  const projectCI: Member[] = [
    {
      name: 'Professor Lisa Gibbs',
      role: 'Disaster, Climate & Adversity; Community Resilience',
      bio:
        'Professor of Public Health; Director, Disaster, Climate & Adversity Unit (MSPGH) and Academic Lead for Community Resilience & Public Safety; research on disaster recovery and resilience.',
      image: '',
    },
    {
      name: 'Professor Debra Rickwood',
      role: 'Chief Scientific Advisor, headspace; Youth Mental Health',
      bio:
        'Leader in youth mental health, help-seeking and early intervention; shaped national policy and MyLifeTracker; >$30M in projects; measurement-informed care and digital innovation.',
      image: '',
    },
    {
      name: 'Assoc Prof Magenta Simmons',
      role: 'Head of Youth Involvement Research, Orygen',
      bio:
        'Focus on meaningful youth partnerships in research, shared decision-making in care, and peer workforce development.',
      image: '',
    },
    {
      name: 'Prof Sue Cotton',
      role: 'Clinical Neuropsychologist & Biostatistician',
      bio:
        'Head, Health Services & Outcomes Research (Orygen/CYMH). 20+ years across trials/cohorts in psychosis, bipolar and service innovation.',
      image: '',
    },
    {
      name: 'Assoc Prof Kate Filia',
      role: 'Social Inclusion & Youth Mental Health',
      bio:
        'Senior Research Fellow (Orygen/CYMH). Leads social inclusion research (relationships, work, housing, community participation) and manages trials, data linkage and service evaluations.',
      image: '',
    },
  ];

  // ---- Project AI (Associate Investigators) ----
  const projectAI: Member[] = [
    {
      name: 'Dr Isabel Zbukvic',
      role: 'Implementation specialist',
      institution: 'University of Melbourne (Orygen/CYMH)',
      position: 'Senior Research Fellow; Academic Specialist, Knowledge Translation',
      bio:
        'Leads implementation & KT research in mental health; behaviour change and implementation science; interdisciplinary projects incl. suicide prevention and e-health; strong equity and co-design focus; >$20.9M funding since 2017.',
      image: '',
    },
    {
      name: 'Assoc Prof Lexine Stapinski',
      role: 'Evaluation specialist & clinical psychologist',
      institution: 'University of Sydney (Matilda Centre)',
      position:
        'NHMRC Leadership Fellow; Lead in Intervention & Implementation',
      bio:
        '15+ years developing/evaluating mental-health interventions; 8 RCTs (incl. large school-based trials); strong work with underserved groups incl. Aboriginal and Torres Strait Islander youth; major policy translation and dissemination at national scale.',
      image: '',
    },
    {
      name: 'Dr Rebekah Anderson',
      role: 'Program design & implementation',
      institution: 'University of Melbourne',
      position: 'Early Career Researcher; Teaching Specialist (Behaviour Change)',
      bio:
        'Behaviour change and science communication; prior youth mental-health KT; consultation on theory, implementation and evaluation; produced 20+ evidence-translation resources.',
      image: '',
    },
    {
      name: 'Phoebe Quinn',
      role: 'Climate health program design specialist',
      institution: 'University of Melbourne (MSPGH)',
      position: 'Research Fellow in Disaster Recovery',
      bio:
        'Public-health researcher focused on justice, resilience and climate; policy-oriented projects incl. Recovery Capitals, Red Cross Bushfire Recovery evaluation, Indigenous healing and disaster recovery; PhD on democratic innovations for climate decisions.',
      image: '',
    },
    {
      name: 'Dr Ellie Brown',
      role: 'Clinical psychologist & program design specialist',
      institution: 'University of Melbourne (Orygen/CYMH)',
      position: 'Research Fellow; Counselling Psychologist (Parkville Hub)',
      bio:
        'Early psychosis and physical health; embedding service evaluation into clinical initiatives; supports headspace Early Psychosis teams to deliver evidence-based care.',
      image: '',
    },
    {
      name: 'Dr Shu Mei Teo',
      role: 'Data Scientist',
      institution: 'University of Melbourne (CYMH)',
      position: 'Research Fellow / Biostatistician',
      bio:
        '10+ years applying statistics/data science to cohort/survey data; current focus on administrative/clinical datasets for youth mental-health policy and system advice.',
      image: '',
    },
    {
      name: 'Prof Eóin Killackey',
      role: 'Youth mental health & knowledge translation specialist',
      institution: 'University of Melbourne (Orygen/CYMH)',
      position:
        'Chief of Research & Knowledge Translation; Head, Functional Recovery Program',
      bio:
        'Clinical psychologist; evidence-based youth mental-health interventions; international leadership in vocational recovery; multiple national awards for impact.',
      image: '',
    },
    {
      name: 'Prof Tim Corney',
      role: 'Youth lived experience specialist',
      institution: 'Victoria University',
      position:
        'Professorial Research Fellow; Discipline Lead, Youth & Community Programs',
      bio:
        'Public-health lens on preventative education/harm minimisation for youth; Co-Lead, Centre for Excellence — disasters & young people; >$20M research since 2017; national leadership in youth work standards and ethics.',
      image: '',
    },
    // Hasini appears in Project Team; leaving out of AI to avoid duplication.
  ];

  // ---- Project Affiliate ----
  const projectAffiliate: Member[] = [
    {
      name: 'Yan Zhang',
      role: 'Project affiliate',
      institution: 'University of Melbourne; Southern Cross University',
      position: 'PhD Candidate; Lecturer in Project Management',
      bio:
        'Focus on indoor environmental quality and occupant wellbeing using evidence-based, data-driven strategies.',
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
            implementation science and community expertise to co-design and scale solutions for climate-related
            youth mental health.
          </p>
        </div>

        <Section title="Project Team" members={projectTeam} />
        <Section title="Project CI" members={projectCI} />
        <Section title="Project AI (Associate Investigators)" members={projectAI} />
        <Section title="Project Affiliate" members={projectAffiliate} />

        {/* Collaborators & Partners (optional keep) */}
        {/* If you still want this section, leave it in; otherwise you can remove */}
        {/* <div className="mt-8 text-center">
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
        </div> */}
      </div>
    </section>
  );
};

export default StudyTeam;
