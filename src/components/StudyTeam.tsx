import React from 'react';

const avatarUrl = (name: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
    name
  )}&backgroundType=gradientLinear&fontWeight=700`;

type Member = {
  name: string;
  position: string;    // pipe-separated chips, e.g. "Head ... | Co-Head ..."
  institution: string; // dept/unit → organisation → university
  bio: string;         // concise, research-focused
  image?: string;
};

const InfoBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block text-xs text-gray-700 bg-gray-100 border border-gray-200 rounded px-2 py-1 mr-2 mb-2">
    {children}
  </span>
);

const toChips = (val?: string): string[] =>
  (val || '')
    .split('|')
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => s.replace(/\)\s*\)/g, ')').replace(/\s{2,}/g, ' '));

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

      <h3 className="text-xl font-bold text-gray-900 mb-3">{member.name}</h3>

      {/* Institution */}
      <div className="flex flex-wrap justify-center mb-2">
        <InfoBadge>{member.institution || '—'}</InfoBadge>
      </div>

      {/* Position chips */}
      {member.position && (
        <div className="flex flex-wrap justify-center mb-4">
          {toChips(member.position).map((chip, i) => (
            <InfoBadge key={`${member.name}-pos-${i}`}>{chip}</InfoBadge>
          ))}
        </div>
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
      name: 'Assoc Prof Caroline Gao',
      position: 'Head of Envion-Mental Health| Co-Head, Data Science & Analytical Methods',
      institution:
        'Centre for Youth Mental Health (Orygen), University of Melbourne; School of Public Health & Preventive Medicine, Monash University',
      bio:
        'Biostatistician and environmental epidemiologist. Focus on climate impacts, youth mental health outcomes, and advanced data science methods.',
      image: '',
    },
    {
      name: 'Assoc Prof Rebecca Patrick',
      position: 'Academic Convener (Climate CATCH Lab)| Associate Professor (Climate Change and Health)',
      institution: 'Melbourne School of Population & Global Health, University of Melbourne',
      bio:
        'Public health researcher on climate change and youth mental health, with a focus on participatory and community-led approaches.',
      image: '',
    },
    {
      name: 'Dr Jana Menssink',
      position: 'Research Fellow| Program Manager (Orygen)',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      bio:
        'Health psychologist researching climate-related mental health, social inclusion, and service evaluation with a prevention and early-intervention focus.',
      image: '',
    },
    {
      name: 'Dr Hasini Gunasiri',
      position: 'Research Fellow',
      institution: 'Centre for Youth Mental Health (Orygen), University of Melbourne',
      bio:
        'Research on climate policy and youth mental health using mixed methods, co-design and systems thinking to inform practice and policy.',
      image: '',
    },
    {
      name: 'Sunny Nguyen',
      position: 'Public Health Practitioner & Academic',
      institution: '—',
      bio:
        'Works across systems on participatory evaluation and strategy for climate and youth health initiatives.',
      image: '',
    },
    {
      name: 'Samantha Eala',
      position: 'Development Practitioner',
      institution: 'University of Melbourne (MPH); Asian Institute of Management (MBA)',
      bio:
        'Environmental health, gender equity and One Health; risk and public communication in disasters; community projects in the Philippines.',
      image: '',
    },
  ];

  // ---- Project CI (Chief Investigators) ----
  const projectCI: Member[] = [
    {
      name: 'Professor Lisa Gibbs',
      position: 'Professor| Director, Disaster, Climate & Adversity Unit',
      institution:
        'Disaster, Climate & Adversity Unit, Melbourne School of Population & Global Health, University of Melbourne',
      bio:
        'Leads research on disaster recovery and community resilience across individual and population levels.',
      image: '',
    },
    {
      name: 'Professor Debra Rickwood',
      position: 'Chief Scientific Advisor (headspace)| Professor',
      institution: 'headspace National Youth Mental Health Foundation; University of Canberra',
      bio:
        'Youth mental health, help-seeking and outcome measurement; translation of evidence into routine practice.',
      image: '',
    },
    {
      name: 'Assoc Prof Magenta Simmons',
      position: 'Principal Research Fellow| Head, Youth Involvement Research',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      bio:
        'Youth partnerships in research, shared decision-making in care, and peer workforce development.',
      image: '',
    },
    {
      name: 'Prof Sue Cotton',
      position: 'Head, Health Services & Outcomes Research',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      bio:
        'Outcomes research and trials in youth mental health, including psychosis, bipolar disorder and service innovation.',
      image: '',
    },
    {
      name: 'Assoc Prof Kate Filia',
      position: 'Senior Research Fellow',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      bio:
        'Social inclusion and determinants of youth mental health (relationships, work, housing, community participation).',
      image: '',
    },
  ];

  // ---- Project AI (Associate Investigators) ----
  const projectAI: Member[] = [
    {
      name: 'Dr Isabel Zbukvic',
      position: 'Senior Research Fellow| Academic Specialist (Knowledge Translation)',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      bio:
        'Implementation science and knowledge translation in mental health with equity and co-design.',
      image: '',
    },
    {
      name: 'Assoc Prof Lexine Stapinski',
      position: 'NHMRC Leadership Fellow| Lead, Intervention & Implementation',
      institution:
        'Matilda Centre for Research in Mental Health & Substance Use, University of Sydney',
      bio:
        'Intervention development and evaluation, including large school-based trials and translation to policy and practice.',
      image: '',
    },
    {
      name: 'Dr Rebekah Anderson',
      position: 'Early Career Researcher| Teaching Specialist (Behaviour Change)',
      institution: 'School of Psychological Sciences, University of Melbourne',
      bio:
        'Behaviour change and science communication for pro-environmental action and youth mental health.',
      image: '',
    },
    {
      name: 'Phoebe Quinn',
      position: 'Research Fellow (Disaster Recovery)',
      institution:
        'Melbourne School of Population & Global Health, University of Melbourne',
      bio:
        'Disaster recovery, community resilience and climate justice with policy-oriented research.',
      image: '',
    },
    {
      name: 'Dr Ellie Brown',
      position: 'Research Fellow| Counselling Psychologist (Parkville Hub)',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      bio:
        'Early psychosis and physical health; embeds service evaluation into clinical program design.',
      image: '',
    },
    {
      name: 'Dr Shu Mei Teo',
      position: 'Research Fellow / Biostatistician',
      institution: 'Centre for Youth Mental Health, University of Melbourne',
      bio:
        'Biostatistics and data science using administrative and clinical datasets for youth mental-health policy.',
      image: '',
    },
    {
      name: 'Prof Eóin Killackey',
      position: 'Chief of Research & Knowledge Translation| Head, Functional Recovery',
      institution: 'Orygen; Centre for Youth Mental Health, University of Melbourne',
      bio:
        'Functional recovery interventions for young people; implementation and knowledge translation.',
      image: '',
    },
    {
      name: 'Prof Tim Corney',
      position: 'Professorial Research Fellow| Discipline Lead (Youth & Community Programs)',
      institution:
        'Institute for Sustainable Industries & Liveable Cities, Victoria University',
      bio:
        'Youth work, prevention and harm minimisation; programs for disaster-impacted youth.',
      image: '',
    },
  ];

  // ---- Project Affiliate ----
  const projectAffiliate: Member[] = [
    {
      name: 'Yan Zhang',
      position: 'PhD Candidate (UoM)| Lecturer in Project Management (SCU)',
      institution:
        'Dept. of Infrastructure Engineering, University of Melbourne; School of Business & Tourism, Southern Cross University',
      bio:
        'Indoor environmental quality and occupant wellbeing using evidence-based, data-driven methods.',
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
