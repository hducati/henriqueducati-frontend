import { Navbar } from "#/common/components/navbar/navbar"
import { Container, Flex } from "@chakra-ui/react"
import { LayoutProps } from "#/common/components/layout/types"
import { Footer } from "#/common/components/footer/footer"

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <Flex direction="column" justify="space-between" height="100vh">
      <Navbar />
      <Container maxW="container.lg">{children}</Container>
      <Footer />
    </Flex>
  )
}
