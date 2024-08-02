import React from 'react'
import { FaCreditCard, FaFileInvoiceDollar, FaMoneyBill } from 'react-icons/fa'
import Transaction from './Transaction'

const Home = () => {
  return (
    <>
      <section id='account-section' className='w-full flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl overflow-x-auto'>
        <p className='font-bold text-gray-600'>Accounts & Balances</p>
        <div className='flex flex-col sm:flex-row gap-6 sm:flex-wrap'>

          <div className={`bg-gray-100 flex flex-1 sm:min-w-[200px] sm:max-w-[300px] flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex transform transition duration-500 ease-in-out hover:translate-x-2`}>
              <img className='w-full h-full object-cover' src='https://flagcdn.com/w320/us.png'/>
              <p className='text-sm'>United State Dollars</p>
              <div className='flex flex-1 w-full justify-between'>
                <p>$1000</p>
                <p>USD</p>
              </div>
          </div>
      
          <div className={`bg-gray-100 flex flex-1 sm:min-w-[200px] sm:max-w-[300px] flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex transform transition duration-500 ease-in-out hover:translate-x-2`}>
              <img className='w-full h-full object-cover' src='https://flagcdn.com/w320/ng.png'/>
              <p className='text-sm'>Nigerian Naira</p>
              <div className='flex flex-1 w-full justify-between'>
                <p>₦2000</p>
                <p>NGN</p>
              </div>
          </div>
              
          <div className={`bg-gray-100 flex flex-1 sm:min-w-[200px] sm:max-w-[300px] flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex transform transition duration-500 ease-in-out hover:translate-x-2`}>
              <img className='w-full h-full object-cover' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png'/>
              <p className='text-sm'>European Euro</p>
              <div className='flex flex-1 w-full justify-between'>
                <p>€3000</p>
                <p>EURO</p>
              </div>
          </div>

          <div className={`bg-gray-100 flex flex-1 sm:min-w-[200px] sm:max-w-[300px] flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex transform transition duration-500 ease-in-out hover:translate-x-2`}>
              <img className='w-full h-full object-cover' src='https://flagcdn.com/w320/gb.png'/>
              <p className='text-sm'>British Pounds</p>
              <div className='flex flex-1 w-full justify-between'>
                <p>£3000</p>
                <p>POUNDS</p>
              </div>
          </div>
        </div>
      </section>


      <section id='actions-section' className='w-full flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl'>
        <p className='font-bold text-gray-600'>Quick Actions</p>
        <div className='flex flex-col sm:flex-row gap-6'>
          <div className='bg-gray-100 flex-1 flex flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex'>
              <FaMoneyBill color='blue' size={50}/>
              <p>Bills Payment</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-lg'>
                <p>Pay all your bills, subscriptions, utility bills and more</p>
              </div>
          </div>
          <div className='bg-gray-100 flex-1 flex flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex'>
              <FaFileInvoiceDollar color='blue' size={50}/>
              <p>Invoice</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-lg'>
                <p>Pay all your bills, subscriptions, utility bills and more</p>
              </div>
          </div>
          <div className='bg-gray-100 flex-1 flex flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex'>
              <FaCreditCard color='blue' size={50}/>
              <p>Cards</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-lg'>
                <p>Make Payments across all platforms using your card</p>
              </div>
          </div>
        </div>
      </section>
      <Transaction />
    </>
  )
}

export default Home
