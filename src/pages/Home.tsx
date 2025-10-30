import React from 'react';
import HeroSection from '../components/HeroSection';
import CoreHighlights from '../components/CoreHighlights';
import BlogUpdates from '../components/BlogUpdates';
import Partners from '../components/Partners';

const Home = () => {
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