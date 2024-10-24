import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import DashBoard from './component/home/DashBoard/DashBoard'
import { Routes, Route } from 'react-router-dom'
import Product from './component/product/Product'
import ShoppingCart from './component/shoppingcart/ShoppingCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element= {<DashBoard />} />
        <Route path='/product' element= {<Product />} />
        <Route path='/cart' element= {<ShoppingCart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
