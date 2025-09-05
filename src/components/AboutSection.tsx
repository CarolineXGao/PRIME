import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const AboutSection = () => {
  const goals = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Better Measurement",
      description: "Developing robust tools and methodologies to assess climate-related mental health impacts in youth populations."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Stronger Research Systems",
      description: "Building collaborative research infrastructure that connects researchers, clinicians, and communities."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Real-World Impact",
      description: "Translating research findings into practical interventions and policy recommendations."
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

        {/* The Need for PRIME */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="text-center p-6 bg-[#2D6AA3] text-white rounded-xl">
              <div className="text-4xl font-bold mb-2">6 in 10</div>
              <p>Young Australians worried about climate change</p>
            </div>
            <div className="text-center p-6 bg-[#3A9C62] text-white rounded-xl">
              <div className="text-4xl font-bold mb-2">75%</div>
              <p>Report feeling anxious about their future</p>
            </div>
            <div className="text-center p-6 bg-[#F4B43D] text-gray-900 rounded-xl">
              <div className="text-4xl font-bold mb-2">Limited</div>
              <p>Evidence-based interventions available</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              The Need for PRIME
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Climate change is not just an environmental issue—it's a mental health crisis affecting young people globally. 
                Research shows that climate anxiety, eco-grief, and solastalgia are increasingly common among youth, yet there 
                are limited evidence-based interventions specifically designed to address these challenges.
              </p>
              <p>
                PRIME fills this critical gap by providing a platform for rigorous research, collaborative development, and 
                real-world testing of interventions that can make a meaningful difference in young people's lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;