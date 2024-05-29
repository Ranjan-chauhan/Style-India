// import { useState } from 'react'
import Navigation from './components/navigation/Navigation'
import Hompage from './components/pages/Homepage/Hompage'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navigation />    

      <div>
        <Hompage/>
      </div>

    </div>
    </>
  )
}

export default App
