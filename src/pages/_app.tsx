import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import Head from "next/head"

import { globalStyles } from "#/styles/global"

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head key="application-head">
        <title>My website</title>
        <meta
          name="description"
          content="My personal website built with Next.Js, GraphQL, Chakra UI"
        />
      </Head>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
