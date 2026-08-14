export type ProjectFeature = {
  title: string;
  description: string;
};

export type ProjectChallenge = {
  title: string;
  problem: string;
  approach: string;
  tradeoff?: string;
};

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  motivation: string;
  audience: string;
  role: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  previewMode?: "embed" | "external";
  heroImage: string;
  iconImage?: string;
  gallery: { src: string; alt: string; caption: string }[];
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  quality: string[];
  security: string[];
  architecture: string[];
};
