import Layout from '@components/Layout/index';
import { avocadosReducer } from '../reducers/avocados';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import '../styleGlobales.css';


export function reportWebVitals(metric) {
  //console.log(metric)
  // analytics - calibre
  // serverAnulicts.log(metric)
}

const MyApp = ({ Component, pageProps }) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  const initialState = ({
    favorites:[],
    avocados: [],
  });
  const store = createStore(avocadosReducer, initialState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp