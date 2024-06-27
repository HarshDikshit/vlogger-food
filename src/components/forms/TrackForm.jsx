import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase';
import { useSelector } from 'react-redux';

function TrackForm({
    click,
    className
}) {
  const [data, setData] = useState([])

  const userdata= useSelector(state => state.auth.userData)

  useEffect(()=>{
    try {
      const q = query(collection(db,'users',userdata.uid,'order'));
      const unsubscribe = onSnapshot(q, async (querySnapshot) => {
     
      const docsData= await querySnapshot.docs.map((doc) =>( {
        id: doc.id,
        ...doc.data()
      }));
      setData(docsData)
     
      });
    } catch (error) {
      
    }
   

 
  },[])
  return (
    <div>
      <div>
       
       <div className={`outer fixed  top-0 left-0 z-[10] h-full w-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-60 ${className}`}>
       <div onClick={click} className=' absolute left-0 top-0 w-full h-full z-[11]'></div>
         <div className="form   z-[12] rounded-xl m-4 flex  bg-white ">
             <div className="items w-full gap-5 m-auto flex flex-col items-center ">
             <div className=' flex flex-col gap-4 my-3'>
        
            {data.map((item, index)=>(
              <div key={index} className='px-3 py-3 shadow-lg mx-3 bg-slate-400 rounded-2xl '>
        <div className=' p-4 flex-wrap flex justify-between items-center py-11 bg-slate-700 rounded-2xl hover:scale-110 duration-200'>
              <h2 className='font-bold text-white'>Name: {item?.delieveryDetail?.name}</h2>
              <h2 className='font-bold text-white'>Tracking id: {item.id}</h2>
              <h2 className='font-bold text-white'>Total: {item.totalAmount}/-</h2>
              <h2 className='font-bold text-white'>Status:<div className='font-bold text-yellow-500'>{item.status}</div></h2>
              
            
              </div>
    </div>
            ))}
            
      
    </div>

                
             </div>
         </div>
       </div>
     </div>
    </div>
  )
}

export default TrackForm
