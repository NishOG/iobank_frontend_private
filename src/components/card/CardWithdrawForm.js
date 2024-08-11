import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { accounts } from '../../features/accounts/accountSlice'
import { useSelector } from 'react-redux'
import { card } from '../../features/card/cardSlice'

const CardWithdrawForm = ({ setShowWithdrawForm }) => {
    const accountList = useSelector(accounts)
    const userCard = useSelector(card)
    const [account, setAccount] = useState(accountList.filter(acc => acc.code === 'USD')[0])
  return (
    <section className='flex flex-col p-2 gap-8 sm:w-3/5 xl:w-2/5 sm:p-6 sm:h-2/5 bg-white border rounded-xl absolute right-5  left-5 sm:left-auto  mt-12 z-10'>
      <form className='p-2 w-full flex flex-col justify-between h-full relative gap-2'>
        <button className='absolute top-1 right-2' type='button' onClick={() => setShowWithdrawForm(false)}><FaTimes /></button>
        <div className='flex flex-col gap-4'>
            <h1 className='text-lg font-bold'>Withdraw From Card</h1>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
            <label htmlFor='from' className='w-full flex justify-between'><span>Select Account </span><span className='text-sm mt-1'>Card Balance ${userCard.balance}</span></label>
            <input type="number" className='border border-blue-500 p-3 rounded-md focus:border-yellow-400' placeholder='Enter amount' />
        </div>
            <label>Amount</label>
            <select id='currency' className='bg-gray-200 h-full p-2 lg:p-3 rounded-md'>
              <option value={account.code}>{account.code}</option>
            </select>
        </div>
        <button type="button" className='bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>Transfer To Account</button>
      </form>
    </section>
  )
}

export default CardWithdrawForm
