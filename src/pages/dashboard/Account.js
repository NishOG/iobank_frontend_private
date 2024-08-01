import React from 'react'
import { FaCreditCard, FaFileInvoiceDollar, FaMoneyBill, FaPlus } from 'react-icons/fa'

const Account = () => {
  return (
    <>
      <section id='account-section' className='w-full flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl overflow-x-auto items-center'>
        <div className='w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2'>
          <p className='font-bold text-gray-600 text-sm'>Balances(4)</p>
          <button className='flex items-center gap-2 bg-blue-500 text-sm text-white p-3 rounded-md  hover:bg-blue-900 transition duration-500 ease-in-out'><FaPlus /><span>Create New Account</span></button>
        </div>
        
        <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center'>
          <div className='text-sm sm:text-xl p-2 bg-gray-200 bg-gray-200 rounded-xl flex gap-2'>
            <button className='p-2 rounded-lg pt-2 pb-2 hover:bg-white'>USD</button>
            <button className='p-2 rounded-lg pt-2 pb-2 hover:bg-white'>GPB</button>
            <button className='p-2 rounded-lg pt-2 pb-2 hover:bg-white'>NGN</button>
            <button className='p-2 rounded-lg pt-2 pb-2 hover:bg-white'>EURO</button>
          </div>
        </div>
        <div className='flex flex-col items-center object-cover gap-3 justify-center'>
          <img src='https://flagcdn.com/w320/us.png' className='w-30 h-10 rounded-md'/>
          <p className='text-2xl font-bold text-gray-600'>Available Balance</p>
          <p className='text-3xl font-bold text-gray-600 bg-gray-100 p-2'>$4000</p>
        </div>
      </section>


      <section id='account-details-section' className='w-full flex flex-col border border-gray-200 text-sm bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl'>
        <p className='font-bold text-gray-600 text-sm'>Your USD Account Informations</p>
        <div className='flex flex-col sm:flex-row  sm:flex-wrap'>
          <div className='min-w-200 flex flex-col gap-4 p-6 w-1/3'>
              <p className='text-sm font-bold'>Account Holder's Name</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>Isaiah Osarobo</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 p-6 w-1/3'>
              <p className='text-sm font-bold'>Account Number</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>8888888888</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 p-6 w-1/3'>
              <p className='text-sm font-bold'>Bank Name</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>IO BANK</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 p-6 w-1/3'>
              <p className='text-sm font-bold'>Account Type</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>Savings</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 p-6 w-1/3'>
              <p className='text-sm font-bold'>Bank Address</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>8, Dexter Avenue P.O Box 10035</p>
              </div>
          </div>
          <div className='min-w-200 flex flex-col gap-4 p-6 w-1/3'>
              <p className='text-sm font-bold'>Currency Type</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-sm'>
                <p>USD</p>
              </div>
          </div>
        </div>
      </section>
      <section id='transaction-section' className='hidden sm:flex w-full flex-col border border-gray-200 text-sm bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl'>
        <div className='w-full flex flex-col gap-4'>
          <p className='font-bold text-gray-600 text-sm'>Recent Transactions</p>
          <table className='flex gap-4 flex-col w-full items-space'>
            <thead className='flex w-full'>
              <tr className='flex w-full bg-gray-200 p-2 pl-6 pr-6 justify-between rounded-md'>
                <th className='flex justify-between flex-1'>Date</th>
                <th className='flex justify-between flex-1'>Description</th>
                <th className='flex justify-between flex-1'>Amount</th>
                <th className='flex justify-between flex-1'>Currency</th>
                <th className='flex justify-between flex-1'>Info</th>
              </tr>
            </thead>
            <tbody className='flex w-full flex-col'>
              <tr className='flex w-full justify-between p-2 pl-6 pr-6'>
                <td className='flex justify-between flex-1'>12/01/2022</td>
                <td className='flex justify-between flex-1'>Deposit</td>
                <td className='flex justify-between flex-1'>$1000</td>
                <td className='flex justify-between flex-1'>USD</td>
                <td className='flex justify-between flex-1'>
                  <button className='text-blue-500 hover:text-blue-900 flex items-center text-sm transition duration-500 ease-in-out'>See More
                  </button>
                </td>
              </tr>
              <tr className='flex w-full justify-between p-2 pl-6 pr-6'>
                <td className='flex justify-between flex-1'>11/01/2022</td>
                <td className='flex justify-between flex-1'>Withdrawal</td>
                <td className='flex justify-between flex-1'>-$500</td>
                <td className='flex justify-between flex-1'>USD</td>
                <td className='flex justify-between flex-1'>
                  <button className='text-blue-500 hover:text-blue-900 flex items-center text-sm  transition duration-500 ease-in-out'>See More
                  </button>
                  </td>
              </tr>
              <tr className='flex w-full justify-between p-2 pl-6 pr-6'>
                <td className='flex justify-between flex-1'>10/01/2022</td>
                <td className='flex justify-between flex-1'>Transfer</td>
                <td className='flex justify-between flex-1'>$300</td>
                <td className='flex justify-between flex-1'>USD</td>
                <td className='flex justify-between flex-1'>
                  <button className='text-blue-500 hover:text-blue-900 flex items-center text-sm transition duration-500 ease-in-out'>See More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Account
