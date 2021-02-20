import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/theme/GlobalStyle'
import { theme } from '../src/theme'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedinIn, faGitSquare} from '@fortawesome/free-brands-svg-icons'

library.add(fab, faLinkedinIn, faGitSquare)

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
