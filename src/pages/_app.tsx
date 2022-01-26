import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import { globalStyles } from "#/styles/global"

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
