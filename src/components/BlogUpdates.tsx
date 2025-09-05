import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogUpdates = () => {
  const updates = [
    {
      image: "https://images.pexels.com/photos/8549835/pexels-photo-8549835.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Research Insights",
      title: "New Findings: Climate Anxiety in Australian Youth",
      excerpt: "Our latest research reveals significant patterns in how young people experience and cope with climate-related distress...",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Events & Webinars",
      title: "Upcoming Webinar: Building Climate Resilience",
      excerpt: "Join our expert panel discussion on evidence-based strategies for supporting youth mental health in the climate crisis...",
      date: "March 20, 2024",
      readTime: "Webinar"
    },
    {
      image: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Voices from the Field",
      title: "Youth Participant Stories: Finding Hope",
      excerpt: "Hear directly from young people who have participated in PRIME research about their experiences and insights...",
      date: "March 10, 2024",
      readTime: "8 min read"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Latest Blog & Research Updates
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with our latest insights, research findings, and community stories.
            </p>
          </div>
          <button className="hidden sm:flex items-center text-[#2D6AA3] hover:text-[#1e4d73] font-semibold">
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: index === 0 ? '#2D6AA3' : index === 1 ? '#3A9C62' : '#F4B43D' }}
                  >
                    {update.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {update.date} • {update.readTime}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2D6AA3] transition-colors">
                  {update.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {update.excerpt}
                </p>

                <button className="flex items-center text-[#2D6AA3] hover:text-[#1e4d73] font-semibold group">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <button className="flex items-center mx-auto text-[#2D6AA3] hover:text-[#1e4d73] font-semibold">
            View All Posts
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogUpdates;