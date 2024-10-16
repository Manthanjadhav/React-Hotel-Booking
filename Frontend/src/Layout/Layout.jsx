import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Layout
