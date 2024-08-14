import React from 'react'
import Signup from './pages/signup'
import Login from './pages/login'
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from './Pages/Product'
import Sell from './Pages/Sell'

const App = () => {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/sell" element={<Sell/>}/>
    </Routes>
  </Router>
  )
}

export default App

