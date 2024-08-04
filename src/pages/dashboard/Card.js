import React from 'react'
import { FaPlus, FaExchangeAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import Transaction from './Transaction'
const Card = () => {
  const userCard = {
    img: 'https://picsum.photos/id/237/200/300',
    cardHolder: 'John Doe',
    cardNumber: '1234 5678 9012 3456',
    expirationDate: '02/24',
    cvv: '123',
    balance: 1000,
    currency: 'EUR',
  }
  return (
    <>
      
      <section id='account-section' className='w-full flex flex-col border border-gray-200 text-xl bg-transparent rounded-xl mt-12 p-6 gap-2 shadow-xl overflow-x-auto items-center'>
      <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center'>
          <div className='text-sm sm:text-xl p-2 bg-gray-200 bg-gray-200 rounded-xl flex gap-2 relative'>
            <img src={userCard.img} className='sm:w-400' />
            <div className='absolute mt-3 sm:mt-12 top-12 right-7 p-2 text-sm text-golden flex'>
                <div className='w-5 h-5 rounded-xl sm:w-8 sm:h-8 sm:rounded-2xl bg-red-500'></div>
                <div className='w-5 h-5 rounded-xl sm:w-8 sm:h-8 sm:rounded-2xl bg-golden ml-[-8px] sm:ml-[-12px] opacity-70'></div>
            </div>
            <p className='absolute bottom-5 sm:bottom-8 right-7 sm:right-7 p-2 text-sm text-golden'>{userCard.cardHolder}</p>
            <p className='absolute bottom-5 sm:bottom-8 left-7 sm:left-12 p-2 text-sm text-golden'>{userCard.balance}<span className='text-[9px]'>50</span></p>
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
                <p>{userCard.cardHolder}</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Card Number</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>{userCard.cardNumber}</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Issuer</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>{userCard.bankName}</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Card Type</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>{userCard.cardType}</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Billing Address</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>{userCard.billingAddress}</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Expiration Date</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>{userCard.expirationDate}</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>CVV</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>{userCard.cvv}</p>
              </div>
          </div>
        </div>
      </section>
      <Transaction />
    </>
  )
}

export default Card
