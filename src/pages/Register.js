import React from 'react'
import { FaChevronRight, FaMehBlank, FaPiggyBank} from 'react-icons/fa';

const Register = () => {
  // Todo implementation of controlled Input and register logic
  return (
    <main className="font-roboto flex flex-col w-screen sm:w-full min-h-screen justify-center items-center bg-gradient-to-r from-gray-300 to-white-500 ">

      <section className='overflow-x-hidden flex flex-col w-full p-3 w-3/5 pt-6 pb-6 gap-8 justify-center items-center sm:w-3/5 xl:w-2/5 sm:p-6'>
          <h1 className='text-xl font-bold flex flex-col items-center'>
            <FaPiggyBank size={40}/>
            IO-BANK</h1>
          <form className="flex flex-col sm:min-w-500 flex-1 w-full gap-3 bg-white p-5 rounded-md">
              <h2 className='md font-bold'>Create your account</h2>
              <div className='flex flex-col sm:flex-row gap-1 flex-1 w-full sm:gap-6'>
                <div className='flex flex-col gap-1 flex-1 mt-2'>
                    <label htmlFor="firstname" className='block'>Provide Firstname</label>
                    <input placeholder='Julius' type="text" id="firstname" className='flex flex-1 border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' required />
                </div>
                <div className='flex flex-col gap-1 flex-1 mt-2'>
                    <label htmlFor="lastname" className='block w-full'>Provide Lastname</label>
                    <input placeholder='Anderson' type="text" id="lastname" className='flex flex-1 border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' required />
                </div>
              </div>
              <div className='flex flex-col gap-1 flex-1 w-full mt-2'>
                <label htmlFor="email" className='block'>Provide Email</label>
                <input placeholder='Enter Email Address' type="email" id="email" className='flex w-full border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' required />
              </div>
              <div className='flex flex-col gap-1 flex-1 w-full mt-2'>
                <label htmlFor="tel" className='block'>Provide Tel</label>
                <input placeholder='Enter Phone Number' type="number" id="tel" className='flex w-full border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' required />
              </div>
              <div className='flex flex-col gap-1 flex-1 w-full mt-2'>
                <label htmlFor='gender'>Gender</label>
                <select id='gender' className='flex w-full border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' required>
                    <option value="">Select Your Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
              </div>
              <div className='flex flex-col gap-1 flex-1 w-full mt-2'>
                <label htmlFor="dob" className='block'>Provide Date of birth</label>
                <input type="date" id="dob" className='flex justify-space w-full border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' required />
              </div>
              <div className='flex flex-col sm:flex-row gap-1 flex-1 w-full sm:gap-6'>
                <div className='flex flex-col gap-1 flex-1 mt-2'>
                    <label htmlFor="password" className='block'>Password</label>
                    <input placeholder='Enter your password' type="password" id="password" className='flex flex-1 border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' required />
                </div>
                <div className='flex flex-col gap-1 flex-1 mt-2'>
                    <label htmlFor="confirm-password" className='block w-full'>Confirm Password</label>
                    <input placeholder='Comfirm your password' type="text" id="confirm-password" className='flex flex-1 border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' required />
                </div>
              </div>
              <button type="button" className='bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>SIGN UP</button>
          </form>
          <p>Have an account? <a href='/signup' className='underline text-blue-500'>Login</a></p>
      </section>
    </main>
  )
}

export default Register
