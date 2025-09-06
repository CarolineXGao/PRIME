import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Contact & Get Involved
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to join our mission? Whether you're a researcher, clinician, community organization, 
            or young person interested in our work, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2D6AA3] focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2D6AA3] focus:outline-none transition-colors"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#2D6AA3] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how you'd like to get involved or any questions you have..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2D6AA3] hover:bg-[#1e4d73] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Get Involved & Contact Info */}
          <div className="space-y-8">
            {/* Join the Network */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join the Network
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Become part of our growing community of researchers, practitioners, and advocates 
                working to support youth mental health in the climate crisis.
              </p>
              <button className="w-full bg-[#3A9C62] hover:bg-[#2d7a4f] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Join Our Network
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#2D6AA3] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-[#2D6AA3]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contact@prime-research.org</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#3A9C62] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-[#3A9C62]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+61 (0) 123 456 789</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#F4B43D] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-[#F4B43D]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">University Research Centre<br/>Melbourne, Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Connected
              </h3>
              
              <p className="text-gray-600 mb-4">Follow us on social media:</p>
              <div>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 bg-[#2D6AA3] bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors">
                    <Facebook className="w-5 h-5 text-[#2D6AA3]" />
                  </button>
                  <button className="w-10 h-10 bg-[#3A9C62] bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors">
                    <Twitter className="w-5 h-5 text-[#3A9C62]" />
                  </button>
                  <button className="w-10 h-10 bg-[#F4B43D] bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors">
                    <Linkedin className="w-5 h-5 text-[#F4B43D]" />
                  </button>
                  <button className="w-10 h-10 bg-[#2D6AA3] bg-opacity-10 rounded-lg flex items-center justify-center hover:bg-opacity-20 transition-colors">
                    <Youtube className="w-5 h-5 text-[#2D6AA3]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;