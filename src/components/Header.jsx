import React, { useState } from 'react'
import { FaTree, FaBars } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import SignUp from './forms/SignUp';
import AddProductBTN from './forms/AddProductBTN';
import AccForm from './forms/AccForm';
import TrackForm from './forms/TrackForm';


function Header() {
  const [signD, setSignD]= useState(false)
  const [trackOpn, setTrackOpn]= useState(false)
  const [accOpn, setAccOpn]= useState(false)
  const [addOpn, setAddOpn]= useState(false)
  const [open, setopen]=useState(false)
  const container = (delay)=>({
    hidden: {y:-100, opacity:0},
    visible: {y: 0, opacity: 1,
      transition:{
        duration:0.5,
        delay: delay
      }
    }
  })
  const navigate = useNavigate()
  const admincheck=useSelector(state=>(state.auth.isAdmin))
  const userStatus=useSelector(state=>(state.auth.loginStatus))
  const userData=useSelector(state=>(state.auth.userData))




  return (
    <>
    <div className=' fixed z-[999]  flex h-12 justify-between w-full   '>
    <div className='bg-slate-600  px-10 py-1.5 justify-between z-[999] w-full flex  shadow-lg'>
        <div
        
         className="logo font-bold text-xl flex 
         items-center gap-5">
          <motion.span
          variants={container(0.1)}
          initial='hidden'
          animate='visible'>
          <img src="logo.png" className=' w-[40px] scale-[3]' alt="" />
          </motion.span>
          <motion.span
         variants={container(0.2)}
         initial='hidden'
         animate='visible'

         className=' text-white'
         >Vlogger Food</motion.span></div>

         <FaBars onClick={()=>{setopen(!open)}} className=' text-white text-xl md:hidden'/>
         </div>
         
        <div className={`items z-[25] shadow-lg flex md:static absolute flex-col left-0 bg-slate-600 w-full md:py-0 md:w-fit py-4 rounded-b-xl md:rounded-b-none transition-all duration-1000 ease-in-out md:flex-row   gap-5 items-center ${open? 'top-12':'top-[-420px]'}`}>

        {[{name:"Home", path:'/'}, ].map((item, index)=>(
       <>
      
            <motion.div
            variants={container((index/10)+0.4)}
            initial='hidden'
            animate='visible'
             onClick={()=>{ navigate(item.path)
              setopen(!open)
             }} className={` cursor-pointer text-md ${index===4 && 'md:ml-20 text-black bg-gray-400  px-4 py-2 flex md:items-center rounded-full hover:text-black m-auto '}  text-white
             whitespace-nowrap`}>{item.name}</motion.div>
            </>
        ))} 
        {/* add btn */}
        {admincheck===true && <motion.div
            variants={container(1)}
            initial='hidden'
            animate='visible'
             onClick={()=>{ 
              setAddOpn(!addOpn)
              
              setopen(!open)
             }} className={` cursor-pointer text-md   text-white
             whitespace-nowrap`}>Add</motion.div>}
             {/* track btn */}
        { <motion.div
            variants={container(1.2)}
            initial='hidden'
            animate='visible'
             onClick={()=>{ 
              setTrackOpn(!trackOpn)
              
              setopen(!open)
             }} className={` cursor-pointer text-md   text-white
             whitespace-nowrap`}>Track Orders</motion.div>}

          {userStatus===false && <button onClick={()=>{setSignD(!signD)
            setopen(!open)
          }} className=' text-lg font-semibold h-10 whitespace-nowrap rounded-full text-gray-700 ml-8 mr-5 bg-white px-3 py2'>Sign In</button>}

          {(userStatus===true && userData?.avatar !== '' ) && <div onClick={()=>{setAccOpn(!accOpn)
            setopen(!open)
          }} className=' bg-black w-[25px] h-[25px] rounded-full border-[3px] border-gray-500 shadow-xl  ml-8 mr-5 flex justify-center items-center'><img className=' rounded-full object-cover w-[25px] h-[25px]' src={userData?.avatar} alt="user" /></div>}
        </div>

      <AddProductBTN click={()=>{setAddOpn(!addOpn)}} className={`${addOpn===true? 'block':'hidden'}`}/>
       <SignUp click={()=>{
            setSignD(!signD)
            }} className={`${signD? 'block':'hidden'}`}/>

            <AccForm className={`${accOpn? 'block':'hidden'}`} click={()=>setAccOpn(!accOpn)}/>
              <TrackForm className={`${trackOpn? 'block':'hidden'}`} click={()=>setTrackOpn(!trackOpn)}/>

        </div>


    </>
   
  )
}

export default Header
