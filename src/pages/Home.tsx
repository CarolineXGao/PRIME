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
      <HeroSection />
      <CoreHighlights />
      <BlogUpdates />
      <Partners />
    </>
  );
};

export default Home;