import React from 'react'
import Link from 'next/link';

function index() {
  return (
    <>
        <nav>
            <menu>
                <Link href={'/'} legacyBehavior>
                    <a>Home</a>
                </Link>
                <Link href={'/about'} legacyBehavior>
                    <a>About</a>
                </Link>
            </menu>
        </nav>

    </>
  )
}

export default index