import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Navigation from '../../../SharedComponent/Navigation';
import Footer from '../../../SharedComponent/Footer';
import './AddReviews.css';
const AddProduct = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    console.log(data);
axios.post('http://localhost:5000/reviews',data)
    .then(res=>{
      if(res.data.insertedId){
        alert('Successfully Added');
        reset();
      }
    })

  }
   
    return (
        <div className="add-service">
           <Navigation/>
       <h1 >Please Add Review</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name" )} placeholder=" Your Name" />
      <textarea {...register("description" )} placeholder="Add Your Review here"/>
      
      <input className="button" type="submit" />
    </form>
    
    
  <Footer></Footer>
        </div>
       
    );
};

export default AddProduct;