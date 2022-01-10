import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '#/styles/theme'
import { globalStyles } from '#/styles/global'
import { Global } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={globalStyles}/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
