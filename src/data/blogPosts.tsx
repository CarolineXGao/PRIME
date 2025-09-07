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
      "Our new commentary calls for urgent action to fast-track youth mental health solutions in the climate crisis...",
    fullContent: `We know that climate change is more than an environmental crisis — it's also a mental health challenge. Young people, in particular, are experiencing rising levels of anxiety, grief and hopelessness in the face of floods, bushfires, heatwaves and ongoing climate uncertainty.

Our new commentary, published in the Journal of Applied Youth Studies, calls for urgent action to close the gap between what young people are experiencing and the slow pace of research and policy responses.

We highlight that:

<ul class="list-none space-y-1">
  <li>• Young people are disproportionately affected by <strong>climate-related disasters</strong> and <strong>exclusion from decision-making</strong>.</li>
  <li>• <strong>Youth-specific interventions</strong> are rare, and <strong>translation into practice</strong> can take decades.</li>
  <li>• <strong>Adaptive platform trials</strong> can help us <strong>test and scale solutions</strong> much faster.</li>
  <li>• Youth must be at the centre — not only as participants, but as <strong>co-designers</strong> and <strong>leaders</strong> in shaping responses.</li>
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
      "A new study of 19,501 Australian teens finds that exposure to extreme weather increases climate concerns and psychological distress.",
    fullContent: `A new open-access study of 19,501 Australian teens (15–19 years) shows that exposure to floods, fires, storms or droughts is linked to higher climate concern, greater psychological distress, and increased housing and financial challenges.

The research analysed the 2023 Mission Australia Youth Survey to understand how extreme weather exposure affects young people’s mental health and social wellbeing.

We highlight that:

<ul class="list-none space-y-1">
  <li>• Adolescents <strong>outside major cities</strong>, in <strong>lower-SES areas</strong>, and those who are <strong>Indigenous</strong>, <strong>gender diverse</strong>, <strong>living with disability</strong>, or from <strong>CALD communities</strong> are more likely to be exposed.</li>
  <li>• Those exposed report <strong>higher climate concern</strong> and <strong>greater psychological distress (K6)</strong>.</li>
  <li>• Exposure increases the odds of <strong>financial hardship</strong> and <strong>housing challenges</strong> — especially when the household is directly affected.</li>
  <li>• Recovery cannot be <strong>"one size fits all"</strong>: supports must be <strong>age-appropriate</strong>, <strong>culturally safe</strong>, and <strong>targeted</strong> to vulnerable groups.</li>
</ul>

What this means for action:  
<ul class="list-none space-y-1">
  <li>- In <strong>recovery</strong>: place <strong>youth mental health staff</strong> in disaster response and provide <strong>culturally safe</strong>, <strong>age-appropriate supports</strong>.</li>
  <li>- In <strong>preparedness</strong>: work with <strong>schools</strong> and <strong>local services</strong> to build <strong>coping skills</strong> and readiness tailored to <strong>local hazards</strong>.</li>
  <li>- In <strong>policy</strong>: track <strong>youth outcomes</strong> after disasters and fund programs that support <strong>housing stability</strong>, <strong>financial security</strong>, and <strong>equitable care access</strong>.</li>
