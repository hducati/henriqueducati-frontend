import { Box, Stack } from "@chakra-ui/react"

import { MenuItem } from "#/common/components/menu-item/menu-item"
import { MenuLinksProps } from "#/common/components/menu-links/types"

export const MenuLinks = ({ isOpen }: MenuLinksProps): React.ReactElement => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      px={8}
    >
      <Stack
        spacing={16}
        align="center"
        justify={["center", "center", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
      </Stack>
    </Box>
  )
}
