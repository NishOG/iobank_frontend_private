import React from 'react'

const AccountDetails = ({ currentAccount }) => {
  return (
    <>
      
      <p className='font-bold text-gray-600 text-sm'>Your {currentAccount.currencyType} Account Informations</p>
        <div className='flex flex-col sm:flex-row  sm:flex-wrap'>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Account Holder's Name</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>{currentAccount.accountName}</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Account Number</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>{currentAccount.accountNumber}</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Bank Name</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>IO BANK</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Account Type</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>Savings</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Bank Address</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>8, Dexter Avenue P.O Box 10035</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Currency Type</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>{currentAccount.code}</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 pt-6 w-1/3'>
              <p className='text-sm font-bold'>Account Tag</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>{currentAccount.accountTag}</p>
              </div>
          </div>
        </div>
    </>
  )
}

export default AccountDetails
