import Layout from '@components/Layout/index';
import { pokemonsReducer } from '../reducers/avocados';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import '../styleGlobales.css';


export function reportWebVitals(metric) {
  console.log(metric)
  // analytics - calibre
  // serverAnulicts.log(metric)
}

const MyApp = ({ Component, pageProps }) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  const store = createStore(pokemonsReducer, ['Use Redux']);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp