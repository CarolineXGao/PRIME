import React, { useState } from 'react';
import { Calendar, ArrowRight, Filter, X } from 'lucide-react';

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState('Research Insights');
  const [selectedPost, setSelectedPost] = useState(null);

  const tabs = ['Research Insights', 'Events & Webinars', 'Voices from the Field'];

  const allPosts = {
    'Research Insights': [
      {
        image: "https://images.pexels.com/photos/8549835/pexels-photo-8549835.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Climate Change and Youth: Fast-Tracking Mental Health Solutions",
        excerpt: "We know that climate change is more than an environmental crisis — it's also a mental health challenge. Our new commentary calls for urgent action to close the gap between what young people are experiencing and the slow pace of research and policy responses.",
        fullContent: `We know that climate change is more than an environmental crisis — it's also a mental health challenge. Young people, in particular, are experiencing rising levels of anxiety, grief and hopelessness in the face of floods, bushfires, heatwaves and ongoing climate uncertainty.

Our new commentary, published in the Journal of Applied Youth Studies, calls for urgent action to close the gap between what young people are experiencing and the slow pace of research and policy responses.

We highlight that:

• Young people are disproportionately affected by climate-related disasters and exclusion from decision-making.

• Youth-specific interventions are rare, and translating research into practice can take decades.

• Innovative approaches, like adaptive platform trials, can help us test and scale solutions much faster.

• Youth must be at the centre — not only as participants, but as co-designers and leaders in shaping mental health and climate responses.

At PRIME, we are working to build this platform: a space where researchers, clinicians, communities, and young people can come together to design and test interventions that are fit for purpose, evidence-based, and led by youth voices.

👉 You can read the full open access article here: https://doi.org/10.1007/s43151-025-00174-1`,
        date: "March 18, 2024",
        readTime: "5 min read",
        category: "Research Insights"
      },
      {
        image: "https://images.pexels.com/photos/7551640/pexels-photo-7551640.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Vulnerability and Psychosocial Impacts of Extreme Weather on Young People in Australia",
        excerpt: "A new open-access study using data from 19,501 teens (15–19 years) finds that adolescents exposed to floods, fires, storms or droughts report higher climate concerns, more psychological distress, and greater housing/financial challenges.",
        fullContent: `TL;DR: A new open-access study using data from 19,501 teens (15–19 years) finds that adolescents exposed to floods, fires, storms or droughts report higher climate concerns, more psychological distress, and greater housing/financial challenges—with the biggest impacts when their household is directly affected.`,
        date: "March 12, 2024",
        readTime: "7 min read",
        category: "Research Insights"
      },
      {
        image: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Intervention Effectiveness: Early Results",
        excerpt: "Preliminary findings from our randomized controlled trials show promising results for cognitive-behavioral approaches to climate anxiety.",
        fullContent: "Preliminary findings from our randomized controlled trials show promising results for cognitive-behavioral approaches to climate anxiety. Our early data suggests that targeted interventions can significantly reduce climate-related distress while building resilience and agency among young participants.",
        date: "March 8, 2024",
        readTime: "6 min read",
        category: "Research Insights"
      }
    ],
    'Events & Webinars': [
      {
        image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Upcoming Webinar: Building Climate Resilience",
        excerpt: "Join our expert panel discussion on evidence-based strategies for supporting youth mental health in the climate crisis. Free registration available.",
        fullContent: "Join our expert panel discussion on evidence-based strategies for supporting youth mental health in the climate crisis. This webinar will feature leading researchers, clinicians, and young advocates discussing current evidence, practical strategies, and youth leadership approaches.",
        date: "March 20, 2024",
        readTime: "Webinar",
        category: "Events & Webinars"
      },
      {
        image: "https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Youth Research Workshop Series",
        excerpt: "Monthly workshops designed to build research capacity among young people interested in climate and mental health advocacy.",
        fullContent: "Monthly workshops designed to build research capacity among young people interested in climate and mental health advocacy. These sessions cover research methods, data interpretation, and how to translate findings into actionable advocacy strategies.",
        date: "Ongoing",
        readTime: "Workshop Series",
        category: "Events & Webinars"
      }
    ],
    'Voices from the Field': [
      {
        image: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Youth Participant Stories: Finding Hope",
        excerpt: "Hear directly from young people who have participated in PRIME research about their experiences, insights, and the tools they've found most helpful.",
        fullContent: `Hear directly from young people who have participated in PRIME research about their experiences, insights, and the tools they've found most helpful.

"Being part of PRIME has shown me that my climate anxiety isn't something I have to face alone. The group sessions helped me connect with other young people who understand what I'm going through." - Sarah, 19

"I learned practical strategies for managing my eco-grief while also finding ways to take meaningful action. It's about hope and agency, not just coping." - Marcus, 22

"The research process itself was empowering. We weren't just participants - we were partners in designing something that could help other young people." - Aisha, 17

These stories highlight the importance of youth-centered approaches and the power of peer support in building climate resilience.`,
        date: "March 10, 2024",
        readTime: "8 min read",
        category: "Voices from the Field"
      },
      {
        image: "https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Community Leader Perspectives",
        excerpt: "Local community leaders share their observations about climate impacts on youth and the importance of culturally responsive interventions.",
        fullContent: "Local community leaders share their observations about climate impacts on youth and the importance of culturally responsive interventions. These perspectives highlight the need for interventions that respect cultural values and leverage existing community strengths.",
        date: "March 5, 2024",
        readTime: "6 min read",
        category: "Voices from the Field"
      }
    ]
  };

  const openModal = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Blog & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay up to date with the latest research findings, upcoming events, and stories from our community 
            of young people, researchers, and practitioners working on climate and mental health.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg border-2 border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm md:text-base whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-[#2D6AA3] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {allPosts[activeTab]?.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ 
                      backgroundColor: activeTab === 'Research Insights' ? '#2D6AA3' 
                                    : activeTab === 'Events & Webinars' ? '#3A9C62' 
                                    : '#F4B43D' 
                    }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date} • {post.readTime}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2D6AA3] transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <button 
                  onClick={() => openModal(post)}
                  className="flex items-center text-[#2D6AA3] hover:text-[#1e4d73] font-semibold group"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-[#2D6AA3] text-[#2D6AA3] hover:bg-[#2D6AA3] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
            Load More Posts
          </button>
        </div>
      </div>
      </section>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div>
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium text-white mb-2 inline-block"
                  style={{ backgroundColor: selectedPost.category === 'Research Insights' ? '#2D6AA3' : selectedPost.category === 'Events & Webinars' ? '#3A9C62' : '#F4B43D' }}
                >
                  {selectedPost.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900">{selectedPost.title}</h2>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedPost.date} • {selectedPost.readTime}
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="prose max-w-none">
                {selectedPost.fullContent.split('\n').map((paragraph, index) => {
                  // Check if paragraph contains the DOI URL
                  if (paragraph.includes('https://doi.org/10.1007/s43151-025-00174-1')) {
                    return (
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                        👉 You can read the full open access article here:{' '}
                        <a 
                          href="https://doi.org/10.1007/s43151-025-00174-1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#2D6AA3] hover:text-[#1e4d73] underline font-medium"
                        >
                          https://doi.org/10.1007/s43151-025-00174-1
                        </a>
                      </p>
                    );
                  }
                  return (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;