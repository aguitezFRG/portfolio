import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProjectPreview } from "@/components/projects/project-preview";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { getProject, projects } from "@/content/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.name, description: project.summary, openGraph: { title: project.name, description: project.tagline, images: [project.heroImage] } };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex(({ slug }) => slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];
  return <><Navbar /><main><section className="project-hero shell"><Link className="back-link" href="/#work">← Selected work</Link><div className="project-hero-copy"><p className="eyebrow">{project.eyebrow}</p><h1>{project.name}</h1><p className="project-lede">{project.tagline}</p><div className="project-info"><div><span>Role</span><p>{project.role}</p></div><div><span>Built with</span><p>{project.stack.join(" · ")}</p></div></div><div className="hero-actions"><a className="button button-dark" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub repository <ArrowUpRight /></a>{project.liveUrl && <a className="button button-quiet" href={project.liveUrl} target="_blank" rel="noreferrer">Open live site <ArrowUpRight /></a>}</div></div><div className="case-hero-image"><Image src={project.heroImage} alt={`${project.name} interface preview`} width={1440} height={900} priority sizes="(max-width: 800px) 100vw, 70vw" />{project.iconImage && <span className="case-app-icon" aria-hidden="true"><Image src={project.iconImage} alt="" width={120} height={120} /></span>}</div></section>

  <section className="shell overview section-rule"><div className="section-intro"><p className="section-kicker">The brief</p><h2>Why it exists.</h2></div><div className="overview-copy"><p>{project.motivation}</p><dl><div><dt>For</dt><dd>{project.audience}</dd></div><div><dt>The outcome</dt><dd>{project.summary}</dd></div></dl></div></section>

  <section className="shell features section-rule"><div className="section-intro"><p className="section-kicker">Product experience</p><h2>What it helps people do.</h2></div><div className="feature-grid">{project.features.map((feature, index) => <article key={feature.title}><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div><div className="gallery">{project.gallery.map((image) => <figure key={image.src}><Image src={image.src} alt={image.alt} width={1200} height={720} sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>{image.caption}</figcaption></figure>)}</div></section>

  <section className="shell challenges section-rule"><div className="section-intro"><p className="section-kicker">Engineering notes</p><h2>Decisions beneath the surface.</h2></div><div className="challenge-list">{project.challenges.map((challenge) => <article key={challenge.title}><h3>{challenge.title}</h3><div><p className="challenge-label">Problem</p><p>{challenge.problem}</p></div><div><p className="challenge-label">Approach</p><p>{challenge.approach}</p></div>{challenge.tradeoff && <div><p className="challenge-label">Rationale</p><p>{challenge.tradeoff}</p></div>}</article>)}</div></section>

  <section className="shell architecture section-rule"><div className="section-intro"><p className="section-kicker">Architecture</p><h2>Small diagram, clear boundaries.</h2></div><div className="architecture-flow">{project.architecture.map((item, index) => <div key={item} className="architecture-node"><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div><div className="quality-grid"><div><h3>Quality</h3><ul>{project.quality.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Security & trust</h3><ul>{project.security.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>

  <ProjectPreview name={project.name} url={project.liveUrl} />
  <section className="shell next-project"><p className="section-kicker">Next case study</p><Link href={`/projects/${next.slug}`}><span>{next.name}</span><ArrowRight /></Link></section></main><Footer /></>;
}
