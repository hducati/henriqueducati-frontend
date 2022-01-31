import { getPersonData } from "#/graphql/queries/get-person-data"
import { PersonType } from "#/graphql/types/person"
import { useQuery, UseQueryResult } from "react-query"

type PersonResult<TData = PersonType, TError = unknown> = UseQueryResult<
  TData,
  TError
>

export const GET_PERSON_KEY = "person"

export function usePerson(): PersonResult {
  return useQuery<PersonType>([GET_PERSON_KEY], getPersonData)
}
