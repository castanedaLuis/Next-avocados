import React from 'react';
//Path alias
import NavBar from '@components/Navbar'

function index({children}) {
  return (
    <>
        <NavBar />
        {children}
        <footer>This my footer</footer>
    </>
  )
}

export default index