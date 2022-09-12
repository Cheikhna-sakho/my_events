import React from 'react'
import Footer from './Footer';
import Header from './Header';

const Layout = ({page}) => {
  return (
    <div className=''>
        <Header/>
        {page}
        <Footer/>
    </div>
  )
}

export default Layout;