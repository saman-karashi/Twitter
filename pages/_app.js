import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title>Twitter</title>
    <meta title="Twitter clone" description="Twitter clone is developed by using next js" />
    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