</ul>


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
      "Study of 18,800 young Australians shows higher climate concern links to greater distress and negative outlook.",
    fullContent: `Using data from 18,800 Australians aged 15–19, higher climate concern is linked to greater psychological distress and a more negative outlook—especially for gender-diverse, Indigenous, and young people living outside major cities.

This study analysed the 2022 Mission Australia Youth Survey to examine how climate change concerns relate to psychological distress (K6) and future outlook after accounting for social determinants and pre-existing mental health conditions.

Key findings:

<ul class="list-none space-y-1">
  <li>- <strong>One in four</strong> young people were very or extremely concerned about <strong>climate change</strong>.</li>
  <li>- <strong>Female</strong> and <strong>gender-diverse youth</strong>, and those with a <strong>self-reported mental health condition</strong>, reported higher climate concerns.</li>
  <li>- Very/extremely concerned youth had higher <strong>psychological distress</strong> .</li>
  <li>- They were also more likely to have a <strong>negative future outlook</strong> .</li>
  <li>- Associations were stronger among <strong>gender-diverse</strong>, <strong>Indigenous</strong>, and <strong>outer-regional/remote</strong> participants.</li>
</ul>

Why this matters:

<ul class="list-none space-y-1">
  <li>- <strong>Integrate youth mental health</strong> into <strong>climate policy</strong> — education, communication, and services should address <strong>climate-related distress</strong> and foster hope.</li>
  <li>- <strong>Track outcomes over time</strong> — <strong>longitudinal monitoring</strong> can guide effective responses and prevention.</li>
</ul>

👉 Read the full open-access article: https://doi.org/10.1016/j.jenvp.2023.102209`,
    date: "February 12, 2024",
    readTime: "4 min read",
  },

  // Events & Webinars
  {
    id: "recognising-supporting-climate-emotions-classroom",
    image: "/Images/Image7.png",
    category: "Events & Webinars",
    title: "Recognising and Supporting Climate Emotions in the Classroom",
    excerpt:
      "A practical webinar for educators on building confidence to address climate topics and support student emotions.",
    fullContent: `A practical, educator-focused webinar designed to build teacher confidence in addressing climate-related topics and supporting student emotions in the classroom.

About this event  

• <strong class="font-semibold">Format:</strong> Online (Zoom)
• <strong class="font-semibold">When:</strong> Wednesday, September 3 · 4–5 pm AEST
• <strong class="font-semibold">Audience:</strong> Teachers and school wellbeing staff (Family & Education • Education)

What you'll learn 

<ul class="list-none space-y-1">
  <li>- <strong>Introducing</strong> the <strong>Teacher Support Resource</strong> (Orygen, headspace, Psychology for a Safe Climate & advisors)</li>
  <li>- <strong>Creating supportive learning environments</strong> when <strong>climate emotions</strong> arise</li>
  <li>- <strong>Practical, empowering tools</strong> for discussing <strong>sustainability</strong> and <strong>environmental issues</strong></li>
  <li>- <strong>Panel discussion + audience Q&A</strong> with sector experts</li>
</ul>

Speakers  

<ul class="list-none space-y-1">
  <li>- <strong>Caroline Gao</strong> — Associate Professor, environmental epidemiologist & biostatistician (Orygen; CYMH, University of Melbourne; Monash)</li>
  <li>- <strong>Samantha Eala</strong> — Development practitioner/researcher (University of Melbourne; Ateneo)</li>
  <li>- <strong>Jackie Turnure</strong> — Triple Emmy-winning Impact Producer (STTOP, The Leadership, The Giants, etc.)</li>
  <li>- <strong>Lizzy Nash</strong> — Co-owner, The Feds; Creator/EP of STTOP2030 and national education program</li>
  <li>- <strong>Dr Bronwyn Gresham</strong> — Clinical Psychologist & CEO, Psychology for a Safe Climate</li>
  <li>- <strong>Simon Dodd</strong> — Head of Workforce Planning & Development, National Clinical Advisor, headspace</li>
  <li>- <strong>Canice Curtis</strong> — Senior Practice Lead, Wesley Mission QLD; "Young Minds in a Changing Climate" project</li>
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
      "Hear directly from young people who participated in PRIME research about their experiences and insights.",
    fullContent: `Hear directly from young people who have participated in PRIME research about their experiences, insights, and the tools they've found most helpful.

"Being part of PRIME has shown me that my climate anxiety isn't something I have to face alone. The group sessions helped me connect with other young people who understand what I'm going through." - Sarah, 19

"I learned practical strategies for managing my eco-grief while also finding ways to take meaningful action. It's about hope and agency, not just coping." - Marcus, 22

"The research process itself was empowering. We weren't just participants - we were partners in designing something that could help other young people." - Aisha, 17

These stories highlight the importance of youth-centered approaches and the power of peer support in building climate resilience.`,
    date: "Sep 10, 2025",
    readTime: "3 min read",
  },
  {
    id: "youth-participant-stories",
    image: "/Images/Image11.png",
    category: "Voices from the Field",
    title: "Reflection on climate emotions",
    excerpt:
      "Our ancient instincts can trap us in fear or denial — or be transformed into courage and hope.",
    fullContent: `In times of great drought, Chinese communities turned to the Dragon King, sovereign of rivers and rain. Temples were raised, incense burned, offerings laid at his feet. Yet when the skies remained unbroken, stories tell of villages so desperate that they gave up their own children to the Dragon King, believing such a terrible sacrifice might summon the rains. To us, this feels unthinkable, even monstrous. But the story is not about cruelty — it is about the crushing weight of uncertainty. When people are powerless before forces larger than themselves, they cling to whatever explanations and remedies their culture provides, no matter how desperate or irrational.

    
This is not just a story of the past. It is a mirror for how we confront climate change today. Faced with fires, floods, and rising seas, many are overcome by grief and anxiety, unable to picture a safe future; some are swept into anger and blame. Still others retreat into denial, persuading themselves the danger is exaggerated or unreal. These reactions may seem opposed, but all arise from the same source: the ancient circuitry of the human mind, instincts honed to shield us when the world feels unbearably unsafe.
Our emotions were not designed for the slow violence of climate change — they were forged in the hunter-gatherer world. Fear kept our ancestors alive by sharpening attention to sudden threats. Anxiety prepared the body for swift action. Grief created rituals that bound communities together. Anger rallied courage to defend kin and territory. Even denial had its place, sparing the mind from terror when survival demanded focus on the immediate task. These were not flaws but finely tuned adaptations to an unpredictable world.

Carried into today’s crisis, however, the same instincts can overwhelm us. Fear immobilises. Anxiety spirals. Grief sinks into despair. Anger divides instead of uniting. Denial blinds us to what is unfolding before our eyes. Our evolutionary inheritance, once protective, now risks trapping us.

And yet, if we can recognise these ancient patterns, we can begin to master them. Fear can become courage. Anxiety can sharpen preparedness. Grief can draw us into collective renewal. Anger can fuel determination to protect what matters most. Even denial, when met with compassion rather than scorn, can soften into dialogue. These instincts are not enemies to silence but raw materials to guide — pathways that, if tended carefully, can lead us toward resilience and action.

The story of the Dragon King reminds us that people have always invented ways to survive the unbearable. What matters now is whether our stories will lock us into cruelty, paralysis or open us into action. To face the future, we need new rituals, new narratives that make climate reality livable, not unspeakable. Only then can we transform the ancient instincts of distress and denial into pathways for resilience, imagination, and hope.
`,
    date: "Sep 10, 2025",
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

  // Convert asterisk bullet points to inline paragraphs with bullet symbols
  out = out.replace(/^\* (.+)$/gm, '<p class="mb-2 ml-4">• $1</p>');

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
