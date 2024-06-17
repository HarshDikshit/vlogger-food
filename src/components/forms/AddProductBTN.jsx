import React from 'react'

function AddProductBTN() {
  return (
    <>
        <div className=' w-full bg-black h-full absolute z-[1]  opacity-60 backdrop-blur-lg flex justify-center items-center '></div>

            <div className="background absolute z-[5] flex items-center justify-center  w-full h-full">
                <div className="items-wrapper flex absolute m-auto 
             bg-white z-[5] py-6 rounded-lg w-[50vh] px-3">
                    <div className="items m-auto">
                        <h1 className='heading text-2xl  capitalize font-bold '>Add form</h1>
                        <input type="text" className='name w-full mt-6 border-black border-[2px] rounded-lg p-1 ' placeholder='Enter name' />

                        <input type="text" className='description w-full mt-6 border-black border-[2px] rounded-lg p-1 ' placeholder='Enter description' />

                        <input type="number" className='quantity w-full mt-6 border-black border-[2px] rounded-lg p-1 ' placeholder='Max Quantity' />
                        <select className=' w-full mt-6 border-black border-[2px] rounded-lg p-1 ' placeholder='Enter name' >
                            it
                        </select>
                          
                        
                    </div>
                </div>
            </div>
        
    </>
  )
}

export default AddProductBTN
