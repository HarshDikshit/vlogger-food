import React from 'react'
import { FaTree } from "react-icons/fa6";
import { Navigate, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  return (
    <>
    <div className=' fixed z-[999] w-full py-1.5 px-10 bg-purple-400 flex justify-between shadow-lg '>

        <div className="logo font-bold text-xl flex 
         items-center gap-5"><FaTree className=' text-red-500'/> logo</div>

        <div className='items flex gap-5 items-center'>
        {[{name:"Home", path:'/'},{name:"About", path:'/about'}, {name:"Contact Us", path:'/contact-us'}, {name:"Categories", path:'/categories'},{name:"Your Account", path:'/account'}].map((item, index)=>(
       <>
      
            <div onClick={()=>{ navigate(item.path)}} className={` cursor-pointer text-md ${index===4 && 'ml-20 bg-white px-4 py-2 flex items-center rounded-full hover:bg-purple-300 hover:text-white '}`}>{item.name}</div>
            </>
        ))} 
        </div>


    </div>

    </>
   
  )
}

export default Header
