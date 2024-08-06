import React from 'react'
import { Link } from 'react-router-dom'

const RegisterSuccessful = () => {
  return (
    <section className='h-screen w-screen flex items-center justify-center'>
      <div>
        <h1 className='text-4xl font-bold text-center'>Registration Successful</h1>
        <p className='text-center text-gray-600'>Your account has been created successfully. You can now <Link to={'/login'}>LOGIN</Link></p>
      </div>
    </section>
  )
}

export default RegisterSuccessful
