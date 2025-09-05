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
                  <button className="text-blue-100 hover:text-white transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Research</h3>
            <ul className="space-y-2">
              <li><button className="text-blue-100 hover:text-white transition-colors">Study Design</button></li>
              <li><button className="text-blue-100 hover:text-white transition-colors">Publications</button></li>
              <li><button className="text-blue-100 hover:text-white transition-colors">Resources</button></li>
              <li><button className="text-blue-100 hover:text-white transition-colors">Collaborate</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><button className="text-blue-100 hover:text-white transition-colors">Get Involved</button></li>
              <li><button className="text-blue-100 hover:text-white transition-colors">Participate</button></li>
              <li><button className="text-blue-100 hover:text-white transition-colors">Events</button></li>
              <li><button className="text-blue-100 hover:text-white transition-colors">Newsletter</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><button className="text-blue-100 hover:text-white transition-colors">Our Team</button></li>
              <li><button className="text-blue-100 hover:text-white transition-colors">Mission</button></li>
              <li><button className="text-blue-100 hover:text-white transition-colors">Partners</button></li>
              <li><button className="text-blue-100 hover:text-white transition-colors">Impact</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row - Legal & Copyright */}
        <div className="border-t border-blue-400 border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
              {legalLinks.map((link, index) => (
                <button key={index} className="text-blue-100 hover:text-white transition-colors text-sm">
                  {link}
                </button>
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