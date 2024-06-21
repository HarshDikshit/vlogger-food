import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../../Firebase'
import { doc, serverTimestamp } from 'firebase/firestore'
import Done from '../lottie/Done'
import { useNavigate } from 'react-router-dom'

function Deliveryform() {
    const userStatus=useSelector(state=>(state.auth.loginStatus))
    const userData=useSelector(state=>(state.auth.userData))

    const [name, setName]=useState('')
    const [num, setNum]=useState('')
    const [addr, setAddr]=useState('')
    const [pin, setPin]=useState('')

    const [anim, setAnim]=useState(false)
    const navigate =useNavigate()


    const order= async()=>{
        setAnim(!anim)
        
        setTimeout(() => {
            navigate('/')
        }, 3000);
        try {
            await setDoc(doc(db, "users", userData.uid), {order:{date:serverTimestamp(),dd:{name: name, contact: num, address:addr, pin:pin}}},);
            setAnim(!anim)
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="  ml-24 mb-8 items-center flex h-[400px] w-[550px] bg-yellow-600 rounded-3xl  flex-col justify-evenly ">
      
                <div>
                    <label for="Name" className=" text-2xl text-blue-50 font-bold m-5 ">Name:</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type='Name' name='Name' placeholder='your name' className=' border-2 p-2 rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <div>
                    <label for="num" className=" text-2xl text-blue-50 font-bold m-5 ">Number:</label>
                    <input onChange={(e)=>{setNum(e.target.value)}} type='num' name='num' placeholder='your number' className=' border-2 p-2 rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <div>
                    <label for="PIN Code" className=" text-2xl text-blue-50 font-bold m-5 ">PIN Code:</label>
                    <input onChange={(e)=>{setPin(e.target.value)}} type='PIN Code' name='PIN Code' placeholder='your Pincode' className=' border-2 p-2 rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <div>
                    <label for="Adress" className=" text-2xl text-blue-50 font-bold m-5 ">Adress:</label>
                    <input onChange={(e)=>{setAddr(e.target.value)}} type='Adress' name='Adress' placeholder='your adress' className=' border-2 p-2 rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <button onClick={order} className=' border-2 p-4 text-2xl bg-indigo-500 rounded-2xl border-blue-700 hover:bg-white'> Order Now </button>

                <Done className={anim? 'block':'hidden'}/>
    </div>
  )
}

export default Deliveryform