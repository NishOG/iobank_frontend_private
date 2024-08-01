import React from 'react'
import { FaCreditCard, FaFileInvoiceDollar, FaMoneyBill } from 'react-icons/fa'

const Home = () => {
  return (
    <>
      <section id='account-section' className='w-full flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl overflow-x-auto'>
        <p className='font-bold text-gray-600'>Accounts & Balances</p>
        <div className='flex flex-col sm:flex-row gap-6 sm:flex-wrap'>

          <div className={`bg-gray-100 flex flex-1 sm:min-w-[200px] sm:max-w-[300px] flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex transform transition duration-500 ease-in-out hover:translate-x-2`}>
              <img className='w-full h-full object-cover' src='https://flagcdn.com/w320/us.png'/>
              <p className='text-sm'>United State Dollars</p>
              <div className='flex flex-1 w-full justify-between'>
                <p>$1000</p>
                <p>USD</p>
              </div>
          </div>
      
          <div className={`bg-gray-100 flex flex-1 sm:min-w-[200px] sm:max-w-[300px] flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex transform transition duration-500 ease-in-out hover:translate-x-2`}>
              <img className='w-full h-full object-cover' src='https://flagcdn.com/w320/ng.png'/>
              <p className='text-sm'>Nigerian Naira</p>
              <div className='flex flex-1 w-full justify-between'>
                <p>₦2000</p>
                <p>NGN</p>
              </div>
          </div>
              
          <div className={`bg-gray-100 flex flex-1 sm:min-w-[200px] sm:max-w-[300px] flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex transform transition duration-500 ease-in-out hover:translate-x-2`}>
              <img className='w-full h-full object-cover' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png'/>
              <p className='text-sm'>European Euro</p>
              <div className='flex flex-1 w-full justify-between'>
                <p>€3000</p>
                <p>EURO</p>
              </div>
          </div>

          <div className={`bg-gray-100 flex flex-1 sm:min-w-[200px] sm:max-w-[300px] flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex transform transition duration-500 ease-in-out hover:translate-x-2`}>
              <img className='w-full h-full object-cover' src='https://flagcdn.com/w320/gb.png'/>
              <p className='text-sm'>British Pounds</p>
              <div className='flex flex-1 w-full justify-between'>
                <p>£3000</p>
                <p>POUNDS</p>
              </div>
          </div>
        </div>
      </section>


      <section id='actions-section' className='w-full flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl'>
        <p className='font-bold text-gray-600'>Quick Actions</p>
        <div className='flex flex-col sm:flex-row gap-6'>
          <div className='bg-gray-100 flex-1 flex flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex'>
              <FaMoneyBill color='blue' size={50}/>
              <p>Bills Payment</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-lg'>
                <p>Pay all your bills, subscriptions, utility bills and more</p>
              </div>
          </div>
          <div className='bg-gray-100 flex-1 flex flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex'>
              <FaFileInvoiceDollar color='blue' size={50}/>
              <p>Invoice</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-lg'>
                <p>Pay all your bills, subscriptions, utility bills and more</p>
              </div>
          </div>
          <div className='bg-gray-100 flex-1 flex flex-col gap-4 p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:cursor-pointer text-gray-600 flex'>
              <FaCreditCard color='blue' size={50}/>
              <p>Cards</p>
              <div className='flex flex-1 w-full justify-between text-[12px] sm:text-lg'>
                <p>Make Payments across all platforms using your card</p>
              </div>
          </div>
        </div>
      </section>
      <section id='transaction-section' className='w-full flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl'>
        <div className='w-full flex flex-col gap-4'>
          <p className='font-bold text-gray-600'>Recent Transactions</p>
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
                  <button className='text-blue-500 hover:text-blue-700 flex items-center text-xl transition duration-500 ease-in-out'>See More
                  </button>
                </td>
              </tr>
              <tr className='flex w-full justify-between p-2 pl-6 pr-6'>
                <td className='flex justify-between flex-1'>11/01/2022</td>
                <td className='flex justify-between flex-1'>Withdrawal</td>
                <td className='flex justify-between flex-1'>-$500</td>
                <td className='flex justify-between flex-1'>USD</td>
                <td className='flex justify-between flex-1'>
                  <button className='text-blue-500 hover:text-blue-700 flex items-center text-xl  transition duration-500 ease-in-out'>See More
                  </button>
                  </td>
              </tr>
              <tr className='flex w-full justify-between p-2 pl-6 pr-6'>
                <td className='flex justify-between flex-1'>10/01/2022</td>
                <td className='flex justify-between flex-1'>Transfer</td>
                <td className='flex justify-between flex-1'>$300</td>
                <td className='flex justify-between flex-1'>USD</td>
                <td className='flex justify-between flex-1'>
                  <button className='text-blue-500 hover:text-blue-700 flex items-center text-xl transition duration-500 ease-in-out'>See More
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

export default Home
