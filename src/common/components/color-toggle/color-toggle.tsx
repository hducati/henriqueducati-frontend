import { Button, Flex, useColorMode } from "@chakra-ui/react"
import { Image } from "#/common/components/image/image"

export const ColorToggle = (): React.ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()

  const renderImage = (): React.ReactElement => {
    return (
      <Image
        src={colorMode === "light" ? "/img/moon.svg" : "/img/sun.svg"}
        alt="Change color mode"
        width="40"
        height="40"
      />
    )
  }

  return (
    <Flex align="center" justify="center">
      <Button variant="ghost" onClick={toggleColorMode}>
        {renderImage()}
      </Button>
    </Flex>
  )
}
