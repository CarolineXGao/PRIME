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
    image: "https://images.pexels.com/photos/8549835/pexels-photo-8549835.jpeg?auto=compress&cs=tinysrgb&w=400",
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
    image: "https://images.pexels.com/photos/7551640/pexels-photo-7551640.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Research Insights",
    title: "Vulnerability and Psychosocial Impacts of Extreme Weather on Young People in Australia",
    excerpt: "A new open-access study using data from 19,501 teens (15–19 years) finds that adolescents exposed to floods, fires, storms or droughts report higher climate concerns, more psychological distress, and greater housing/financial challenges.",
    fullContent: `TL;DR: A new open-access study using data from 19,501 teens (15–19 years) finds that adolescents exposed to floods, fires, storms or droughts report higher climate concerns, more psychological distress, and greater housing/financial challenges—with the biggest impacts when their household is directly affected.

What the study did

Researchers analysed the 2023 Mission Australia Youth Survey to see how exposure to extreme weather relates to mental health and social outcomes for young people across Australia.

Paper: Environmental Research (Open Access)

Title: Vulnerability and psychosocial impacts of extreme weather events among young people in Australia

DOI: https://doi.org/10.1016/j.envres.2025.121385

Key findings (in plain language)

Who's more likely to be exposed: Young people outside major cities, in lower-SES areas, who are Indigenous, gender diverse, living with disability, or from CALD communities.

Mental health impacts: Those exposed show higher climate concern and higher psychological distress (K6).

Practical impacts: Higher odds of financial hardship and housing challenges—especially when impacts hit the household, not just the community.

Why this matters: Recovery can't be "one size fits all." Age-appropriate supports need to include mental health services, housing, and financial assistance, with extra attention to historically disadvantaged groups.

What this means for action

In recovery: Put youth mental health staff into disaster response and ensure culturally safe, age-appropriate supports.

In preparedness: Work with schools and local services to build coping skills, connection, and readiness tailored to local hazards.

In policy: Track youth outcomes after disasters and fund programs that target housing stability, financial supports, and equitable access to care.



👉 Read the full article (open access): https://doi.org/10.1016/j.envres.2025.121385`,
    date: "March 12, 2024",
    readTime: "3  min read"
  },
  {
    id: 'intervention-effectiveness-results',
    image: "https://images.pexels.com/photos/6646913/pexels-photo-6646913.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Research Insights",
    title: "Intervention Effectiveness: Early Results",
    excerpt: "Preliminary findings from our randomized controlled trials show promising results for cognitive-behavioral approaches to climate anxiety.",
    fullContent: "Preliminary findings from our randomized controlled trials show promising results for cognitive-behavioral approaches to climate anxiety. Our early data suggests that targeted interventions can significantly reduce climate-related distress while building resilience and agency among young participants.",
    date: "March 8, 2024",
    readTime: "6 min read"
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