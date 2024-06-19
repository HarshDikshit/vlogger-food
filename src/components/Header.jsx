import React from 'react'
import { FaTree } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

function Header() {
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
  return (
    <>
    <div className=' fixed z-[999] w-full py-1.5 px-10 bg-slate-600 flex justify-between shadow-lg '>

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

        <div className='items flex gap-5 items-center'>

        {[{name:"Home", path:'/'},{name:"Add", path:'/add', isAdmin:admincheck}, {name:"Contact Us", path:'/contact-us'}, {name:"Categories", path:'/categories'},{name:"Your Account", path:'/account'}].map((item, index)=>(
       <>
      
            <motion.div
            variants={container((index/10)+0.4)}
            initial='hidden'
            animate='visible'
             onClick={()=>{ navigate(item.path)}} className={` cursor-pointer text-md ${index===4 && 'ml-20 text-black bg-gray-400  px-4 py-2 flex items-center rounded-full hover:text-black '}  text-white
            ${(item.name==='Add' && item.isAdmin===false) && 'hidden'}`}>{item.name}</motion.div>
            </>
        ))} 
        </div>


    </div>

    </>
   
  )
}

export default Header
