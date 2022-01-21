import { graphQL } from "#/common/config/graphql"
import { gql } from "graphql-request"

const GET_HOME_DATA = gql`
  query GetHomeData {
    person(id: 1) {
      name
      about
      country
      state
      city
      role
      image {
        url
      }
    }
    projects {
      name
      shortDescription
      description
      visibility
      image {
        url
      }
    }
  }
`

export async function getHomeData() {
  const { person, projects } = await graphQL.request(GET_HOME_DATA)

  return { person, projects }
}
