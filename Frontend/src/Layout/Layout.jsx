import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Hero />
      <div className='container mx-auto py-10 flex-1'>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout
