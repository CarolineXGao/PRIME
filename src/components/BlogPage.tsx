import React, { useState } from 'react';
import { Calendar, ArrowRight, Filter } from 'lucide-react';

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState('Research Insights');

  const tabs = ['Research Insights', 'Events & Webinars', 'Voices from the Field'];

  const allPosts = {
    'Research Insights': [
      {
        image: "https://images.pexels.com/photos/8549835/pexels-photo-8549835.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "New Findings: Climate Anxiety in Australian Youth",
        excerpt: "Our latest research reveals significant patterns in how young people experience and cope with climate-related distress across different communities and demographics.",
        date: "March 15, 2024",
        readTime: "5 min read",
        category: "Research Insights"
      },
      {
        image: "https://images.pexels.com/photos/7551640/pexels-photo-7551640.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Measuring Climate-Related Mental Health Impact",
        excerpt: "Exploring new methodologies for assessing the psychological impact of environmental changes on adolescent populations using validated measurement tools.",
        date: "March 12, 2024",
        readTime: "7 min read",
        category: "Research Insights"
      },
      {
        image: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Intervention Effectiveness: Early Results",
        excerpt: "Preliminary findings from our randomized controlled trials show promising results for cognitive-behavioral approaches to climate anxiety.",
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
        date: "March 20, 2024",
        readTime: "Webinar",
        category: "Events & Webinars"
      },
      {
        image: "https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Youth Research Workshop Series",
        excerpt: "Monthly workshops designed to build research capacity among young people interested in climate and mental health advocacy.",
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
        date: "March 10, 2024",
        readTime: "8 min read",
        category: "Voices from the Field"
      },
      {
        image: "https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Community Leader Perspectives",
        excerpt: "Local community leaders share their observations about climate impacts on youth and the importance of culturally responsive interventions.",
        date: "March 5, 2024",
        readTime: "6 min read",
        category: "Voices from the Field"
      }
    ]
  };

  return (
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

                <button className="flex items-center text-[#2D6AA3] hover:text-[#1e4d73] font-semibold group">
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
  );
};

export default BlogPage;