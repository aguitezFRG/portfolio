type IconProps = { className?: string };

export function ArrowDown({ className }: IconProps) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="none"><path d="M10 3v13M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export { ArrowUpRight } from "./icons";
