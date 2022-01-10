import { Box } from "@chakra-ui/react"

import { MenuToggleProps } from "#/common/components/menu-toggle/types"
import { FiMenu, FiX } from "react-icons/fi"

export const MenuToggle = ({
  isOpen,
  onToggle
}: MenuToggleProps): React.ReactElement => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
      {isOpen ? <FiX /> : <FiMenu />}
    </Box>
  )
}
