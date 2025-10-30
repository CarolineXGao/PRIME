import React, { useEffect } from 'react';
import StudyDesign from '../components/StudyDesign';
import { updateSEO } from '../utils/seo';

const Programs = () => {
  useEffect(() => {
    updateSEO('programs');
  }, []);

  return <StudyDesign />;
};

export default Programs;