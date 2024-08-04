import React from 'react'
import { useSelector } from 'react-redux'
import Transaction from './Transaction'
import { card } from '../../features/card/cardSlice'
import CardDetails from '../../components/card/CardDetails'
import CardImage from '../../components/card/CardImage'

const Card = () => {
  const userCard = useSelector(card)
  return (
    <>
      <section id='account-section' className='w-full flex flex-col border border-gray-200 text-xl bg-transparent rounded-xl mt-12 p-6 gap-2 shadow-xl overflow-x-auto items-center'>
        <CardImage />
      </section>
      <section id='account-details-section' className='w-full flex flex-col border border-gray-200 text-sm bg-white rounded-xl mt-12 p-6 shadow-xl'>
        <CardDetails />
      </section>
      <Transaction />
    </>
  )
}

export default Card
