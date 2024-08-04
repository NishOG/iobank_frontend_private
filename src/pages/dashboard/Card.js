import React, { useState } from 'react'
import Transaction from './Transaction'
import CardDetails from '../../components/card/CardDetails'
import CardImage from '../../components/card/CardImage'
import CardFundForm from '../../components/card/CardFundForm'
import CardWithdrawForm from '../../components/card/CardWithdrawForm'

const Card = () => {
  const [showFundCardForm, setShowFundCardForm] = useState(false)
  const [showWithdrawForm, setShowWithdrawForm] = useState(false)
  const currentPageStyle = showFundCardForm || showWithdrawForm ? 'hidden' : 'flex';
  return (
    <>
      {showFundCardForm && <CardFundForm setShowFundCardForm={setShowFundCardForm}/>}
      {showWithdrawForm && <CardWithdrawForm  setShowWithdrawForm={setShowWithdrawForm}/>}
      <section id='account-section' className={`${currentPageStyle} w-full sm:flex flex-col border border-gray-200 text-xl bg-white rounded-xl mt-12 p-6 gap-6 shadow-xl items-center`}>
        <CardImage  setShowFundCardForm={setShowFundCardForm}  setShowWithdrawForm={setShowWithdrawForm} />
      </section>
      <section id='account-details-section' className={`${currentPageStyle} w-full sm:flex flex-col border border-gray-200 text-sm bg-white rounded-xl mt-12 p-6 shadow-xl`}>
        <CardDetails />
      </section>
      {showFundCardForm || showWithdrawForm ||<Transaction />}
    </>
  )
}

export default Card
