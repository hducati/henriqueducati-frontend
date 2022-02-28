import { gql } from "graphql-request"

import { graphQL } from "#/common/config/graphql"
import { ProjectType } from "#/graphql/types/project"

const GET_PROJECTS_DATA = gql`
  query GetProjectsData($limit: Int!) {
    projects(limit: $limit) {
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
  const variables = { limit: 6 }
  const { projects } = await graphQL.request(GET_PROJECTS_DATA, variables)

  return projects as Array<ProjectType>
}
