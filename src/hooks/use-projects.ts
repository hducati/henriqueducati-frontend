import { getProjectsData } from "#/graphql/queries/get-projects-data"
import { ProjectType } from "#/graphql/types/project"
import { useQuery, UseQueryResult } from "react-query"

type ProjectsResult<TData = ProjectType[], TError = unknown> = UseQueryResult<
  TData,
  TError
>

export const GET_PROJECTS_KEY = "projects"

export function useProjects(): ProjectsResult {
  return useQuery<Array<ProjectType>>([GET_PROJECTS_KEY], getProjectsData)
}
