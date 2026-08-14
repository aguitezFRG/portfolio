"use client";

import { useState } from "react";
import { site } from "@/content/site";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Capabilities", "#capabilities"],
  ["Résumé", "/resume.pdf"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" onClick={() => setOpen(false)}>FRG <span>Aguitez</span></a>
        <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          <span className="sr-only">Toggle navigation</span><span /><span />
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`} id="nav-links">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href={site.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={site.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </nav>
    </header>
  );
}
