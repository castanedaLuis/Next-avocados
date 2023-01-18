import React from 'react'
import Link from 'next/link'
import { Footer, Ul, Arcon } from './styles'

function index() {
  return (
    <>
        <Footer>
            <div>
                <Ul>
                    <li>Github</li>
                    <Link href={'https://github.com/castanedaLuis'} legacyBehavior>
                        <Arcon>Repositorios</Arcon>
                    </Link>
                </Ul>
            </div>
        </Footer>

    </>
  )
}

export default index