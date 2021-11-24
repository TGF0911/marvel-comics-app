import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { CardProvider } from '../context/CardContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CardProvider>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </CardProvider>
  );
}

export default MyApp;
