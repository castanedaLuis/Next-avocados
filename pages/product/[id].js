import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setAvocados,deleteAvocados } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Image from "next/image";
import Card from '@components/card';

export const getStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data } = await response.json()

  const paths = data.map(({ id }) => ({ params: { id } }))

  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  }
}

// This also gets called at build time
export const getStaticProps = async ({ params }) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const response = await fetch(
    `https://platzi-avo.vercel.app/api/avo/${params?.id}`
  )
  const product = await response.json()

  // Pass post data to the page via props
  return { props: { product } }
}

function ProductItem() {

  const data = useSelector(state => {
    //console.log(state);
    return state
  })
  const dispatch = useDispatch();
  //const router = useRouter();
  const [product, setProduct] = useState();
  const [catidadItemsCarrito, setItemCarrito] = useState(0);
  const [productCarrito, setProductCarrito] = useState([]);

  const handleOnCarrito = () => {
    dispatch(setAvocados(product));
  };
  // const handleOnDelete = (producto) => {
  //   dispatch(deleteAvocados(producto));
  // };

  const { query: { id } } = useRouter();

  const getProduct = async (id) => {
    try {
      const res = await fetch(`/api/avo/${id}`);
      const data = await res.json();
      //console.log(data);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct(id);
    setItemCarrito(data.avocados.length);
    setProductCarrito(data.avocados);
    console.log('productos agregados:', productCarrito);
  }, [data, id]);


  return (

    <div className="d-flex g-5 row m-0">
      <h1 className="text-center">Detalle del Avocado:</h1>
      {
        product !== undefined &&
        <>
          <div className="col-xl-4 col-sm-12 p-0 d-flex justify-content-center">
            <Card {...product} />
          </div>
          <div className="col-xl-4  col-sm-12 p-0">
            <h3 className="TitledetailAvocado">Descriptión</h3>
            <p className="detailAvocado">{product?.attributes.description}</p>
            <div className="contenedorBotones">
              <button className={`btnCentral ${''}`} onClick={handleOnCarrito}>Agregar al carrito</button>
            </div>
          </div>
          {
            productCarrito.length > 0 &&
            <>
              <div className="col-xl-4 col-sm-12 carrito">
                <h3 className="titleCarrito">{`Tu carrito ${catidadItemsCarrito ? `tiene ${catidadItemsCarrito} avocados` : 'esta vacío'}`}</h3>
                {productCarrito.map((item, index) => {
                  return (
                    <div className="itemCrrito" key={item.name+index}>
                      <h5 className="m-0 p-0">{item.name}</h5>
                      <p className="m-0 p-0">${item.price}</p>
                      <button className="btnEliminar" >➖</button>
                    </div>
                  )
                })
                }
              </div>
            </>
          }
        </>
      }
    </div>
  )
}

export default ProductItem
