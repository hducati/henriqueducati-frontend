import { SocialMediaType } from "#/graphql/types/social-media"
import { TechnologyExperience } from "#/graphql/types/technology"

export type PersonType = {
  name: string
  about: string
  country: string
  state: string
  city: string
  role: string
  image: {
    url: string
  }
  social_medias: SocialMediaType[]
  technology_experiences: TechnologyExperience[]
}
