import React, { useEffect, useState } from 'react'
import GoogleSUB from '../components/signin.jsx/GoogleSUB'
import { useParams } from 'react-router-dom'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { db } from '../../Firebase'
import ATCB from '../components/home/ATCB'

function Categories() {
  const {categories}= useParams()
  const userdata= useSelector(state => state.auth.userData)
  const [cartPro, setCartPro] = useState([]);

  useEffect(()=>{
    const fetch = async()=>{
    try {
      const q =await  query(collection(db, "products"), where('category','==',categories));
      const unsubscribe = await onSnapshot(q,async (querySnapshot) => {
 
      const docsData= await querySnapshot.docs.map((doc) =>( {
        id: doc.id, 
        ...doc.data()
      }));
  setCartPro(docsData)
  console.log(cartPro);
  
  });

} catch (error) {
}
    }
    fetch()
  },[userdata])
  return (
    <div className=' pt-28 px-20 flex flex-col  '>
      <div className=' m-auto font-bold text-5xl'>{categories}</div>
      <div className="outer-wrapper">
        <div className="item-wrapper flex gap-9 flex-wrap">
          {cartPro.map((item, index)=>(
            <div className="item p-3 rounded-2xl shadow-lg flex flex-col">
            <div>
              <img src={item.image} className=' w-[200px] h-[200px] rounded-2xl' alt="" />
            </div>
            <div className=' font-bold text-xl '>
              {item.name}
            </div>
            <div className=' font-bold text-xl '>
              ₹{item.price}
            </div>
            <ATCB docu={item} maxLimit={item.quantity}/>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Categories
