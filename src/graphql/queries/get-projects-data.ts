import { gql } from "graphql-request"

import { graphQL } from "#/common/config/graphql"
import { ProjectType } from "#/graphql/types/project"

const GET_PROJECTS_DATA = gql`
  query GetProjectsData {
    projects {
      name
      shortDescription
      description
      visibility
      image {
        url
      }
      websiteUrl
      repositoryUrl
      stack {
        language
        tools
        databases
      }
    }
  }
`

export async function getProjectsData(): Promise<Array<ProjectType>> {
  const { projects } = await graphQL.request(GET_PROJECTS_DATA)

  return projects as Array<ProjectType>
}
