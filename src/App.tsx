import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoreHighlights from './components/CoreHighlights';
import BlogUpdates from './components/BlogUpdates';
import Partners from './components/Partners';
import AboutSection from './components/AboutSection';
import StudyDesign from './components/StudyDesign';
import StudyTeam from './components/StudyTeam';
import BlogPage from './components/BlogPage';
import Resources from './components/Resources';
import ResourcesResearchers from './components/ResourcesResearchers';
import ResourcesClinicians from './components/ResourcesClinicians';
import ResourcesSchools from './components/ResourcesSchools';
import ResourcesParticipants from './components/ResourcesParticipants';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutSection />;
      case 'study-design':
        return <StudyDesign />;
      case 'team':
        return <StudyTeam />;
      case 'blog':
        return <BlogPage />;
      case 'resources':
        return <Resources setCurrentPage={setCurrentPage} />;
      case 'resources-researchers':
        return <ResourcesResearchers setCurrentPage={setCurrentPage} />;
      case 'resources-clinicians':
        return <ResourcesClinicians setCurrentPage={setCurrentPage} />;
      case 'resources-schools':
        return <ResourcesSchools setCurrentPage={setCurrentPage} />;
      case 'resources-participants':
        return <ResourcesParticipants setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <HeroSection />
            <CoreHighlights />
            <BlogUpdates />
            <Partners />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      
      {/* Page Navigation for Demo */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg border-2 border-gray-200 p-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Page Navigator</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'home' ? 'bg-[#2D6AA3] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'about' ? 'bg-[#2D6AA3] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage('study-design')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'study-design' ? 'bg-[#2D6AA3] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Study Design
            </button>
            <button
              onClick={() => setCurrentPage('team')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'team' ? 'bg-[#2D6AA3] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Team
            </button>
            <button
              onClick={() => setCurrentPage('blog')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'blog' ? 'bg-[#2D6AA3] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => setCurrentPage('resources')}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 'resources' ? 'bg-[#2D6AA3] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className={`px-3 py-2 rounded transition-colors col-span-2 ${
                currentPage === 'contact' ? 'bg-[#2D6AA3] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;