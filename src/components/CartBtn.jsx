import React from 'react'
import {FaCartShopping, FaCartFlatbed, FaBasketShopping, FaCaretUp} from 'react-icons/fa6'
import {useDispatch, useSelector} from 'react-redux'
import { updateCartValue } from '../store/cartSlice'
import { useNavigate } from 'react-router-dom'



function CartBtn() {
  const navigate= useNavigate()
  const cartVal = useSelector(state => state.cart.cartValue)
  return (
    <div>
        <div onClick={()=>(navigate('/cart'))} className=' fixed p-4 right-10 bottom-10 rounded-full flex flex-col items-center justify-center bg-transparent '>
            <span className=' absolute text-black text-center font-bold z-[999] top-9  left-10   text-2xl'>{cartVal}</span>
            <img src="cart.png" className='  object-cover  scale-[2] w-16 ' alt="icon" />
        </div>
    </div>
  )
}

export default CartBtn
