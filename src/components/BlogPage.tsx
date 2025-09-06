import React, { useState } from 'react';
import { Calendar, ArrowRight, Filter, X } from 'lucide-react';
import { blogPosts, getPostsByCategory, categories, BlogPost } from '../data/blogPosts';

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState<BlogPost['category']>('Research Insights');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const currentPosts = getPostsByCategory(activeTab);

  const openModal = (post: BlogPost) => {
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
              {categories.map((tab) => (
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
          {currentPosts.map((post, index) => (
            <article
              key={post.id}
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
                <div 
                  className="text-gray-700 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ 
                    __html: selectedPost.fullContent
                      .replace(/https:\/\/doi\.org\/([^\s]+)/g, '<a href="https://doi.org/$1" target="_blank" rel="noopener noreferrer" class="text-[#2D6AA3] hover:text-[#1e4d73] underline font-medium">https://doi.org/$1</a>')
                      .replace(/\n\n/g, '</p><p class="mb-4">')
                      .replace(/^/, '<p class="mb-4">')
                      .replace(/$/, '</p>')
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;