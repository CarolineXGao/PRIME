import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MeasurementToolsTable from '../components/MeasurementToolsTable';
import ResourcesResearchers from '../components/ResourcesResearchers';
import ResourcesClinicians from '../components/ResourcesClinicians';
import ResourcesSchools from '../components/ResourcesSchools';
import ResourcesParticipants from '../components/ResourcesParticipants';
import NotFound from './NotFound';
import { updateSEO } from '../utils/seo';

/**
 * One route serves every Resources sub-page: /resources/<slug>.
 * Adding a section means one entry here plus one in `seoData` — no new route,
 * no new file. An unknown slug falls through to the 404 page.
 */
const sections: Record<string, { seoKey: string; element: React.ReactElement }> = {
  researchers: { seoKey: 'resourcesResearchers', element: <ResourcesResearchers /> },
  clinicians: { seoKey: 'resourcesClinicians', element: <ResourcesClinicians /> },
  schools: { seoKey: 'resourcesSchools', element: <ResourcesSchools /> },
  participants: { seoKey: 'resourcesParticipants', element: <ResourcesParticipants /> },
  'measurement-tools': { seoKey: 'measurementTools', element: <MeasurementToolsTable /> },
};

const ResourceSection = () => {
  const { section } = useParams();
  const match = section ? sections[section] : undefined;

  useEffect(() => {
    if (match) updateSEO(match.seoKey);
  }, [match]);

  if (!match) return <NotFound />;

  return match.element;
};

export default ResourceSection;
