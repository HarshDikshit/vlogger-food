import { signOut } from 'firebase/auth'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../../Firebase'
import {logOut} from '../../store/authSlice.js'

function AccForm({
    className,
    click
}) {
    const userData=useSelector(state=>(state.auth.userData))
    const userStatus=useSelector(state=>(state.auth.loginStatus))
    const dispatch = useDispatch()
  return (
    <div>
      <div>
       
      {userStatus && <div className={`outer fixed  top-0 left-0 z-[10] h-full w-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-60 ${className}`}>
       <div onClick={click} className=' absolute left-0 top-0 w-full h-full z-[11]'></div>
         <div className="form   z-[12] rounded-xl p-4 flex  bg-white md:w-[30%]">
             <div className="items z-[11] w-full gap-5 m-auto flex flex-col items-center ">
             <img className=' hover:scale-110 duration-300 rounded-full h-30 w-30 inline whitespace-nowrap m-8 md:h-40 border-[4px] border-gray-700 md:w-40 ' src={userData?.avatar} alt="avatar" />
             <h2 className=' pt-5 font-bold text-xl'>Name: {userData?.name}</h2> 
           <h2 className='pt-5 font-bold  text-xl'>Email: {userData?.email}</h2>  
           <button className=' px-3 py-2 bg-indigo-700 rounded-xl shadow-lg hover:bg-indigo-500 text-white font-semibold' onClick={()=>{
            signOut(auth).then(() => {
              dispatch(logOut())
            }).catch((error) => {
              // An error happened.
            });
           }}>Logout</button>
          </div>
        </div>
    
             
           
          
          </div>}
        </div>
    
             </div>
        
    
  )
}

export default AccForm
