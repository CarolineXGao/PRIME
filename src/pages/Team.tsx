import React, { useEffect } from 'react';
import StudyTeam from '../components/StudyTeam';
import { updateSEO } from '../utils/seo';

const Team = () => {
  useEffect(() => {
    updateSEO('team');
  }, []);

  return <StudyTeam />;
};

export default Team;