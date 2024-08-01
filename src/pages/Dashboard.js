import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Home from './dashboard/Home'
import Account from './dashboard/Account'

const Dashboard = () => {
  return (
    <main className="font-roboto flex flex-row w-screen sm:w-full lg:w-full md:w-screen min-h-screen bg-gradient-to-r from-gray-300 to-white-500 overflow-x-hidden">
        <NavBar />
        <Header />
        <section className='relative flex-1 pt-12 p-6'>
          <Account />
        </section>
    </main>
  )
}

export default Dashboard
