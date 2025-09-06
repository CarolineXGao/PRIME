import React, { useState } from 'react';
import { useEffect } from 'react';
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
import MeasurementToolsTable from './components/MeasurementToolsTable';
import ResourcesResearchers from './components/ResourcesResearchers';
import ResourcesClinicians from './components/ResourcesClinicians';
import ResourcesSchools from './components/ResourcesSchools';
import ResourcesParticipants from './components/ResourcesParticipants';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      setCurrentPage(event.detail);
    };

    window.addEventListener('navigate', handleNavigate as EventListener);
    return () => window.removeEventListener('navigate', handleNavigate as EventListener);
  }, []);

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
      case 'measurement-tools':
        return <MeasurementToolsTable setCurrentPage={setCurrentPage} />;
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
    </div>
  );
}

export default App;