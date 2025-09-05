import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const AboutSection = () => {
  const goals = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Better Measurement",
      description:
        "Developing robust tools and methodologies to assess climate-related mental health impacts in youth populations."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Stronger Research Systems",
      description:
        "Building collaborative research infrastructure that connects researchers, clinicians, and communities."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Real-World Impact",
      description:
        "Translating research findings into practical interventions and policy recommendations."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Block */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              About PRIME
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                In early 2025 we launched <strong>PRIME—Australia’s first dedicated
                research and implementation platform addressing the mental health impacts of
                climate change on young people</strong>, funded by the NHMRC ($1M). PRIME is
                led by researchers from the <strong>Centre for Youth Mental Health (Orygen)</strong> and the
                <strong> Melbourne School of Population and Global Health</strong> at the University of Melbourne,
                working in partnership with young people, clinicians and community organisations.
              </p>
              <p>
                PRIME was established in response to rising climate anxiety, eco-grief and
                related psychological impacts among youth, alongside a striking absence of
                coordinated, evidence-based interventions. Our platform brings together
                globally recognised researchers and young people as co-designers to fast-track
                solutions that are both scientifically rigorous and practically relevant.
                By combining climate science with mental-health expertise, we aim to build
                resilience, hope and agency for the next generation—and help Australia lead
                proactive mental-health responses to climate change.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-200 rounded-xl h-64 lg:h-full flex items-center justify-center">
              <p className="text-gray-500 text-center px-4">
                [Youth Collaboration / Climate Image]<br/>
                <span className="text-sm">Placeholder for custom illustration</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="text-center p-8 bg-[#2D6AA3] bg-opacity-5 rounded-xl border-2 border-[#2D6AA3] border-opacity-20">
            <h3 className="text-2xl font-bold text-[#2D6AA3] mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To accelerate the development and implementation of evidence-based interventions that support youth mental health 
              in the context of climate change, fostering resilience and adaptive coping strategies.
            </p>
          </div>
          <div className="text-center p-8 bg-[#3A9C62] bg-opacity-5 rounded-xl border-2 border-[#3A9C62] border-opacity-20">
            <h3 className="text-2xl font-bold text-[#3A9C62] mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              A world where young people have the tools, support, and resilience to thrive despite climate challenges, 
              contributing to both their own wellbeing and positive environmental action.
            </p>
          </div>
        </div>

        {/* Three Core Goals */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Three Core Goals
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#F4B43D] bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-[#F4B43D]">
                    {goal.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900">{goal.title}</h4>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Need for PRIME (UPDATED) */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Stat cards */}
          <div className="space-y-8">
            <a
              href="https://orygen.org.au/getmedia/61b84cfb-36fb-42d4-8a3f-33843fa614c5/91663_MA-Climate-change-report_full-report_Final_15April.aspx?ext=.pdf"
              target="_blank"
              rel="noreferrer"
              className="block focus:outline-none focus:ring-4 focus:ring-[#2D6AA3]/30 rounded-xl"
            >
              <div className="text-center p-6 bg-[#2D6AA3] text-white rounded-xl hover:brightness-105 transition">
                <div className="text-4xl font-bold mb-2">6 in 10</div>
                <p>Young Australians worried about climate change (Gao et&nbsp;al., 2024)</p>
              </div>
            </a>

            <a
              href="https://doi.org/10.1016/S2542-5196(21)00278-3"
              target="_blank"
              rel="noreferrer"
              className="block focus:outline-none focus:ring-4 focus:ring-[#3A9C62]/30 rounded-xl"
            >
              <div className="text-center p-6 bg-[#3A9C62] text-white rounded-xl hover:brightness-105 transition">
                <div className="text-4xl font-bold mb-2">Two-thirds</div>
                <p>16–25 year-olds feel anxious, afraid or sad about climate change (Hickman et&nbsp;al., 2021)</p>
              </div>
            </a>

            <a
              href="https://doi.org/10.1016/j.oneear.2024.02.017"
              target="_blank"
              rel="noreferrer"
              className="block focus:outline-none focus:ring-4 focus:ring-[#F4B43D]/30 rounded-xl"
            >
              <div className="text-center p-6 bg-[#F4B43D] text-gray-900 rounded-xl hover:brightness-105 transition">
                <div className="text-4xl font-bold mb-2">1 in 4</div>
                <p>Children aged 10–14 fear the world might end before they grow up (Lucas et&nbsp;al., 2024)</p>
              </div>
            </a>
          </div>

          {/* Narrative + linked citations */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">The Need for PRIME</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Climate change isn’t just an environmental crisis—<strong>it’s a mental health crisis</strong>. From devastating floods and bushfires to rising sea levels and hazardous air pollution, young people are growing up with climate threats that are constant and deeply personal. These impacts aren’t only physical—they are profoundly emotional.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Over 6 in 10 young Australians</strong> report being worried about climate change{" "}
                  <a
                    href="https://orygen.org.au/getmedia/61b84cfb-36fb-42d4-8a3f-33843fa614c5/91663_MA-Climate-change-report_full-report_Final_15April.aspx?ext=.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#2D6AA3] underline"
                  >
                    Gao et&nbsp;al., 2024
                  </a>.
                </li>
                <li>
                  <strong>Two-thirds of 16–25-year-olds</strong> feel anxious, afraid, or sad about it{" "}
                  <a
                    href="https://doi.org/10.1016/S2542-5196(21)00278-3"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#2D6AA3] underline"
                  >
                    Hickman et&nbsp;al., 2021
                  </a>.
                </li>
                <li>
                  <strong>1 in 4 children aged 10–14</strong> fear the world might end before they grow up{" "}
                  <a
                    href="https://doi.org/10.1016/j.oneear.2024.02.017"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#2D6AA3] underline"
                  >
                    Lucas et&nbsp;al., 2024
                  </a>.
                </li>
              </ul>

              <p>
                For many, these feelings are worsened by a lack of agency. Young people—especially those who can’t yet vote—often feel excluded from climate decisions, leading to anger, helplessness and grief. Despite the growing emotional toll, few mental-health services address the climate crisis. Community-led initiatives show promise but lack the infrastructure to scale. And translating research into practice can take decades.
              </p>
              <p>
                <strong>PRIME is here to change that.</strong> We are building a faster, youth-driven, community-grounded platform that turns promising ideas into real-world programs, supports local innovation, and puts the mental health of young people at the centre of climate response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
