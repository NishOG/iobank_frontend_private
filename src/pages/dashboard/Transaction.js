import React from 'react'

const Transaction = () => {
  return (
    <section id='transaction-section' className='w-full overflow-x-auto sm:flex sm:w-full flex flex-col border border-gray-200 text-sm bg-white rounded-xl mt-12 p-4 sm:p-6 gap-6 shadow-xl'>
        <p className='font-bold text-gray-600 text-sm'>Recent Transactions</p>
        <div className='flex flex-col gap-4 w-screen overflow-x-auto sm:w-full'>
          <table className='flex gap-4 flex-col w-full items-space min-w-500'>
            <thead className='flex w-full'>
              <tr className='flex w-full bg-gray-200 p-2 pl-6 pr-6 justify-between rounded-md'>
                <th className='flex justify-between flex-1'>Date</th>
                <th className='flex justify-between flex-1'>Description</th>
                <th className='flex justify-between flex-1'>Amount</th>
                <th className='flex justify-between flex-1'>Currency</th>
                <th className='flex justify-between flex-1'>Status</th>
                <th className='flex justify-between flex-1'>Info</th>
              </tr>
            </thead>
            <tbody className='flex w-full flex-col'>
              <tr className='flex w-full justify-between p-2 pl-6 pr-6'>
                <td className='flex justify-between flex-1'>12/01/2022</td>
                <td className='flex justify-between flex-1'>Deposit</td>
                <td className='flex justify-between flex-1'>$1000</td>
                <td className='flex justify-between flex-1'>USD</td>
                <td className='flex justify-between flex-1'>Completed</td>
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
                <td className='flex justify-between flex-1'>Completed</td>
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
                <td className='flex justify-between flex-1'>Completed</td>
                <td className='flex justify-between flex-1'>
                  <button className='text-blue-500 hover:text-blue-900 flex items-center text-sm transition duration-500 ease-in-out'>See More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
  )
}

export default Transaction
