import { NavbarContainerProps } from "#/common/components/navbar-container/types"
import { Flex } from "@chakra-ui/react"

export const NavbarContainer = ({ children, ...props }: NavbarContainerProps): React.ReactElement => {
  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["purple.500", "purple.500", "transparent", "transparent"]}
      color={["white", "white", "purple.600", "purple.600"]}
      {...props}
    >
      {children}
    </Flex>
  )
}