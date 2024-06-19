import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase';
import { useSelector } from 'react-redux';

function CartLayout() {

    const userdata= useSelector(state => state.auth.userData)

    const [cartPro, setCartPro] = useState([]);

    useEffect(()=>{
      console.log("hi");
      const fetch = ()=>{
      try {
      const q =  query(collection(db, "users",userdata.uid,"cartProduct"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
 
  const docsData=querySnapshot.docs.map((doc) =>( {
    id: doc.id,  
    ...doc.data()
  }));
  setCartPro(docsData)
  console.log(cartPro);
 
  });

} catch (error) {
        
}}
fetch()
    },[userdata])
    
    
  return (
    <div>
      <div className=' w-full h-64 bg-slate-400'><img src=''/></div>
      <div className="outer-wrapper px-10 flex flex-col py-[80px]">
        <div className='heading text-2xl font-bold m-auto '> Your Cart List:</div>

        <div className="list-wrapper mb-2 rounded-xl ">
          
              {cartPro.map((item,index)=>(
                  <div key={index} className="list-item w-full bg-white shadow-lg px-52 py-3 rounded-2xl ">
                <div className='flex justify-between'> <div className="img w-20 h-20">
                 <img src={item.image } alt="" className=' rounded-2xl'/>
               </div >
              
               <div className="name">
                {item.name}
               </div>

               <div className="price">
                ₹{item.price}
               </div>

               <div className="quantity">
                X {item.reqQuantity}
               </div>
               </div>
               </div>
              ))}
               
           
        </div>
      </div>
    </div>
  )
}

export default CartLayout
