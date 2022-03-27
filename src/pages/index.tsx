import { GetStaticProps } from "next"
import { dehydrate, QueryClient } from "react-query"

import { getPersonData } from "#/graphql/queries/get-person-data"
import { getProjectsData } from "#/graphql/queries/get-projects-data"
import { GET_PERSON_KEY } from "#/hooks/use-person"
import { GET_PROJECTS_KEY } from "#/hooks/use-projects/use-projects"
import { HomeScreen } from "#/screens/home/home"

function Index() {
  return <HomeScreen />
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(GET_PERSON_KEY, getPersonData)
  await queryClient.prefetchQuery(GET_PROJECTS_KEY, getProjectsData)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Index
