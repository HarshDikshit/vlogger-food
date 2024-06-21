import Lottie from 'lottie-react'
import React from 'react'
import animationData from '../../lottieFile/done.json'

function Done({className}) {
  return (

    <div className={`${className} z-[20] backdrop-blur-sm bg-black bg-opacity-60 h-full w-full fixed top-0 left-0 justify-center items-center flex`}>
            <Lottie animationData={animationData} loop={true} style={{width:'500px',height:'500px', }}/>
    </div>
  )
}

export default Done
