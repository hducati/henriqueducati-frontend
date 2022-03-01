import { Button, Flex, useColorMode } from "@chakra-ui/react"
import { Image } from "#/common/components/image/image"

const moonPath = "/img/moon.svg"
const sunPath = "/img/sun.svg"

export const ColorToggle = (): React.ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode()

  const isLightMode = (): boolean => {
    return colorMode === "light"
  }

  const renderImage = (): React.ReactElement => {
    return (
      <Image
        src={isLightMode() ? moonPath : sunPath}
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
