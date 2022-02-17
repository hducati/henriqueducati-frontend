import NextLink from "next/link"

import { MenuItemProps } from "#/common/components/menu-item/types"
import * as S from "#/common/components/menu-item/styles"

export const MenuItem = ({
  children,
  to = "/"
}: MenuItemProps): React.ReactElement => {
  return (
    <NextLink href={to}>
      <S.MenuLink>{children}</S.MenuLink>
    </NextLink>
  )
}
