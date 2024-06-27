import React from 'react'
import {easeInOut, easeOut, motion} from 'framer-motion'


function Landing() {
const container = (delay)=>({
  hidden: {x:-50, opacity:0, },
  visible: {x: 0, opacity: 1,
    transition:{
      duration:1,
      delay: delay,
      ease: easeOut
    }
  }
})
return (
  <>
    <div className="wrapper relative w-full md:px-[100px]  flex flex-wrap ">

    <div className="left flex flex-col justify-center  w-full md:w-1/2  pt-[70px]">
          {["One Chai", "Please!", "Without Sugar"].map((item, index)=>(
            
            <motion.div
            whileInView='visible'
            variants={container(((index*9)/10)+0.8)}
            initial='hidden' 
              className={` m-auto md:m-0 whitespace-nowrap  font-[Oswald Regular] text-5xl md:text-7xl leading-relaxed font-bold ${index===9 && 'ml-[200px]'}`}>{item}</motion.div>
          ))}</div>
      

      <div className="right md:w-1/2 overflow-hidden z-[-1] w-full flex flex-col items-start justify-center  pt-[100px] ">
          <motion.img
          initial={{opacity:0, x:200}}
          whileInView={{opacity:1, x:0, 
            transition:{
              duration:1,
              delay:1
            }
          }}
           src="/img/download.png" className=' w-full h-[85vh] p-3 object-cover' alt="" />
      </div>
      </div>
  </>
)
}

export default Landing
