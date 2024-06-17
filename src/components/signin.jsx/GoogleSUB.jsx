import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, db, provider } from '../../../Firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

function GoogleSUB() {
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
                    })
            }
        })
        .catch((error)=>{
            setError(error.message)
        })
    }
  return (
    <div>
        <button onClick={()=>handleSignUp()} className=' w-full h-[20px] flex px-3 py-2 bg-purple-500 border-purple-400 border-[] justify-center items-center'>Sign In With Google</button>
        {error!=='' && <span className=' text-red-500 mt-4'><span className=' font-semibold'>Error:</span>{error}</span>}
    </div>
  )
}

export default GoogleSUB
