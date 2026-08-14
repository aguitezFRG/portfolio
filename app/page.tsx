import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProjectCard } from "@/components/projects/project-card";
import { ArrowDown, ArrowUpRight } from "@/components/ui/home-icons";
import { Github, LinkedIn } from "@/components/ui/icons";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  return <><Navbar /><main id="top"><section className="hero shell"><p className="eyebrow">FRG Aguitez — portfolio</p><h1>Building web products with <em>considered systems</em> and human interfaces.</h1><div className="hero-lower"><p>{site.description}</p><div className="hero-actions"><a className="button button-dark" href="#work">View selected work <ArrowDown /></a><a className="hero-email" href={`mailto:${site.email}`}>Start a conversation <ArrowUpRight /></a></div></div><div className="hero-meta"><span>Based in the Philippines</span><span>Available for software engineering opportunities</span></div></section>

  <section className="shell about section-rule" id="about"><div className="section-intro"><p className="section-kicker">About</p><h2>Software should feel clear for the people who depend on it.</h2></div><div className="about-copy"><p>I&apos;m FRG Aguitez, a full-stack software engineer who enjoys turning practical requirements into calm, capable products. I work across product design, responsive interfaces, data rules, and the operational details that turn an idea into software people can trust.</p><p>I&apos;m particularly drawn to work that pairs useful interaction design with deliberate systems thinking: permissions that live at the data boundary, workflows that preserve context, and deployments that are repeatable.</p><div className="social-row"><a href={site.githubUrl} target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a><a href={site.linkedInUrl} target="_blank" rel="noreferrer"><LinkedIn /> LinkedIn <ArrowUpRight /></a></div></div></section>

  <section className="shell work-section" id="work"><div className="section-intro"><p className="section-kicker">Selected work</p><h2>Projects that make the engineering visible.</h2><p>Each case study starts with the product outcome, then opens into the decisions that made it work.</p></div><div className="project-list">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.slug} />)}</div></section>

  <section className="shell capabilities section-rule" id="capabilities"><div className="section-intro"><p className="section-kicker">Capabilities</p><h2>End-to-end, without losing the details.</h2></div><div className="capability-grid">{site.capabilities.map(([heading, ...items]) => <div className="capability" key={heading}><h3>{heading}</h3><p>{items.join(" · ")}</p></div>)}</div></section>

  <section className="shell experience section-rule"><div className="section-intro"><p className="section-kicker">Experience</p><h2>Owning the path from brief to release.</h2></div><div>{site.experience.map((entry) => <article className="experience-entry" key={entry.title}><div><h3>{entry.title}</h3><p className="mono">{entry.period}</p></div><ul>{entry.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>)}</div></section>

  <section className="contact"><div className="shell contact-inner"><p className="section-kicker">Contact</p><h2>Have a product problem worth solving?</h2><a className="contact-email" href={`mailto:${site.email}`}>{site.email} <ArrowUpRight /></a><p>Or explore the work on <a href={site.githubUrl} target="_blank" rel="noreferrer">GitHub</a> and <a href={site.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a>.</p></div></section></main><Footer /></>;
}
