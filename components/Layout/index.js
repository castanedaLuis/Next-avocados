import React from 'react';
import NavBar from '../navBar/index'

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