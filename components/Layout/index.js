import React from 'react';
//Path alias
import NavBar from '../NavBar/index'
import Footer from '../Footer/index'

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