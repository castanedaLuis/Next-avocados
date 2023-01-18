import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from '../../components/navBar'

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
      <NavBar />
      <h1>Producto:</h1>
      <div>{product?.name}</div>
    </>
  )
}

export default ProductItem