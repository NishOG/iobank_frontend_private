import React from 'react'
import { FaSmile, FaBars, FaExchangeAlt } from 'react-icons/fa'
import { MdNotifications, MdSettings } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const navigatePage = (path) => {
    navigate(path)
  }
  return (
    <header className='fixed top-0 left-0 right-0 bg-white z-10 flex justify-between items-center p-3 lg:ml-250 pr-9 border-b-2'>
        <h1 className='flex items-center text-gray-600 text-lg font-bold gap-1 p-1'>Welcome Isaiah <FaSmile  size={20} color='#ffbf56'/> </h1>
        <div className='flex items-center'>
            <button className='lg:hidden'><FaBars size={25} /></button>
            <div className='hidden lg:flex gap-5'>
              <button onClick={() => navigatePage('/dashboard/convert')} className='text-blue-500 hover:text-blue-700 flex items-center text-xl transition duration-500 ease-in-out gap-1'>
                <span>
                  <FaExchangeAlt />
                </span>
                <span className='text-sm'>Convert</span>
              </button>
              <button onClick={() => navigatePage('/dashboard/settings')} className='text-blue-500 hover:text-blue-700 flex items-center text-xl transition duration-500 ease-in-out p-2 border rounded-full'>
                <MdSettings size={30}/>
              </button>
              <button className='text-blue-500 hover:text-blue-700 flex items-center text-xl transition duration-500 ease-in-out p-3 border rounded-full bg-gray-100'>
                IO
              </button>
              <button>
                <MdNotifications size={30} />
              </button>
            </div>
        </div>
    </header>
  )
}

export default Header
