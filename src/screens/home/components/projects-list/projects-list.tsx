import { Grid } from "@chakra-ui/react"
import { ProjectBox } from "../project-box/project-box"
import { ProjectsListProps } from "#/screens/home/components/projects-list/types"
import { HeadingSystem } from "#/common/components/heading/heading-system"
import React from "react"

export const ProjectsList = ({
  projects
}: ProjectsListProps): React.ReactElement => (
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
      {projects.map((project) => (
        <ProjectBox key={project.name} {...project} />
      ))}
    </Grid>
  </React.Fragment>
)
