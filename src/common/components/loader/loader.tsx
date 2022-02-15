import { Flex, Spinner } from "@chakra-ui/react"

export const Loader = (): React.ReactElement => (
  <Flex align="center" justify="center" p={6}>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="primary"
      size="xl"
    />
  </Flex>
)
