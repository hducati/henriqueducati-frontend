import { getHomeData } from "#/graphql/queries/get-home-data"
import { HomeScreen } from "#/screens/home/home"
import { HomeProps } from "#/screens/home/types/home-props"

function Index(props: HomeProps) {
  return <HomeScreen {...props} />
}

export async function getStaticProps() {
  const person = await getHomeData()

  return {
    props: {
      person: person
    }
  }
}

export default Index
