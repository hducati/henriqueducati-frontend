import { NavbarContainerProps } from "#/common/components/navbar-container/types"
import { Flex } from "@chakra-ui/react"

export const NavbarContainer = ({
  children,
  ...props
}: NavbarContainerProps): React.ReactElement => {
  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      w="100%"
      mb={8}
      p={6}
      justify="space-between"
      color={"black"}
      {...props}
    >
      {children}
    </Flex>
  )
}
