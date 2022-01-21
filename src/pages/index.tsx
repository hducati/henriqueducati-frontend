import { getHomeData } from "#/graphql/queries/get-home-data"
import { HomeScreen } from "#/screens/home/home"
import { HomeProps } from "#/screens/home/types/home-props"

function Index(props: HomeProps) {
  return <HomeScreen {...props} />
}

export async function getServerSideProps() {
  const { person, projects } = await getHomeData()

  return {
    props: {
      person: person,
      projects: projects
    }
  }
}

export default Index
