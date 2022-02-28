import { useState } from "react"
import { MenuToggle } from "#/common/components/menu-toggle/menu-toggle"
import { NavbarContainer } from "#/common/components/navbar-container/navbar-container"
import { MenuLinks } from "#/common/components/menu-links/menu-links"
import { ColorToggle } from "#/common/components/color-toggle/color-toggle"
import { Flex } from "@chakra-ui/react"

export const Navbar = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const onToggle = () => setIsOpen(!isOpen)

  return (
    <NavbarContainer>
      <Flex>
        <MenuToggle isOpen={isOpen} onToggle={onToggle} />
        <MenuLinks isOpen={isOpen} />
      </Flex>
      <ColorToggle />
    </NavbarContainer>
  )
}
