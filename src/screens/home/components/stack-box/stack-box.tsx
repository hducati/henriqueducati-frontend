import { Text, Flex } from "@chakra-ui/react"
import { StackBoxProps } from "#/screens/home/components/stack-box/types"

export const StackBox = ({
  language,
  tools,
  databases
}: StackBoxProps): React.ReactElement => {
  return (
    <Flex direction="column" gap={2} py={2}>
      <Text>Programming Language: {language}</Text>
      <Text>Frameworks and tools: {tools}</Text>
      <Text>Databases: {databases}</Text>
    </Flex>
  )
}
