import React from 'react'
import { FaHamburger, FaSmile, FaBars } from 'react-icons/fa'
import { MdFace } from 'react-icons/md'

const Header = () => {
  return (
    <header className='flex justify-between p-5 border-b-2 absolute left-0 top-0 right-0'>
        <h1 className='flex items-center text-gray-600 text-lg font-bold gap-1'>Welcome Isaiah <FaSmile  size={20}/> </h1>
        <div>
            <button className='lg:hidden'><FaBars size={25} /></button>
        </div>
    </header>
  )
}

export default Header
