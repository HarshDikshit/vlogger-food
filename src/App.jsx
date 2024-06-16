import { useState } from 'react'
import Header from './components/Header'
import Landing from './components/home/Landing'
import Body from './components/home/Body'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Outlet/>
   <Footer/>

    </>
  )
}

export default App
