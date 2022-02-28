import { chakra } from "@chakra-ui/react"
import NextImage from "next/image"

import { ImageProps } from "#/common/components/image/types"

const MergeImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader "
    ].includes(prop)
})

export const Image = ({
  src,
  alt,
  ...props
}: ImageProps): React.ReactElement => {
  return <MergeImage src={src} alt={alt} {...props} />
}
