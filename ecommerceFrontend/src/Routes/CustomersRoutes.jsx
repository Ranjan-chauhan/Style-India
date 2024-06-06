import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/Home/HomePage'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Product from '../components/product/Product'
import ProductDetails from '../components/product/ProductDetails'
import Cart from '../components/Cart/Cart'
import CheckOut from '../components/checkOut/CheckOut'
import Order from '../components/order/Order'
import OrederDetails from '../components/order/OrederDetails'

function CustomersRoutes() {
  return (
    <div>
        <div>
        <Navbar />    
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkOut' element={<CheckOut/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrederDetails/>}></Route>
        </Routes>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomersRoutes