import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>LCO</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
