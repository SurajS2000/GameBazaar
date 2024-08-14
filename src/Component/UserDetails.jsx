import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const UserDetails = () => {
  const { User, setUser } = useContext(UserContext);
  const [show, setshow] = useState(false);
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <img onClick={()=>{setshow(prev => !prev)}} className="w-14 rounded-full" src={User.photoURL} alt="" />
      <div className={`fixed right-10 top-16 w-80 h-40 bg-cyan-100 rounded-md ${show ? '':'hidden'}`}>
        <div className="flex gap-5 items-center p-5">
          <img className="w-16 rounded-full" src={User.photoURL} alt="" />
          <span className="text-xl text-gray-900 font-bold">
            {User.displayName}
          </span>
        </div>
        <div className="w-full flex justify-center">
          <div
            onClick={logout}
            className="bg-cyan-300 p-2 rounded text-lg font-semibold cursor-pointer"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span className="pl-2">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
