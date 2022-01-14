import { Box, Img } from "@chakra-ui/react"

export const Picture = (): React.ReactElement => {
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
