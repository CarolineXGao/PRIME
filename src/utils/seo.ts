export interface SEOData {
  title: string;
  description: string;
  path: string;
}

export const seoData: Record<string, SEOData> = {
  home: {
    title: "PRIME: Platform for Research and Interventions in Youth Mental Health and the Environment",
    description: "Overview of PRIME's mission, approach, and impact in addressing climate-related mental health challenges in young people through evidence-based research and interventions.",
    path: "/"
  },
  about: {
    title: "About PRIME",
    description: "What PRIME is, why it exists, and how it works to support youth mental health in the context of climate change through collaborative research and community partnerships.",
    path: "/about"
  },
  team: {
    title: "PRIME Study Team & Governance",
    description: "Meet our multidisciplinary team of investigators, youth advisors, and governance structure driving climate-informed mental health research and practice.",
    path: "/team"
  },
  partners: {
    title: "PRIME Partners & Sites",
    description: "Institutional and community partners and locations collaborating with PRIME to advance climate and youth mental health research across Australia.",
    path: "/partners"
  },
  programs: {
    title: "PRIME Programs & Work Packages",
    description: "Explore our evidence-based programs including EM-Act, EM-Measure, EM-Care and other interventions designed to support youth mental health in climate contexts.",
    path: "/programs"
  },
  resources: {
    title: "Resources & Downloads",
    description: "Access guides, templates, training materials, measurement tools, and resources for researchers, clinicians, schools, and communities working in climate and mental health.",
    path: "/resources"
  },
  publications: {
    title: "Publications & Reports",
    description: "Peer-reviewed papers, policy briefs, and research reports from PRIME's climate and youth mental health research program.",
    path: "/publications"
  },
  news: {
    title: "News & Updates",
    description: "Latest project updates, research findings, events, and media coverage from the PRIME research platform and community.",
    path: "/news"
  },
  contact: {
    title: "Contact / Join PRIME",
    description: "How to get involved with PRIME, contact our research team, participate in studies, or collaborate on climate and youth mental health initiatives.",
    path: "/contact"
  }
};

export const updateSEO = (pageKey: string) => {
  const seo = seoData[pageKey];
  if (!seo) return;

  const baseUrl = "https://prime-website-wirefr-ckg5.bolt.host";
  const fullUrl = `${baseUrl}${seo.path}`;

  // Update title
  document.title = seo.title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  };

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', fullUrl);

  // Basic meta tags
  updateMetaTag('description', seo.description);
  
  // Open Graph tags
  updateMetaTag('og:title', seo.title, true);
  updateMetaTag('og:description', seo.description, true);
  updateMetaTag('og:url', fullUrl, true);
  updateMetaTag('og:type', 'website', true);
  updateMetaTag('og:site_name', 'PRIME Research Platform', true);
  
  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seo.title);
  updateMetaTag('twitter:description', seo.description);
  updateMetaTag('twitter:url', fullUrl);
};