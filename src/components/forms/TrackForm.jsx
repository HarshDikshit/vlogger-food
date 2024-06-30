import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { createRef, useEffect, useRef, useState } from 'react'
import { db } from '../../../Firebase';
import { useSelector } from 'react-redux';

import Bill from '../bill/Bill';
import html2pdf  from 'html2pdf.js';

function TrackForm({
    click,
    className
}) {
  const [data, setData] = useState([])

  const userdata= useSelector(state => state.auth.userData)
  const userStatus=useSelector(state=>(state.auth.loginStatus))

  // const billRef = useRef();
 
   const refs = useRef([])

  useEffect(()=>{
     try {
      const q = query(collection(db,'users',userdata?.uid,'order'));
       onSnapshot(q,(querySnapshot) => {
     
      const docsData= querySnapshot.docs.map((doc,index) =>( {
        id: doc.id,
        ...doc.data(),
        ref: refs.current[index] || React.createRef(),
       
      }));
      setData(docsData)
      refs.current = docsData.map((bill)=>bill.ref)
      });
    } catch (error) {
      
    }
  },[userdata])

  // handleBillDownload
  const handleDownloadBill = (ref, id)=>{
    const element = ref.current;
        const opt = { 
        margin: 1,
        filename: `Bill_${id}.pdf`, // Customize the filename here
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().from(element).set(opt).save();
   } 


  return (
    <div>
      <div>
       
       <div className={`outer fixed overflow-x-hidden overflow-y-auto top-0 left-0 z-[10] h-full w-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-60 ${className}`}>
       <div onClick={click} className=' absolute left-0 top-0 w-full h-full z-[11]'></div>
         <div className="form   z-[12] rounded-xl m-4 flex  bg-white ">
             <div className="items w-full gap-5 m-auto flex flex-col items-center ">

             <div className=' flex px-3 flex-col gap-4 my-3'>
              {data.length===0 && <div>No Orders Found</div>}
            {data.map((item, index)=>(
              <div key={index} className=' py-3 shadow-lg mx-3 bg-slate-400 rounded-2xl '>
        <div className=' p-4 flex-wrap flex gap-7 justify-between items-center py-11 bg-slate-700 rounded-2xl hover:scale-110 duration-200'>
              <h2 className='font-bold text-white'>Name: {item?.delieveryDetail?.name}</h2>
              <h2 className='font-bold text-white'>Tracking id: {item.id}</h2>
              <h2 className='font-bold text-white'>Total: {item.totalAmount}/-</h2>
              <h2 className='font-bold text-white'>Status:<div className='font-bold text-yellow-500'>{item.status}</div></h2>
              
              <div className="App">
                <div className="hidden">
                <Bill itemId={item.id} ref={item.ref} />
                </div>
                <button  onClick={() =>handleDownloadBill(item.ref,item.id)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Download Bill</button>
              </div>
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
