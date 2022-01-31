import { Navbar } from "#/common/components/navbar/navbar"
import { Container, Flex } from "@chakra-ui/react"
import { BaseProps } from "#/templates/base/types"
import { Footer } from "#/common/components/footer/footer"

export const Base = ({
  children,
  socialMedias
}: BaseProps): React.ReactElement => {
  return (
    <Flex direction="column" justify="space-between" height="100vh">
      <Navbar />
      <Container maxW="container.lg">{children}</Container>
      <Footer socialMedias={socialMedias} />
    </Flex>
  )
}
