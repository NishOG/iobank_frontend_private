import React, { useEffect, useState } from 'react'
import Transaction from './Transaction'
import CardDetails from '../../components/card/CardDetails'
import CardImage from '../../components/card/CardImage'
import CardFundForm from '../../components/card/CardFundForm'
import CardWithdrawForm from '../../components/card/CardWithdrawForm'
import { useDispatch, useSelector } from 'react-redux'
import CreateCard from '../../components/card/CreateCard'
import { card, fetchCard, fetchCardStatus, resetCardStatus } from '../../features/card/cardSlice'
import { closeSpinner, openSpinner, showSpinner } from '../../features/page/pageSlice'
import Spinner from '../../components/Spinner'
import { fetchAccounts } from '../../features/accounts/accountSlice'

const Card = () => {
  const dispatch = useDispatch()
  const status = useSelector(fetchCardStatus)
  const enableSpinner = useSelector(showSpinner)
  const userCard = useSelector(card)
  const [showFundCardForm, setShowFundCardForm] = useState(false)
  const [showWithdrawForm, setShowWithdrawForm] = useState(false)
  const currentPageStyle = showFundCardForm || showWithdrawForm ? 'hidden' : 'flex';

  useEffect(() => {

    dispatch(fetchAccounts())
    dispatch(openSpinner())
    dispatch(fetchCard())
  }, [dispatch])
  useEffect(() => {
    if(status === 'SUCCESS'){
      setTimeout(() => {
        dispatch(closeSpinner())
        dispatch(resetCardStatus())
      }, 1000)
    }
    if(status === 'FAILED'){
      setTimeout(() => {
        dispatch(closeSpinner())
      }, 1000)
    }
  }, [dispatch, status])
  return enableSpinner ? <Spinner /> : !enableSpinner && !userCard ? <section id='account-section' className={`${currentPageStyle} w-full sm:flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl items-center relative`}>
        <CreateCard />
      </section>
       : 
      <>
        {showFundCardForm && <CardFundForm setShowFundCardForm={setShowFundCardForm}/>}
        {showWithdrawForm && <CardWithdrawForm  setShowWithdrawForm={setShowWithdrawForm}/>}
        <section id='account-section' className={`${currentPageStyle} w-full sm:flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl items-center`}>
          {userCard.img && <CardImage  setShowFundCardForm={setShowFundCardForm}  setShowWithdrawForm={setShowWithdrawForm} />}
        </section>
        <section id='account-details-section' className={`${currentPageStyle} w-full sm:flex flex-col border border-gray-200 text-sm bg-white rounded-xl mt-12 p-6 shadow-xl`}>
          <CardDetails />
        </section>
        {showFundCardForm || showWithdrawForm ||<Transaction />}
      </>
   
}

export default Card
