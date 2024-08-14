import React, { useState } from "react";
import logo from "../assets/logo2.png";
import googlelogo from "../assets/google-logo.png"
import {auth,googleProvider} from "../config/firebase"
import { signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const login = (e) =>{
    e.preventDefault();
       signInWithEmailAndPassword(auth, email, password).then((userdata)=>{
        console.log(userdata.user)
        navigate('/')
       })
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    })
  }
  const logingoogle= () =>{
    signInWithPopup(auth, googleProvider).then((result)=>{
      console.log(googleProvider.credentialFromResult(result))
      navigate('/')
    }).catch((error)=>{
      console.log(error)
    })
  } 
  return (
    <div className="flex justify-center items-center bg-slate-100 h-screen">
      <div className="flex rounded-lg border-2  border-cyan-200 overflow-hidden">
        <div className="p-5 flex flex-col justify-center bg-white">
          <img className="w-36 mb-5" src={logo} alt="" />
          <p className="text-center text-lg text-slate-600">"The place where you could<br />sell and buy game accounts<br/>and game skins"</p>
        </div>
        <div className="p-5 bg-cyan-100 text-slate-600">
          <h1 className="text-3xl mb-6">Login</h1>
          <form onSubmit={login} className="flex flex-col">
            <label htmlFor="loginEmail">Email</label>
            <input autoComplete="off" onChange={(e) => setEmail(e.target.value)} id="loginEmail" className="bg-cyan-100 border-b-2 border-cyan-400 mb-3 outline-none" type="email" />
            <label htmlFor="loginPass">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} id="loginPass" className="bg-cyan-100 border-b-2 border-cyan-400 outline-none" type="password" />
            <div className="flex justify-center w-full pt-5">
              <button type="submit" className="py-2 px-5 bg-cyan-400 rounded-lg text-xl text-slate-100">Log in</button>
            </div>
          </form>
          <div className="w-full text-center text-xl mt-4">
            <span>or</span>
          </div>
          <div className="w-full flex flex-col justify-center text-center">
            <div onClick={logingoogle} className="flex justify-center items-center bg-white p-1 rounded-md my-5 text-lg">
              <img className="w-8" src={googlelogo} alt="" />
              <span>google</span>
            </div>
           <Link className="" to='/signup' >don't have an account?</Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
