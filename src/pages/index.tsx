import { getPersonData } from "#/graphql/queries/get-person-data"
import { getProjectsData } from "#/graphql/queries/get-projects-data"
import { HomeScreen } from "#/screens/home/home"
import { HomeProps } from "#/screens/home/types/home-props"
import { dehydrate, QueryClient } from "react-query"

function Index(props: HomeProps) {
  return <HomeScreen {...props} />
}

export async function getStaticProps() {
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
