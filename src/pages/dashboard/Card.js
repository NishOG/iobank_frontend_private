import React from 'react'
import { FaExchangeAlt, FaPiggyBank, FaPlus } from 'react-icons/fa'
import Transaction from './Transaction'
import creditCard from '../../credit_card.png'
import { MdDelete } from 'react-icons/md'

const Card = () => {
  return (
    <>
      
      <section id='account-section' className='w-full flex flex-col border border-gray-200 text-xl bg-transparent rounded-xl mt-12 p-6 gap-6 shadow-xl overflow-x-auto items-center'>
        <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center'>
          <div className='text-sm sm:text-xl p-2 bg-gray-200 bg-gray-200 rounded-xl flex gap-2 relative'>
            <img src={creditCard} />
            <div className='absolute mt-3 top-12 right-7 p-2 text-sm text-golden flex'>
                <div className='w-5 h-5 rounded-xl bg-red-500'></div>
                <div className='w-5 h-5 rounded-xl bg-golden ml-[-8px] opacity-70'></div>
            </div>
            <p className='absolute bottom-5 right-7 p-2 text-sm text-golden'>Isaiah Osarobo</p>
            <p className='absolute bottom-5 left-7 p-2 text-sm text-golden'>$25.<span className='text-[9px]'>50</span></p>
          </div>
        </div>
        
        <div className='text-sm sm:text-xl p-2 flex gap-2'>
            <div className='rounded-3xl bg-gray-300 hover:bg-white flex justify-center items-center'>  
                <button className='p-3 rounded-3xl flex flex-col justify-center text-sm'><FaPlus /></button>
            </div>
            <div className='rounded-3xl bg-gray-300 hover:bg-white flex justify-center items-center'>  
                <button className='p-3 rounded-3xl flex flex-col justify-center text-sm'><FaExchangeAlt /></button>
            </div>
            <div className='rounded-3xl bg-gray-300 hover:bg-white flex justify-center items-center'>  
                <button className='p-3 rounded-3xl flex flex-col justify-center text-sm text-red-500'><MdDelete /></button>
            </div>
        </div>
      </section>


      <section id='account-details-section' className='w-full flex flex-col border border-gray-200 text-sm bg-white rounded-xl mt-12 p-6 shadow-xl'>
        <p className='font-bold text-gray-600 text-sm'>Card Details</p>
        <div className='flex flex-col sm:flex-row  sm:flex-wrap'>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Card Holder's Name</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>Isaiah Osarobo</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Card Number</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>8888888888888888</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Issuer</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>IO BANK</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Card Type</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>VISA</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Billing Address</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>8, Dexter Avenue P.O Box 10035</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Expiration Date</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>12/25</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>CVV</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>125</p>
              </div>
          </div>
        </div>
      </section>
      <Transaction />
    </>
  )
}

export default Card
