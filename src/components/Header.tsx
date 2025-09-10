import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src="/Logo3.jpg" 
              alt="PRIME Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className={`font-medium border-b-2 pb-1 transition-colors ${
                currentPage === 'home' 
                  ? 'text-[#2D6AA3] border-[#2D6AA3]' 
                  : 'text-gray-700 hover:text-[#2D6AA3] border-transparent hover:border-[#2D6AA3]'
              }`}
            >
              Home
            </button>
            <div className="relative">
              <button 
                onClick={() => handleNavClick('about')}
                className={`font-medium border-b-2 pb-1 transition-colors ${
                  currentPage === 'about' 
                    ? 'text-[#2D6AA3] border-[#2D6AA3]' 
                    : 'text-gray-700 hover:text-[#2D6AA3] border-transparent hover:border-[#2D6AA3]'
                }`}
              >
                About
              </button>
            </div>
            <button 
              onClick={() => handleNavClick('study-design')}
              className={`font-medium border-b-2 pb-1 transition-colors ${
                currentPage === 'study-design' 
                  ? 'text-[#2D6AA3] border-[#2D6AA3]' 
                  : 'text-gray-700 hover:text-[#2D6AA3] border-transparent hover:border-[#2D6AA3]'
              }`}
            >
              Study Design
            </button>
            <button 
              onClick={() => handleNavClick('team')}
              className={`font-medium border-b-2 pb-1 transition-colors ${
                currentPage === 'team' 
                  ? 'text-[#2D6AA3] border-[#2D6AA3]' 
                  : 'text-gray-700 hover:text-[#2D6AA3] border-transparent hover:border-[#2D6AA3]'
              }`}
            >
              Team
            </button>
            <button 
              onClick={() => handleNavClick('blog')}
              className={`font-medium border-b-2 pb-1 transition-colors ${
                currentPage === 'blog' 
                  ? 'text-[#2D6AA3] border-[#2D6AA3]' 
                  : 'text-gray-700 hover:text-[#2D6AA3] border-transparent hover:border-[#2D6AA3]'
              }`}
            >
              Blog & Updates
            </button>
            <button 
              onClick={() => handleNavClick('resources')}
              className={`font-medium border-b-2 pb-1 transition-colors ${
                currentPage === 'resources' 
                  ? 'text-[#2D6AA3] border-[#2D6AA3]' 
                  : 'text-gray-700 hover:text-[#2D6AA3] border-transparent hover:border-[#2D6AA3]'
              }`}
            >
              Resources
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`font-medium border-b-2 pb-1 transition-colors ${
                currentPage === 'contact' 
                  ? 'text-[#2D6AA3] border-[#2D6AA3]' 
                  : 'text-gray-700 hover:text-[#2D6AA3] border-transparent hover:border-[#2D6AA3]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button 
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left font-medium ${
                currentPage === 'home' ? 'text-[#2D6AA3]' : 'text-gray-700 hover:text-[#2D6AA3]'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left font-medium ${
                currentPage === 'about' ? 'text-[#2D6AA3]' : 'text-gray-700 hover:text-[#2D6AA3]'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('study-design')}
              className={`block w-full text-left font-medium ${
                currentPage === 'study-design' ? 'text-[#2D6AA3]' : 'text-gray-700 hover:text-[#2D6AA3]'
              }`}
            >
              Study Design
            </button>
            <button 
              onClick={() => handleNavClick('team')}
              className={`block w-full text-left font-medium ${
                currentPage === 'team' ? 'text-[#2D6AA3]' : 'text-gray-700 hover:text-[#2D6AA3]'
              }`}
            >
              Team
            </button>
            <button 
              onClick={() => handleNavClick('blog')}
              className={`block w-full text-left font-medium ${
                currentPage === 'blog' ? 'text-[#2D6AA3]' : 'text-gray-700 hover:text-[#2D6AA3]'
              }`}
            >
              Blog & Updates
            </button>
            <button 
              onClick={() => handleNavClick('resources')}
              className={`block w-full text-left font-medium ${
                currentPage === 'resources' ? 'text-[#2D6AA3]' : 'text-gray-700 hover:text-[#2D6AA3]'
              }`}
            >
              Resources
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left font-medium ${
                currentPage === 'contact' ? 'text-[#2D6AA3]' : 'text-gray-700 hover:text-[#2D6AA3]'
              }`}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;