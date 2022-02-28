import { ImageProps as NextImageProps } from "next/image"

export type ImageProps = {
  src: string
  alt: string
} & NextImageProps
