import React from 'react';
//Path alias
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'

function index({children}) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default index