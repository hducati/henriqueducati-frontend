import { Box } from "@chakra-ui/react"
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'

import { MenuToggleProps } from "#/common/components/menu-toggle/types"


export const MenuToggle = ({ isOpen, onToggle }: MenuToggleProps): React.ReactElement => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={onToggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
}