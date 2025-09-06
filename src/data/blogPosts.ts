export interface BlogPost {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  readTime: string;
  category: 'Research Insights' | 'Events & Webinars' | 'Voices from the Field';
}

export const blogPosts: BlogPost[] = [
  // Research Insights
  {
    id: 'climate-change-youth-solutions',
    image: "/Image2.png",
    category: "Research Insights",
    title: "Climate Change and Youth: Fast-Tracking Mental Health Solutions",
    excerpt: "We know that climate change is more than an environmental crisis — it's also a mental health challenge. Our new commentary calls for urgent action to close the gap between what young people are experiencing and the slow pace of research and policy responses...",
    fullContent: `We know that climate change is more than an environmental crisis — it's also a mental health challenge. Young people, in particular, are experiencing rising levels of anxiety, grief and hopelessness in the face of floods, bushfires, heatwaves and ongoing climate uncertainty.

Our new commentary, published in the Journal of Applied Youth Studies, calls for urgent action to close the gap between what young people are experiencing and the slow pace of research and policy responses.

We highlight that:

• <strong class="text-[#2D6AA3] font-semibold">Young people are disproportionately affected by climate-related disasters and exclusion from decision-making.</strong>

• <strong class="text-[#2D6AA3] font-semibold">Youth-specific interventions are rare, and translating research into practice can take decades.</strong>

• <strong class="text-[#2D6AA3] font-semibold">Innovative approaches, like adaptive platform trials, can help us test and scale solutions much faster.</strong>

• <strong class="text-[#2D6AA3] font-semibold">Youth must be at the centre — not only as participants, but as co-designers and leaders in shaping mental health and climate responses.</strong>

At PRIME, we are working to build this platform: a space where researchers, clinicians, communities, and young people can come together to design and test interventions that are fit for purpose, evidence-based, and led by youth voices.

👉 You can read the full open access article here: https://doi.org/10.1007/s43151-025-00174-1`,
    date: "March 18, 2024",
    readTime: "3 min read"
  },
  {
  id: 'vulnerability-psychosocial-impacts',
  image: "/Image3.png",
  category: "Research Insights",
  title: "Vulnerability and Psychosocial Impacts of Extreme Weather on Young People in Australia",
  excerpt: "A new open-access study using data from 19,501 teens (15–19 years) finds that adolescents exposed to floods, fires, storms or droughts report higher climate concerns, more psychological distress, and greater housing/financial challenges.",
  fullContent: `A new open-access study of 19,501 Australian teens (15–19 years) shows that exposure to floods, fires, storms or droughts is linked to higher climate concern, greater psychological distress, and increased housing and financial challenges.

The research analysed the 2023 Mission Australia Youth Survey to understand how extreme weather exposure affects young people’s mental health and social wellbeing.

We highlight that:

• <strong class="text-[#2D6AA3] font-semibold">Adolescents outside major cities, in lower-SES areas, and those who are Indigenous, gender diverse, living with disability, or from CALD communities are more likely to be exposed.</strong>

• <strong class="text-[#2D6AA3] font-semibold">Those exposed report higher climate concern and greater psychological distress (K6).</strong>

• <strong class="text-[#2D6AA3] font-semibold">Exposure increases the odds of financial hardship and housing challenges—especially when the household is directly affected.</strong>

• <strong class="text-[#2D6AA3] font-semibold">Recovery cannot be “one size fits all”: supports must be age-appropriate, culturally safe, and targeted to vulnerable groups.</strong>

What this means for action:  
- In recovery: place youth mental health staff in disaster response and provide culturally safe, age-appropriate supports.  
- In preparedness: work with schools and local services to build coping skills and readiness tailored to local hazards.  
- In policy: track youth outcomes after disasters and fund programs that support housing stability, financial security, and equitable care access.

👉 Read the full open access article here: https://doi.org/10.1016/j.envres.2025.121385`,
  date: "15 June 2025",
  readTime: "3 min read"
  },
  {
  id: 'climate-concerns-distress-outlook',
  image: "/Image6.png",
  category: "Research Insights",
  title: "Climate Concern, Distress, and Future Outlook in Young Australians",
  excerpt: "Using data from 18,800 Australians aged 15–19, higher climate concern is linked to greater psychological distress and a more negative outlook—especially for gender-diverse, Indigenous, and remote youth.",
  fullContent: `Using data from 18,800 Australians aged 15–19, higher climate concern is linked to greater psychological distress and a more negative outlook—especially for gender-diverse, Indigenous, and young people living outside major cities.

This study analysed the 2022 Mission Australia Youth Survey to examine how climate change concerns relate to psychological distress (K6) and future outlook after accounting for social determinants and pre-existing mental health conditions.

Key findings:

• <strong class="text-[#2D6AA3] font-semibold">One in four young people were very or extremely concerned about climate change.</strong>

• <strong class="text-[#2D6AA3] font-semibold">Female and gender-diverse youth, and those with a self-reported mental health condition, reported higher climate concerns.</strong>

• <strong class="text-[#2D6AA3] font-semibold">Very/extremely concerned youth had higher psychological distress (RRR = 1.81; 95% CI: 1.56–2.11).</strong>

• <strong class="text-[#2D6AA3] font-semibold">They were also more likely to have a negative future outlook (RRR = 1.52; 95% CI: 1.27–1.81).</strong>

• <strong class="text-[#2D6AA3] font-semibold">Associations were stronger among gender-diverse, Indigenous, and outer-regional/remote participants.</strong>

Why this matters:

- <strong class="text-[#2D6AA3] font-semibold">Support must go beyond “one-size-fits-all”</strong>—targeted, culturally safe approaches are needed for groups at higher risk.  
- <strong class="text-[#2D6AA3] font-semibold">Integrate youth mental health into climate policy</strong>—education, communication, and services should address climate-related distress and foster hope.  
- <strong class="text-[#2D6AA3] font-semibold">Track outcomes over time</strong>—longitudinal monitoring can guide effective responses and prevention.

👉 Read the full open-access article: https://doi.org/10.1016/j.jenvp.2023.102209`,
  date: "December 12, 2023",
  readTime: "4 min read"
},

  // Events & Webinars
  {
    id: 'building-climate-resilience-webinar',
    image: "https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Events & Webinars",
    title: "Upcoming Webinar: Building Climate Resilience",
    excerpt: "Join our expert panel discussion on evidence-based strategies for supporting youth mental health in the climate crisis...",
    fullContent: `Join our expert panel discussion on evidence-based strategies for supporting youth mental health in the climate crisis.

This webinar will feature leading researchers, clinicians, and young advocates discussing:

• Current evidence on climate impacts on youth mental health
• Practical intervention strategies that work
• How to build resilience in climate-affected communities
• Youth leadership in climate mental health responses

Our panel includes experts from Orygen, University of Melbourne, and youth advocates with lived experience.

Registration is free and includes access to resources and follow-up materials.`,
    date: "March 20, 2024",
    readTime: "Webinar"
  },
  {
    id: 'youth-research-workshop-series',
    image: "https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Events & Webinars",
    title: "Youth Research Workshop Series",
    excerpt: "Monthly workshops designed to build research capacity among young people interested in climate and mental health advocacy.",
    fullContent: "Monthly workshops designed to build research capacity among young people interested in climate and mental health advocacy. These sessions cover research methods, data interpretation, and how to translate findings into actionable advocacy strategies.",
    date: "Ongoing",
    readTime: "Workshop Series"
  },

  // Voices from the Field
  {
    id: 'youth-participant-stories',
    image: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Voices from the Field",
    title: "Youth Participant Stories: Finding Hope",
    excerpt: "Hear directly from young people who have participated in PRIME research about their experiences, insights, and the tools they've found most helpful.",
    fullContent: `Hear directly from young people who have participated in PRIME research about their experiences, insights, and the tools they've found most helpful.

"Being part of PRIME has shown me that my climate anxiety isn't something I have to face alone. The group sessions helped me connect with other young people who understand what I'm going through." - Sarah, 19

"I learned practical strategies for managing my eco-grief while also finding ways to take meaningful action. It's about hope and agency, not just coping." - Marcus, 22

"The research process itself was empowering. We weren't just participants - we were partners in designing something that could help other young people." - Aisha, 17

These stories highlight the importance of youth-centered approaches and the power of peer support in building climate resilience.`,
    date: "March 10, 2024",
    readTime: "8 min read"
  },
  {
    id: 'community-leader-perspectives',
    image: "https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Voices from the Field",
    title: "Community Leader Perspectives",
    excerpt: "Local community leaders share their observations about climate impacts on youth and the importance of culturally responsive interventions.",
    fullContent: "Local community leaders share their observations about climate impacts on youth and the importance of culturally responsive interventions. These perspectives highlight the need for interventions that respect cultural values and leverage existing community strengths.",
    date: "March 5, 2024",
    readTime: "6 min read"
  }
];

// Helper functions to get posts by category
export const getPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getLatestPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

// Categories for easy reference
export const categories: BlogPost['category'][] = [
  'Research Insights',
  'Events & Webinars', 
  'Voices from the Field'
];