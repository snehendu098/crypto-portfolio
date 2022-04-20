import '../styles/globals.css'
import Navbar from '../components/Layout/Sidebar'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import root from '../context'
import Layout from '../components/Layout/Layout'
import { MoralisProvider } from 'react-moralis'

const store = createStore(root)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MoralisProvider
        serverUrl={`${process.env.NEXT_PUBLIC_MORALIS_URL}`}
        appId={`${process.env.NEXT_PUBLIC_MORALIS_ID}`}
      >
        <Layout>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap"
              rel="stylesheet"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="anonymous"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Navbar />
          <div className="relative ml-20 w-full">
            <Component {...pageProps} />
          </div>
        </Layout>
      </MoralisProvider>
    </Provider>
  )
}

export default MyApp
