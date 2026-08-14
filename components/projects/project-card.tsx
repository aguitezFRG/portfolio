import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-card">
    <Link className="project-visual" href={`/projects/${project.slug}`} aria-label={`Read ${project.name} case study`}>
      <Image src={project.heroImage} alt={`${project.name} interface preview`} width={1440} height={900} priority={index === 0} sizes="(max-width: 800px) 100vw, 88vw" />
      {project.iconImage && <span className="project-app-icon" aria-hidden="true"><Image src={project.iconImage} alt="" width={96} height={96} /></span>}
      <span className="project-number">0{index + 1}</span>
    </Link>
    <div className="project-card-copy">
      <p className="eyebrow">{project.eyebrow}</p><h3>{project.name}</h3><p>{project.tagline}</p>
      <ul className="stack-list">{project.stack.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul>
      <div className="project-actions"><Link href={`/projects/${project.slug}`}>Read case study <ArrowRight /></Link>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Open product <ArrowUpRight /></a>}</div>
    </div>
  </article>;
}
