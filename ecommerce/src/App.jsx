// import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hompage from './components/pages/Homepage/Hompage'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar />    

      <div>
        <Hompage/>
      </div>

    </div>
    </>
  )
}

export default App
