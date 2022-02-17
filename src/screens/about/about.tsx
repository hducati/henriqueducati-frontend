import { Loader } from "#/common/components/loader/loader"
import { usePerson } from "#/hooks/use-person"
import { Flex, Box } from "@chakra-ui/react"

export const AboutScreen = (): React.ReactElement => {
  const { data: person, isLoading } = usePerson()

  return (
    <Flex flexDirection="column" height="100vh" alignItems="center">
      {isLoading ? (
        <Loader />
      ) : (
        <Box dangerouslySetInnerHTML={{ __html: person!.about }} />
      )}
    </Flex>
  )
}
