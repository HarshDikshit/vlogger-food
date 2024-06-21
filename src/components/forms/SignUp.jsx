import React from 'react'
import GoogleSUB from '../signin.jsx/GoogleSUB'

function SignUp({
    click,
    className,
}) {
  return (
    <div>
       
      <div className={`outer fixed  top-0 left-0 z-[10] h-full w-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-60 ${className}`}>
      <div onClick={click} className=' absolute left-0 top-0 w-full h-full z-[11]'></div>
        <div className="form   z-[12] rounded-xl p-4 flex  bg-white md:w-[30%]">
            <div className="items z-[11] w-full gap-5 m-auto flex flex-col items-center ">
                <h1 className=' capitalize text-3xl text-black font-bold'>sign in</h1>
                <p>Let's sign in here and enjoy valueable offers,</p>
                <GoogleSUB click={click} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
