import React,{useState, useEffect} from 'react'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

function index() {
    const [productCarrito, setProductCarrito] = useState(0)

    const data = useSelector(state =>{
            return state
      })
    
      useEffect(()=>{
        setProductCarrito(data.avocados.length)
        //console.log('nav store',data.avocados.length);
      },[data])
    return (
        <>
            <nav className='navMain'>

                <Link href={'/'} legacyBehavior>
                    <a className='linkNav'>Home 🏠</a>
                </Link>
                <Link href={'/about'} legacyBehavior>
                    <a className='linkNav'>About 🌎</a>
                </Link>

                <Link href={'/carrito'} legacyBehavior>
                    <div>
                        <span className='apanCarrito'>{`Carrito ${productCarrito}`} 🛒</span>
                    </div>
                </Link>

            </nav>

        </>
    )
}

export default index