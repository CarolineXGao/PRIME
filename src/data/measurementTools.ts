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
    name: 'Climate Change Anxiety Scale (CCAS)',
    description: 'A 22-item validated scale assessing climate-related anxiety, including cognitive and functional impairment.',
    targetPopulation: 'Adolescents and adults',
    domains: ['Climate Anxiety', 'Cognitive Impairment', 'Functional Impairment'],
    administrationTime: '10 minutes',
    format: 'Self-report questionnaire (22 items, Likert scale)',
    availability: 'Open access',
    reference: 'Clayton, S., & Karazsia, B. T. (2020). Development and validation of a measure of climate change anxiety. Journal of Environmental Psychology, 69, 101434.',
    link: 'https://doi.org/10.1016/j.jenvp.2020.101434'
  },
  {
      id: 'hogg-eco-anxiety-scale',
    name: 'Hogg Eco-Anxiety Scale (HEAS)',
    description: 'A 13-item validated measure of eco-anxiety, assessing affective, cognitive, and behavioral symptoms related to environmental change.',
    targetPopulation: 'Adolescents and adults',
    domains: ['Eco-Anxiety', 'Affective Symptoms', 'Cognitive Symptoms', 'Behavioral Symptoms'],
    administrationTime: '5-10 minutes',
    format: 'Self-report questionnaire (13 items, Likert scale)',
    availability: 'Open access',
    reference: 'Hogg, T. L. et al. (2021). The Hogg Eco-Anxiety Scale: Development and validation of a multidimensional measure. Journal of Environmental Psychology, 76, 101641.',
    link: 'https://doi.org/10.1016/j.jenvp.2021.101641'
  },
  {
     id: 'inventory-climate-emotions',
    name: 'Inventory of Climate Emotions (ICE)',
    description: 'A multidimensional self-report tool capturing the intensity and frequency of a wide range of emotions in response to climate change.',
    targetPopulation: 'Adolescents and adults',
    domains: ['Climate Emotions', 'Affective Responses'],
    administrationTime: '10-15 minutes',
    format: 'Self-report questionnaire (22 items, Likert scale)',
    availability: 'Open access',
    reference: 'Hickman, C. et al. (2022). Climate emotions and mental distress: Development and validation of the Inventory of Climate Emotions (ICE). Journal of Environmental Psychology, 83, 101866.',
    link: 'https://doi.org/10.1016/j.jenvp.2022.101866'
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
    id: 'climate-change-worry-scale',
    name: 'Climate Change Worry Scale (CCWS)',
    description: 'A brief self-report scale assessing the frequency and intensity of worry about climate change and its perceived impacts.',
    targetPopulation: 'Adolescents and adults',
    domains: ['Worry', 'Climate Concern'],
    administrationTime: '2-5 minutes',
    format: 'Self-report questionnaire (10 items)',
    availability: 'Open access',
    reference: 'Stewart, A. E., & Hauser, D. J. (2018). A brief worry scale for climate change: Development and validation of the Climate Change Worry Scale. Journal of Environmental Psychology, 60, 1–10.',
    link: 'https://doi.org/10.1016/j.jenvp.2018.08.003'
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