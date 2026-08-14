"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/icons";

const widths = { Desktop: "100%", Tablet: "768px", Mobile: "390px" } as const;

export function ProjectPreview({ name, url, image, mode = "embed" }: { name: string; url?: string; image: string; mode?: "embed" | "external" }) {
  const [viewport, setViewport] = useState<keyof typeof widths>("Desktop");
  if (!url) return null;
  if (mode === "external") return <section className="preview section-rule" aria-labelledby="live-preview"><div className="section-kicker">Live application</div><div className="preview-heading"><div><h2 id="live-preview">See the product live.</h2><p>This application protects itself from embedded previews. The case-study capture below provides a dependable preview; open the live product to explore it directly.</p></div></div><div className="external-preview"><div className="external-preview-image"><Image src={image} alt={`${name} interface preview`} width={1440} height={900} sizes="(max-width: 800px) 100vw, 88vw" /></div><div className="external-preview-copy"><p className="external-preview-label">External live site</p><p>{new URL(url).hostname}</p><a className="button button-dark" href={url} target="_blank" rel="noreferrer">Open {name} <ArrowUpRight /></a></div></div></section>;
  return <section className="preview section-rule" aria-labelledby="live-preview"><div className="section-kicker">Live application</div><div className="preview-heading"><div><h2 id="live-preview">See the product in context.</h2><p>Embedding depends on the project host&apos;s security policy. The external site remains the reliable preview.</p></div><a className="text-link" href={url} target="_blank" rel="noreferrer">Open live application <ArrowUpRight /></a></div><div className="preview-controls" aria-label="Preview viewport">{Object.keys(widths).map((label) => <button key={label} type="button" className={viewport === label ? "active" : ""} onClick={() => setViewport(label as keyof typeof widths)}>{label}</button>)}</div><div className="browser-frame"><div className="browser-bar"><span /><span /><span /><p>{new URL(url).hostname}</p></div><div className="iframe-wrap" style={{ maxWidth: widths[viewport] }}><iframe src={url} title={`${name} live preview`} loading="lazy" /><div className="iframe-fallback"><p>Live preview unavailable in embedded mode.</p><a href={url} target="_blank" rel="noreferrer">Open live application <ArrowUpRight /></a></div></div></div></section>;
}
