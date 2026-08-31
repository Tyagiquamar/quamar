import type { MetadataRoute } from "next"
import { siteConfig } from "@/data/portfolio"
import { projects, takkadaSlug } from "@/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyRoutes = [
    takkadaSlug,
    ...projects.filter((project) => project.caseStudy).map((project) => project.slug),
  ].map((slug) => ({
    url: `${siteConfig.url}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...caseStudyRoutes,
  ]
}
