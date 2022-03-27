import { Box, Img } from "@chakra-ui/react"
import { ImageProps } from "#/screens/home/components/image/types"

export const Image = ({ url, alt }: ImageProps): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="center">
      <Img
        borderRadius="full"
        boxSize="140px"
        alignSelf="center"
        loading="lazy"
        src={`${url}`}
        alt={alt}
      />
    </Box>
  )
}
