import React, { useEffect, useState } from 'react'
import { FaChevronRight, FaMehBlank, FaPiggyBank} from 'react-icons/fa';
import { MdFoodBank, MdSavings } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../features/users/usersSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    password: '',
  })
  const handleInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value })
  }
  const enableButton = user.username.length > 0 && user.password.length > 0 
  // Todo implementation of controlled Input and login logic
 const login = () => {
    dispatch(authenticateUser(user))
  }
  return (
    <main className="font-roboto flex flex-col w-screen sm:w-full lg:w-screen md:w-screen h-screen justify-center items-center bg-gradient-to-r from-gray-300 to-white-500 ">
      <section className='flex flex-col justify-center p-2 w-full w-3/5 gap-8 items-center sm:w-3/5 xl:w-2/5 sm:p-6'>
          <h1 className='text-xl font-bold flex flex-col items-center'>
            <FaPiggyBank size={40}/>
            IO-BANK</h1>
          <form className="flex flex-col sm:min-w-500 flex-1 w-full gap-4 bg-white p-5 rounded-md">
              <h2>Login to your account</h2>
              <div className='flex flex-col gap-1 flex-1 w-full mt-2'>
                  <label htmlFor="email" className='block'>Email</label>
                  <input 
                    placeholder='Enter Email Address' 
                    type="email" id="email" 
                    className='flex w-full border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' 
                    required 
                    name='username'
                    value={user.username}
                    onChange={(e) => handleInputChange(e)}
                  />
              </div>
              <div className='flex flex-col gap-1 flex-1 w-full mt-2'>
                  <label htmlFor="password" className='block w-full'>Password</label>
                  <input 
                    placeholder='Enter Password' 
                    type="password" id="password" 
                    className='flex w-full border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' 
                    required 
                    name='password'
                    value={user.password}
                    onChange={(e) => handleInputChange(e)}
                    />
              </div>
              
              <a className='underline text-blue-500 flex items-center' href='/'>Forgot Password <FaChevronRight /></a>
              <button disabled={!enableButton} onClick={() => login()} type="button" className='bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>LOGIN</button>
          </form>
          <p>Don't have an account? <a href='/signup' className='underline text-blue-500'>Create One</a></p>
      </section>
    </main>
  )
}

export default Login