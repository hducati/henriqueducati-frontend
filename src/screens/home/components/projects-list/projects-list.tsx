import { Grid } from "@chakra-ui/react"
import { ProjectBox } from "../project-box/project-box"
import { ProjectsListProps } from "#/screens/home/components/projects-list/types"

export const ProjectsList = ({
  projects
}: ProjectsListProps): React.ReactElement => {
  return (
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
  )
}
