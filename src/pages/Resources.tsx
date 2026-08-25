import React, { useEffect } from 'react';
import ResourcesComponent from '../components/Resources';
import { updateSEO } from '../utils/seo';

const Resources = () => {
  useEffect(() => {
    updateSEO('resources');
  }, []);

  return <ResourcesComponent />;
};

export default Resources;
