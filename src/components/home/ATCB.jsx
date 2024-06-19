/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCartValue } from '../../store/cartSlice';
import { arrayUnion, deleteDoc, deleteField, doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';



function ATCB({
    maxLimit,
    docu
}) {
    const [quantity, setQuantity] = useState(0)
    const dispatch =useDispatch();
    const cartVal = useSelector(state => state.cart.cartValue)
    const userdata= useSelector(state => state.auth.userData)
    const loginStatus= useSelector(state => state.auth.loginStatus)


    useEffect(()=>{
        
        loginStatus===true && onSnapshot(doc(db, "users", userdata.uid,'cartProduct',docu.id), (cartDoc) => {
            setQuantity(cartDoc.data().reqQuantity)
            dispatch(updateCartValue(Object.keys(cartDoc.data().cartProduct).length))
        });
        try {
            if(quantity>0){
        setDoc(doc(db,'users',userdata.uid,'cartProduct',docu.id),{reqQuantity:quantity,...docu}, {merge:true})
     }else {
     } 
    } catch (error) {
            
    }
    },[quantity])
    
  return (
    <div>
        <div className='btn-ID-wrapper select-none flex flex-col items-center justify-end'>
             { quantity===0 &&  <button onClick={()=>{
                        setQuantity(quantity+1)
                        dispatch(updateCartValue(Number.parseInt(cartVal)+1))
                    }} className={` px-2 py-2 rounded-lg  bg-black text-white flex `}> Add to cart</button>}

              { quantity !== 0 && <div className={`  flex`}>
                    <div className="plus bg-black text-center text-white rounded-s-lg cursor-pointer  font-bold opacity-60 px-2 py-1"  onClick={async()=>{

                        quantity<maxLimit && setQuantity(Number.parseInt(quantity)+1)
                    }}>+</div>

                    <div type="number" className=' text-center bg-black opacity-30 text-white w-[50px] px-2 py-1' >{quantity} </div>

                    <div className="plus bg-black text-center text-white rounded-e-lg font-bold opacity-60 px-2 py-1 cursor-pointer" onClick={async()=>{
                        quantity>=1 &&  setQuantity(quantity-1)
                        quantity===1 && dispatch(updateCartValue(Number.parseInt(cartVal)-1))
                    
                        quantity===1 &&( await deleteDoc(doc(db,'users',userdata.uid,'cartProduct',docu.id)))
                        
                    }}>-</div>
                </div>
}
        </div>
    </div>
  )
}

export default ATCB
