import { Navbar } from "#/common/components/navbar/navbar"
import { Container, VStack } from "@chakra-ui/react"
import { ProfileSection } from "#/screens/home/components/profile-section/profile-section"
import { HomeProps } from "#/screens/home/types/home-props"

export const HomeScreen = ({ person }: HomeProps): React.ReactElement => {
  return (
    <VStack>
      <Navbar />
      <Container maxW="container.lg">
        <ProfileSection person={person} />
      </Container>
    </VStack>
  )
}
