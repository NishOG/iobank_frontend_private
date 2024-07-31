import React from 'react'

const Login = () => {

  return (
    <section className='flex flex-col justify-center w-4/5 w-3/5 gap-8 items-center sm:w-3/5 xl:w-2/5 sm:p-6'>
        <h1 className='text-xl font-bold'>IO-BANK</h1>
        <form className="flex flex-col sm:min-w-500 flex-1 w-full gap-4 bg-white p-5 rounded-md">
            <h2>Login to your account</h2>
            <div className='flex flex-col gap-1 flex-1 w-full mt-2'>
                <label for="email" className='block'>Email</label>
                <input placeholder='Enter Email Address' type="email" id="email" className='flex w-full border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' required />
            </div>
            <div className='flex flex-col gap-1 flex-1 w-full mt-2'>
                <label for="password" className='block w-full'>Password</label>
                <input placeholder='Enter Password' type="password" id="password" className='flex w-full border border-blue-500 p-3 rounded-md focus:border-yellow-400 leading-none' required />
            </div>
            <a className='underline text-blue-500' href='/'>Forgot Password </a>
            <button type="button" className='bg-blue-500 p-2 rounded-xl text-white font-bold mt-2  hover:bg-opacity-90 transition-all'>Login</button>
        </form>
        <p>Don't have an account? <a href='/signup' className='underline text-blue-500'>Create One</a></p>
    </section>
  )
}

export default Login