import type { Project } from "@/types/project";

export const kwentongKusina: Project = {
  slug: "kwentong-kusina",
  name: "Kwentong Kusina",
  eyebrow: "Community product",
  tagline: "A warm, community-driven food discovery product built around trustworthy local recommendations.",
  summary: "A responsive food-review experience where people discover establishments, share reviews, propose details, and participate in moderated location data.",
  motivation: "Local food discovery is richer when recommendations, places, and community context are approachable and responsibly curated.",
  audience: "People looking for places to eat, contributors sharing knowledge, and moderators maintaining useful catalog information.",
  role: "Frontend engineering, Supabase/Postgres design, authorization, moderation workflows, testing, and protected deployment.",
  stack: ["React", "Vite", "Supabase", "PostgreSQL", "Row Level Security", "Vercel"],
  githubUrl: "https://github.com/aguitezFRG/kwentong-kusina",
  liveUrl: "https://kwentong-kusina.cntest.uk",
  heroImage: "/projects/kwentong-kusina/showcase.png",
  iconImage: "/projects/kwentong-kusina/kwentong_kusina_favicon.svg",
  gallery: [
    { src: "/projects/kwentong-kusina/showcase.png", alt: "Kwentong Kusina food establishment catalog in the public demo", caption: "Editorial food discovery" },
    { src: "/projects/kwentong-kusina/food-items.png", alt: "Kwentong Kusina food-item catalog with searchable dishes in the public demo", caption: "Browse dishes alongside the places that serve them" },
  ],
  features: [
    { title: "Discover with context", description: "Editorial catalog browsing, establishment details, reviews, and map-aware location information make recommendations easier to evaluate." },
    { title: "Community contributions", description: "Verified users can propose catalog and location changes, vote on candidates, and see typed revision information instead of opaque records." },
    { title: "Operational moderation", description: "Administrators and helpers have focused moderation responsibilities, while read-only demo roles make the product easier to explore safely." },
  ],
  challenges: [
    { title: "Database-enforced authorization", problem: "Hiding UI controls does not protect reviews, proposals, roles, or stored media from direct requests.", approach: "PostgreSQL functions and Row Level Security enforce ownership, moderation, lifecycle, and storage permissions at the data boundary." },
    { title: "Moderation without erasing the story", problem: "Community content needs correction and review while retaining accountable decisions and revisions.", approach: "Proposal threads, decision reasons, typed field revisions, and controlled visibility preserve useful history for moderators and contributors." },
    { title: "Location contributions that stay credible", problem: "Places need flexible community input without immediately turning every suggestion into the official location.", approach: "Candidate suggestions, voting, and moderator selection separate community signal from the official pin." },
  ],
  quality: ["Frontend unit coverage", "Postgres policy and function tests", "Protected main branch quality gate", "Production deployment smoke checks"],
  security: ["Postgres RLS policies", "Role and lifecycle enforcement", "Turnstile-protected access path", "Soft deletion preserves auditability"],
  architecture: ["Visitors & contributors", "React product interface", "Supabase Auth & Edge Functions", "PostgreSQL RLS & storage"],
};
