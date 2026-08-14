import { site } from "@/content/site";

export function Footer() {
  return <footer className="footer"><div className="shell footer-inner"><p>© {new Date().getFullYear()} {site.name}</p><div><a href={site.githubUrl} target="_blank" rel="noreferrer">GitHub</a><a href={site.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${site.email}`}>Email</a></div></div></footer>;
}
