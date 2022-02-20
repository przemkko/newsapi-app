import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import { theme } from '../src/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function NewsApiApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NewsAPI App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default NewsApiApp;
