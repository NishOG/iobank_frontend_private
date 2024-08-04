import React, { useEffect, useState } from 'react'
import { FaExchangeAlt, FaPlus } from 'react-icons/fa'
import Transaction from './Transaction'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { accounts } from '../../features/accounts/accountSlice'
import { useSelector } from 'react-redux'
import Withdraw from '../../components/account/Withdraw'
import NewAccount from '../../components/account/NewAccount'
import AccountDetails from '../../components/account/AccountDetails'

const Account = () => {
  const location = useLocation()
  const currencyParams = new URLSearchParams(location.search)
  const accountList = useSelector(accounts)
  const navigate = useNavigate()
  const currency = currencyParams.get('currency') || 'USD'
  const currentTabStyle = 'bg-white '
  const [currentAccount, setCurrentAccount] = useState(accountList.filter((acc) => acc.currencyType == currency)[0])
  const navigateCurrency = (currencyType) => {
    navigate(`/dashboard/accounts?currency=${currencyType}`)
  }
  const navigatePage = (path) => {
    navigate(path)
  }
  const [showForm, setShowForm] = useState(false)
  const [showWithdrawForm, setShowWithdrawForm] = useState(false)
  useEffect(() => {
    setCurrentAccount(accountList.filter((acc) => acc.currencyType == currency)[0])
  }, [currency])
  const currentPageStyle = showForm || showWithdrawForm ? 'hidden' : 'flex';
  return (
    <section>
      {showForm && <NewAccount setShowForm={setShowForm}/>}
      {showWithdrawForm && <Withdraw setShowWithdrawForm={setShowWithdrawForm}/>}
      <section id='account-section' className={`${currentPageStyle} w-full sm:flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl overflow-x-auto items-center`}>
        
        <div className='w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
          <p className='font-bold text-gray-600 text-sm'>Balances ({accountList.length})</p>
          <button className='flex items-center gap-2 bg-blue-500 text-sm text-white p-3 rounded-md  hover:bg-blue-900 transition duration-500 ease-in-out' onClick={() => setShowForm(true)}><FaPlus /><span>Create New Account</span></button>
        </div>
        
        <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center'>
          <div className='text-sm sm:text-xl p-2 bg-gray-200 bg-gray-200 rounded-xl flex gap-2'>
            {accountList.map((acc, id) => <button key={id} className={`p-2 rounded-lg pt-2 pb-2 hover:bg-white ${currency == acc.currencyType ?  currentTabStyle : ''} `}onClick={() => navigateCurrency(acc.currencyType)}>{acc.currencyType}</button>)}
          </div>
        </div>
        <div className='flex flex-col items-center object-cover gap-5 justify-center'>
          <img src={currentAccount.flag} className='w-30 h-10 rounded-md'/>
          <p className='text-2xl font-bold text-gray-400'>Available Balance</p>
          <p className='text-3xl font-bold text-gray-600 p-2'>{`${currentAccount.symbol} ${currentAccount.balance}`}</p>
        </div>
        
        <div className='text-sm sm:text-xl p-2 rounded-xl flex gap-2'>
            <button className='p-2 rounded-xl bg-gray-50 hover:bg-gray-200 pt-2 pb-2 hover:bg-white'>Deposit</button>
            <button onClick={() => setShowWithdrawForm(true)} className='p-2 rounded-xl bg-gray-50 hover:bg-gray-200 pt-2 pb-2 hover:bg-white'>Withdraw</button>
            <button onClick={() => navigatePage('/dashboard/convert')} className='p-2 rounded-xl bg-gray-50 hover:bg-gray-200 pt-2 pb-2 hover:bg-white text-blue-500 flex items-center'><FaExchangeAlt /> Convert</button>
        </div>
      </section>


      <section id='account-details-section' className={`${currentPageStyle} w-full sm:flex flex-col border border-gray-200 text-sm bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl`}>
        <AccountDetails currentAccount={currentAccount}/>
      </section>
      <section className={`${currentPageStyle} sm:flex`}><Transaction /></section>
    </section>
  )
}

export default Account
