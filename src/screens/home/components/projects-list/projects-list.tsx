import React from "react"
import { Grid, Text } from "@chakra-ui/react"

import { HeadingSystem } from "#/common/components/heading/heading-system"
import { useProjects } from "#/hooks/use-projects"
import { ProjectBox } from "#/screens/home/components/project-box/project-box"
import { Loader } from "#/common/components/loader/loader"

export const ProjectsList = (): React.ReactElement => {
  const { data: projects, isLoading } = useProjects()

  const renderLoaderWhenLoading = (): React.ReactElement => <Loader />
  const renderProjectsList = (): React.ReactElement => (
    <Grid
      mt={6}
      gap={6}
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)"
      }}
    >
      {(projects ?? []).map((project) => (
        <ProjectBox key={project.name} {...project} />
      ))}
    </Grid>
  )

  return (
    <React.Fragment>
      <HeadingSystem my={6}>Projects</HeadingSystem>
      <Text fontSize={{ base: "1rem", md: "1.2rem" }}>
        Some projects that I really liked to develop :)
      </Text>
      {isLoading ? renderLoaderWhenLoading() : renderProjectsList()}
    </React.Fragment>
  )
}
