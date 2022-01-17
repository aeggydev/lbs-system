import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="pt-16">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp;
