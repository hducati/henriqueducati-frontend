import { Navbar } from "#/common/components/navbar/navbar"
import { Container, VStack } from "@chakra-ui/react"
import { ProfileSection } from "#/screens/home/components/profile-section/profile-section"

export const HomeScreen = (): React.ReactElement => {
  return (
    <VStack>
      <Navbar />
      <Container maxW="container.lg">
        <ProfileSection />
      </Container>
    </VStack>
  )
}
