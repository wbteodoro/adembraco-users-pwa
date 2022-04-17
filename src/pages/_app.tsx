import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import MainLayout from '@/layouts/main'
import { theme, GlobalStyle } from '@/styles'

type AppPropsWithError = AppProps & {
  err?: Error
}

function App({ Component, pageProps, err }: AppPropsWithError) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} err={err} />
        </MainLayout>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
