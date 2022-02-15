import { Technology } from "#/graphql/types/technology"
import { Flex, Heading } from "@chakra-ui/react"
import { Image } from "../image/image"

export const TechnologyBox = ({
  name,
  icon
}: Technology): React.ReactElement => {
  return (
    <Flex align="center" justify="center" direction="column" gap={2}>
      <Image url={icon.url} alt={name} />
      <Heading
        color="darkPurple"
        fontSize={{ base: "1.2rem", md: "1.4rem" }}
        isTruncated
      >
        {name}
      </Heading>
    </Flex>
  )
}
