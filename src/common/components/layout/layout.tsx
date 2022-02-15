import { Navbar } from "#/common/components/navbar/navbar"
import { Box, Container, Flex } from "@chakra-ui/react"
import { LayoutProps } from "#/common/components/layout/types"
import { Footer } from "#/common/components/footer/footer"

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <Flex direction="column" justify="space-between" height="100vh">
      <Box bgGradient="linear(to-r, purple.500, pink.500)" w="100%" p={4} />
      <Container maxW="container.lg">
        <Navbar />
        {children}
      </Container>
      <Footer />
    </Flex>
  )
}
