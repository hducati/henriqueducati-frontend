import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '#/styles/theme'
import { globalStyles } from '#/styles/global'
import { Global } from '@emotion/react'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head key="application-head">
        <title>My website</title>
        <meta name="description" content="My personal website built with Next.Js, GraphQL, Chakra UI" />
      </Head>
      <Global styles={globalStyles}/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
