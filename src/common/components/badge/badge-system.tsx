import { BadgeSystemProps } from "#/common/components/badge/types"
import { Badge } from "@chakra-ui/react"

export const BadgeSystem = ({
  text,
  ...props
}: BadgeSystemProps): React.ReactElement => {
  return (
    <Badge
      borderRadius="full"
      colorScheme="purple"
      fontSize={{ base: "1rem", md: "0.8rem" }}
      {...props}
    >
      {text}
    </Badge>
  )
}
