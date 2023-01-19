import React from 'react'
import Link from 'next/link';

function index() {
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
                        <span className='apanCarrito'>Carrito (2) 🛒</span>
                    </div>
                </Link>

            </nav>

        </>
    )
}

export default index