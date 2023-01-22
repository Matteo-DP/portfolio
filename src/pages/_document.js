import { Html, Head, Main, NextScript } from 'next/document'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className='bg-zinc-900 max-w-6xl mx-auto px-4 overflow-x-hidden relative'
      >
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
