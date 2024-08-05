import React from 'react'
import Transaction from './Transaction'
import { useSelector } from 'react-redux'
import { accounts } from '../../features/accounts/accountSlice'
import Payment from './Payment'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const accountList = useSelector(accounts)
  const navigate = useNavigate()
  const navigateCurrency = (currencyType) => {
    navigate(`/dashboard/accounts?currency=${currencyType}`)
  }
  return (
    <>
      <section id='account-section' className='w-full flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl overflow-x-auto'>
        <p className='font-bold text-gray-600'>Accounts & Balances</p>
        <div className='flex flex-col sm:flex-row gap-6 sm:flex-wrap'>
          {
            accountList.map((acc, id) => <div key={id} className={`bg-gray-100 flex flex-1 sm:min-w-[200px] sm:max-w-[300px] flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex transform transition duration-500 ease-in-out hover:translate-x-2`} onClick={() => navigateCurrency(acc.currencyType)}>
                <img className='w-full h-full object-cover' src={acc.flag}/>
                <p className='text-sm'>{acc.label}</p>
                <div className='flex flex-1 w-full justify-between'>
                  <p>{acc.symbol}{acc.balance}</p>
                  <p>{acc.currencyType}</p>
                </div>
            </div>)
          }
        </div>
      </section>
      <Payment />
      <Transaction />
    </>
  )
}

export default Home
