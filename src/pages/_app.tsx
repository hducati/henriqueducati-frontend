import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import { QueryClientProvider, QueryClient, Hydrate } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { useState } from "react"

import { globalStyles } from "#/styles/global"
import { Layout } from "#/common/components/layout/layout"

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ChakraProvider resetCSS>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
