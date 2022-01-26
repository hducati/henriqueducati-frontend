import { VisibilityEnum } from "#/screens/home/enums/visibility-enum"
import { StackType } from "#/graphql/types/stack"

export type ProjectType = {
  name: string
  shortDescription: string
  description: string
  visibility: VisibilityEnum
  image: {
    url: string
  }
  stack: StackType
}
