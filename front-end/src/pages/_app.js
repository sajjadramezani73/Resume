import '../../public/assets/css/style.css'
import Head from 'next/head'
import Layout from '@/containers/layout/Layout'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>sajjad ramezani</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  )
}
