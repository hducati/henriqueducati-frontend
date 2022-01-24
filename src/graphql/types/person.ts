import { SocialMediaType } from "#/graphql/types/social-media"

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
}
