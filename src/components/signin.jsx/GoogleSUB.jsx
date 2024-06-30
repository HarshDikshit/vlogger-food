import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db, provider, } from '../../../Firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import {FaGoogle} from 'react-icons/fa6'

function GoogleSUB({click}) {
    const [error, setError]= useState('')
    const handleSignUp= async ()=>{
        await signInWithPopup(auth, provider)
        .then(async(result)=>{
            const user = result.user;
            const userDocRef = doc(db,'users', user.uid)
            const userDoc =await getDoc(userDocRef);

            if(userDoc.exists()){
                //user already exists
            }else{
                await setDoc(userDocRef,
                    {uid: user.uid,
                    name: user.displayName,
                    avatar: user.photoURL,
                    email: user.email,
                    })
            }
            click()
        })
        .catch((error)=>{
            setError(error.message)
        })
    }
  return (
    <div>
        <button onClick={()=>handleSignUp()} className=' hover:bg-purple-950 border-purple-400 border-[3px] rounded-lg w-full h-[20px] flex px-5 py-5 bg-purple-800   text-white font-semibold justify-center text-xl gap-5 items-center'>
            <FaGoogle/>Sign In With Google</button>
        {error!=='' && <span className=' text-red-500 mt-4'><span className=' font-semibold'>Error:</span>{error}</span>}
    </div>
  )
}

export default GoogleSUB
