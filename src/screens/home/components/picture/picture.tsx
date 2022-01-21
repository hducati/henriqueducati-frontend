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
        src="https://bit.ly/dan-abramov"
        alt="Henrique Ducati"
      />
    </Box>
  )
}
