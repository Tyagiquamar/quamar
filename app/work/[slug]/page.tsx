import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectCaseStudyPage, TakkadaCaseStudyPage } from "@/components/case-study-page"
import { caseStudy, siteConfig } from "@/data/portfolio"
import { getProject, projects, takkadaSlug } from "@/data/projects"

interface PageProps {
  params: Promise<{ slug: string }>
}

const caseStudySlugs = [
  takkadaSlug,
  ...projects.filter((project) => project.caseStudy).map((project) => project.slug),
]

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params

  if (slug === takkadaSlug) {
    return {
      title: "Takkada — Production ERP case study",
      description: caseStudy.description,
      alternates: { canonical: `/work/${slug}` },
      openGraph: {
        title: `Takkada — Production ERP case study · ${siteConfig.name}`,
        description: caseStudy.description,
        url: `${siteConfig.url}/work/${slug}`,
      },
    }
  }

  const project = getProject(slug)
  if (!project || !project.caseStudy) return {}

  return {
    title: `${project.title} — case study`,
    description: project.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: project.description,
      url: `${siteConfig.url}/work/${slug}`,
    },
  }
}

export default async function CaseStudyRoute({ params }: PageProps) {
  const { slug } = await params

  if (slug === takkadaSlug) {
    return <TakkadaCaseStudyPage />
  }

  const project = getProject(slug)
  if (!project || !project.caseStudy) {
    notFound()
  }

  return <ProjectCaseStudyPage project={project} />
}
