import React, { useContext } from 'react'
import logo from '../assets/logo2.png'
import { UserContext } from '../context/userContext'
import LoginButton from './LoginButton'
import UserDetails from './UserDetails'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const {User} = useContext(UserContext);
  const navigate = useNavigate();
  const redirect = () =>{
    if(User){
      navigate('/sell')
    }else{
      navigate('/login')
    }
  }
  return (
    <div className='bg-cyan-300 sticky top-0 w-full px-5 gap-5 py-2 flex items-center md:px-14 md:gap-14'>
      <img className='w-40 h-9 rounded-lg' src={logo} alt="" />
      <div className='flex w-full bg-white rounded-md overflow-hidden items-center'>
      <input className='py-1 pl-3 outline-none w-full' type="text" />
      <div className='px-2 hover:cursor-pointer'>
      <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      </div>
      {User ? <UserDetails/>:<LoginButton/>}
      <div onClick={redirect} className='px-4 py-1 border-2 border-cyan-100 rounded-2xl text-nowrap hover:cursor-pointer'>
      <i className="fa-solid fa-plus pr-2"></i>
      <span >SELL</span>
      </div>
    </div>
  )
}

export default Navbar
