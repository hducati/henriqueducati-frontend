import { getPersonData } from "#/graphql/queries/get-person-data"
import { HomeScreen } from "#/screens/home/home"
import { HomeProps } from "#/screens/home/types/home-props"

function Index(props: HomeProps) {
  return <HomeScreen {...props} />
}

export async function getStaticProps() {
  const person = await getPersonData()

  return {
    props: {
      person: person
    }
  }
}

export default Index
