import { Box, Stack } from "@chakra-ui/react"

import { MenuItem } from "#/common/components/menu-item/menu-item"
import { MenuLinksProps } from "#/common/components/menu-links/types"

export const MenuLinks = ({ isOpen }: MenuLinksProps): React.ReactElement => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block"}}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/">About</MenuItem>
      </Stack>
    </Box>
  )
}