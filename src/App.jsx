import { useState } from 'react'
import Header from './components/Header'
import Landing from './components/home/Landing'
import Body from './components/home/Body'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import CartBtn from './components/CartBtn'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' select-none'>
   <Header/>
   <CartBtn/>
   <Outlet/>
   <Footer/>

    </div>
  )
}

export default App
