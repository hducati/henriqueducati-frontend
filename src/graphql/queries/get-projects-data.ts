import { graphQL } from "#/common/config/graphql"
import { gql } from "graphql-request"

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
      stack {
        language
        tools
        databases
      }
    }
  }
`

export async function getProjectsData() {
  const { projects } = await graphQL.request(GET_PROJECTS_DATA)

  return projects
}
