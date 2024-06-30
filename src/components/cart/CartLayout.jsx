import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../Firebase';
import { useSelector } from 'react-redux';
import ATCB from '../home/ATCB';
import DelieveryDetails from '../forms/DelieveryDetails';
import DangerAlert from '../alert/DangerAlert';
import { useNavigate } from 'react-router-dom';
import Done from '../lottie/Done';
function CartLayout() {

    const userdata= useSelector(state => state.auth.userData)

    const [cartPro, setCartPro] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [delieveryDetail,setDelieveryDetail] = useState({
      name: '',
      number: '',
      pin: '',
      address: ''
    })
    const [ddOpen, setDdOpen] = useState(false)
    const [alrtOpn, setAlrtOpn] = useState(false)
    const [anim, setAnim]=useState(false)

    const navigate =useNavigate()


    const order =async()=>{
      try {
        if(cartPro.length!==0 && delieveryDetail.name !== '' && delieveryDetail.number !== '' && delieveryDetail.address !== '' && delieveryDetail.pin !== ''){
          await addDoc(collection(db,'users',userdata.uid,'order'),{orders: cartPro, totalAmount: totalAmount, status:'PENDING',delieveryDetail:{...delieveryDetail}, itemQunatity:cartPro.length, createdAt: new Date().getTime()}, {merge:true}).then(async()=>{
            cartPro.forEach(async(item)=>{
              await deleteDoc(doc(db, "users",userdata.uid,'cartProduct', item.id ));

              setAnim(!anim)

              setTimeout(() => {
              navigate('/')
              }, 3000);
            })
            
          })
        }else{
          setAlrtOpn(!alrtOpn)
        }
      } catch (error) {
        
      }
     
    }

    useEffect(()=>{
      console.log("hi");
      const fetch = ()=>{
      try {
      const q =  query(collection(db, "users",userdata.uid,"cartProduct"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let total = 0;
    querySnapshot.forEach((d)=>{
      total += Number.parseInt(d.data().price)* Number.parseInt(d.data().reqQuantity)
  })
  setTotalAmount(total)
  const docsData=querySnapshot.docs.map((doc) =>( {
    id: doc.id,
    ...doc.data()
  }));
  setCartPro(docsData)
  console.log(cartPro);
 
  });

} catch (error) {
        
}}
fetch()

      //total amount
// for(let i =0; i < cartPro.length; i++){   
//   cartPro.map((item)=>{        
//     setTotalAmount(totalAmount + Number.parseInt(item.price) * Number.parseInt(item.reqQuantity))
//   })}
    },[userdata])
    
    
  return (
    <div>
      <div className=' w-full h-64 flex'> 
        <img src='/img/D3.png' className=' p-2 rounded-2xl mt-5' />
        </div>
      <div className="outer-wrapper px-3 md:px-10 flex flex-col  py-[80px]">
        <div className='heading text-2xl font-bold m-auto font-title border-2 p-2 bg-slate-400 shadow-md rounded-lg'> Your Cart List:</div>

        <div className="list-wrapper flex  flex-col mb-2 rounded-xl mt-10">

          <div className='w-full capitalize bg-slate-300  flex justify-between shadow-lg font-bold px-3 md:px-52 py-3 rounded-2xl m-2 '>
            <h1>Image</h1>
            <h1>Name</h1>
            <h1>quantity</h1>
            <h1>price</h1>
            {/* <h1></h1> */}
          </div>
        
              {cartPro.map((item,index)=>(
                  <div key={index} className="listItem  w-full bg-white shadow-lg px-3 md:px-52 py-3 rounded-2xl m-2 duration-300 ease-in-out hover:bg-slate-400">
                <div className='flex flex-shrink-0 capitalize gap-3 font-semibold text-lg justify-between'> 
                  {/* image section  */}
                  <div className=" flex-row flex flex-shrink-0 justify-between ">
                  <div className="img justify-start">    
                  <img id='img' src={item.image } alt="" className='object-cover flex-shrink-0 flex h-16 w-16 md:w-20 md:h-20 rounded-2xl'/>
                  </div >
                  </div>
                
                <div className="name">
                {item.name}
                </div>
              
              
               <div className="restaurant ">
                {item.Restaurant} 
               </div>
              
              
               <div className="quantity">
                <ATCB docu={item} maxLimit={item.quantity}/>
               </div>

               <div className="price">
                ₹{item.price}
               </div>
               </div>
               </div>
               
              ))}
              
              {cartPro.length ===0 && <div className=' m-auto font-semibold my-4'>No items found</div>}
              {cartPro.length !==0 && <div className=' text-xl font-bold flex justify-end my-10 gap-3'>
                Total Amount: <span className=' text-2xl'>₹{totalAmount}</span>
              </div>}

              <DelieveryDetails setDelieveryDetails={setDelieveryDetail} className={`${ddOpen? 'block':'hidden'}`} click={()=>setDdOpen(!ddOpen)}/>
        </div>

        <button onClick={()=> setDdOpen(!ddOpen)} className=' w-full mb-3 md:mx-5 bg-red-500 text-lg font-semibold py-2 rounded-3xl text-white border-[2px] border-red-700 '>Add Delievery Details</button>
        <button onClick={order} className=' w-full md:mx-5 bg-gray-700 text-lg font-semibold py-2 rounded-3xl text-white border-[2px] border-gray-900  capitalize'>proceed to order</button>

                <DangerAlert className={`${alrtOpn? 'block':'hidden'}`} click={()=>setAlrtOpn(!alrtOpn)} title='Alert'
                  message="Your cart may be empty or you haven't filled delievery details !!!"/>

              <Done className={anim? 'block':'hidden'}/>
      </div>
    </div>
  )
}

export default CartLayout                                                                                                                     