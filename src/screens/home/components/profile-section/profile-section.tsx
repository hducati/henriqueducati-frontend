import { Flex, Grid, Text } from "@chakra-ui/react"
import { Picture } from "#/screens/home/components/picture/picture"
import { HeadingSystem } from "#/common/components/heading/heading-system"

export const ProfileSection = (): React.ReactElement => {
  return (
    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "20% 1fr" }} gap={4}>
      <Picture />
      <Flex
        align={{ base: "center", md: "flex-start" }}
        direction="column"
        justify="center"
        px={{ md: 4 }}
      >
        <HeadingSystem>I{"'"}m Henrique Ducati Miranda</HeadingSystem>
        <Text mt={2} ml={{ md: 2 }} isTruncated>
          {" "}
          Software Engineer located in Brazil, São Paulo
        </Text>
      </Flex>
    </Grid>
  )
}
