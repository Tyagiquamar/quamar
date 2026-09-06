import { tracks, type EngineeringTrack } from "@/data/tracks"
import { projects, type Project } from "@/data/projects"

export function projectsForTrack(track: EngineeringTrack): Project[] {
  return projects
    .filter((project) => project.track === track && !project.additional)
    .sort((a, b) => a.priority - b.priority)
}

export function additionalProjects(): Project[] {
  return projects.filter((project) => project.additional).sort((a, b) => a.priority - b.priority)
}

const homeFeaturedSlugs = ["durablego", "apexbook", "parseflow", "relaydb"] as const

export function homeFeaturedProjects(): Project[] {
  return homeFeaturedSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project))
}

export function trackMeta(track: EngineeringTrack) {
  return tracks[track]
}
