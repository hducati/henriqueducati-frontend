import { Img } from "@chakra-ui/react"

export const Picture = (): React.ReactElement => {
  return (
    <Img
      borderRadius="full"
      boxSize={{ base: "80px", md: "140px" }}
      alignItems="center"
      loading="lazy"
      src="https://bit.ly/dan-abramov"
      alt="Henrique Ducati"
    />
  )
}
