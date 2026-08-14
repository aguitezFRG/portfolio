"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/components/ui/icons";

const widths = { Desktop: "100%", Tablet: "768px", Mobile: "390px" } as const;

export function ProjectPreview({ name, url }: { name: string; url?: string }) {
  const [viewport, setViewport] = useState<keyof typeof widths>("Desktop");
  if (!url) return null;
  return <section className="preview section-rule" aria-labelledby="live-preview"><div className="section-kicker">Live application</div><div className="preview-heading"><div><h2 id="live-preview">See the product in context.</h2><p>Embedding depends on the project host&apos;s security policy. The external site remains the reliable preview.</p></div><a className="text-link" href={url} target="_blank" rel="noreferrer">Open live application <ArrowUpRight /></a></div><div className="preview-controls" aria-label="Preview viewport">{Object.keys(widths).map((label) => <button key={label} type="button" className={viewport === label ? "active" : ""} onClick={() => setViewport(label as keyof typeof widths)}>{label}</button>)}</div><div className="browser-frame"><div className="browser-bar"><span /><span /><span /><p>{new URL(url).hostname}</p></div><div className="iframe-wrap" style={{ maxWidth: widths[viewport] }}><iframe src={url} title={`${name} live preview`} loading="lazy" /><div className="iframe-fallback"><p>Live preview unavailable in embedded mode.</p><a href={url} target="_blank" rel="noreferrer">Open live application <ArrowUpRight /></a></div></div></div></section>;
}
