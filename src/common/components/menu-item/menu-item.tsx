import { Text } from "@chakra-ui/react"
import Link from "next/link"
import { MenuItemProps } from "#/common/components/menu-item/types"

export const MenuItem = ({ children, isLast, to = "/", ...rest}: MenuItemProps): React.ReactElement => {
  return (
    <Link href={to} passHref>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}