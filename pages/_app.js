import Layout from '../components/Layout/index';


//import CartProvider from '@store/Cart'

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