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
        {/* Acknowledgment Section */}
        <div className="mb-8 space-y-4">
          <p className="text-blue-100 text-sm leading-relaxed">
            PRIME acknowledges the Traditional Owners of the lands we are on and pays respect to their Elders past and present. We recognise and respect their cultural heritage, beliefs and relationship to Country, which continue to be important to the First Nations people living today.
          </p>
          <p className="text-blue-100 text-sm leading-relaxed">
            PRIME celebrates diversity and welcomes all people regardless of their ethnicity, faith, sexual orientation, gender identity and lived experience.
          </p>
          
          {/* Flags */}
          <div className="flex justify-start space-x-4 mt-4">
            <img 
              src="/Ind.avif" 
              alt="Indigenous flag" 
              className="h-8 w-auto rounded shadow-sm"
            />
            <img 
              src="/Tor.avif" 
              alt="Torres Strait Islander flag" 
              className="h-8 w-auto rounded shadow-sm"
            />
            <img 
              src="/Gen.avif" 
              alt="Gender diversity flag" 
              className="h-8 w-auto rounded shadow-sm"
            />
          </div>
        </div>

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