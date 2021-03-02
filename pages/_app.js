import { ThemeProvider } from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedinIn, faGitSquare } from '@fortawesome/free-brands-svg-icons';

import Head from 'next/head';
import { theme } from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

library.add(fab, faLinkedinIn, faGitSquare);

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
  );
}
