import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { showSpinner, openSpinner, closeSpinner } from '../../features/page/pageSlice'
import { accounts, fetchAccountHolder, fetchAccountStatus, fetchRecipient, resetRecipient, resetAccountStatus } from '../../features/accounts/accountSlice'
import Spinner from '../Spinner'


const Withdraw = ({ setShowWithdrawForm }) => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0.00)
  const accountList = useSelector(accounts)
  const status = useSelector(fetchAccountStatus)
  const recipient = useSelector(fetchRecipient)
  const [transactionInfo, setTransactionInfo] = useState({
    accountNumber: '',
    amount: '',
    currency: 'USD',
  })
  const enableInputs = recipient ? false : true
  const enableSpinner = useSelector(showSpinner)
  const [code, setCode] = useState('USD')
  const [fromAccount, setFromAccount] = useState(accountList.filter(acc => acc.code === code)[0])
  const setAccount = (e) => {
    setFromAccount(accountList.filter(acc => acc.code === e.target.value)[0])
    setCode(e.target.value)
  }
  const findRecipient = () => {
    const details = {...transactionInfo, currency: fromAccount.code}
    dispatch(openSpinner())
    dispatch(fetchAccountHolder(details))
  }
  const handleInputChange = (e) => {
    setTransactionInfo({...transactionInfo, accountNumber: e.target.value})
    const details = {accountNumber: e.target.value, currency: fromAccount.code}
    dispatch(openSpinner())
    dispatch(fetchAccountHolder(details))
  }
  const closeWithdrawForm = () => {
    dispatch(resetRecipient())
    setShowWithdrawForm(false)
  }
  useEffect(() => {
    if (status === 'SUCCESS') {
      console.log('Printing out the status of the transzation ' + status)
      setTimeout(() => {
        dispatch(closeSpinner())
        dispatch(resetAccountStatus())
      }, 3000)
    }
    if (status === 'FAILED') {
      setTimeout(() => {
        dispatch(closeSpinner())
        dispatch(resetAccountStatus())
      }, 3000)
    }
  }, [dispatch, status])
  return (
    <section className='flex flex-col p-2 gap-8 sm:w-3/5 xl:w-2/5 sm:p-6 h-3/5 bg-white border rounded-xl absolute right-5  left-5 sm:left-auto sm:h-[550px] mt-12'>
      <form className='p-2 w-full flex flex-col justify-between h-full relative'>
        {enableSpinner && <Spinner />}
        <button className='absolute top-1 right-2' type='button' onClick={closeWithdrawForm}><FaTimes /></button>
        <div className='flex flex-col gap-4'>
            <label>Withdraw Your Funds</label>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='from' className='w-full flex justify-between'><span>Select Account </span><span className='text-sm mt-1'>Balance {fromAccount && fromAccount.symbol}{fromAccount && fromAccount.balance}</span></label>
            <select id='from' name='code' value={code} className='bg-gray-200 h-full p-2 lg:p-3 rounded-md' onChange={setAccount}>
                {accountList.map(acc => (
                    <option key={acc.code} value={acc.code}>{acc.code}</option>
                ))}
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='bank' className=''>Select Bank</label>
            <select id='bank' className='bg-gray-200 h-full p-2 lg:p-3 rounded-md'>
              <option>IO BANK</option>
            </select>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='amount' className=''>Recipient Account Number</label>
            <div className='flex flex-1'>
              <input
                type='number'
                name='accountNumber'
                value={transactionInfo.accountNumber}
                onChange={handleInputChange}
                placeholder='100'
                className='flex-1 p-2 lg:p-3 border-gray-200 border-2 rounded-md'
              />
              <button type='button' onClick={findRecipient} className='p-2'>
                Find Recipient
              </button>
            </div>
            {recipient && <p className='text-sm text-blue-500 pl-2'>{recipient.accountName}</p>}
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='amount' className=''>Amount</label>
            <input disabled={enableInputs} type='number' placeholder='100' className='flex-1 p-2 lg:p-3 border-gray-200 border-2 rounded-md' />
          </div>
        </div>
        <button disabled={enableInputs} value={amount} onChange={(e) => setFromAccount(e.target.value)} type="button" className='bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>Withdraw</button>
      </form>
    </section>
  )
}

export default Withdraw
