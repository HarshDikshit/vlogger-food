import React from 'react'
import ATCB from './ATCB'

function Body() {
  return (
    <>
      <div className=' mt-10 rounded-t-lg  flex flex-col px-10 py-3 bg-slate-600 '>
        <h1 className=' text-3xl font-semibold m-auto flex '>About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error maxime obcaecati accusantium illo iusto repudiandae voluptatum fugiat voluptates quis!</p>
        <div  className=' flex gap-5 p-3'>
        <div className=' p-3 flex flex-col rounded-md w-full my-5 bg-white ' >
          <img src="download.jpeg" alt="" /><h1 className='text-xl font-semibold m-auto '>Rasgulla</h1><p className=' m-auto'> Lorem ipsum dolor sit amet.</p>
          <div className='btn-ID-wrapper flex items-center justify-end'>
                <ATCB/>
          </div>
        </div>
        <div className=' p-3 flex flex-col rounded-md w-full my-5 bg-white '>
          <img src="download.jpeg" alt="" /><h1 className='text-xl font-semibold m-auto '>Rasgulla</h1><p className=' m-auto'> Lorem ipsum dolor sit amet.</p>

          <div className='btn-ID-wrapper flex items-center justify-end'>
                <ATCB/>
          </div>
        </div>
        <div className=' p-3 flex flex-col rounded-md w-full my-5 bg-white '>
          <img src="download.jpeg" alt="" /><h1 className='text-xl font-semibold m-auto '>Rasgulla</h1><p className=' m-auto'> Lorem ipsum dolor sit amet.</p>
          <div className='btn-ID-wrapper flex items-center justify-end'>
                <ATCB/>
          </div>
        </div>
        
        </div>
      </div>
    </>
  )
}

export default Body
