import { ProjectType } from "#/graphql/types/project"
import { UseQueryResult } from "react-query"

export type ProjectsResult<
  TData = ProjectType[],
  TError = unknown
> = UseQueryResult<TData, TError>
