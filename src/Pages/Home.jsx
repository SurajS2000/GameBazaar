import React, { useContext, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Catagory from "../Component/Catagory";
import MidSec from "../Component/MidSec";
import Footer from "../Component/Footer";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { UserContext } from "../context/userContext";

const Home = () => {
  const {User,setUser} = useContext(UserContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [User]);
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Catagory />
      <MidSec />
      <Footer />
    </div>
  );
};

export default Home;
