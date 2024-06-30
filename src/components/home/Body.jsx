import React, { useEffect, useState } from 'react'
import ATCB from './ATCB'
import { collection, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../../Firebase';
import { useSelector } from 'react-redux';
import { easeInOut, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SignUp from '../forms/SignUp';

function Body() {
  const navigate =useNavigate()
  const [data, setData] = useState([])
  const [signOpn, setSignOpn] = useState(false)

  const container = (delay)=>({
    hidden: {y:-100, opacity:0, scale:1},
    hidden2:{y:-30, opacity:0, scale:1},
    visible:{y: 0, opacity: 1,
      transition:{
        duration:0.4,
        delay: delay,
        ease: easeInOut
      }
    },
    hover: {
      scale:0.8,
      transition:{
        duration:0.5,
        
      }
    }

  })

  const userData= useSelector((state)=>(state.auth.userData))
  const admincheck=useSelector(state=>(state.auth.isAdmin))

  
  useEffect(()=>{
    const q = query(collection(db, "products"), limit(6), orderBy('createdAt', 'desc'));
  const unsubscribe = onSnapshot(q, async (querySnapshot) => {
 
  const docsData= await querySnapshot.docs.map((doc) =>( {
    id: doc.id,
    ...doc.data()
  }));
  setData(docsData)
 
  });

 
  },[])

  
  return (
    <>
            

      <div className='w-full overflow-hidden rounded-t-lg flex flex-col flex-wrap p-2 md:px-10 py-3 bg-slate-600 text-white '>
      <SignUp click={()=> setSignOpn(!signOpn)} className={`${signOpn? 'block':'hidden'}`} />
        
        <div className='categories px-0 space-x-5 max-w-full  overflow-x-auto overflow-y-hidden flex justify-between items-center py-5 md:px-10'>
          {
            [{url:'burger.png', txt:'breakfast'},
              {url:'taco.png', txt:'dinner'},
              {url:'burito.png', txt:'south'},{ url:'cherry.png', txt:'fruits'}, {url:'frenchFries.png', txt:'snacks'},{url:'orange.png', txt:'healthy'},{url:'pizza1.png', txt:'italian'}, {url:'taco.png', txt:'mexican'}].map((item,index)=>(
              <motion.div
              initial='hidden2'
              variants={container((index/10)+0.5)}
              whileInView='visible'
              onClick={()=>{ navigate(`/categories/${item.txt}`)}}
              className=' flex flex-col  justify-center flex-shrink-0 items-center'>
              <img  src={`./categories/${item.url}`} className=' w-[20px] scale-[5]' alt="icon" />
              <span  className=' capitalize mt-3'>{item.txt}</span>
              </motion.div>
            ))
          }
        </div>

        <div  className=' w-full flex gap-5 relative flex-wrap '>
      { data.map((doc, index)=>(
  <motion.div
  variants={container(0.2)}
  whileInView='visible'
  whileHover='hover'
  initial='hidden'
  key={doc.id} style={{
    boxShadow: '5px 5px 6px black',
    backgroundImage: `url(${doc.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }} className=' h-[250px] md:h-[500px] p-10 flex w-[98%] max-w-screen-sm md:w-[32%] rounded-2xl my-5  bg-white '>
  {/* <img src={doc.image} alt="" className=' absolute z-[0] rounded-2xl' /> */}
  <div>
  <h1 className=' text-xl font-semibold capitalize'>{doc.name}</h1>
  <p className=' flex gap-6'>₹{doc.price} <ATCB setSignOpn={setSignOpn} maxLimit={doc.quantity} docu={doc}/></p>
  </div>
  <div className='btn-ID-wrapper flex items-end justify-end'>
        
  </div>
</motion.div>
      ))}
        </div>
      </div>
    </>
  )
}

export default Body
