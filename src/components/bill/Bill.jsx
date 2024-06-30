// src/components/Bill.js
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../Firebase';
import { useSelector } from 'react-redux';

const Bill = React.forwardRef((props, ref) => {

    const {itemId} = props;
    // const timestamp = new Date().getTime()
    

    const [data, setData] = useState({})
    const [orderItem, setOrderItem] = useState([])

    const date = new Date(data.createdAt); 
    
    const userdata= useSelector(state => state.auth.userData)
    const userStatus=useSelector(state=>(state.auth.loginStatus))

    useEffect(()=>{
        try {
        const q = query();
        onSnapshot(doc(db,'users',userdata?.uid,'order',itemId),(querySnapshot) => {
        // const docsOrderItem= querySnapshot.d.map((doc) =>( {
        // id: doc.id,
        // ...doc.data()
        // }));

        setOrderItem(querySnapshot.data().orders)
        setData(querySnapshot.data())
        
        });
    } catch (error) {
        
    }
    // setData(ordrData)
    // setOrderItem(itmData)
    },[userdata])

  return (
    <div ref={ref} className={`p-4 bg-white`}>
      <h1 className="text-xl font-bold mb-4">Bill</h1>
      <div className="mb-2">
        <span className="font-semibold">Date:</span> {`${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Bill No:</span> {itemId}
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {orderItem.map((item,index)=>(
            <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.reqQuantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">₹{item.price}</td>
            </tr>
            ))}
         
          {/* Add more items here */}
        </tbody>
      </table>
      <div className="mt-4">
        <span className="font-semibold">Total:</span> ₹{data.totalAmount}
      </div>
    </div>
  );
});

export default Bill;
