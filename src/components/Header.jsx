import React from 'react'
import { FaTree } from "react-icons/fa6";

function Header() {
  return (
    <>
    <div className=' fixed z-[999] w-full py-1.5 px-10 bg-purple-400 flex justify-between shadow-lg '>

        <div className="logo font-bold text-xl flex 
         items-center gap-5"><FaTree className=' text-red-500'/> logo</div>

        <div className='items flex gap-5 items-center'>
        {["About", "Contact Us", "Links","Gallery", "Sign In"].map((item, index)=>(
           
            <div className={` cursor-pointer text-md ${index===4 && 'ml-20 bg-white px-4 py-2 flex items-center rounded-full hover:bg-purple-300 hover:text-white '}`}>{item}</div>
        ))}
        </div>


    </div>

    </>
   
  )
}

export default Header
