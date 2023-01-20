import React from 'react'
import Link from 'next/link'
import { Footer, Ul, Arcon } from './styles'

function index() {
  return (
    <>
        <footer className='footer'>
            <div>
                <ul className='ulFooter'>
                    <li>Github</li>
                    <Link href={'https://github.com/castanedaLuis'} legacyBehavior>
                        <a>Repositorios</a>
                    </Link>
                </ul>
            </div>
        </footer>

    </>
  )
}

export default index