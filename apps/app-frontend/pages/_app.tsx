import { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthenticationContextProvider } from '../context/AuthenticationContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hubly</title>
      </Head>
      <div className="app">
        {/* TODO: Add theme provider */}
        <AuthenticationContextProvider>
          <header className="flex">
            <h1>Welcome to app-frontend!</h1>
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </AuthenticationContextProvider>
      </div>
    </>
  );
}

export default App;
