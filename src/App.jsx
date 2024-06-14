import { useState } from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import Body from './components/Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Landing/>
   <Body/>

    </>
  )
}

export default App
