import React, { useMemo, useState } from "react";
import { Calendar, ArrowRight, X } from "lucide-react";

/* =========================
   Types & Data
   ========================= */

export interface BlogPost {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  fullContent: string; // may contain HTML
  date: string;        // e.g., "September 3, 2025"
  readTime: string;    // e.g., "3 min read" or "Webinar"
  category: "Research Insights" | "Events & Webinars" | "Voices from the Field";
}

export const blogPosts: BlogPost[] = [
  // Research Insights
  {
    id: "climate-change-youth-solutions",
    image: "/Images/Image2.png",
    category: "Research Insights",
    title: "Climate Change and Youth: Fast-Tracking Mental Health Solutions",
    excerpt:
      "We know that climate change is more than an environmental crisis — it's also a mental health challenge. Our new commentary calls for urgent action to close the gap between what young people are experiencing and the slow pace of research and policy responses...",
    fullContent: `We know that climate change is more than an environmental crisis — it's also a mental health challenge. Young people, in particular, are experiencing rising levels of anxiety, grief and hopelessness in the face of floods, bushfires, heatwaves and ongoing climate uncertainty.

Our new commentary, published in the Journal of Applied Youth Studies, calls for urgent action to close the gap between what young people are experiencing and the slow pace of research and policy responses.

We highlight that:

<ul>
<li><strong class="font-semibold">Young people are disproportionately affected by climate-related disasters and exclusion from decision-making.</strong></li>
<li><strong class="font-semibold">Youth-specific interventions are rare, and translating research into practice can take decades.</strong></li>
<li><strong class="font-semibold">Innovative approaches, like adaptive platform trials, can help us test and scale solutions much faster.</strong></li>
<li><strong class="font-semibold">Youth must be at the centre — not only as participants, but as co-designers and leaders in shaping mental health and climate responses.</strong></li>
</ul>

At PRIME, we are working to build this platform: a space where researchers, clinicians, communities, and young people can come together to design and test interventions that are fit for purpose, evidence-based, and led by youth voices.

👉 You can read the full open access article here: https://doi.org/10.1007/s43151-025-00174-1`,
    date: "March 18, 2024",
    readTime: "3 min read",
  },
  {
    id: "vulnerability-psychosocial-impacts",
    image: "/Images/Image3.png",
    category: "Research Insights",
    title:
      "Vulnerability and Psychosocial Impacts of Extreme Weather on Young People in Australia",
    excerpt:
      "A new open-access study using data from 19,501 teens (15–19 years) finds that adolescents exposed to floods, fires, storms or droughts report higher climate concerns, more psychological distress, and greater housing/financial challenges.",
    fullContent: `A new open-access study of 19,501 Australian teens (15–19 years) shows that exposure to floods, fires, storms or droughts is linked to higher climate concern, greater psychological distress, and increased housing and financial challenges.

The research analysed the 2023 Mission Australia Youth Survey to understand how extreme weather exposure affects young people’s mental health and social wellbeing.

We highlight that:

<ul>
<li><strong class="font-semibold">Adolescents outside major cities, in lower-SES areas, and those who are Indigenous, gender diverse, living with disability, or from CALD communities are more likely to be exposed.</strong></li>
<li><strong class="font-semibold">Those exposed report higher climate concern and greater psychological distress (K6).</strong></li>
<li><strong class="font-semibold">Exposure increases the odds of financial hardship and housing challenges—especially when the household is directly affected.</strong></li>
<li><strong class="font-semibold">Recovery cannot be “one size fits all”: supports must be age-appropriate, culturally safe, and targeted to vulnerable groups.</strong></li>
</ul>

What this means for action:  
- In recovery: place youth mental health staff in disaster response and provide culturally safe, age-appropriate supports.  
- In preparedness: work with schools and local services to build coping skills and readiness tailored to local hazards.  
- In policy: track youth outcomes after disasters and fund programs that support housing stability, financial security, and equitable care access.

👉 Read the full open access article here: https://doi.org/10.1016/j.envres.2025.121385`,
    date: "15 June 2025",
    readTime: "3 min read",
  },
  {
    id: "climate-concerns-distress-outlook",
    image: "/Images/Image6.png",
    category: "Research Insights",
    title: "Climate Concern, Distress, and Future Outlook in Young Australians",
    excerpt:
      "Using data from 18,800 Australians aged 15–19, higher climate concern is linked to greater psychological distress and a more negative outlook—especially for gender-diverse, Indigenous, and remote youth.",
    fullContent: `Using data from 18,800 Australians aged 15–19, higher climate concern is linked to greater psychological distress and a more negative outlook—especially for gender-diverse, Indigenous, and young people living outside major cities.

This study analysed the 2022 Mission Australia Youth Survey to examine how climate change concerns relate to psychological distress (K6) and future outlook after accounting for social determinants and pre-existing mental health conditions.

Key findings:

<ul>
<li><strong class="font-semibold">One in four young people were very or extremely concerned about climate change.</strong></li>
<li><strong class="font-semibold">Female and gender-diverse youth, and those with a self-reported mental health condition, reported higher climate concerns.</strong></li>
<li><strong class="font-semibold">Very/extremely concerned youth had higher psychological distress (RRR = 1.81; 95% CI: 1.56–2.11).</strong></li>
<li><strong class="font-semibold">They were also more likely to have a negative future outlook (RRR = 1.52; 95% CI: 1.27–1.81).</strong></li>
<li><strong class="font-semibold">Associations were stronger among gender-diverse, Indigenous, and outer-regional/remote participants.</strong></li>
</ul>

Why this matters:

- <strong class="font-semibold">Support must go beyond “one-size-fits-all”</strong>—targeted, culturally safe approaches are needed for groups at higher risk.  
- <strong class="font-semibold">Integrate youth mental health into climate policy</strong>—education, communication, and services should address climate-related distress and foster hope.  
- <strong class="font-semibold">Track outcomes over time</strong>—longitudinal monitoring can guide effective responses and prevention.

👉 Read the full open-access article: https://doi.org/10.1016/j.jenvp.2023.102209`,
    date: "December 12, 2023",
    readTime: "4 min read",
  },

  // Events & Webinars
  {
    id: "recognising-supporting-climate-emotions-classroom",
    image: "/Images/Image7.png",
    category: "Events & Webinars",
    title: "Recognising and Supporting Climate Emotions in the Classroom",
    excerpt:
      "A practical, educator-focused webinar on building confidence to address climate-related topics and support student emotions in class.",
    fullContent: `A practical, educator-focused webinar designed to build teacher confidence in addressing climate-related topics and supporting student emotions in the classroom.

About this event  

<ul>
<li><strong class="font-semibold">Format:</strong> Online (Zoom)</li>
<li><strong class="font-semibold">When:</strong> Wednesday, September 3 · 4–5 pm AEST</li>
<li><strong class="font-semibold">Audience:</strong> Teachers and school wellbeing staff (Family & Education • Education)</li>
</ul>

What you'll learn 

<ul>
<li>Introducing the Teacher Support Resource (Orygen, headspace, Psychology for a Safe Climate & advisors)</li>
<li>Creating supportive learning environments when climate emotions arise</li>
<li>Practical, empowering tools for discussing sustainability and environmental issues</li>
<li>Panel discussion + audience Q&A with sector experts</li>
</ul>

Speakers  

<ul>
<li>Caroline Gao — Associate Professor, environmental epidemiologist & biostatistician (Orygen; CYMH, University of Melbourne; Monash)</li>
<li>Samantha Eala — Development practitioner/researcher (University of Melbourne; Ateneo)</li>
<li>Jackie Turnure — Triple Emmy-winning Impact Producer (STTOP, The Leadership, The Giants, etc.)</li>
<li>Lizzy Nash — Co-owner, The Feds; Creator/EP of STTOP2030 and national education program</li>
<li>Dr Bronwyn Gresham — Clinical Psychologist & CEO, Psychology for a Safe Climate</li>
<li>Simon Dodd — Head of Workforce Planning & Development, National Clinical Advisor, headspace</li>
<li>Canice Curtis — Senior Practice Lead, Wesley Mission QLD; “Young Minds in a Changing Climate” project</li>
</ul>

👉 <a href="https://www.eventbrite.com.au/e/recognising-and-supporting-climate-emotions-in-the-classroom-tickets-1588497271099?aff=oddtdtcreator" target="_blank" rel="noopener noreferrer">Register on Eventbrite</a>`,
    date: "September 3, 2025",
    readTime: "Webinar",
  },

  // Voices from the Field
  {
    id: "youth-participant-stories",
    image: "/Images/Image8.png",
    category: "Voices from the Field",
    title: "Youth Participant Stories: Finding Hope",
    excerpt:
      "Hear directly from young people who have participated in PRIME research about their experiences, insights, and the tools they've found most helpful.",
    fullContent: `Hear directly from young people who have participated in PRIME research about their experiences, insights, and the tools they've found most helpful.

"Being part of PRIME has shown me that my climate anxiety isn't something I have to face alone. The group sessions helped me connect with other young people who understand what I'm going through." - Sarah, 19

"I learned practical strategies for managing my eco-grief while also finding ways to take meaningful action. It's about hope and agency, not just coping." - Marcus, 22

"The research process itself was empowering. We weren't just participants - we were partners in designing something that could help other young people." - Aisha, 17

These stories highlight the importance of youth-centered approaches and the power of peer support in building climate resilience.`,
    date: "March 10, 2024",
    readTime: "3 min read",
  },
];

