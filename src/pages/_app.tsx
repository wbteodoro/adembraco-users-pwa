import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '@/styles'

function App({ Component, pageProps, err }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} err={err} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
