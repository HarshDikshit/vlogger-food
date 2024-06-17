import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCartValue } from '../../store/cartSlice';



function ATCB() {
    const [quantity, setQuantity] = useState(0)
    const dispatch =useDispatch();
    const cartVal = useSelector(state => state.cart.cartValue)

    useEffect(()=>{
        
    },[quantity])
    
  return (
    <div>
        <div className='btn-ID-wrapper select-none flex flex-col items-center justify-end'>
             { quantity===0 &&  <button onClick={()=>{
                        setQuantity(quantity+1)
                        dispatch(updateCartValue(Number.parseInt(cartVal)+1))
                    }} className={` px-2 py-2 rounded-lg bg-purple-500 text-white `}>Add to cart</button>}

              { quantity !== 0 && <div className={`  flex`}>
                    <div className="plus bg-black text-center text-white rounded-s-lg cursor-pointer  font-bold opacity-60 px-2 py-1"  onClick={()=>{
                        setQuantity(Number.parseInt(quantity)+1)

                        
                    }}>+</div>

                    <div type="number" className=' text-center bg-black opacity-30 text-white w-[50px] px-2 py-1' >{quantity} </div>

                    <div className="plus bg-black text-center text-white rounded-e-lg font-bold opacity-60 px-2 py-1 cursor-pointer" onClick={()=>{
                        quantity>=1 &&  setQuantity(quantity-1)
                        quantity===1 && dispatch(updateCartValue(Number.parseInt(cartVal)-1))
                        
                    }}>-</div>
                </div>
}
        </div>
    </div>
  )
}

export default ATCB
