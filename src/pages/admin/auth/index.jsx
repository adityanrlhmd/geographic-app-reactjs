import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset } from '../../../store/auth/authSlice'

function Auth() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { username, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/admin')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    // const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      username,
      password,
    }

    dispatch(login(userData))
  }

  // if (isLoading) {
  //   return <Spinner />
  // }
  // const navigate = useNavigate();
  return (
    <div className=' bg-sky-100 h-screen flex justify-center items-center'>
        <div className='bg-white rounded-2xl p-4 shadow-lg container mx-auto max-w-sm'>
            <div className='bg-sky-900 text-white rounded-2xl -mt-10 shadow-lg px-5 py-4'>
              <h1 className='text-2xl font-semibold'>Admin</h1>
            </div>
            <form onSubmit={onSubmit} className='px-10 py-4'>
              <div className="username mb-3">
                <h3>Username</h3>
                <input type='text' className='w-full mr-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Please input username' id='username'
              name='username' value={username} onChange={onChange}/>
              </div>
              <div className="password mb-5">
                <h3>Password</h3>
                <input type='password' className='w-full mr-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' placeholder='Please input password' id='password'
              name='password' value={password} onChange={onChange}/>
              </div>
              <button type='submit' className='bg-primary text-white rounded-lg text-lg w-full py-1' >Masuk</button>
            </form>
        </div>
    </div>
  )
}

export default Auth