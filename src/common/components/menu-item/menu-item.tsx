import { Link, Text } from "@chakra-ui/react"
import { MenuItemProps } from "#/common/components/menu-item/types"

export const MenuItem = ({
  children,
  to = "/",
  ...rest
}: MenuItemProps): React.ReactElement => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
}
