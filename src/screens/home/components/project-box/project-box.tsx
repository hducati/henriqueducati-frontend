import { ModalSystem } from "#/common/components/modal/modal-system"
import {
  Flex,
  Img,
  Text,
  HStack,
  Button,
  useDisclosure
} from "@chakra-ui/react"
import { StackBox } from "../stack-box/stack-box"
import { ProjectType } from "#/graphql/types/project"

export const ProjectBox = ({
  name,
  shortDescription,
  description,
  image,
  stack
}: ProjectType): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const renderPicture = (): React.ReactElement => (
    <Img
      boxSize={{ base: "18rem", md: "12rem" }}
      loading="lazy"
      src={`${image.url}`}
      alt={`picture-${name}`}
      alignSelf="center"
      borderRadius="0.4rem"
    />
  )

  const renderContentHeader = (): React.ReactElement => (
    <HStack
      display="flex"
      align="center"
      px={4}
      mt={4}
      justify={{ base: "center", lg: "flex-start" }}
    >
      <Text
        fontSize={{ base: "1.2rem", md: "1rem" }}
        fontWeight="bold"
        color="darkPurple"
        isTruncated
      >
        {name}
      </Text>
    </HStack>
  )

  const renderContent = (): React.ReactElement => (
    <Text fontSize="sm" color="purple.600" noOfLines={2} m={4}>
      {shortDescription}
    </Text>
  )

  const renderContentFooter = (): React.ReactElement => (
    <Flex justify="flex-end">
      <Button colorScheme="purple" variant="solid" onClick={onOpen} mr={4}>
        See more
      </Button>
    </Flex>
  )

  return (
    <Flex
      flexDir="column"
      borderRadius="0.6rem"
      borderWidth="0.1rem"
      overflow="hidden"
      width="100%"
      py={4}
    >
      {renderPicture()}
      {renderContentHeader()}
      {renderContent()}
      {renderContentFooter()}
      <ModalSystem
        title={name}
        description={description}
        isOpen={isOpen}
        onClose={onClose}
      >
        <StackBox {...stack} />
      </ModalSystem>
    </Flex>
  )
}
