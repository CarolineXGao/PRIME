import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import { updateSEO } from '../utils/seo';

const About = () => {
  useEffect(() => {
    updateSEO('about');
  }, []);

  return <AboutSection />;
};

export default About;