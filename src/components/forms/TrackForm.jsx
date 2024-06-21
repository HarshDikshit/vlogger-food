import React from 'react'

function TrackForm({
    click,
    className
}) {
  return (
    <div>
      <div>
       
       <div className={`outer fixed  top-0 left-0 z-[10] h-full w-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-60 ${className}`}>
       <div onClick={click} className=' absolute left-0 top-0 w-full h-full z-[11]'></div>
         <div className="form   z-[12] rounded-xl p-4 flex  bg-white ">
             <div className="items z-[11] w-full gap-5 m-auto flex flex-col items-center ">
             <div className='pt-28 px-16'>
        <div className='px-3 py-3 bg-slate-400 rounded-2xl '>
        <div className='pl-28 flex gap-24 py-11 bg-slate-700 rounded-2xl hover:scale-110 duration-200'>
            
        <h2 className='font-bold text-white'>Name: manas agrawal</h2>
        <h2 className='font-bold text-white'>Tracking id: 456485</h2>
        <h2 className='font-bold text-white'>Total: 400/-</h2>
        <h2 className='font-bold text-white'>Status: </h2><div className='font-bold text-yellow-500'>pending....</div>       
        </div>
    </div>
    </div>

                
             </div>
         </div>
       </div>
     </div>
    </div>
  )
}

export default TrackForm
