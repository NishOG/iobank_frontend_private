import React from 'react'
import Header from '../components/Header'
import { FaHamburger } from 'react-icons/fa'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <main className="font-roboto flex flex-row w-screen sm:w-full lg:w-screen md:w-screen h-screen bg-gradient-to-r from-gray-300 to-white-500 ">
        <NavBar />
        <section className='relative flex-1'>
          <Header />
        </section>
    </main>
  )
}

export default Home
