import React,{useState,useEffect} from 'react';
import AlOrderTable from '../ManageAllOder/manageAllOrderTable'

const ManageAllOder = () => {
    const[all_orders,setAll_orders]=useState([])
    useEffect(()=>{
        fetch("https://afternoon-sierra-16943.herokuapp.com/allOrder")
        .then(res=> res.json())
        .then(data => setAll_orders(data))
    },[]);
    const set_up_data = (new_data) =>{
        setAll_orders(new_data)
        // console.log('data from managea all order',new_data)
    }
    // console.log('data from all orders',all_orders)

    return (
        <div>
            <h4>All Orders: {all_orders.length}</h4>
            <AlOrderTable setdata={set_up_data} datas={all_orders}></AlOrderTable>
        </div>
    );
};

export default ManageAllOder;