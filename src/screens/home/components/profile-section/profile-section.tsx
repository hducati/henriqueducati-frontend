import { Flex, Grid, Text } from "@chakra-ui/react"
import { Picture } from "#/screens/home/components/picture/picture"
import { HeadingSystem } from "#/common/components/heading/heading-system"
import { ProfileSectionProps } from "#/screens/home/components/profile-section/types"

export const ProfileSection = ({
  person
}: ProfileSectionProps): React.ReactElement => {
  return (
    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "20% 1fr" }} gap={4}>
      <Picture />
      <Flex
        align={{ base: "center", md: "flex-start" }}
        direction="column"
        justify="center"
        px={{ md: 4 }}
      >
        <HeadingSystem>{`I'm ${person.name}`}</HeadingSystem>
        <Text mt={2} ml={{ md: 2 }} isTruncated>
          {`${person.role} - located in ${person.country}, ${person.state}, ${person.city}`}
        </Text>
      </Flex>
    </Grid>
  )
}
