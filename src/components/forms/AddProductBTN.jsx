import React, { useState } from 'react'
import { db, storage } from '../../../Firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import {v4} from 'uuid'
import { Firestore, addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'

function AddProductBTN() {
    const [name, setName]= useState('')
    const [price, setPrice]= useState('')
    const [des, setDes]= useState('')
    const [quantity, setQuantity]= useState('')
    const [category, setCategory]= useState('')
    const [file, setFile]= useState({
        file: null,
        path:''
    })

    const handleUpload= async()=>{
        if(file.file!==null){
            const storageRef = ref(storage,`productImage/${v4()}`)
            const uploadTask = uploadBytesResumable(storageRef, file.file);
            uploadTask.on('state_changed',(snapshot)=>{},(error)=>{}, ()=>{getDownloadURL(uploadTask.snapshot.ref)
                .then(async(url)=>{
                    
                    await addDoc(collection(db,'products'), {name: name, description: des,
                        quantity:quantity, category:category, image: url, price: price,
                        createdAt: serverTimestamp()
                    })
                }).catch(e=>{console.log(e);})
            })
            
        }
    }
  return (
    <div>
        <div className=' w-full bg-black h-full absolute z-[1]  opacity-60 backdrop-blur-lg flex justify-center items-center '></div>

            <div className="background absolute z-[5] flex items-center justify-center  w-full h-full">
                <div className="items-wrapper flex absolute m-auto 
             bg-white z-[5] py-6 rounded-2xl shadow-lg w-[50vh] px-3">
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
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}  >
                            <option value="breakfast">breakfast</option>
                            <option value="dinner">dinner</option>
                            <option value="snaks">snacks</option>
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
