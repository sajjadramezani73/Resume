import '../../public/assets/css/style.css'
import Head from 'next/head'
import Layout from '@/containers/layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>sajjad ramezani</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
