import { getPersonData } from "#/graphql/queries/get-person-data"
import { getProjectsData } from "#/graphql/queries/get-projects-data"
import { HomeScreen } from "#/screens/home/home"
import { GetStaticProps } from "next"
import { dehydrate, QueryClient } from "react-query"

function Index() {
  return <HomeScreen />
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery("person", getPersonData)
  await queryClient.prefetchQuery("projects", getProjectsData)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Index
