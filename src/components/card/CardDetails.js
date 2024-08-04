import React from 'react'
import { card } from '../../features/card/cardSlice'
import { useSelector } from 'react-redux'

const CardDetails = () => {
    const userCard = useSelector(card)
  return (
    <>
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
    </>
  )
}

export default CardDetails
