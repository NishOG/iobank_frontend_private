import React, { useState } from 'react'
import { FaPiggyBank, FaExchangeAlt } from 'react-icons/fa'

const Convert = () => {
    const [toCurrency, setToCurrency] = useState('USD')
    const [fromCurrency, setFromCurrency] = useState('EUR')

    const switchCurrencies = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }
  return (
    <section className='flex flex-col p-2 gap-8 sm:w-full sm:p-6 items-center justify-center sm:left-auto h-4/5 mt-12'>
        <h1 className='text-xl font-bold flex flex-col items-center'>
            <FaPiggyBank size={40}/>
            IO-BANK
        </h1>
      <form className='p-2 pt-5 w-full rounded-xl sm:w-3/5 bg-white items-center flex flex-col justify-center h-full relative'>
        <h2 className='font-bold'>Convert Currencies</h2>
        <div className='flex flex-col gap-4 w-full flex-1 items-center justify-center'>
            <div className='border border-gray-300 rounded-md focus-within:border-gray-900 focus-within:border-2'>
                <label htmlFor='from' className='sr-only'>From</label>
                <select id='from' value={fromCurrency} className='bg-gray-200 h-full p-2 lg:p-3 border-none focus:outline-none' onChange={(e) => setFromCurrency(e.target.value)}>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='GBP'>GBP</option>
                    <option value='JPY'>JPY</option>
                </select>
                <label htmlFor='from' className='sr-only'>{fromCurrency}</label>
                <input type='number' placeholder='100' className='p-2 lg:p-3 border-none active:border-none focus:outline-none' />
            </div>
            <button onClick={switchCurrencies} type='button'><FaExchangeAlt className='text-blue-500 transform rotate-90' size={25}/></button>
            <div className='border border-gray-300 rounded-md focus-within:border-gray-700 focus-within:border-2'>
                <label htmlFor='from' className='sr-only'>to</label>
                <select id='from' value={toCurrency} className='bg-gray-200 h-full p-2 lg:p-3 border-none focus:outline-none' onChange={(e) => setToCurrency(e.target.value)}>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='GBP'>GBP</option>
                    <option value='JPY'>JPY</option>
                </select>
                <label htmlFor='from' className='sr-only'>{toCurrency}</label>
                <input disabled type='number' placeholder='100' className='p-2 lg:p-3 border-none active:border-none focus:outline-none' />
            </div>
        </div>

        <button type="button" className='w-full bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>Convert</button>
      </form>
    </section>
  )
}

export default Convert
