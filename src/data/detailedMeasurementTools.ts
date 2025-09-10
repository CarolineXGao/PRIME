export interface DetailedMeasurementTool {
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
  hasDetailedScale?: boolean;
  sections?: ScaleSection[];
  responseOptions?: ResponseOption[];
  instructions?: string;
}

export interface ScaleSection {
  title: string;
  items: ScaleItem[];
}

export interface ScaleItem {
  number: number;
  text: string;
}

export interface ResponseOption {
  label: string;
  value: number;
}

export const detailedMeasurementTools: DetailedMeasurementTool[] = [
  {
    id: 'climate-anxiety-scale',
    name: 'Climate Change Anxiety Scale (CCAS)',
    description: 'A 22-item validated scale assessing climate-related anxiety, including cognitive and functional impairment.',
    targetPopulation: 'Adolescents and adults',
    domains: ['Climate Anxiety', 'Climate emotions', 'Functional Impairment'],
    administrationTime: '~10 minutes',
    format: 'Self-report questionnaire (22 items, Likert scale)',
    availability: 'Open access',
    reference: 'Clayton, S., & Karazsia, B. T. (2020). Development and validation of a measure of climate change anxiety. Journal of Environmental Psychology, 69, 101434.',
    link: 'https://doi.org/10.1016/j.jenvp.2020.101434',
    hasDetailedScale: true,
    instructions: 'Please rate how often the following statements are true of you.',
    responseOptions: [
      { label: 'Never', value: 1 },
      { label: 'Rarely', value: 2 },
      { label: 'Sometimes', value: 3 },
      { label: 'Often', value: 4 },
      { label: 'Almost always', value: 5 }
    ],
    sections: [
      {
        title: 'Cognitive-emotional impairment',
        items: [
          { number: 1, text: 'Thinking about climate change makes it difficult for me to concentrate.' },
          { number: 2, text: 'Thinking about climate change makes it difficult for me to sleep.' },
          { number: 3, text: 'I have nightmares about climate change.' },
          { number: 4, text: 'I find myself crying because of climate change.' },
          { number: 5, text: 'I think, "why can\'t I handle climate change better?"' },
          { number: 6, text: 'I go away by myself and think about why I feel this way about climate change.' },
          { number: 7, text: 'I write down my thoughts about climate change and analyze them.' },
          { number: 8, text: 'I think, "why do I react to climate change this way?"' }
        ]
      },
      {
        title: 'Functional impairment',
        items: [
          { number: 9, text: 'My concerns about climate change make it hard for me to have fun with my family or friends.' },
          { number: 10, text: 'I have problems balancing my concerns about sustainability with the needs of my family.' },
          { number: 11, text: 'My concerns about climate change interfere with my ability to get work or school assignments done.' },
          { number: 12, text: 'My concerns about climate change undermine my ability to work to my potential.' },
          { number: 13, text: 'My friends say I think about climate change too much.' }
        ]
      },
      {
        title: 'Personal experience of climate change',
        items: [
          { number: 14, text: 'I have been directly affected by climate change.' },
          { number: 15, text: 'I know someone who has been directly affected by climate change.' },
          { number: 16, text: 'I have noticed a change in a place that is important to me due to climate change.' }
        ]
      },
      {
        title: 'Behavioral engagement',
        items: [
          { number: 17, text: 'I wish I behaved more sustainably.' },
          { number: 18, text: 'I recycle.' },
          { number: 19, text: 'I turn off lights.' },
          { number: 20, text: 'I try to reduce my behaviors that contribute to climate change.' },
          { number: 21, text: 'I feel guilty if I waste energy.' },
          { number: 22, text: 'I believe I can do something to help address the problem of climate change.' }
        ]
      }
    ]
  },
  {
    id: 'hogg-eco-anxiety-scale',
    name: 'Hogg Eco-Anxiety Scale (HEAS)',
    description: 'A 13-item validated measure of eco-anxiety, assessing affective, cognitive, and behavioral symptoms related to environmental change.',
    targetPopulation: 'Adolescents and adults',
    domains: ['Eco-Anxiety', 'Affective Symptoms', 'Cognitive Symptoms', 'Behavioral Symptoms'],
    administrationTime: '~5 minutes',
    format: 'Self-report questionnaire (13 items, Likert scale)',
    availability: 'Open access',
    reference: 'Hogg, T. L. et al. (2021). The Hogg Eco-Anxiety Scale: Development and validation of a multidimensional measure. Journal of Environmental Psychology, 76, 101641.',
    link: 'https://doi.org/10.1016/j.jenvp.2021.101641',
    hasDetailedScale: false // Can be expanded later
  },
  {
    id: 'inventory-climate-emotions',
    name: 'Inventory of Climate Emotions (ICE)',
    description: 'A multidimensional self-report tool capturing the intensity and frequency of a wide range of emotions in response to climate change.',
    targetPopulation: 'Adolescents and adults',
    domains: ['Climate Emotions', 'Affective Responses'],
    administrationTime: '~10 minutes',
    format: 'Self-report questionnaire (22 items, Likert scale)',
    availability: 'Open access',
    reference: 'Hickman, C. et al. (2022). Climate emotions and mental distress: Development and validation of the Inventory of Climate Emotions (ICE). Journal of Environmental Psychology, 83, 101866.',
    link: 'https://doi.org/10.1016/j.jenvp.2022.101866',
    hasDetailedScale: false // Can be expanded later
  },
  {
    id: 'eco-emotion-scale',
    name: 'Eco-Emotion Scale (EES)',
    description: 'A multidimensional self-report scale assessing the range of emotions (e.g., worry, anger, hope, guilt) that people experience in relation to climate change and ecological crises.',
    targetPopulation: 'Adolescents and adults',
    domains: ['Worry', 'Anger', 'Hope', 'Guilt', 'Despair'],
    administrationTime: '~10 minutes',
    format: 'Self-report questionnaire (23 items)',
    availability: 'Open access',
    reference: 'Stanley, S. K., Hogg, T. L., Leviston, Z., & Walker, I. (2021). From anger to action: Differential impacts of eco-emotions on climate change policy support and pro-environmental behaviour. Journal of Environmental Psychology, 76, 101649.',
    link: 'https://doi.org/10.1016/j.jenvp.2021.101649',
    hasDetailedScale: false // Can be expanded later
  },
  {
    id: 'climate-change-worry-scale',
    name: 'Climate Change Worry Scale (CCWS)',
    description: 'A brief self-report scale assessing the frequency and intensity of worry about climate change and its perceived impacts.',
    targetPopulation: 'Adolescents and adults',
    domains: ['Worry', 'Climate Concern'],
    administrationTime: '~5 minutes',
    format: 'Self-report questionnaire (10 items)',
    availability: 'Open access',
    reference: 'Stewart, A. E., & Hauser, D. J. (2018). A brief worry scale for climate change: Development and validation of the Climate Change Worry Scale. Journal of Environmental Psychology, 60, 1–10.',
    link: 'https://doi.org/10.1016/j.jenvp.2018.08.003',
    hasDetailedScale: false // Can be expanded later
  }
];

// Helper functions
export const getDetailedToolById = (id: string): DetailedMeasurementTool | undefined => {
  return detailedMeasurementTools.find(tool => tool.id === id);
};

export const getDetailedToolsByDomain = (domain: string): DetailedMeasurementTool[] => {
  return detailedMeasurementTools.filter(tool => 
    tool.domains.some(d => d.toLowerCase().includes(domain.toLowerCase()))
  );
};

export const getDetailedToolsByPopulation = (population: string): DetailedMeasurementTool[] => {
  return detailedMeasurementTools.filter(tool => 
    tool.targetPopulation.toLowerCase().includes(population.toLowerCase())
  );
};

export const getToolsWithDetailedScales = (): DetailedMeasurementTool[] => {
  return detailedMeasurementTools.filter(tool => tool.hasDetailedScale);
};