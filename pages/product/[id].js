import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  //const router = useRouter();
  const [product, setProduct] = useState();

  const {
    query: { id },
  } = useRouter();

  const getProduct = async (id) => {
    try {
      const res = await fetch(`/api/avo/${id}`);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    id && getProduct(id);
  }, [id]);

  return (
    <div className="d-flex g-5 row">
      <h1 className="text-center">Detalle del Avocate:</h1>
      <div className="col-6 p-0 d-flex justify-content-center">
        <Card {...product} />
      </div>
      <div className="col-6 p-0">
        <h3>Descriptión</h3>
        <p>{product?.attributes.description}</p>
        <div>
          <button>➖</button>
          <button>Agregar al carrito</button>
          <button>➕</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem