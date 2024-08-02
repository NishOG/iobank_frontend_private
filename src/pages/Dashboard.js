import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Transaction from './dashboard/Transaction'
import Home from './dashboard/Home'
import Account from './dashboard/Account'
import Card from './dashboard/Card'
import { Route, Routes } from 'react-router-dom'
import Payment from './dashboard/Payment'

const Dashboard = () => {
  return (
    <main className="font-roboto lg:ml-250">
      <section className="font-roboto flex flex-row w-screen sm:w-full lg:w-full md:w-screen min-h-screen bg-gradient-to-r from-gray-300 to-white-500 overflow-x-hidden">
        <NavBar />
        <Header />
          <section className='relative flex-1 pt-12 p-2 sm:p-6 w-full sm:mt-6'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/accounts' element={<Account />}/>
              <Route path='/payments' element={<Payment />}/>
              <Route path='/transactions' element={<Transaction />}/>
              <Route path='/cards' element={<Card />}/>
            </Routes>
          </section>
      </section>
    </main>
  )
}

export default Dashboard
