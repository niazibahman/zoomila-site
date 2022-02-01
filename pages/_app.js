import '../styles/style.css'
import Layout from "../src/components/layout/Layout";
import '../styles/nav.css'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
