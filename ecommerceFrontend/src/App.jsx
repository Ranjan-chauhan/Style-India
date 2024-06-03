// import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/Navbar'
import Hompage from './components/pages/Homepage/Hompage'
import Product from './components/product/Product'
import ProductDetails from './components/product/ProductDetails'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />    

      <div>
        {/* <Hompage/> */}
        {/* <Product /> */}
        <ProductDetails/>
        <Footer/>
      </div>

    </div>
    </>
  )
}

export default App
