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
    hasDetailedScale: true,
  instructions: 'Over the last 2 weeks, how often have you been bothered by the following problems, when thinking about climate change and other global environmental conditions (e.g., global warming, ecological degradation, resource depletion, species extinction, ozone hole, pollution of the oceans, deforestation)?',
  responseOptions: [
    { label: 'Not at all', value: 0 },
    { label: 'Several days', value: 1 },
    { label: 'Over half the days', value: 2 },
    { label: 'Nearly every day', value: 3 }
  ],
  sections: [
    {
      title: 'Affective symptoms',
      items: [
        { number: 1, text: 'Feeling nervous, anxious or on edge' },
        { number: 2, text: 'Not being able to stop or control worrying' },
        { number: 3, text: 'Worrying too much' },
        { number: 4, text: 'Feeling afraid' }
      ]
    },
    {
      title: 'Rumination',
      items: [
        { number: 5, text: 'Unable to stop thinking about future climate change and other global environmental problems' },
        { number: 6, text: 'Unable to stop thinking about past events related to climate change' },
        { number: 7, text: 'Unable to stop thinking about losses to the environment' }
      ]
    },
    {
      title: 'Behavioural symptoms',
      items: [
        { number: 8, text: 'Difficulty sleeping' },
        { number: 9, text: 'Difficulty enjoying social situations with family and friends' },
        { number: 10, text: 'Difficulty working and/or studying' }
      ]
    },
    {
      title: 'Anxiety about personal impact',
      items: [
        { number: 11, text: 'Feeling anxious about the impact of your personal behaviours on the earth' },
        { number: 12, text: 'Feeling anxious about your personal responsibility to help address environmental problems' },
        { number: 13, text: 'Feeling anxious that your personal behaviours will do little to help fix the problem' }
      ]
    }
  ]
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
    hasDetailedScale: true,
    instructions:
    'What do you feel in relation to climate change? The aim of this questionnaire is to examine your feelings on this subject. Rate the extent to which each statement applies to you, from “strongly disagree” to “strongly agree.” There are no right or wrong answers—choose the answer that best describes what you feel.',
  responseOptions: [
    { label: '1 – Strongly disagree', value: 1 },
    { label: '2 – Somewhat disagree', value: 2 },
    { label: '3 – Neither agree nor disagree', value: 3 },
    { label: '4 – Somewhat agree', value: 4 },
    { label: '5 – Strongly agree', value: 5 }
  ],
  // Present items in random order when administering; scoring uses the subscale groupings below.
  sections: [
    {
      title: 'Climate anger',
      items: [
        { number: 1, text: 'I feel angry that the political and economic system that we live in harms the climate.' },
        { number: 2, text: 'I am outraged that politicians allowed climate change to come this far.' },
        { number: 3, text: 'I feel outraged at corporations that harm the climate.' },
        { number: 4, text: 'I feel anger when I think of politicians who delay efforts to mitigate climate change.' }
      ]
    },
    {
      title: 'Climate contempt',
      items: [
        { number: 5, text: 'It annoys me to watch people succumb to climate hysteria.' },
        { number: 6, text: 'I am annoyed by the constant publicity around climate change.' },
        { number: 7, text: 'I am bored of hearing about climate change.' },
        { number: 8, text: 'I am surprised that people experience strong emotions in connection with climate change.' }
      ]
    },
    {
      title: 'Climate enthusiasm',
      items: [
        { number: 9, text: 'The increasing public engagement with climate change gives me hope.' },
        { number: 10, text: 'I believe that there are emerging solutions that will allow us to stop climate change.' },
        { number: 11, text: 'Concrete actions for the climate allow me to be optimistic about the future.' },
        { number: 12, text: 'Social mobilization in the fight against climate change makes me feel that together we can achieve this goal.' }
      ]
    },
    {
      title: 'Climate powerlessness',
      items: [
        { number: 13, text: 'I feel confused about what I can do to reduce climate change.' },
        { number: 14, text: 'I am overwhelmed by how many aspects of life would need to be changed to limit climate change.' },
        { number: 15, text: 'As an individual, I feel powerless with little agency over what happens with the climate.' },
        { number: 16, text: 'I feel helpless when I think of how difficult it is to live in a climate-friendly way.' }
      ]
    },
    {
      title: 'Climate guilt',
      items: [
        { number: 17, text: 'I have a guilty conscience about not doing enough to mitigate climate change.' },
        { number: 18, text: 'It upsets me that I have a big negative impact on the climate.' },
        { number: 19, text: 'I feel guilty that my lifestyle contributes to climate change.' },
        { number: 20, text: 'I am angry at myself for not doing enough to limit my negative impact on the climate.' }
      ]
    },
    {
      title: 'Climate isolation',
      items: [
        { number: 21, text: 'I feel like one of the few people who actually understand what climate change entails.' },
        { number: 22, text: "I feel lonely because most of the people around me don't care about climate change as much as I do." },
        { number: 23, text: 'I feel lonely because it is difficult to talk about my climate change concerns with other people.' },
        { number: 24, text: 'I feel alienated because society considers concern for climate change as something strange.' }
      ]
    },
    {
      title: 'Climate anxiety',
      items: [
        { number: 25, text: 'Thinking about climate change makes me fear for the future of our children.' },
        { number: 26, text: 'I am overwhelmed by the awareness of the approaching climate disaster.' },
        { number: 27, text: 'Everything seems uncertain because of climate change.' },
        { number: 28, text: 'I fear how climate change will affect me and my loved ones.' }
      ]
    },
    {
      title: 'Climate sorrow',
      items: [
        { number: 29, text: 'The thought of so many species going extinct under the pressure of climate change fills me with sorrow.' },
        { number: 30, text: 'The thought that the world I know is disappearing forever because of climate change makes me sad.' },
        { number: 31, text: 'I feel sorry about the possibilities we are losing forever because of climate change.' },
        { number: 32, text: 'I am sad that so many living creatures suffer because of climate change.' }
      ]
    }
  ]
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