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
  date: string;
  readTime: string;
  category: "Research Insights" | "Events & Webinars" | "Voices from the Field";
}

export const blogPosts: BlogPost[] = [
  // Example Post (leave your real posts as-is)
  {
    id: "climate-change-youth-solutions",
    image: "/Images/Image2.png",
    category: "Research Insights",
    title: "Climate Change and Youth: Fast-Tracking Mental Health Solutions",
    excerpt:
      "We know that climate change is more than an environmental crisis — it's also a mental health challenge...",
    fullContent: `We know that climate change is more than an environmental crisis — it's also a mental health challenge.

We highlight that:

* <strong class="font-semibold">Young people are disproportionately affected by climate-related disasters and exclusion from decision-making.</strong>
* <strong class="font-semibold">Youth-specific interventions are rare, and translating research into practice can take decades.</strong>
* <strong class="font-semibold">Innovative approaches, like adaptive platform trials, can help us test and scale solutions much faster.</strong>
* <strong class="font-semibold">Youth must be at the centre — not only as participants, but as co-designers and leaders in shaping mental health and climate responses.</strong>

👉 You can read the full open access article here: https://doi.org/10.1007/s43151-025-00174-1`,
    date: "March 18, 2024",
    readTime: "3 min read",
  },
];

export const categories: BlogPost["category"][] = [
  "Research Insights",
  "Events & Webinars",
  "Voices from the Field",
];

/* =========================
   Helpers
   ========================= */

function normalizeContent(html: string): string {
  if (!html) return html;
  let out = html;

  // Turn "* " bullets into tight paragraphs with a leading bullet
  out = out.replace(/^\* (.+)$/gm, '<p class="mb-1">• $1</p>');

  // Remove stray empty paragraphs
  out = out.replace(/<p class="mb-1">\s*<\/p>/g, "");

  // Remove old Tailwind blue classes if present
  out = out.replaceAll(
    /class="[^"]*text-\[#2D6AA3\][^"]*"/gi,
    (m) => m.replace(/text-\[#2D6AA3\]\s*/gi, "")
  );

  return out;
}

function formatDateLabel(dateStr: string) {
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

          <div className="aspect-[16/9] bg-gray-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
            <div
              className="prose max-w-none prose-p:leading-relaxed prose-p:my-2"
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
        <header className="mb-8 lg:mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
            PRIME Blog
          </h1>
          <p className="mt-3 text-gray-600">
            Research insights, events, and stories from the field.
          </p>
        </header>

        <div className="mb-6">
          <CategoryTabs active={activeTab} onChange={setActiveTab} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} onOpen={setSelectedPost} />
          ))}
        </div>
      </div>

      <ReaderModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </section>
  );
};

export default BlogPage;
