import type { Project } from "@/types/project";

export const dateFormBuilder: Project = {
  slug: "date-form-builder",
  name: "Custom Date Form Builder",
  eyebrow: "Focused product",
  tagline: "A small, intentional form builder for publishing temporary, shareable date invitations.",
  summary: "A Next.js product that lets verified creators configure a form, publish a unique link, and receive responses without exposing private contact details.",
  motivation: "A lightweight form should still treat identity, privacy, expiry, and response delivery as deliberate product concerns.",
  audience: "Creators sharing a short-lived invitation and respondents completing the published form.",
  role: "Next.js implementation, verification flow, private delivery design, lifecycle modeling, testing, and deployment.",
  stack: ["Next.js", "TypeScript", "Supabase Auth", "PostgreSQL", "SMTP", "Vercel"],
  githubUrl: "https://github.com/aguitezFRG/simple_date_asking_website",
  liveUrl: "https://simple-date-asking-website.vercel.app",
  heroImage: "/projects/date-form-builder/hero.svg",
  gallery: [
    { src: "/projects/date-form-builder/hero.svg", alt: "Illustrated form builder preview", caption: "Configurable creator workflow" },
    { src: "/projects/date-form-builder/hero.svg", alt: "Illustrated public invitation preview", caption: "A focused respondent experience" },
    { src: "/projects/date-form-builder/hero.svg", alt: "Illustrated expiration lifecycle preview", caption: "Expiration modeled as product behavior" },
  ],
  features: [
    { title: "Shareable custom forms", description: "A presentation-only demo leads into an editable builder that publishes a unique public link after creator verification." },
    { title: "Private response delivery", description: "Respondent answers are validated against the stored active form and delivered to the creator without exposing the destination email to the browser." },
    { title: "Intentional temporary lifecycle", description: "Forms expire exactly three days after creation, become unavailable at the timestamp, and are removed by an hourly cleanup job." },
  ],
  challenges: [
    { title: "Identity without a user platform", problem: "The product needs to verify who may publish a form without growing into a profile or dashboard system.", approach: "Email magic-link verification proves creator identity, then server-side checks reuse only the verified session needed for publication." },
    { title: "Protecting creator contact information", problem: "Respondents need a way to send answers without learning the creator’s private address.", approach: "The server derives the private destination from trusted stored ownership data and keeps it out of the public form contract." },
    { title: "Exact expiration", problem: "A temporary link must stop working predictably even before background cleanup runs.", approach: "A timezone-aware database timestamp controls immediate retrieval and submission denial; the scheduled job later removes expired records." },
  ],
  quality: ["Vitest, lint, typecheck, and production build", "Explicit time fixtures", "Route and security smoke checks after deployment"],
  security: ["Verified creator session", "Server-only credentials", "Private creator-email lookup", "Restrictive database grants and RLS"],
  architecture: ["Creator & respondent", "Next.js application", "Verified identity & response delivery", "PostgreSQL lifecycle rules"],
};
