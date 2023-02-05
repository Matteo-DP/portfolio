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
        <meta name="description" content="I'm a web developer building creative projects. With intermediate experience in both front- and backend development,
          I'm currently a freelancing full stack developer building projects for fun that make my daily life a bit easier." />
        <meta name="keywords" content="Matteo De Pauw, Web development, Web developer, Developer, React, NextJS, Next, Matteo, De Pauw" />
        <meta name="author" content="Matteo De Pauw" />
        <meta name="google-site-verification" content="yHhv87pWy9ZfZdOWB3viM7uxEUleFGUyHMMEU4iypqo" />
      </Head>
      <Script src='/smoothScroll.js'></Script>
      <Script src='https://kit.fontawesome.com/2ad3ea3c29.js' crossOrigin='anonymous'></Script>
      <Component {...pageProps} />
    </>
  )
}
