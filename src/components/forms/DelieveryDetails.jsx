import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../../Firebase';
import DangerAlert from '../alert/DangerAlert';
import Done from '../lottie/Done';
import { useNavigate } from 'react-router-dom';

function DelieveryDetails({className, click, setDelieveryDetails}) {

  const [anim, setAnim]=useState(false)
  const [alert, setAlert] = useState(false)
  const navigate =useNavigate()


  const [name, setName]=useState('')
    const [num, setNum]=useState('')
    const [addr, setAddr]=useState('')
    const [pin, setPin]=useState('')

  const order= async()=>{
    if(name === '' || num === '' || addr === '' || pin === ''){
        setAlert(true)
        
    }else{
    // setAnim(!anim)
    
    // setTimeout(() => {
    //     navigate('/')
    // }, 3000);
    // try {
    //     await setDoc(doc(db, "users", userData.uid), {order:{date:serverTimestamp(),dd:{name: name, contact: num, address:addr, pin:pin}}},);
    //     setAnim(!anim)
        
    // } catch (error) {
    //     console.log(error);
    // }
      setDelieveryDetails({name:name, number:num,address:addr,pin:pin})
      click()
}
}

  return (
    <div>
       
      <div className={`outer fixed  top-0 left-0 z-[10] h-full w-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-60 ${className}`}>
      <div onClick={click} className=' absolute left-0 top-0 w-full h-full z-[11]'></div>
        <div className="form   z-[12] rounded-xl p-4 flex w-full m-5  bg-white md:w-[30%]">
           
           {/* items  */} <div className=" my-8 items-stretch flex h-[400px] rounded-3xl p-4  flex-col justify-center ">
      {alert===true && <DangerAlert title='Alert' message='Kindly fill all the fields'/>}
                <div className=' m-auto w-full md:mx-5'>
                    <label for="Name" className=" text-2xl font-bold m-5 ">Name:</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type='Name' name='Name' placeholder='your name' className=' w-full border-2 p-2 rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <div className=' m-auto w-full md:mx-5'>
                    <label for="num" className=" text-2xl font-bold m-5 ">Number:</label>
                    <input onChange={(e)=>{setNum(e.target.value)}} type='num' name='num' placeholder='your number' className=' w-full border-2 p-2 rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <div className=' m-auto w-full md:mx-5'>
                    <label for="PIN Code" className=" text-2xl font-bold m-5 ">PIN Code:</label>
                    <input onChange={(e)=>{setPin(e.target.value)}} type='PIN Code' name='PIN Code' placeholder='your Pincode' className=' border-2 p-2 grow w-full rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <div className=' m-auto w-full md:mx-5'>
                    <label for="Address" className=" text-2xl font-bold m-5 ">Adress:</label>
                    <input onChange={(e)=>{setAddr(e.target.value)}} type='Adress' name='Adress' placeholder='your adress' className=' w-full border-2 p-2 rounded-md hover:bg-white hover:text-indigo-500 text-xl text-center'></input>
                </div>
                <button onClick={order} className=' border-2 p-2 font-semibold md:mx-5 duration-150 text-2xl bg-indigo-500 rounded-2xl mt-3 border-blue-700 hover:bg-white'> Order Now </button>

                <Done className={anim? 'block':'hidden'}/>
    </div>

        </div>
      </div>
    </div>
  )
}

export default DelieveryDetails

