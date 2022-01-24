import { VisibilityEnum } from "#/screens/home/enums/visibility-enum"
import { StackBoxProps } from "#/screens/home/components/stack-box/types"

export type ProjectBoxProps = {
  name: string
  shortDescription: string
  description: string
  visibility: VisibilityEnum
  image: {
    url: string
  }
  stack: StackBoxProps
}
