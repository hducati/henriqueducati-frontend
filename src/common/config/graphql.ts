import { GraphQLClient } from "graphql-request"

export const graphQL = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
)
