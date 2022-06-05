import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Container({children}) {
  return (
    <>
        <Navbar />
        { children }
        <Footer/>
    </>
  )
}
