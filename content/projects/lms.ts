import type { Project } from "@/types/project";

export const lms: Project = {
  slug: "library-management-system",
  name: "Library Management System",
  eyebrow: "Institutional software",
  tagline: "A role-aware repository and library workflow platform for an academic reading room.",
  summary: "A full-stack system for managing physical and digital research materials, access requests, borrowing, and accountable administration.",
  motivation: "Academic reading-room workflows need more than a catalog: they need clear access rules, request history, and safe digital delivery.",
  audience: "Students and faculty finding materials, plus reading-room administrators managing access and operations.",
  role: "Full-stack engineering, product workflows, testing, deployment, and browser-demo packaging.",
  stack: ["Laravel", "Filament", "PHP", "Tailwind CSS", "SQLite", "PHPUnit"],
  githubUrl: "https://github.com/aguitezFRG/lms",
  heroImage: "/projects/lms/hero.svg",
  iconImage: "/projects/lms/lms_favicon.png",
  gallery: [
    { src: "/projects/lms/hero.svg", alt: "Illustrated preview of the material catalog", caption: "Role-filtered catalog discovery" },
    { src: "/projects/lms/hero.svg", alt: "Illustrated preview of request management", caption: "Borrow and access workflows" },
    { src: "/projects/lms/hero.svg", alt: "Illustrated preview of analytics", caption: "Operational activity at a glance" },
  ],
  features: [
    { title: "Two purpose-built panels", description: "Faculty and students browse, request, and monitor materials; administrators manage users, catalog data, access levels, and decisions." },
    { title: "Request lifecycle", description: "Physical borrowing and digital-access requests carry statuses, reasons, due dates, notifications, and an auditable history." },
    { title: "Repository intelligence", description: "Catalog search, filters, availability, activity trends, and system-usage views help staff operate the collection deliberately." },
  ],
  challenges: [
    { title: "Secure digital material delivery", problem: "Approved materials must be accessible remotely without treating a browser link as unrestricted distribution.", approach: "Authorized viewer and stream routes validate active approval before delivery. PDFs are normalized and watermarked with a user-and-time-specific QR code.", tradeoff: "A delivery control cannot prevent every capture method, but it adds traceability while preserving a practical reading experience." },
    { title: "Access that matches institutional roles", problem: "A material’s visibility and request eligibility change with access level, availability, and a user’s existing request state.", approach: "The catalog and access workflow model roles, per-material access levels, request transitions, expiry, and notifications as first-class rules." },
    { title: "A useful demo without a second product", problem: "A deployable demonstration should prove real behavior without exposing production data or credentials.", approach: "The native Laravel application is packaged into a browser-local PHP-WASM and SQLite runtime with deterministic seeded data." },
  ],
  quality: ["In-memory SQLite test defaults", "PHPUnit feature coverage", "Dependency security audit in CI", "Browser proof for the packaged demo"],
  security: ["Role-aware panels and access levels", "Authenticated material streaming", "Immutable repository change logs", "Soft-deleted accounts and controlled expiry"],
  architecture: ["Students & faculty", "Laravel / Filament workflows", "Access requests & audit events", "Database & protected storage"],
};
