import React from "react"
import { Grid } from "@chakra-ui/react"

import { HeadingSystem } from "#/common/components/heading/heading-system"
import { useProjects } from "#/hooks/use-projects"
import { ProjectBox } from "#/screens/home/components/project-box/project-box"

export const ProjectsList = (): React.ReactElement => {
  const { data: projects } = useProjects()

  return (
    <React.Fragment>
      <HeadingSystem my={6}>My Projects</HeadingSystem>
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
    </React.Fragment>
  )
}
