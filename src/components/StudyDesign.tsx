import React from 'react';
import {
  UserPlus,
  Users,
  FlaskConical,
  TrendingUp,
  Layers,
  Workflow,
  ClipboardCheck,
  Building2,
  HeartHandshake,
  LineChart,
} from 'lucide-react';

const StudyDesign = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Recruitment",
      description:
        "Engage diverse young people (12–25) through schools, services and community partners, and inclusive digital outreach."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Co-Design",
      description:
        "Partner with youth and communities to shape priorities, content, delivery and evaluation so programs are relevant and acceptable."
    },
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Trial Testing",
      description:
        "Use an adaptive platform to evaluate multiple group-based interventions efficiently under a shared master protocol."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scaling",
      description:
        "Translate effective interventions into routine practice across schools, communities and mental-health services."
    },
  ];

  const pillars = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Adaptive Platform",
      body:
        "Simultaneous, efficient testing of multiple interventions using a shared infrastructure, an approach informed by COVID-19 response platforms."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Master Protocol",
      body:
        "A common set of methods, outcomes and governance streamlines co-development, evaluation and implementation across projects."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "EnvironMental Health Measure",
      body:
        "A strengths-based, co-developed outcome measure to inform climate–mental-health responses and track resilience and wellbeing."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Youth & Community Advisory",
      body:
        "Advisory groups guide priorities, design, evaluation and policy engagement to centre youth leadership and lived experience."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Cross-Sector Settings",
      body:
        "Programs operate where young people are—schools, communities and services, supporting early intervention and equitable access."
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Real-World Translation",
      body:
        "Implementation science ensures effective programs are scalable, sustainable and embedded in existing systems."
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            How PRIME Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            PRIME is an integrated, next-generation research and implementation platform that accelerates the
            development, evaluation and real-world delivery of interventions addressing climate-related mental-health
            impacts in young people.
          </p>
        </div>

        {/* Platform Overview / Context */}
        <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-gray-700 leading-relaxed">
              <p>
                Leveraging expertise in research, clinical care and health promotion, PRIME supports{" "}
                <strong>simultaneous testing of multiple group-based interventions</strong> through shared infrastructure, 
                adopting an <strong>adaptive platform</strong> design inspired by COVID-19 response models.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Prioritises young Australians (12–25),</strong> among the most affected by climate-related disruption.
                </li>
                <li>
                  <strong>Establishes Youth & Community Advisory groups</strong> to guide priorities, design, evaluation and policy.
                </li>
                <li>
                  <strong>Co-develops the EnvironMental Health measure</strong> to inform responses and monitor outcomes.
                </li>
                <li>
                  <strong>Enables rapid co-development and evaluation</strong> of clinician-, researcher- and community-led programs
                  via a <strong>master protocol</strong>, reducing duplication and time to impact.
                </li>
                <li>
                  <strong>Builds lasting infrastructure</strong> for cross-sector collaboration and research translation in a high-priority
                  area of public health.
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-xl border-2 border-[#2D6AA3] border-opacity-20 bg-[#2D6AA3] bg-opacity-5">
                <h4 className="text-[#2D6AA3] font-semibold mb-2">Who it’s for</h4>
                <p className="text-sm text-gray-700">
                  Young people aged <strong>12–25</strong>, with a focus on early intervention and populations experiencing climate-related
                  mental-health risks.
                </p>
              </div>
              <div className="p-6 rounded-xl border-2 border-[#3A9C62] border-opacity-20 bg-[#3A9C62] bg-opacity-5">
                <h4 className="text-[#3A9C62] font-semibold mb-2">Where we work</h4>
                <p className="text-sm text-gray-700">
                  <strong>Schools</strong>, <strong>communities</strong> and <strong>mental-health services</strong>, partnering with local networks for reach and equity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-300 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  </div>
                </div>
              )}

              <div className="relative z-10 bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-[#2D6AA3] hover:border-opacity-30 transition-all duration-300 text-center hover:shadow-lg group">
                <div className="w-16 h-16 bg-[#2D6AA3]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#2D6AA3] group-hover:scale-110 transition-transform duration-200">{step.icon}</div>
                </div>

                <div className="mb-3">
                  <span className="inline-block w-8 h-8 bg-[#2D6AA3] text-white rounded-full text-sm font-bold flex items-center justify-center mb-3">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>

                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Capabilities */}
        <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Makes PRIME Different
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-[#2D6AA3] hover:border-opacity-30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-full bg-[#F4B43D] bg-opacity-10 flex items-center justify-center mb-4 text-[#F4B43D] group-hover:scale-110 transition-transform duration-200">
                  {p.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Framework */}
        <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Research Framework
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#2D6AA3] mb-3">Participatory Design</h4>
              <p className="text-gray-600">
                Young people and communities are partners from priority-setting to policy engagement, ensuring interventions meet real needs.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#3A9C62] mb-3">Mixed Methods</h4>
              <p className="text-gray-600">
                Integrated quantitative and qualitative approaches provide a comprehensive understanding of impact, equity and feasibility.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-[#F4B43D] mb-3">Implementation Science</h4>
              <p className="text-gray-600">
                From the outset, we plan for adoption, sustainability and scale so effective programs can be delivered widely and equitably.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudyDesign;
