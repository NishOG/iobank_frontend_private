import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ownerAccountsTypes } from '../features/accounts/accountSlice'
import { FaTimes } from 'react-icons/fa'

const NewAccount = ({ setShowForm }) => {
    const [currency, setCurrency] = useState('')
    const [accountType, setAccountType] = useState([
        {code: 'USD', label: 'United States Dollar'}, 
        {code: 'NGN', label: 'Nigerian Naira'}, 
        {code: 'EURO', label: 'European Euro'}, 
        {code: 'GPB', label: 'British Pounds'}, 
        {code: 'INR', label: 'Indian Rupee'},
        {code: 'CAD', label: 'Canadian Dollar'},
        {code: 'JPY', label: 'Japanese Yen'},
        {code: 'AUD', label: 'Australian Dollar'},
        {code: 'CHF', label: 'Swiss Franc'},
        {code: 'CNY', label: 'Chinese Yuan'},
    ])
    const accountTypeList = useSelector(ownerAccountsTypes)
    useEffect(() => {
        const updateList = () => {
            const filteredList = accountType.filter(account => !accountTypeList.includes(account.code))
            setAccountType(filteredList)
        }
        updateList()
    }, [])
  return (
      <section className='flex flex-col p-2 gap-8 sm:w-3/5 xl:w-2/5 sm:p-6 bg-white border rounded-xl absolute right-5  left-5 sm:left-auto h-2/5 mt-12'>
      <form className='p-2 w-full flex flex-col justify-between h-full relative'>
        <button className='absolute top-2 right-2' type='button' onClick={() => setShowForm(false)}><FaTimes /></button>
        <div className='flex flex-col gap-4'>
            <label>Choose Currency Type</label>
            <select className='flex w-full border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none gap-4' value={currency} onChange={(e) => setCurrency(e.target.value)}>
                {accountType.map(type => (
                    <option className='p-2' key={type.code} value={type.code}>{type.label}</option>
                ))}
            </select>
        </div>
        
        <button type="button" className='bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>Create Bank Account</button>
      </form>
      </section>
  )
}

export default NewAccount
