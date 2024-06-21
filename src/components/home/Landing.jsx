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
    <div className="wrapper w-full px-[100px] flex flex-wrap ">

    <div className=" flex flex-col w-[50%]  pt-[200px]">
          {["One Chai", "Please!", "Without Sugar"].map((item, index)=>(
            
            <motion.div
            whileInView='visible'
            variants={container(((index*9)/10)+0.8)}
            initial='hidden' 
              className={` font-[Oswald Regular] text-7xl leading-tight font-bold ${index===9 && 'ml-[200px]'}`}>{item}</motion.div>
          ))}</div>
      

      <div className="right w-[50%] flex  flex-wrap items-start justify-center  pt-[100px] ">
          <motion.img
          initial={{opacity:0,}}
          whileInView={{opacity:1, 
            transition:{
              duration:1,
              delay:1
            }
          }}
           src="download.png" className=' w-full h-[85vh] p-3 object-cover' alt="" />
      </div>
      </div>
  </>
)
}

export default Landing
