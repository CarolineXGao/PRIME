import React from 'react';

const avatarUrl = (name: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
    name
  )}&backgroundType=gradientLinear&fontWeight=700`;

type Member = {
  name: string;
  role: string;        // short, blue-highlighted expertise line
  bio: string;         // 1–3 sentence compact research + position + institution
  image?: string;
};

const Card = ({ member }: { member: Member }) => {
  const img =
    member.image && member.image.trim().length > 0
      ? member.image
      : avatarUrl(member.name);

  return (
    <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#2D6AA3] hover:border-opacity-30">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white shadow-lg bg-white">
        <img src={img} alt={member.name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>

      {/* Role (blue line) */}
      <p className="text-[#2D6AA3] font-semibold mb-4">{member.role}</p>

      {/* Bio */}
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
  const projectTeam: Member[] = [
    {
      name: 'Assoc Prof Caroline Gao',
      role: 'Biostatistician & Environmental Epidemiologist',
      bio: 'Head of EnvironMental Health and Co-Head, Data Science & Analytical Methods, Centre for Youth Mental Health (Orygen), University of Melbourne; School of Public Health & Preventive Medicine, Monash University. Focus on climate impacts, youth mental health outcomes, and advanced data science methods.',
      image: '',
    },
    {
      name: 'Assoc Prof Rebecca Patrick',
      role: 'Public Health & Climate Researcher',
      bio: 'Academic Convener, Climate CATCH Lab, and Associate Professor (Climate Change and Health), Melbourne School of Population & Global Health, University of Melbourne. Focus on climate change, youth mental health and participatory approaches.',
      image: '',
    },
    // …update the rest in the same format
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
        {/* add other sections the same way */}
      </div>
    </section>
  );
};

export default StudyTeam;
