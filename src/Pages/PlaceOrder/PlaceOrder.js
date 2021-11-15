import React from 'react';
import axios from 'axios';
import './PlaceOrder.css'
import { useForm } from "react-hook-form";
const PlaceOrder = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
axios.post('http://localhost:5000/orders',data)
    .then(res=>{
      if(res.data.insertedId){
        alert('Successfully Added');
        reset();
      }
    })

  }
   
    return (
        <div className="add">
          <h1 className="new">Place your Order</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name" )} placeholder="Name" />
      <input {...register("email" )} type="email" placeholder="Your Email" />
      <textarea {...register("Address" )} placeholder=" Address"/>
      <input type="number" {...register("phone")} placeholder="Phone" />
      <input {...register("service" )} placeholder="Service" />
      <input className="button" type="submit" />
    </form>
    <br/>
    <br/>
    <br/>
    <br/>
        </div>
    ); 
};

export default PlaceOrder;