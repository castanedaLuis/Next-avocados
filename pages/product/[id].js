import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <>
      <h1>Producto:</h1>
      <div>{product?.name}</div>
    </>
  )
}

export default ProductItem