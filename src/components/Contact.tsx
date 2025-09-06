import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Contact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with the PRIME team and stay connected with our latest updates.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
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
                  <p className="text-gray-600">PRIME@orygen.org.au</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#F4B43D] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-[#F4B43D]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">35 Poplar Rd<br/>Parkville VIC 3052</p>
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
    </section>
  );
};

export default Contact;