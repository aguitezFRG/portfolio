"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/components/ui/icons";

const viewports = { Desktop: 1440, Tablet: 768, Mobile: 390 } as const;
const previewHeight = 620;
type PreviewViewport = keyof typeof viewports;

function availableViewports(width: number): PreviewViewport[] {
  if (width >= 1024) return ["Desktop", "Tablet", "Mobile"];
  if (width >= 600) return ["Tablet", "Mobile"];
  return ["Mobile"];
}

export function ProjectPreview({ name, url, image, mode = "embed" }: { name: string; url?: string; image: string; mode?: "embed" | "external" }) {
  const [viewport, setViewport] = useState<PreviewViewport>("Desktop");
  const [available, setAvailable] = useState<PreviewViewport[]>(["Desktop", "Tablet", "Mobile"]);
  const [scale, setScale] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = viewportRef.current;
    if (!container) return;

    const updateScale = () => setScale(Math.min(1, container.clientWidth / viewports[viewport]));
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, [viewport]);

  useEffect(() => {
    const updateAvailableViewports = () => {
      const nextAvailable = availableViewports(window.innerWidth);
      setAvailable(nextAvailable);
      setViewport((current) => nextAvailable.includes(current) ? current : nextAvailable[0]);
    };

    updateAvailableViewports();
    window.addEventListener("resize", updateAvailableViewports);
    return () => window.removeEventListener("resize", updateAvailableViewports);
  }, []);
  if (!url) return null;
  if (mode === "external") return <section className="preview section-rule" aria-labelledby="live-preview"><div className="section-kicker">Live application</div><div className="preview-heading"><div><h2 id="live-preview">See the product live.</h2><p>This application protects itself from embedded previews. The case-study capture below provides a dependable preview; open the live product to explore it directly.</p></div></div><div className="external-preview"><div className="external-preview-image"><Image src={image} alt={`${name} interface preview`} width={1440} height={900} sizes="(max-width: 800px) 100vw, 88vw" /></div><div className="external-preview-copy"><p className="external-preview-label">External live site</p><p>{new URL(url).hostname}</p><a className="button button-dark" href={url} target="_blank" rel="noreferrer">Open {name} <ArrowUpRight /></a></div></div></section>;
  const viewportWidth = viewports[viewport];
  const scaledHeight = previewHeight * scale;
  return <section className="preview section-rule" aria-labelledby="live-preview"><div className="section-kicker">Live application</div><div className="preview-heading"><div><h2 id="live-preview">See the product in context.</h2><p>Embedding depends on the project host&apos;s security policy. The external site remains the reliable preview.</p></div><a className="text-link" href={url} target="_blank" rel="noreferrer">Open live application <ArrowUpRight /></a></div><div className="preview-controls" aria-label="Preview viewport">{available.map((label) => <button key={label} type="button" className={viewport === label ? "active" : ""} onClick={() => setViewport(label)}>{label}</button>)}</div><div className="browser-frame"><div className="browser-bar"><span /><span /><span /><p>{new URL(url).hostname}</p></div><div ref={viewportRef} className="iframe-viewport" style={{ height: scaledHeight }}><div className="iframe-wrap" style={{ width: viewportWidth, height: previewHeight, transform: `translateX(-50%) scale(${scale})` }}><iframe src={url} title={`${name} live preview`} loading="lazy" /><div className="iframe-fallback"><p>Live preview unavailable in embedded mode.</p><a href={url} target="_blank" rel="noreferrer">Open live application <ArrowUpRight /></a></div></div></div></div></section>;
}
