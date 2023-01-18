import React from 'react';
//Path alias
import NavBar from '@components/Navbar'
import Footer from '@components/Footer'

function index({children}) {
  return (
    <>
        <NavBar />
        {children}
        <Footer />
    </>
  )
}

export default index