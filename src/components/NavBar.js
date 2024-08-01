import React from 'react'
import { FaApplePay, FaCreditCard, FaHome, FaLandmark, FaPiggyBank, FaUser, FaWallet } from 'react-icons/fa'
import { MdPayment, MdSettings } from 'react-icons/md'

const NavBar = () => {
  return (
    <nav className='hidden fixed top-0 left-0 bottom-0 z-2 bg-white lg:flex flex-col w-250 border-l-2 gap-2 items-start border-r border-gray-300 shadow-xl'>
      <h1 className='text-xl font-bold w-full flex gap-2 items-center p-5 border-b border-gray-300 shadow-sm'>
            <FaPiggyBank size={40}/>
            IO-BANK
      </h1>
      <ul className='w-full text-gray-600'>
        <li className='p-1'><button className='rounded-md flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><FaLandmark />Home</button></li>
        <li className='p-1'><button className='rounded-md flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><FaWallet />Accounts</button></li>
        <li className='p-1'><button className='rounded-md flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><FaApplePay /> Payments</button></li>
        <li className='p-1'><button className='rounded-md flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><FaCreditCard /> Card</button></li>
        <li className='p-1'><button className='rounded-md flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><MdPayment />Transactions</button></li>
        <li className='p-1'><button className='rounded-md flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><MdSettings />Settings</button></li>
        <li className='p-1'><button className='rounded-md flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><FaUser />Profile</button></li>
      </ul>
    </nav>
  )
}

export default NavBar
