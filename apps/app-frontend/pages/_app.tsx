import { AppProps } from 'next/app';
import Head from 'next/head';
import { DesignSystemThemeProvider } from '@gohubly/design-system'
import { AuthenticationContextProvider } from '../context/AuthenticationContext';

import GlobalStyle from '../components/GlobalStyle'
import RouteTransitionBar from '../components/RouteTransitionBar';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hubly</title>
      </Head>
      <div className="app">
        <DesignSystemThemeProvider>
          <GlobalStyle />
          <RouteTransitionBar />
          <AuthenticationContextProvider>
            <main>
              <Component {...pageProps} />
            </main>
          </AuthenticationContextProvider>
        </DesignSystemThemeProvider>
      </div>
    </>
  );
}

export default App;
