import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap { return [{ url: site.siteUrl, lastModified: new Date() }, ...projects.map(({ slug }) => ({ url: `${site.siteUrl}/projects/${slug}`, lastModified: new Date() }))]; }
