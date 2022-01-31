import { SocialMediaType } from "#/graphql/types/social-media"

export type BaseProps = {
  children: React.ReactNode
  socialMedias: SocialMediaType[]
}
