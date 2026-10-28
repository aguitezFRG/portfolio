"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
  id?: string;
};

/** Progressive-enhancement scroll reveal. Content is visible by default (see
 * `.reveal` CSS); JS only adds `.is-visible` earlier via IntersectionObserver
 * so the fade-up plays once an element nears the viewport. No JS / slow JS
 * never hides content — it just skips the transition. */
export function Reveal({ children, className, delay, as = "div", id }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  const Tag = as;

  return (
    <Tag ref={ref as never} id={id} className={className ? `reveal ${className}` : "reveal"} style={style}>
      {children}
    </Tag>
  );
}
