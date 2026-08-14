import type { Project } from "@/types/project";

export const lms: Project = {
  slug: "library-management-system",
  name: "Library Management System",
  eyebrow: "Institutional software",
  tagline: "A role-aware Laravel and Filament platform for managing an academic reading room's materials and access workflows.",
  summary: "A shared Laravel application for managing physical and digital research materials, access requests, borrowing, and accountable administration.",
  motivation: "Academic reading-room workflows need more than a catalog: they need clear access rules, request history, and safe digital delivery.",
  audience: "Students and faculty finding materials, plus reading-room administrators managing access and operations.",
  role: "Full-stack engineering, product workflows, testing, Render deployment, and shared-demo operations.",
  stack: ["Laravel 12", "Filament 5", "PHP", "PostgreSQL", "Supabase Storage", "Render"],
  githubUrl: "https://github.com/aguitezFRG/lms",
  liveUrl: "https://lms-demo.frgagz.com",
  previewMode: "embed",
  heroImage: "/projects/lms/showcase.png",
  iconImage: "/projects/lms/lms_favicon.png",
  gallery: [
    { src: "/projects/lms/showcase.png", alt: "LMS material catalog with search, filters, and available research materials", caption: "Role-filtered catalog discovery" },
    { src: "/projects/lms/material-detail.png", alt: "LMS material-detail view with research metadata and a digital-copy request action", caption: "Material context before a controlled access request" },
  ],
  features: [
    { title: "Two purpose-built panels", description: "Faculty and students browse, request, and monitor materials; administrators, committee members, IT staff, and custodians manage users, catalog data, access levels, and decisions." },
    { title: "Request lifecycle", description: "Physical borrowing and digital-access requests carry statuses, reasons, due dates, notifications, and an auditable history." },
    { title: "Repository intelligence", description: "Catalog search, filters, availability, activity trends, and system-usage views help staff operate the collection deliberately." },
  ],
  challenges: [
    { title: "Secure digital material delivery", problem: "Approved materials must be accessible remotely without treating a browser link as unrestricted distribution.", approach: "Authorized viewer and stream routes validate active approval before delivery. Protected PDFs are kept in private object storage and normalized with a user-and-time-specific QR watermark.", tradeoff: "A delivery control cannot prevent every capture method, but it adds traceability while preserving a practical reading experience." },
    { title: "Access that matches institutional roles", problem: "A material’s visibility and request eligibility change with access level, availability, and a user’s existing request state.", approach: "The catalog and access workflow model roles, per-material access levels, request transitions, expiry, and notifications as first-class rules." },
    { title: "A useful shared demo without a second product", problem: "A deployable demonstration should prove real behavior without exposing production data or credentials.", approach: "The native Laravel application runs conventionally on Render with Supabase PostgreSQL and private object storage, using the canonical seeders and controlled shared-demo lifecycle." },
  ],
  quality: ["Laravel test suite and focused feature tests", "Pint formatting checks", "Production JavaScript build", "CI bootstrap and Render container verification"],
  security: ["Role-aware panels and access levels", "Authenticated protected-material delivery", "Private object storage", "Controlled shared-demo lifecycle"],
  architecture: ["Students, faculty, and staff", "Laravel 12 / Filament 5 workflows", "Access requests and audit events", "Supabase PostgreSQL and private storage"],
};
