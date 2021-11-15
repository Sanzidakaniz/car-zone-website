import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import './MyOrder.css';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const {user} =useAuth();
    useEffect(()=>{
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data))
            
       
    },[]);
    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure you want to delete?');

                    const remainingOrder = order.filter(singleOrder => singleOrder._id !== id);
                    setOrder(remainingOrder);

                }

            })
    }
    return (
        <div className="order-container"><br/><br/><br/>
            <h1 className="text text-warning text-center">My Orders</h1>
            {
                order.map(order =><div
                key = {order._id}
                >
        
                    {
                        user.email ?
                            <div className="container">
                                <div className="row manage-order">
                                    <div className="col">
                                        <h6>{order.name}</h6>
                                    </div>
                                    <div className="col">
                                        <h6>{order.Address}</h6>
        
                                    </div>
                                    <div className="col">
                                        <h6>{order.phone}</h6>
        
                                    </div>
                                    <div className="col">
                                        <h6>{order.service}</h6>
        
                                    </div>
        
                                </div>
                                <div>
                                    <button  onClick={() => handleDelete(order._id)} className="btn btn-danger ms-4">Delete <i class="fas fa-trash-alt"></i></button>
        
                                </div>
                            </div>
                            :
                            <div>
                            </div>
                    }
        
                </div>)
            }
            <br/><br/><br/> 
            <br/><br/><br/> 
        </div>
       
    );
};

export default MyOrder;