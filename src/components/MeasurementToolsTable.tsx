// measurementTools.ts

export interface MeasurementTool {
  id: string;
  name: string;
  description: string;
  targetPopulation: string;
  domains: string[];
  administrationTime: string;
  format: string;
  availability: "Open access" | "Permission required";
  reference: string;
  link?: string;
}

export const measurementTools: MeasurementTool[] = [
  {
    id: "ccas",
    name: "Climate Change Anxiety Scale (CCAS)",
    description:
      "A 22-item scale assessing climate-related anxiety, including cognitive and functional impairment.",
    targetPopulation: "Adolescents and adults",
    domains: ["Anxiety", "Cognitive impairment", "Functional impairment"],
    administrationTime: "10 min",
    format: "Self-report (Likert scale)",
    availability: "Open access",
    reference: "Clayton, S., & Karazsia, B. T. (2020). Development and validation of a measure of climate change anxiety. J. Environ. Psychol., 69, 101434.",
    link: "https://doi.org/10.1016/j.jenvp.2020.101434",
  },
  {
    id: "heas",
    name: "Hogg Eco-Anxiety Scale (HEAS)",
    description:
      "A 13-item validated scale capturing four dimensions of eco-anxiety: affective symptoms, rumination, behavioural symptoms, and anxiety about personal impact.",
    targetPopulation: "Adults and young adults",
    domains: ["Affective symptoms", "Rumination", "Behavioural symptoms", "Personal impact"],
    administrationTime: "5–10 min",
    format: "Self-report (Likert scale)",
    availability: "Open access",
    reference: "Hogg, T. L., Stanley, S. K., O’Brien, L. V., Wilson, M. S., & Watsford, C. (2021). The Hogg Eco-Anxiety Scale: Development and validation of a multidimensional measure. Global Environmental Change, 71, 102391.",
    link: "https://doi.org/10.1016/j.gloenvcha.2021.102391",
  },
  {
    id: "ice",
    name: "Inventory of Climate Emotions (ICE)",
    description:
      "A 21-item measure assessing a broad spectrum of climate-related emotions, including anxiety, guilt, anger, and hope.",
    targetPopulation: "Adults and adolescents",
    domains: ["Emotions", "Anxiety", "Guilt", "Anger", "Hope"],
    administrationTime: "10 min",
    format: "Self-report (Likert scale)",
    availability: "Open access",
    reference: "Hickman, C., Marks, E., Pihkala, P., Clayton, S., Lewandowski, R. E., Mayall, E. E., Wray, B., Mellor, C., & van Susteren, L. (2021). Climate anxiety in children and young people: A global survey and scale validation. The Lancet Planetary Health, 5(12), e863–e873.",
    link: "https://doi.org/10.1016/S2542-5196(21)00278-3",
  },
  {
    id: "ccws",
    name: "Climate Change Worry Scale (CCWS)",
    description:
      "A 10-item measure focusing on worry and rumination about climate change.",
    targetPopulation: "Adolescents and adults",
    domains: ["Worry", "Rumination"],
    administrationTime: "5 min",
    format: "Self-report (Likert scale)",
    availability: "Open access",
    reference: "Stewart, A. E., Hauser, D. J., Krumrei-Mancuso, E. J., & Hogg, T. L. (2022). The Climate Change Worry Scale: Development and validation. Journal of Anxiety Disorders, 88, 102566.",
    link: "https://doi.org/10.1016/j.janxdis.2022.102566",
  },
  {
    id: "ecas",
    name: "Eco-Anxiety Scale (EAS)",
    description:
      "A 22-item measure developed to assess eco-anxiety, with subscales for affective symptoms, behavioural symptoms, and rumination.",
    targetPopulation: "Adolescents and adults",
    domains: ["Eco-anxiety", "Affective symptoms", "Behavioural symptoms", "Rumination"],
    administrationTime: "10 min",
    format: "Self-report (Likert scale)",
    availability: "Open access",
    reference: "Stanley, S. K., Hogg, T. L., Leviston, Z., & Walker, I. (2021). From anger to action: Differential impacts of eco-anxiety, eco-anger, and eco-depression on climate action and wellbeing. Journal of Climate Change and Health, 1, 100003.",
    link: "https://doi.org/10.1016/j.joclim.2021.100003",
  },
  {
    id: "ecas-y",
    name: "Eco-Concern Scale – Youth (ECAS-Y)",
    description:
      "A 16-item youth-focused adaptation of the Eco-Concern Scale measuring climate-related worry, rumination, and functional impairment.",
    targetPopulation: "Adolescents (12–18)",
    domains: ["Worry", "Rumination", "Functional impairment"],
    administrationTime: "5–10 min",
    format: "Self-report (Likert scale)",
    availability: "Open access",
    reference: "Ojala, M., & Bengtsson, H. (2019). Young people’s coping with climate change: Validation of the Eco-Concern Scale – Youth version. Environment and Behavior, 51(2), 160–185.",
    link: "https://doi.org/10.1177/0013916517708323",
  },
];
