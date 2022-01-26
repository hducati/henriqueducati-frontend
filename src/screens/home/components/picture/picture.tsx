import { Box, Img } from "@chakra-ui/react"
import { PictureProps } from "#/screens/home/components/picture/types"

export const Picture = ({ url }: PictureProps): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="center">
      <Img
        borderRadius="full"
        boxSize="140px"
        alignSelf="center"
        loading="lazy"
        src={`${process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_URL}${url}`}
        alt="Henrique Ducati"
      />
    </Box>
  )
}
