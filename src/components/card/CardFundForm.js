import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { accounts } from '../../features/accounts/accountSlice'

const CardFundForm = ({ setShowFundCardForm }) => {
    const accountList = useSelector(accounts)
    const [account, setAccount] = useState(accountList.filter(acc => acc.currencyType === 'USD')[0])
  return (
    <section className='flex flex-col p-2 gap-8 sm:w-3/5 xl:w-2/5 sm:p-6 sm:h-2/5 bg-white border rounded-xl absolute right-5  left-5 sm:left-auto  mt-12 z-10'>
      <form className='p-2 w-full flex flex-col justify-between h-full relative gap-2'>
        <button className='absolute top-1 right-2' type='button' onClick={() => setShowFundCardForm(false)}><FaTimes /></button>
        <div className='flex flex-col gap-4'>
            <h1 className='text-lg font-bold'>Fund Your Card</h1>
        </div>
        <div className='flex flex-col gap-2'>
        <label htmlFor='from' className='w-full flex justify-between'><span>Select Account </span><span className='text-sm mt-1'>Balance {account.symbol}{account.balance}</span></label>
            
            <select id='currency' value={account.currencyType} className='bg-gray-200 h-full p-2 lg:p-3 rounded-md'>
              <option value={account.currencyType}>{account.currencyType}</option>
            </select>
        </div>
        <div className='flex flex-col gap-1'>
            <label>Amount</label>
            <input type="number" className='border border-blue-500 p-3 rounded-md focus:border-yellow-400' placeholder='Enter amount' />
        </div>
        <button type="button" className='bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>Fund Card</button>
      </form>
    </section>
  )
}

export default CardFundForm
