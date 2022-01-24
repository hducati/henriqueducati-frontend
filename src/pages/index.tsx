import { getPersonData } from "#/graphql/queries/get-person-data"
import { getProjectsData } from "#/graphql/queries/get-projects-data"
import { HomeScreen } from "#/screens/home/home"
import { HomeProps } from "#/screens/home/types/home-props"

function Index(props: HomeProps) {
  return <HomeScreen {...props} />
}

export async function getServerSideProps() {
  const person = await getPersonData()
  const projects = await getProjectsData()

  return {
    props: {
      person: person,
      projects: projects
    }
  }
}

export default Index
