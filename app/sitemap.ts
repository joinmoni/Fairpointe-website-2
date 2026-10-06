import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { pages } from "@/lib/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: new URL(page.path, site.url).toString(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
