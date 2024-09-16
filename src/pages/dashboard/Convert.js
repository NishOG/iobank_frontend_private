import React, { useEffect, useMemo, useState } from 'react'
import { FaExchangeAlt, FaSync } from 'react-icons/fa'
import Spinner from '../../components/Spinner'
import { closeSpinner, openSpinner, showSpinner } from '../../features/page/pageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { accounts, exchangeRates, fetchAccountStatus, getExchangeRate, resetAccountStatus, convertCurrency, fetchAccounts } from '../../features/accounts/accountSlice'
import { useNavigate } from 'react-router-dom'

const Convert = () => {
    const enableSpinner = useSelector(showSpinner)
    const dispatch = useDispatch()
    const accountList = useSelector(accounts)
    const rates = useSelector(exchangeRates)
    const [rate, setRate] = useState('')
    const [isRotating, setIsRotating] = useState(false)
    const [toCurrency, setToCurrency] = useState('')
    const [fromCurrency, setFromCurrency] = useState('')
    const [fromValue, setFromValue] = useState('')
    const [fromAccount, setFromAccount] = useState(null)
    const navigate = useNavigate()
    const switchCurrencies = () => {
        setFromCurrency(toCurrency)
        setToCurrency(fromCurrency)
    }
    const getCurrentExchangeRate = () => {
      setIsRotating(true)
      dispatch(getExchangeRate())
      setTimeout(() => setIsRotating(false), 2000)
    }
    const status = useSelector(fetchAccountStatus)
    const toValue = useMemo(() => {
      if (!fromCurrency || !toCurrency || !rates || !rates[fromCurrency] || !rates[toCurrency]) {
        return '';
      }
      const selectedAccount = accountList.filter(account => account.code === fromCurrency)[0]
      setFromAccount(selectedAccount);
      setRate(rates[toCurrency] / rates[fromCurrency]);
      const convertedValue = (fromValue / rates[fromCurrency]) * rates[toCurrency];
      return convertedValue.toString().substring(0, 10)
    }, [fromValue, fromCurrency, toCurrency, rates]);

    const disableConvertButton = useMemo(() => {
      if(fromCurrency === toCurrency || fromValue > fromAccount.balance || fromValue <= 0) {
        return true;
      }
      return false
    }, [fromValue, fromCurrency, toCurrency])
    
    const currencyOptions = accountList.map(acc => (
      <option key={acc.code} value={acc.code}>{acc.code}</option>
    ))
    
    const convert = () => {
      dispatch(openSpinner())
      const receivingAccount = accountList.filter(acc => acc.code === toCurrency)[0]
      const details = {
        sender: fromAccount.accountNumber,
        receiver: receivingAccount.accountNumber,
        amount: fromValue
      }
      console.log(JSON.stringify(details))
      dispatch(convertCurrency(details))
      setTimeout(() => {
        dispatch(fetchAccounts())
        navigate('/dashboard')
      }, 2000)
    }
    useEffect(() => {
        if(!rates) dispatch(getExchangeRate()) 
        if(accountList.length < 1){
            dispatch(openSpinner())
        }
        else {
            setTimeout(() => {
            dispatch(closeSpinner())
            }, 2000)
            fromAccount || setFromAccount(accountList[0])
            fromCurrency || setFromCurrency(accountList[0].code)
            toCurrency || setToCurrency(accountList[0].code)
        }
    }, [dispatch, accountList])
    useEffect(() => {
      if (status === 'SUCCESS') { 
          setTimeout(() => {
              dispatch(closeSpinner());
              dispatch(resetAccountStatus());
          }, 3000);
      }
      if (status === 'FAILED') {
          dispatch(closeSpinner());
          dispatch(resetAccountStatus());
      }
    }, [dispatch, status, accountList, rates])
  return (
    <section className='flex flex-col p-2 gap-8 sm:w-full sm:p-6 items-center justify-center sm:left-auto h-4/5 mt-12 relative'>
      <form className='p-2 pt-5 w-full rounded-xl sm:w-3/5 bg-white items-center flex flex-col justify-center h-full relative'>
        {enableSpinner && <Spinner />}
        <h2 className='font-bold'>Convert Currencies</h2>
        <div className='flex flex-col gap-4 w-full flex-1 items-center justify-center'>
            <div className='border border-gray-300 rounded-md focus-within:border-gray-900 focus-within:border-2 relative'>
                <label htmlFor='from' className='sr-only'>From</label>
                <select id='from' value={fromCurrency} className='bg-gray-200 h-full p-2 lg:p-3 border-none focus:outline-none' onChange={(e) => setFromCurrency(e.target.value)}>
                  {currencyOptions}
                </select>
                <p className='absolute right-5 top-1 text-[10px]'>Balance: {fromAccount && `${fromAccount.symbol}${fromAccount.balance}`}</p>
                <label htmlFor='from' className='sr-only'>{fromCurrency}</label>
                <input type='number' value={fromValue} onChange={(e) => setFromValue(e.target.value)} placeholder={1} className='p-2 lg:p-3 border-none active:border-none focus:outline-none' />
            </div>
            <button onClick={switchCurrencies} type='button'><FaExchangeAlt className='text-blue-500 transform rotate-90' size={25}/></button>
            <div className='border border-gray-300 rounded-md focus-within:border-gray-700 focus-within:border-2'>
                <label htmlFor='from' className='sr-only'>to</label>
                <select id='from' value={toCurrency} className='bg-gray-200 h-full p-2 lg:p-3 border-none focus:outline-none' onChange={(e) => setToCurrency(e.target.value)}>
                  {currencyOptions}
                </select>
                <label htmlFor='from' className='sr-only'>{toCurrency}</label>
                <input disabled type='number' value={toValue} placeholder={rates && toCurrency && rates[toCurrency]/rates[fromCurrency]} className='p-2 lg:p-3 border-none active:border-none focus:outline-none' />
            </div>
            {fromCurrency && toCurrency && rates && rates[toCurrency] && rates[fromCurrency] && (
              <div className='flex gap-2'>
                <p>1 {fromCurrency} = {rate.toString().substring(0,9)} {toCurrency}</p>
                <button type='button' onClick={getCurrentExchangeRate}><FaSync size={12} className={isRotating ? 'animate-spin' : ''}/></button>
              </div>
            )}
        </div>
        <button disabled={disableConvertButton} 
          type="button" 
          onClick={convert}
          className='w-full bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>Convert</button>
      </form>
    </section>
  )
}

export default Convert