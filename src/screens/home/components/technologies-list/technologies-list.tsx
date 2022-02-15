import { HeadingSystem } from "#/common/components/heading/heading-system"
import { usePerson } from "#/hooks/use-person"
import { Box, Grid, Text } from "@chakra-ui/react"
import React from "react"
import { TechnologyBox } from "../technology-box/technology-box"

export const TechnologiesList = (): React.ReactElement => {
  const { data: person } = usePerson()

  return (
    <Box>
      <HeadingSystem my={6}>Technologies</HeadingSystem>
      <Text fontSize={{ base: "1rem", md: "1.2rem" }}>
        Below are some of the technologies that I have some experience
      </Text>
      <Grid
        mt={6}
        gap={6}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
      >
        {(person?.technology_experiences ?? []).map((technologyExperience) => (
          <React.Fragment key={technologyExperience.technology.name}>
            <TechnologyBox {...technologyExperience.technology} />
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  )
}
