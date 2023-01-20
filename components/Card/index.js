import React from 'react'
import Image from 'next/image'

function index({name, image, price}) {
  return (
    <>
        <div className='containerCard'>
            <Image src={image?image:''} width={333} height={333} alt={'ALT'+name} priority={true}/>
            <h1>{name}</h1>
            <h4>Precio:${price}</h4>
        </div>
    </>
  )
}

export default index