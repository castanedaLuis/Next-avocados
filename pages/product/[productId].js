import React from 'react'
import { useRouter } from 'next/router';
import NavBar from '../../components/navBar'

function ProductItem() {
    const router = useRouter();
  return (
    <>
      <NavBar />
      <div>{`Producto dinámico : ${router.query.productId}`}</div>
    </>
  )
}

export default ProductItem