import { BACKEND_URL } from "#/env/index"
import { GraphQLClient } from "graphql-request"

export const graphQL = new GraphQLClient(BACKEND_URL)
