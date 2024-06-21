import React from 'react'
import { useSelector } from 'react-redux'

function AccForm({
    className,
    click
}) {
    const userData=useSelector(state=>(state.auth.userData))
    const userStatus=useSelector(state=>(state.auth.loginStatus))
  return (
    <div>
      <div>
       
      {userStatus && <div className={`outer fixed  top-0 left-0 z-[10] h-full w-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-60 ${className}`}>
       <div onClick={click} className=' absolute left-0 top-0 w-full h-full z-[11]'></div>
         <div className="form   z-[12] rounded-xl p-4 flex  bg-white md:w-[30%]">
             <div className="items z-[11] w-full gap-5 m-auto flex flex-col items-center ">
             <img className=' hover:scale-110 duration-300 rounded-full m-8 h-40 border-[4px] border-gray-700 w-40 ' src={userData.avatar} alt="avatar" />
             <h2 className=' pt-5 font-bold text-xl'>Name: {userData.name}</h2> 
           <h2 className='pt-5 font-bold  text-xl'>Email: {userData.email}</h2>  
          </div>
        </div>
    
             
           
          
          </div>}
        </div>
    
             </div>
        
    
  )
}

export default AccForm
