import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

import './ManageAllOrders';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MyOrder = () => {
  const [order, setOrder] = useState([]);
const {user} =useAuth();
useEffect(()=>{
    const url = `http://localhost:5000/orders`
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
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Address</TableCell>
          <TableCell align="right">phone</TableCell>
          <TableCell align="right">service</TableCell>
        
        </TableRow>
      </TableHead>
      <TableBody>
        { order.map((row) => (
          <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    );
};

export default MyOrder;


// const [order, setOrder] = useState([]);
// const {user} =useAuth();
// useEffect(()=>{
//     const url = `http://localhost:5000/orders`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => setOrder(data))
        
   
// },[]);
// const handleDelete = id => {
//     const url = `http://localhost:5000/orders/${id}`;
//     fetch(url, {
//         method: 'DELETE'
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if (data.deletedCount) {
//                 alert('Are you sure you want to delete?');

//                 const remainingOrder = order.filter(singleOrder => singleOrder._id !== id);
//                 setOrder(remainingOrder);

//             }

//         })
// }
// return (
//     <div className="order-container"><br/><br/><br/>
//         <h1 className="text text-warning text-center">My Orders</h1>
//         {
//             order.map(order =><div
//             key = {order._id}
//             >
    
//                 {
//                     user.email ?
//                         <div className="container">
//                             <div className="row manage-order">
//                                 <div className="col">
//                                     <h6>{order.name}</h6>
//                                 </div>
//                                 <div className="col">
//                                     <h6>{order.Address}</h6>
    
//                                 </div>
//                                 <div className="col">
//                                     <h6>{order.phone}</h6>
    
//                                 </div>
//                                 <div className="col">
//                                     <h6>{order.service}</h6>
    
//                                 </div>
    
//                             </div>
//                             <div>
//                                 <button  onClick={() => handleDelete(order._id)} className="btn btn-danger ms-4">Delete <i class="fas fa-trash-alt"></i></button>
    
//                             </div>
//                         </div>
//                         :
//                         <div>
//                         </div>
//                 }
    
//             </div>)
//         }
//         <br/><br/><br/> 
//         <br/><br/><br/> 
//     </div>
   
// );