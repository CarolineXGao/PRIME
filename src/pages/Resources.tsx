import React, { useState, useEffect } from 'react';
import ResourcesComponent from '../components/Resources';
import MeasurementToolsTable from '../components/MeasurementToolsTable';
import ResourcesResearchers from '../components/ResourcesResearchers';
import ResourcesClinicians from '../components/ResourcesClinicians';
import ResourcesSchools from '../components/ResourcesSchools';
import ResourcesParticipants from '../components/ResourcesParticipants';
import { updateSEO } from '../utils/seo';

const Resources = () => {
  const [currentView, setCurrentView] = useState('main');

  useEffect(() => {
    updateSEO('resources');
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'measurement-tools':
        return <MeasurementToolsTable setCurrentPage={setCurrentView} />;
      case 'resources-researchers':
        return <ResourcesResearchers setCurrentPage={setCurrentView} />;
      case 'resources-clinicians':
        return <ResourcesClinicians setCurrentPage={setCurrentView} />;
      case 'resources-schools':
        return <ResourcesSchools setCurrentPage={setCurrentView} />;
      case 'resources-participants':
        return <ResourcesParticipants setCurrentPage={setCurrentView} />;
      default:
        return <ResourcesComponent setCurrentPage={setCurrentView} />;
    }
  };

  return renderView();
};

export default Resources;