import React from 'react';

const Footer = () => {
  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Research Ethics",
    "Disclaimer"
  ];

  return (
    <footer className="bg-[#2D6AA3] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Legal & Copyright */}
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
              {legalLinks.map((link, index) => (
                <button key={index} className="text-blue-100 hover:text-white transition-colors text-sm">
                  {link}
                </button>
              ))}
            </div>
            <div className="text-center md:text-right text-blue-100 text-sm">
              <p>© 2025 PRIME Research Platform. All rights reserved.</p>
              <p className="mt-1">Empowering youth through climate-informed mental health research.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;