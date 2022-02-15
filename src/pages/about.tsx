import { getPersonData } from "#/graphql/queries/get-person-data"
import { AboutScreen } from "#/screens/about/about"
import { GetStaticProps } from "next"
import { dehydrate, QueryClient } from "react-query"

function About() {
  return <AboutScreen />
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery("person", getPersonData)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default About
