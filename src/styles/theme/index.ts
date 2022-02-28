import { extendTheme } from "@chakra-ui/react"
import { colors } from "#/styles/theme/colors"
import { configColorMode } from "#/styles/theme/color-mode"

export const customTheme = extendTheme({
  configColorMode,
  semanticTokens: {
    colors: colors
  }
})
