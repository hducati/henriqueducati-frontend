import { SocialMediaCategoryType } from "#/graphql/types/social-media-category"

export type SocialMediaType = {
  link: string
  social_media_category: SocialMediaCategoryType
}
