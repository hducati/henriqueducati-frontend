import { graphQL } from "#/common/config/graphql"
import { gql } from "graphql-request"

const GET_PERSON_DATA = gql`
  query GetPersonData {
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
      social_medias {
        link
        social_media_category {
          name
          icon {
            url
          }
        }
      }
    }
  }
`

export async function getPersonData() {
  const { person } = await graphQL.request(GET_PERSON_DATA)

  return person
}
