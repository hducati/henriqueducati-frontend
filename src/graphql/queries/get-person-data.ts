import { gql } from "graphql-request"

import { graphQL } from "#/common/config/graphql"
import { PersonType } from "#/graphql/types/person"

const GET_PERSON_DATA = gql`
  query GetPersonData($id: ID!) {
    person(id: $id) {
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
      technology_experiences {
        years
        technology {
          name
          icon {
            url
          }
        }
      }
    }
  }
`

export async function getPersonData(): Promise<PersonType> {
  const variables = { id: 1 }
  const { person } = await graphQL.request(GET_PERSON_DATA, variables)

  return person as PersonType
}
