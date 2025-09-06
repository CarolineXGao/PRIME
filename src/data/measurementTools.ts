export interface MeasurementTool {
  id: string;
  name: string;
  description: string;
  targetPopulation: string;
  domains: string[];
  administrationTime: string;
  format: string;
  availability: string;
  reference?: string;
  link?: string;
}

export const measurementTools: MeasurementTool[] = [
  {
    id: 'climate-anxiety-scale',
    name: 'Climate Anxiety Scale (CAS)',
    description: 'A validated measure assessing climate-related anxiety and worry in adolescents and young adults.',
    targetPopulation: 'Ages 16-25',
    domains: ['Climate Anxiety', 'Functional Impairment', 'Cognitive Symptoms'],
    administrationTime: '5-10 minutes',
    format: 'Self-report questionnaire (22 items)',
    availability: 'Open access',
    reference: 'Clayton & Manning (2018)',
    link: 'https://doi.org/10.1037/tra0000362'
  },
  {
    id: 'eco-anxiety-scale',
    name: 'Eco-Anxiety Scale (EAS)',
    description: 'Measures ecological anxiety and environmental distress across multiple domains.',
    targetPopulation: 'Ages 18+',
    domains: ['Eco-Anxiety', 'Rumination', 'Behavioral Symptoms'],
    administrationTime: '8-12 minutes',
    format: 'Self-report questionnaire (13 items)',
    availability: 'Open access',
    reference: 'Hogg et al. (2021)',
    link: 'https://doi.org/10.1371/journal.pone.0263708'
  },
  {
    id: 'climate-change-worry-scale',
    name: 'Climate Change Worry Scale (CCWS)',
    description: 'Brief measure of climate change-related worry and concern.',
    targetPopulation: 'Ages 12+',
    domains: ['Climate Worry', 'Future Concerns'],
    administrationTime: '3-5 minutes',
    format: 'Self-report questionnaire (10 items)',
    availability: 'Open access',
    reference: 'Stewart (2021)',
    link: 'https://doi.org/10.1080/13607863.2021.1947965'
  },
  {
    id: 'environmental-distress-scale',
    name: 'Environmental Distress Scale (EDS)',
    description: 'Comprehensive assessment of environmental-related psychological distress.',
    targetPopulation: 'Ages 16+',
    domains: ['Environmental Distress', 'Helplessness', 'Grief'],
    administrationTime: '10-15 minutes',
    format: 'Self-report questionnaire (28 items)',
    availability: 'Contact authors',
    reference: 'Cunsolo Willox et al. (2020)',
    link: 'https://doi.org/10.1016/j.gloenvcha.2020.102222'
  },
  {
    id: 'climate-change-hope-scale',
    name: 'Climate Change Hope Scale (CCHS)',
    description: 'Measures hope and agency related to climate change action and outcomes.',
    targetPopulation: 'Ages 14+',
    domains: ['Hope', 'Agency', 'Pathways Thinking'],
    administrationTime: '5-8 minutes',
    format: 'Self-report questionnaire (16 items)',
    availability: 'Open access',
    reference: 'Ojala (2022)',
    link: 'https://doi.org/10.1007/s10584-022-03421-y'
  }
];

// Helper functions
export const getToolById = (id: string): MeasurementTool | undefined => {
  return measurementTools.find(tool => tool.id === id);
};

export const getToolsByDomain = (domain: string): MeasurementTool[] => {
  return measurementTools.filter(tool => 
    tool.domains.some(d => d.toLowerCase().includes(domain.toLowerCase()))
  );
};

export const getToolsByPopulation = (population: string): MeasurementTool[] => {
  return measurementTools.filter(tool => 
    tool.targetPopulation.toLowerCase().includes(population.toLowerCase())
  );
};