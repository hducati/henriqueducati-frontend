import { milliseconds, oneMinute } from "#/constants/stale-time"
import { getProjectsData } from "#/graphql/queries/get-projects-data"
import { ProjectType } from "#/graphql/types/project"
import { useQuery } from "react-query"
import { ProjectsResult } from "#/hooks/use-projects/types"

export const GET_PROJECTS_KEY = "projects"

export function useProjects(): ProjectsResult {
  return useQuery<Array<ProjectType>>([GET_PROJECTS_KEY], getProjectsData, {
    staleTime: milliseconds * oneMinute
  })
}
