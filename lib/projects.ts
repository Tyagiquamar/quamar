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

export function homeSystemsProjects(): Project[] {
  return projects
    .filter((project) => project.track === "systems" && project.showOnHome)
    .sort((a, b) => a.priority - b.priority)
}

export function homeSelectedProjects(): Project[] {
  return projects
    .filter((project) => project.showOnHome && project.track !== "systems")
    .sort((a, b) => {
      const trackRank = { quant: 0, fullstack: 1, systems: 2 } as const
      if (a.track !== b.track) return trackRank[a.track] - trackRank[b.track]
      return a.priority - b.priority
    })
}

export function trackMeta(track: EngineeringTrack) {
  return tracks[track]
}
