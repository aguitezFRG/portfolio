import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: { default: "FRG Aguitez | Full-stack software engineer", template: "%s | FRG Aguitez" },
  description: "A portfolio of thoughtful, product-focused web applications built by FRG Aguitez.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
