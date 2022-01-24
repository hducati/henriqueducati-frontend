import { HeadingSystemProps } from "#/common/components/heading/types"
import { Heading } from "@chakra-ui/react"

export const HeadingSystem = ({
  children,
  ...props
}: HeadingSystemProps): React.ReactElement => {
  return (
    <Heading fontSize={{ base: "1.6rem", md: "1.8rem" }} isTruncated {...props}>
      {children}
    </Heading>
  )
}
