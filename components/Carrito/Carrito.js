import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Carrito() {
    const [productCarrito, setProductCarrito] = useState([])

    const data = useSelector(state =>{
            return state
      })
      useEffect(()=>{
        setProductCarrito(data.avocados)
        //console.log('carrito store',data.avocados);
      },[data])

  return (
    <>
        {
            productCarrito.length > 0 &&
            <>
                <div>
                    <h1>{productCarrito.name}</h1>
                    <p>{productCarrito.price}</p>
                    <button>Eliminar</button>
                </div>
            </>
        }
    </>
  )
}

export default Carrito