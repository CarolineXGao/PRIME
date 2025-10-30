import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import CoreHighlights from '../components/CoreHighlights';
import BlogUpdates from '../components/BlogUpdates';
import Partners from '../components/Partners';
import { updateSEO } from '../utils/seo';

const Home = () => {
  useEffect(() => {
    updateSEO('home');
  }, []);

  return (
    <>
      <HeroSection
        title="Youth Mental Health & Climate Change"
        subtitle="Platform for Research and Interventions in Mental Health and the Environment"
        description="Australia's first dedicated research platform addressing the mental health impacts of climate change on young people through evidence-based interventions and community partnerships."
        primaryCTA={{
          text: "Learn About PRIME",
          href: "/about"
        }}
        secondaryCTA={{
          text: "Explore Resources",
          href: "/resources"
        }}
        backgroundImage="/Images/Landing page.png"
        backgroundAlt="Young people collaborating on climate and mental health initiatives"
      />
      <CoreHighlights />
      <BlogUpdates />
      <Partners />
    </>
  );
};

export default Home;