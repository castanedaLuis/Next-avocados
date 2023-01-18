import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function index({name, image, price, id}) {
  return (
    <>
        <div className='containerCard'>
            <Image src={image} width={333} height={333}/>
            <h1>{name}</h1>
            <h4>Precio:${price}</h4>
        </div>
    </>
  )
}

export default index