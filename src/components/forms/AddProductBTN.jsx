import React, { useState } from 'react'
import { db, storage } from '../../../Firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import {v4} from 'uuid'
import { Firestore, addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import Loading from '../lottie/Loading.jsx'
import Done from '../lottie/Done.jsx'

function AddProductBTN({
    click,
    className
}) {
    const [name, setName]= useState('')
    const [price, setPrice]= useState('')
    const [des, setDes]= useState('')
    const [quantity, setQuantity]= useState('')
    const [category, setCategory]= useState('snacks')
    const [loading, setLoading] = useState(false)
    const [file, setFile]= useState({
        file: null,
        path:''
    })

    const handleUpload= async()=>{
        
        if(file.file!==null){
            setLoading(true)
            const storageRef = ref(storage,`productImage/${v4()}`)
            const uploadTask = uploadBytesResumable(storageRef, file.file);
            uploadTask.on('state_changed',(snapshot)=>{},(error)=>{}, ()=>{getDownloadURL(uploadTask.snapshot.ref)
                .then(async(url)=>{
                    setLoading(false)
                    click()
                    await addDoc(collection(db,'products'), {name: name, description: des,
                        quantity:quantity, category:category, image: url, price: price,
                        createdAt: new Date().getTime()
                    })
                }).catch(e=>{
                    setLoading(false)
                    console.log(e);})
            })
            
        }
    }
  return (
    <div>
        
        {loading===true && <Loading className={`${loading===true? 'block': 'hidden'}`}/>}
<div className={`outer fixed  top-0 left-0 z-[10] h-full w-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-60 ${className}`}>
    <div onClick={click} className=' absolute left-0 top-0 w-full h-full z-[11]'></div>
    <div className="items-wrapper flex  m-auto 
            bg-white z-[20] py-6 rounded-2xl shadow-lg w-[50vh] px-3">
                    <div className="items m-auto">
                        <h1 className='heading text-2xl  capitalize font-bold '>Add form</h1>
                        <input type="text" className='name w-full mt-6 border-black border-[2px] rounded-lg p-1 ' placeholder='Enter name'  onChange={(e)=>{
                            setName(e.target.value)
                        }} /> 
                        

                        <input type="text" className='description w-full mt-6 border-black border-[2px] rounded-lg p-1 ' placeholder='Enter description'
                        onChange={(e)=>{
                            setDes(e.target.value)

                        }} />
                        <input type="number" className='quantity w-full mt-6 border-black border-[2px] rounded-lg p-1 ' placeholder='Price'
                        onChange={(e)=>{
                            setPrice(e.target.value)
                        }} />

                        <input type="number" className='quantity w-full mt-6 border-black border-[2px] rounded-lg p-1 ' placeholder='Max Quantity'
                        onChange={(e)=>{
                            setQuantity(e.target.value)
                        }} />
                        <select className=' w-full mt-6 border-black border-[2px] rounded-lg p-1 '
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}  >
                            <option value="breakfast">breakfast</option>
                            <option value="dinner">dinner</option>
                            <option value="snacks">snacks</option>
                            <option value="south">south</option>
                            <option value="fruits">fruits</option>
                            <option value="healthy">healthy</option>
                            <option value="italian">italian</option>
                            <option value="mexican">mexican</option>
                        </select>

                        <input type="file" 
                        name="" id="" accept='image/*' className=' w-full mt-6 border-black border-[2px] rounded-lg p-1 ' 
                        onChange={(e)=>{
                            setFile({file: e.target.files[0],
                            path: URL.createObjectURL(e.target.files[0])
                            })
                        }} />

                        <button onClick={handleUpload} className=' w-full mt-6 bg-black text-white  border-[2px] rounded-lg p-1'>Submit</button>
                          
                        
                    </div>
                </div>
                </div>
      </div>
    
  )
}

export default AddProductBTN
