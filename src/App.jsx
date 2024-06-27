import { useEffect, useState } from 'react'
import Header from './components/Header'
import Landing from './components/home/Landing'
import Body from './components/home/Body'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import CartBtn from './components/CartBtn'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../Firebase'
import { useDispatch } from 'react-redux'
import { adminStatus, login } from './store/authSlice'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'



function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(()=>{

    try {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
          await onSnapshot(doc(db, "users", user.uid),async (doc) => {
          dispatch(login(doc.data()))
          console.log(doc.data());
          if(doc.data().isAdmin && doc.data().isAdmin===true){
            dispatch(adminStatus())
          }
      }); 
      } else {
        console.log('not logged in');
      }
      setLoading(false)
    });
  } catch (error) {
      setLoading(false)
  }
  },[])
  return loading? null  :  
   ( <div className=' select-none'>
   <Header/>
   <CartBtn/>
   <Outlet/>
   <Footer/>

    </div>
  )}


export default App