export const categories: BlogPost["category"][] = [
  "Research Insights",
  "Events & Webinars",
  "Voices from the Field",
];

/* =========================
   Export Functions
   ========================= */

export function getLatestPosts(count: number): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

/* =========================
   Helpers
   ========================= */

// Tighten bullet spacing and strip prior blue classes if present.
function normalizeContent(html: string): string {
  if (!html) return html;
  let out = html;

  // Replace any <ul> with a tight list (small vertical gap)
  out = out.replaceAll(
    /<ul>/gi,
    '<ul class="list-disc list-inside space-y-1 ml-4">'
  );

  // Ensure <li> don’t add extra margins (optional; Tailwind resets help already)
  out = out.replaceAll(
    /<li>/gi,
    '<li class="leading-relaxed">'
  );

  // Remove blue-ish classes from strong tags if they exist in older content
  out = out.replaceAll(
    /class="[^"]*text-\[#2D6AA3\][^"]*"/gi,
    (m) => m.replace(/text-\[#2D6AA3\]\s*/gi, "")
  );

  return out;
}

function formatDateLabel(dateStr: string) {
  // Keep original if it's already human-readable (e.g., "15 June 2025" or "September 3, 2025")
  return dateStr;
}

/* =========================
   UI Components
   ========================= */

const CategoryTabs: React.FC<{
  active: BlogPost["category"];
  onChange: (c: BlogPost["category"]) => void;
}> = ({ active, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            className={`px-4 py-2 rounded-full border transition ${
              isActive
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
            onClick={() => onChange(c)}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
};

const PostCard: React.FC<{
  post: BlogPost;
  onOpen: (p: BlogPost) => void;
}> = ({ post, onOpen }) => {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition">
      <div className="aspect-[16/9] bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <Calendar size={16} />
          <span>{formatDateLabel(post.date)}</span>
          <span aria-hidden="true">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
        <button
          onClick={() => onOpen(post)}
          className="inline-flex items-center gap-2 text-gray-900 font-medium hover:opacity-80"
        >
          Read more <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
};

const ReaderModal: React.FC<{
  post: BlogPost | null;
  onClose: () => void;
}> = ({ post, onClose }) => {
  if (!post) return null;

  const safeHTML = useMemo(() => normalizeContent(post.fullContent), [post]);

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Calendar size={16} />
              <span>{formatDateLabel(post.date)}</span>
              <span aria-hidden="true">•</span>
              <span>{post.readTime}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cover */}
          <div className="aspect-[16/9] bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>

            {/* Content: tightened lists + no blue emphasize */}
            <div
              className="prose max-w-none prose-p:leading-relaxed prose-headings:scroll-mt-24 prose-ul:my-2 prose-li:my-0"
              dangerouslySetInnerHTML={{ __html: safeHTML }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================
   Page
   ========================= */

const BlogPage: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<BlogPost["category"]>("Research Insights");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const visiblePosts = useMemo(
    () => blogPosts.filter((p) => p.category === activeTab),
    [activeTab]
  );

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 lg:mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
            PRIME Blog
          </h1>
          <p className="mt-3 text-gray-600">
            Research insights, events, and stories from the field.
          </p>
        </header>

        {/* Tabs */}
        <div className="mb-6">
          <CategoryTabs active={activeTab} onChange={setActiveTab} />
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} onOpen={setSelectedPost} />
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <ReaderModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};

export default BlogPage;
