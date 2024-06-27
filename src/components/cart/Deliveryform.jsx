import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../../../Firebase'
import { doc, serverTimestamp } from 'firebase/firestore'
import Done from '../lottie/Done'
import { useNavigate } from 'react-router-dom'
import DangerAlert from '../alert/DangerAlert'

function Deliveryform({className, click}) {
    const userStatus=useSelector(state=>(state.auth.loginStatus))
    const userData=useSelector(state=>(state.auth.userData))

    const [name, setName]=useState('')
    const [num, setNum]=useState('')
    const [addr, setAddr]=useState('')
    const [pin, setPin]=useState('')

    const [anim, setAnim]=useState(false)
    const [alert, setAlert] = useState(false)
    const navigate =useNavigate()


    const order= async()=>{
        if(name === '' || num === '' || addr === '' || pin === ''){
            setAlert(true)
            
        }else{
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
    }
  return (
    <div className=" my-8 items-stretch flex h-[400px] rounded-3xl p-4  flex-col justify-center ">
      {alert===true && <DangerAlert title='Alert' message='Kindly fill all the fields'/>}
                <div className=' m-auto w-full md:mx-5'>
                    <label for="Name" className=" text-2xl font-bold m-5 ">Name:</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type='Name' name='Name' placeholder='your name' className=' border-2 p-2 rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <div className=' m-auto w-full md:mx-5'>
                    <label for="num" className=" text-2xl font-bold m-5 ">Number:</label>
                    <input onChange={(e)=>{setNum(e.target.value)}} type='num' name='num' placeholder='your number' className=' border-2 p-2 rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <div className=' m-auto w-full md:mx-5'>
                    <label for="PIN Code" className=" text-2xl font-bold m-5 ">PIN Code:</label>
                    <input onChange={(e)=>{setPin(e.target.value)}} type='PIN Code' name='PIN Code' placeholder='your Pincode' className=' border-2 p-2 grow w-full rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <div className=' m-auto w-full md:mx-5'>
                    <label for="Address" className=" text-2xl font-bold m-5 ">Adress:</label>
                    <input onChange={(e)=>{setAddr(e.target.value)}} type='Adress' name='Adress' placeholder='your adress' className=' border-2 p-2 rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <button onClick={order} className=' border-2 p-2 font-semibold md:mx-5 duration-150 text-2xl bg-indigo-500 rounded-2xl border-blue-700 hover:bg-white'> Order Now </button>

                <Done className={anim? 'block':'hidden'}/>
    </div>
  )
}

export default Deliveryform