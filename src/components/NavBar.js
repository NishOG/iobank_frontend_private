import React from 'react'
import { FaApplePay, FaHome, FaPiggyBank } from 'react-icons/fa'
import { MdAccountBox, MdCreditCard, MdPayment } from 'react-icons/md'

const NavBar = () => {
  return (
    <nav className='flex flex-col w-250 border-l-2 gap-2 items-start border-r border-gray-300 shadow-xl'>
      <h1 className='text-xl font-bold w-full flex gap-2 items-center p-5 border-b border-gray-300 shadow-sm'>
            <FaPiggyBank size={40}/>
            IO-BANK
      </h1>
      <ul className='w-full'>
        <li className='p-1'><button className='rounded-md text-gray-600 flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><FaHome />Home</button></li>
        <li className='p-1'><button className='rounded-md text-gray-600 flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><MdAccountBox />Accounts</button></li>
        <li className='p-1'><button className='rounded-md text-gray-600 flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><FaApplePay /> Payments</button></li>
        <li className='p-1'><button className='rounded-md text-gray-600 flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><MdCreditCard /> Card</button></li>
        <li className='p-1'><button className='rounded-md text-gray-600 flex gap-2 items-center p-4 pt-2 pb-2 hover:bg-blue-400 hover:text-white w-full'><MdPayment />Transactions</button></li>
      </ul>
    </nav>
  )
}

export default NavBar
