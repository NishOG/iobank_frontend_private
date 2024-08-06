import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { accounts } from '../../features/accounts/accountSlice'

const Withdraw = ({ setShowWithdrawForm }) => {
  const accountList = useSelector(accounts)
  const [fromAccount, setFromAccount] = useState(accountList.filter(acc => acc.currencyType === 'USD')[0])
  return (
    <section className='flex flex-col p-2 gap-8 sm:w-3/5 xl:w-2/5 sm:p-6 h-3/5 bg-white border rounded-xl absolute right-5  left-5 sm:left-auto sm:h-[550px] mt-12'>
      <form className='p-2 w-full flex flex-col justify-between h-full relative'>
        <button className='absolute top-1 right-2' type='button' onClick={() => setShowWithdrawForm(false)}><FaTimes /></button>
        <div className='flex flex-col gap-4'>
            <label>Withdraw Your Funds</label>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='from' className='w-full flex justify-between'><span>Select Account </span><span className='text-sm mt-1'>Balance {fromAccount.symbol}{fromAccount.balance}</span></label>
            <select id='from' value={fromAccount.currencyType} className='bg-gray-200 h-full p-2 lg:p-3 rounded-md' onChange={(e) => setFromAccount(accountList.filter(acc => acc.currencyType === e.target.value)[0])}>
                {accountList.map(acc => (
                    <option key={acc.currencyType} value={acc.currencyType}>{acc.currencyType}</option>
                ))}
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='bank' className=''>Select Bank</label>
            <select id='bank' value='IO BANK' className='bg-gray-200 h-full p-2 lg:p-3 rounded-md'>
              <option value='IO BANK'>IO BANK</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='amount' className=''>Receipient Account Number</label>
            <input type='number' placeholder='100' className='flex-1 p-2 lg:p-3 border-gray-200 border-2 rounded-md' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='amount' className=''>Amount</label>
            <input type='number' placeholder='100' className='flex-1 p-2 lg:p-3 border-gray-200 border-2 rounded-md' />
          </div>
        </div>
        <button type="button" className='bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>Withdraw</button>
      </form>
    </section>
  )
}

export default Withdraw
