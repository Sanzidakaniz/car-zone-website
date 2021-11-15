import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ManageAllProducts = () => {
    const [product, setProduct] = useState([]);
    const {user} =useAuth();
    useEffect(()=>{
        const url = `http://localhost:5000/products`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
            
       
    },[]);
    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you sure you want to delete?');

                    const remainingProduct = product.filter(singleProduct => singleProduct._id !== id);
                    setProduct(remainingProduct);

                }

            })
    }
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">description</TableCell>
              <TableCell align="right">price</TableCell>
              
              <TableCell align="right">Button</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            { product.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
               {
                  user.email?
                 <TableRow>
                    <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.Address}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.service}</TableCell>
                <TableCell align="right"> <button  onClick={() => handleDelete(product._id)} className="btn btn-danger ms-4">Delete <i class="fas fa-trash-alt"></i></button></TableCell>
                 </TableRow>
                   :
                   <TableRow></TableRow>
               }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
       
    );
};

export default ManageAllProducts;