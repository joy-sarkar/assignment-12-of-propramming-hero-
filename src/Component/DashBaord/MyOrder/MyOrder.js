import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyOrderTable from './MyOrderTable'

const MyOrder = () => {
    const { user} = useAuth();
    const[order,setOrder]=useState([])
    useEffect(()=>{
        const uri =`https://afternoon-sierra-16943.herokuapp.com/myOrder?email=${user.email}`
        fetch(uri)
        .then(res=> res.json())
        .then(data => setOrder(data))
    },[]);
    const set_data= (data) =>{
        console.log(data)
        setOrder(data)
    }

    return (
        <div>
            <h4>My Order : {order.length}</h4>
            <MyOrderTable setData={set_data} order={order}/>
        </div>
    );
};

export default MyOrder;