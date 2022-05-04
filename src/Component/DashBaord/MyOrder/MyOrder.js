import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyOrderTable from './MyOrderTable'

const MyOrder = () => {
    const { user} = useAuth();
    const[order,setOrder]=useState([])
    useEffect(()=>{
        const uri =`http://localhost:5000/myOrder?email=${user.email}`
        fetch(uri)
        .then(res=> res.json())
        .then(data => setOrder(data))
    },[]);
    console.log(order)

    return (
        <div>
            <h4>My Order : {order.length}</h4>
            <MyOrderTable order={order}/>
        </div>
    );
};

export default MyOrder;