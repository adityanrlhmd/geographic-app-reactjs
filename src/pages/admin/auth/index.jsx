import React from 'react'
import { useNavigate } from 'react-router'

function Auth() {
  const navigate = useNavigate();
  return (
    <div className=' bg-sky-100 h-screen flex justify-center items-center'>
        <div className='bg-white rounded-2xl p-4 shadow-lg container mx-auto max-w-lg'>
            <div className='bg-sky-900 text-white rounded-2xl -mt-10 shadow-lg px-5 py-4'>
              <h1 className='text-2xl font-semibold'>Admin</h1>
            </div>
            <form className='px-10 py-4'>
              <div className="username mb-3">
                <h3>Username</h3>
                <input type='text' className='w-full mr-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Please input username'/>
              </div>
              <div className="password mb-3">
                <h3>Password</h3>
                <input type='text' className='w-full mr-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Please input password'/>
              </div>
              <button onClick={() => navigate('/')} className='bg-primary text-white rounded-lg text-lg w-full py-1'>Masuk</button>
            </form>
        </div>
    </div>
  )
}

export default Auth