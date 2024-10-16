import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className='bg-black py-6'>
      <div className='container mx-auto flex justify-between'>
        <span className='text-3xl text-white tracking-tight'>
          <Link to="/">ManthanHotel.com</Link>
        </span>
        <span className='flex space-x-2'>
          <Link to="/signin" className='flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100'>Signin</Link>
        </span>
      </div>
    </div>
  )
}

export default Navbar
