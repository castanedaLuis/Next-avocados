import Layout from '@components/Layout/index';
import '../styleGlobales.css'


export function reportWebVitals(metric) {
  console.log(metric)
  // analytics - calibre
  // serverAnulicts.log(metric)
}

const MyApp = ({ Component, pageProps }) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp