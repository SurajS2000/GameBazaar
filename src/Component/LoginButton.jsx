import React from 'react'
import { Link } from 'react-router-dom'

const LoginButton = () => {
  return (
    <Link to='/login' className='p-2 rounded-lg hover:bg-cyan-400 text-nowrap hover:text-slate-100 hover:cursor-pointer'>
      <i className="fa-regular fa-user pr-2"></i>
      Login
      </Link>
  )
}

export default LoginButton
