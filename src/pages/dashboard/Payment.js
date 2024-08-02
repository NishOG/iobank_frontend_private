import React from 'react'
import { FaCreditCard, FaFileInvoiceDollar, FaMoneyBill } from 'react-icons/fa'

const Payment = () => {
  return (
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
  )
}

export default Payment
