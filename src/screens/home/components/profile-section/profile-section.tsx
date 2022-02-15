import { Flex, Grid, Text } from "@chakra-ui/react"

import { Image } from "#/screens/home/components/image/image"
import { HeadingSystem } from "#/common/components/heading/heading-system"
import { usePerson } from "#/hooks/use-person"

export const ProfileSection = (): React.ReactElement => {
  const { data: person } = usePerson()

  const hasPerson = !!person

  return (
    <>
      {hasPerson && (
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "20% 1fr" }}
          gap={4}
        >
          <Image url={person.image.url} alt={person.name} />
          <Flex
            align={{ base: "center", md: "flex-start" }}
            direction="column"
            justify="center"
            px={{ md: 4 }}
          >
            <HeadingSystem>{`I'm ${person.name}`}</HeadingSystem>
            <Text mt={2} ml={{ md: 2 }}>
              {`${person.role} - located in ${person.country}, ${person.state}, ${person.city}`}
            </Text>
          </Flex>
        </Grid>
      )}
    </>
  )
}
