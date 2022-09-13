import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col h-screen motion-reduce:transition-none motion-reduce:hover:transform-none'>
      <Head>
        <title>LCO</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <Header />
      <Component {...pageProps} className='mb-auto' />
      <Footer />
    </div>
  );
}

export default MyApp;
