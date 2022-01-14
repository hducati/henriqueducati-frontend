import { Heading, HStack, Text } from "@chakra-ui/react"
import { Picture } from "#/screens/home/components/picture/picture"

export const ProfileSection = (): React.ReactElement => {
  return (
    <HStack spacing="80px">
      <Picture />
      <Heading size="lg" isTruncated alignSelf="center">
        I{"'"}m Henrique Ducati Miranda
      </Heading>
      <Text></Text>
    </HStack>
  )
}
