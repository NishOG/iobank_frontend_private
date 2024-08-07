import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { showSpinner, openSpinner, closeSpinner } from '../../features/page/pageSlice'
import { accounts, fetchAccountHolder, fetchAccountStatus, fetchReceipient, resetAccountStatus } from '../../features/accounts/accountSlice'
import { spinnerDelay } from '../../features/page/pageSlice'
import Spinner from '../Spinner'


const Withdraw = ({ setShowWithdrawForm }) => {
  const dispatch = useDispatch()
  const delay = useSelector(spinnerDelay)
  const accountList = useSelector(accounts)
  const status = useSelector(fetchAccountStatus)
  const receipient = useSelector(fetchReceipient)
  const enableInputs = receipient ? false : true
  const enableSpinner = useSelector(showSpinner)
  const [transactionInfo, setTransactionInfo] = useState({
    accountNumber: '',
    amount: '',
    currency: 'USD',
  })
  const [code, setCode] = useState('USD')
  const handleInputChange = (e) => {
    setTransactionInfo({...transactionInfo, [e.target.name]: e.target.value })
  }
  const [fromAccount, setFromAccount] = useState(null)
  const setAccount = (e) => {
    console.log(e.target.value)
    setFromAccount({...fromAccount, ...e.target.value.code})
  }
  const findReceipient = () => {
    setTransactionInfo({...transactionInfo, currency: fromAccount.code})
    dispatch(openSpinner())
    dispatch(fetchAccountHolder(transactionInfo))
  }
  useEffect(() => {
    setFromAccount(accountList.filter(acc => acc.code === code)[0])
    if (status === 'SUCCESS') {
      setTimeout(() => {
        dispatch(closeSpinner())
      }, delay)
      dispatch(resetAccountStatus())
    }
    if (status === 'FAILED') {
      setTimeout(() => {
        dispatch(closeSpinner())
      }, delay)
      dispatch(resetAccountStatus())
    }
  }, [dispatch, status, code])
  return (
    <section className='flex flex-col p-2 gap-8 sm:w-3/5 xl:w-2/5 sm:p-6 h-3/5 bg-white border rounded-xl absolute right-5  left-5 sm:left-auto sm:h-[550px] mt-12'>
      <form className='p-2 w-full flex flex-col justify-between h-full relative'>
        {enableSpinner && <Spinner />}
        <button className='absolute top-1 right-2' type='button' onClick={() => setShowWithdrawForm(false)}><FaTimes /></button>
        <div className='flex flex-col gap-4'>
            <label>Withdraw Your Funds</label>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='from' className='w-full flex justify-between'><span>Select Account </span><span className='text-sm mt-1'>Balance {fromAccount && fromAccount.symbol}{fromAccount && fromAccount.balance}</span></label>
            <select id='from' name='code' value={code} className='bg-gray-200 h-full p-2 lg:p-3 rounded-md' onChange={(e) => setCode(e.target.value)}>
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
            <label htmlFor='amount' className=''>Receipient Account Number</label>
            <div className='flex flex-1'>
              <input
                type='number'
                name='accountNumber'
                value={transactionInfo.accountNumber}
                onChange={handleInputChange}
                placeholder='100'
                className='flex-1 p-2 lg:p-3 border-gray-200 border-2 rounded-md'
              />
              <button type='button' onClick={findReceipient} className='p-2'>
                Find Recipient
              </button>
            </div>
            {receipient && <p className='text-sm text-blue-500 pl-2'>{receipient.accountName}</p>}
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='amount' className=''>Amount</label>
            <input disabled={enableInputs} type='number' placeholder='100' className='flex-1 p-2 lg:p-3 border-gray-200 border-2 rounded-md' />
          </div>
        </div>
        <button disabled={enableInputs} type="button" className='bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>Withdraw</button>
      </form>
    </section>
  )
}

export default Withdraw
