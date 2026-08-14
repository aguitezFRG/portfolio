"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Capabilities", "#capabilities"],
];

const textSizes = [
  ["very-small", "Very small", "85%", 0.85],
  ["small", "Small", "92.5%", 0.925],
  ["default", "Default", "100%", 1],
  ["large", "Large", "112.5%", 1.125],
  ["very-large", "Very large", "125%", 1.25],
] as const;

type TextSize = (typeof textSizes)[number][0];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [textSizeOpen, setTextSizeOpen] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>(() => {
    if (typeof window === "undefined") return "default";
    const saved = window.localStorage.getItem("portfolio-text-size") as TextSize | null;
    return textSizes.find(([value]) => value === saved)?.[0] ?? "default";
  });
  const textSizeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const option = textSizes.find(([value]) => value === textSize) ?? textSizes[2];
    document.documentElement.style.setProperty("--text-scale", String(option[3]));
  }, [textSize]);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!textSizeRef.current?.contains(event.target as Node)) setTextSizeOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTextSizeOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", escape); };
  }, []);

  const chooseTextSize = (value: TextSize, scale: number) => {
    setTextSize(value);
    document.documentElement.style.setProperty("--text-scale", String(scale));
    window.localStorage.setItem("portfolio-text-size", value);
    setTextSizeOpen(false);
  };

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
        <div className="text-size-control" ref={textSizeRef}>
          <button className="text-size-trigger" type="button" aria-expanded={textSizeOpen} aria-haspopup="dialog" aria-controls="text-size-options" onClick={() => setTextSizeOpen(!textSizeOpen)}>Text size</button>
          {textSizeOpen && <div className="text-size-popover" id="text-size-options" role="dialog" aria-label="Text size">
            <p>Text size</p>
            <div role="radiogroup" aria-label="Choose text size">{textSizes.map(([value, label, percentage, scale]) => <button key={value} type="button" role="radio" aria-checked={textSize === value} className={textSize === value ? "is-selected" : ""} onClick={() => chooseTextSize(value, scale)}><span>{label}</span><span>{percentage}</span></button>)}</div>
          </div>}
        </div>
      </nav>
    </header>
  );
}
