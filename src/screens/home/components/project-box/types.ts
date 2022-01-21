import { VisibilityEnum } from "#/screens/home/enums/visibility-enum"

export type ProjectBoxProps = {
  name: string
  shortDescription: string
  description: string
  visibility: VisibilityEnum
  image: {
    url: string
  }
}
