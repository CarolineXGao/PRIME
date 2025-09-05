import React from 'react';

const Footer = () => {
  const quickLinks = [
    "How it Works",
    "Explore Research",
    "FAQs",
    "Contact"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Research Ethics",
    "Disclaimer"
  ];

  return (
    <footer className="bg-[#2D6AA3] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Row - Navigation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Research</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Study Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Publications</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Collaborate</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Get Involved</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Participate</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Mission</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Impact</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Row - Partner Logos */}
        <div className="border-t border-blue-400 border-opacity-30 pt-8 mb-8">
          <h3 className="text-center text-sm font-semibold text-blue-100 mb-6">
            Supported by
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-3 flex items-center justify-center">
                <div className="w-full h-6 bg-white bg-opacity-30 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Legal & Copyright */}
        <div className="border-t border-blue-400 border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
              {legalLinks.map((link, index) => (
                <a key={index} href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                  {link}
                </a>
              ))}
            </div>
            <div className="text-center md:text-right text-blue-100 text-sm">
              <p>© 2024 PRIME Research Platform. All rights reserved.</p>
              <p className="mt-1">Empowering youth through climate-informed mental health research.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;