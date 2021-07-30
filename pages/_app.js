import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div style={{maxWidth:"600px", margin:"auto", padding:"20px"}}><Component {...pageProps} /></div>
}

export default MyApp
