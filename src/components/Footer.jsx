import React from 'react'
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter, FaSquareYoutube } from 'react-icons/fa6'

function Footer() {
  return (
    <>
        <div className='wrapper px-[100px] bg-slate-800 flex flex-col '>
            <div className="top m-auto mt-10 flex flex-col">
                <span className=' text-3xl m-auto text-white font-bold uppercase '>Useful Links</span>
                <div className=' w-[220px] h-[5px] bg-yellow-600 rounded-md mb-1'></div>

                {[{name:'special offers',route:'/so'  },{name:'About',route:'/about'},
                {name:'Login',route:'/so'  }
                ].map((item, index)=> (
                    <div className=" text-white m-auto font-semibold capitalize mt-2">{item.name}</div>
                ))}
            </div>

            
{/* help and support */}
<div className=" flex flex-col w-full justify-center mt-9 mb-3 px-8">

<div className=' flex flex-col justify-center items-center '>
<h1 className=' justify-self-center  text-indigo-500 uppercase font-bold text-2xl my-2'>Vloggers Food</h1>
<h5 className=' justify-self-center text-indigo-500  text-md '>You can visit our social media handles.</h5>

</div>

<div>
  <ul className=' text-gray-200 justify-center my-2 gap-2 flex   font-semibold'>
    <li><FaSquareFacebook className=' text-blue-300'/></li>
    <li><FaSquareTwitter className=' text-blue-300'/></li>
    <li><FaSquareInstagram className=' text-blue-300'/></li>
    <li><FaSquareYoutube className=' text-blue-300'/></li>
  </ul>
</div>

</div>



</div>
<div className=' flex flex-col justify-center items-center bg-slate-950 w-full py-3'>
  <p className=' flex justify-center items-center text-gray-300'>
  <span className=' font-bold pr-2'>Vloggers Food</span> &copy; Copyright 2024
  </p>
  </div>

        
    </>
  )
}

export default Footer
