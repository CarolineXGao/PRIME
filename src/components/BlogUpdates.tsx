import React from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';
import { getLatestPosts, BlogPost } from '../data/blogPosts';

const BlogUpdates = () => {
  const [selectedPost, setSelectedPost] = React.useState(null);

  const updates = getLatestPosts(3);

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
              key={update.id}
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
                    style={{ 
                      backgroundColor: update.category === 'Research Insights' ? '#2D6AA3' 
                                    : update.category === 'Events & Webinars' ? '#3A9C62' 
                                    : '#F4B43D' 
                    }}
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

                <button 
                  onClick={() => openModal(update)}
                  className="flex items-center text-[#2D6AA3] hover:text-[#1e4d73] font-semibold group"
                >
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

export default BlogUpdates;