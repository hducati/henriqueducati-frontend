import { extendTheme } from "@chakra-ui/react"
import { colors } from "#/styles/theme/colors"

export const customTheme = extendTheme({
  semanticTokens: {
    colors: colors
  }
})
