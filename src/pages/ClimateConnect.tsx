import React, { useEffect } from 'react';
import ClimateConnectComponent from '../components/ClimateConnect';
import { updateSEO } from '../utils/seo';

const ClimateConnect = () => {
  useEffect(() => {
    updateSEO('climateConnect');
  }, []);

  return <ClimateConnectComponent />;
};

export default ClimateConnect;
