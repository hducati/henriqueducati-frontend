import { PersonType } from "#/graphql/types/person"
import { ProjectBoxProps } from "#/screens/home/components/project-box/types"

export type HomeProps = {
  person: PersonType
  projects: ProjectBoxProps[]
}
