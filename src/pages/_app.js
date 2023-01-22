import '@/styles/tailwind.css'
import '@/styles/global.css'
import Script from 'next/script' // FontAwesome
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Matteo De Pauw | Web developer</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Script src='/smoothScroll.js'></Script>
      <Script src='https://kit.fontawesome.com/2ad3ea3c29.js' crossOrigin='anonymous'></Script>
      <Component {...pageProps} />
    </>
  )
}
