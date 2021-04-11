import type { AppProps } from 'next/app'
import Head from 'next/Head'

import '@/styles/index.sass'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Note app</title>
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Web site created using create-react-app'
        />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
