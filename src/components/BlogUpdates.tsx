import React from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';

const BlogUpdates = () => {
  const [selectedPost, setSelectedPost] = React.useState(null);

  const updates = [
    {
      image: "https://images.pexels.com/photos/8549835/pexels-photo-8549835.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Research Insights",
      title: "Climate Change and Youth: Fast-Tracking Mental Health Solutions",
      excerpt: "We know that climate change is more than an environmental crisis — it's also a mental health challenge. Our new commentary calls for urgent action to close the gap between what young people are experiencing and the slow pace of research and policy responses...",
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
      readTime: "5 min read"
    },
    {
      image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Events & Webinars",
      title: "Upcoming Webinar: Building Climate Resilience",
      excerpt: "Join our expert panel discussion on evidence-based strategies for supporting youth mental health in the climate crisis...",
      fullContent: `Join our expert panel discussion on evidence-based strategies for supporting youth mental health in the climate crisis.

This webinar will feature leading researchers, clinicians, and young advocates discussing:

• Current evidence on climate impacts on youth mental health
• Practical intervention strategies that work
• How to build resilience in climate-affected communities
• Youth leadership in climate mental health responses

Our panel includes experts from Orygen, University of Melbourne, and youth advocates with lived experience.

Registration is free and includes access to resources and follow-up materials.`,
      date: "March 20, 2024",
      readTime: "Webinar"
    },
    {
      image: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Voices from the Field",
      title: "Youth Participant Stories: Finding Hope",
      excerpt: "Hear directly from young people who have participated in PRIME research about their experiences and insights...",
      fullContent: `Hear directly from young people who have participated in PRIME research about their experiences, insights, and the tools they've found most helpful.

"Being part of PRIME has shown me that my climate anxiety isn't something I have to face alone. The group sessions helped me connect with other young people who understand what I'm going through." - Sarah, 19

"I learned practical strategies for managing my eco-grief while also finding ways to take meaningful action. It's about hope and agency, not just coping." - Marcus, 22

"The research process itself was empowering. We weren't just participants - we were partners in designing something that could help other young people." - Aisha, 17

These stories highlight the importance of youth-centered approaches and the power of peer support in building climate resilience.`,
      date: "March 10, 2024",
      readTime: "8 min read"
    }
  ];

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
                {selectedPost.fullContent.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogUpdates;