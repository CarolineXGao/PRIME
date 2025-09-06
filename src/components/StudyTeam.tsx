import React from 'react';

const avatarUrl = (name: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
    name
  )}&backgroundType=gradientLinear&fontWeight=700`;

type Member = {
  name: string;
  role: string; // blue-highlighted expertise line
  bio: string;  // positions + institutions + research focus (concise)
  image?: string; // optional override
};

// helper: build local /public/Team/ path
const localImageUrl = (name: string) => {
  // Strip titles and parentheticals
  const cleanName = name
    .replace(/(Assoc Prof|Prof|Dr)\s*/gi, '')
    .replace(/\(.*?\)/g, '')
    .trim();

  // Replace spaces with underscores
  const fileName = cleanName.replace(/\s+/g, '_').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');

  return `./Team/${fileName}.png`;
};

const Card = ({ member }: { member: Member }) => {
  const localImg = localImageUrl(member.name);
  const fallbackImg = avatarUrl(member.name);
  const img = member.image || localImg;

  return (
    <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#2D6AA3] hover:border-opacity-30">
      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg bg-white">
        <img
          src={img}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = fallbackImg;
          }}
        />
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
  // ---------- Project Team ----------
  const projectTeam: Member[] = [
    {
      name: 'Assoc Prof Caroline Gao (CI)',
      role: 'Biostatistics, Environmental Epidemiology & Climate Disaster',
      bio:
        'Head of EnvironMental Health and Co-Head, Data Science & Analytical Methods, Orygen/CYMH, University of Melbourne; Monash SPHPM. Focus on climate impacts, youth mental health outcomes and advanced data science.',
    },
    {
      name: 'Assoc Prof Rebecca Patrick (CI)',
      role: 'Public Health & Climate Research',
      bio:
        'Academic Convener, Climate CATCH Lab; Associate Professor (Climate Change & Health), MSPGH, University of Melbourne. Focus on climate change, youth mental health and participatory research.',
    },
    {
      name: 'Dr Jana Menssink (CI)',
      role: 'Clinical Psychology & Youth Mental Health',
      bio:
        'Research Fellow and Program Manager, Orygen/CYMH, University of Melbourne. Focus on climate-related mental health, social inclusion and service evaluation.',
    },
    {
      name: 'Dr Hasini Gunasiri (AI)',
      role: 'Climate Policy & Youth Mental Health',
      bio:
        'Research Fellow, Orygen/CYMH, University of Melbourne. Focus on mixed methods, co-design and systems approaches to climate policy and youth wellbeing.',
    },
    {
      name: 'Samantha Eala',
      role: 'Development Practice & One Health',
      bio:
        'Development practitioner (MSPGH, University of Melbourne| Orygen). Focus on environmental health, gender equity and disaster communication with community projects in the Philippines.',
    },
    {
      name: 'Sunny Nguyen',
      role: 'Participatory Evaluation & Strategy',
      bio:
        'Public health practitioner and academic (MSPGH, University of Melbourne). Focus on participatory evaluation and systems-level strategy across government, NGOs and services.',
    },
    {
      name: 'Neerja Singh',
      role: 'Youth Advocate & Peer Worker',
      bio:
        'Lived Experience Researcher (Orygen). BSc (Neuroscience and Psychology & Environmental Science) University of Melbourne.',
    },
  ];

  // ---------- Project CI ----------
  const projectCI: Member[] = [
    {
      name: 'Prof Lisa Gibbs',
      role: 'Disaster, Climate & Community Resilience',
      bio:
        'Professor and Director, Disaster, Climate & Adversity Unit, MSPGH, University of Melbourne. Focus on disaster recovery and community resilience.',
    },
    {
      name: 'Prof Debra Rickwood',
      role: 'Youth Mental Health & Outcome Measurement',
      bio:
        'Chief Scientific Advisor, headspace National; Professor, University of Canberra. Focus on help-seeking, early intervention and routine outcome measurement.',
    },
    {
      name: 'Assoc Prof Magenta Simmons',
      role: 'Youth Partnerships & Shared Decision-Making',
      bio:
        'Principal Research Fellow and Head, Youth Involvement Research, Orygen/CYMH, University of Melbourne. Focus on youth partnership and peer workforce development.',
    },
    {
      name: 'Prof Sue Cotton',
      role: 'Clinical Neuropsychology & Outcomes Research',
      bio:
        'Head, Health Services & Outcomes Research, Orygen/CYMH, University of Melbourne. Focus on outcomes measurement and clinical trials in youth mental health.',
    },
    {
      name: 'Assoc Prof Kate Filia',
      role: 'Social Inclusion & Youth Mental Health',
      bio:
        'Senior Research Fellow, Orygen/CYMH, University of Melbourne. Focus on social determinants of youth mental health including relationships, work, housing and community participation.',
    },
    {
      name: 'Dr Katitza Marinkovic Chávez',
      role: 'Participatory Methods & Youth-Centred Disaster Mental Health',
      bio:
        'Research Fellow, Disaster, Climate & Adversity Unit & Climate CATCH Lab, MSPGH, University of Melbourne. Focus on co-designing interventions with children and disaster-impacted communities.',
    },
    {
      name: 'Dr Marlee Bower',
      role: 'Built Environment & Social Determinants of Mental Health',
      bio:
        'Research Fellow, Matilda Centre, University of Sydney. Focus on loneliness, social connection and how built environments affect wellbeing in climate-impacted youth.',
    },
  ];

  // ---------- Project AI ----------
  const projectAI: Member[] = [
    {
      name: 'Dr Isabel Zbukvic',
      role: 'Implementation Science & Knowledge Translation',
      bio:
        'Senior Research Fellow and Academic Specialist (Knowledge Translation), Orygen/CYMH, University of Melbourne. Focus on behaviour change, equity and implementation science.',
    },
    {
      name: 'Assoc Prof Lexine Stapinski',
      role: 'Intervention Evaluation & Clinical Psychology',
      bio:
        'NHMRC Leadership Fellow and Lead, Intervention & Implementation, Matilda Centre, University of Sydney. Focus on prevention, substance use, and translation to policy.',
    },
    {
      name: 'Dr Rebekah Anderson',
      role: 'Behaviour Change & Science Communication',
      bio:
        'Early Career Researcher and Teaching Specialist, School of Psychological Sciences, University of Melbourne. Focus on pro-environmental behaviour change and effective communication.',
    },
    {
      name: 'Phoebe Quinn',
      role: 'Disaster Recovery & Climate Health',
      bio:
        'Research Fellow (Disaster Recovery), MSPGH, University of Melbourne. Focus on resilience, climate justice and policy-oriented resources.',
    },
    {
      name: 'Dr Ellie Brown',
      role: 'Clinical Psychology & Program Design',
      bio:
        'Research Fellow, Orygen/CYMH; Counselling Psychologist, Parkville Hub. Focus on early psychosis, physical health and embedding service evaluation.',
    },
    {
      name: 'Dr Shu Mei Teo',
      role: 'Biostatistics & Data Science',
      bio:
        'Research Fellow/Biostatistician, Orygen/CYMH, University of Melbourne. Focus on administrative and clinical datasets for youth mental-health policy.',
    },
    {
      name: 'Prof Eóin Killackey',
      role: 'Functional Recovery & Knowledge Translation',
      bio:
        'Chief of Research & Knowledge Translation and Head, Functional Recovery Program, Orygen/CYMH, University of Melbourne. Focus on evidence-based youth recovery and implementation.',
    },
    {
      name: 'Prof Tim Corney',
      role: 'Youth Work & Public Health',
      bio:
        'Professorial Research Fellow and Discipline Lead (Youth & Community Programs), Victoria University. Focus on youth work, prevention and disaster-impacted communities.',
    },
    {
      name: 'Assoc Prof Fiona MacDonald',
      role: 'Youth Lived Experience & Social Equity',
      bio:
        'Principal Research Fellow, Institute of Sustainable Industries & Liveable Cities, Victoria University. Focus on youth wellbeing, social equity, bullying, and disaster recovery.',
    },
  ];

  // ---------- Project Affiliate ----------
  const projectAffiliate: Member[] = [
    {
      name: 'Yan Zhang',
      role: 'Built Environment & Wellbeing',
      bio:
        'PhD Candidate, Infrastructure Engineering, University of Melbourne; Lecturer, Southern Cross University. Focus on indoor environmental quality and occupant wellbeing.',
    },
    {
      name: 'Myriam Ziou',
      role: 'Biostatistics & Environmental Epidemiology',
      bio:
        'Research Fellow, University of Melbourne. Focus on interdisciplinary collaboration in climate and youth mental health.',
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
