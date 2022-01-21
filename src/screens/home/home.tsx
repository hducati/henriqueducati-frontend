import { Navbar } from "#/common/components/navbar/navbar"
import { Container, VStack } from "@chakra-ui/react"
import { ProfileSection } from "#/screens/home/components/profile-section/profile-section"
import { HomeProps } from "#/screens/home/types/home-props"
import { ProjectsList } from "./components/projects-list/projects-list"

export const HomeScreen = ({
  person,
  projects
}: HomeProps): React.ReactElement => {
  return (
    <VStack>
      <Navbar />
      <Container maxW="container.lg">
        <ProfileSection person={person} />
        <ProjectsList projects={projects} />
      </Container>
    </VStack>
  )
}
