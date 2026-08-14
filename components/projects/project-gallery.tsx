"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import type { Project } from "@/types/project";

type ProjectGalleryProps = {
  name: string;
  images: Project["gallery"];
};

export function ProjectGallery({ name, images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const image = images[activeIndex];

  if (images.length === 0) return null;

  const showPrevious = () => setActiveIndex((index) => (index - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % images.length);
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

  return <section className="project-gallery" aria-label={`${name} product screenshots`} onKeyDown={handleKeyDown} tabIndex={0}>
    <div className="project-gallery-frame">
      <Image src={image.src} alt={image.alt} width={1280} height={750} sizes="(max-width: 800px) 100vw, 1180px" />
    </div>
    <div className="project-gallery-controls">
      <button type="button" onClick={showPrevious} aria-label="Show previous screenshot">← <span>Previous</span></button>
      <p aria-live="polite" aria-atomic="true"><span className="sr-only">Screenshot </span>{activeIndex + 1} / {images.length} <span aria-hidden="true">·</span> {image.caption}</p>
      <button type="button" onClick={showNext} aria-label="Show next screenshot"><span>Next</span> →</button>
    </div>
  </section>;
}
