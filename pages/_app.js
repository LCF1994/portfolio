import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/theme/GlobalStyle'
import { theme } from '../src/theme'

import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio - Lucas Campos Ferreira</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
