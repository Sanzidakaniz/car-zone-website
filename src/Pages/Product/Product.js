import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

const Product = ({ product }) => {
   
    const { _id, name, price, description, img } = product;
    return (
        
        
      <Grid item xs={6} md={4}>
      <Card sx={{ minWidth: 300,mt:4 }}>
  
  <CardMedia
    component="img"
   style={{height: '100px',width: 'auto',margin:"10px"}}
    image={img}
    alt="green iguana"
  />
  <CardContent>
  
    <Typography variant="h5" component="div">
      {name}
    </Typography>
  <Typography variant="body2">
   {description}
     </Typography>
     <Typography variant="body2">
   Price:${price}
  
    </Typography>
    <Link to={`/booking/${_id}`}>
            <Button sx={{textDecoration: 'none'}} className="p-3" variant="contained">Buy Now</Button>

            </Link>
  </CardContent>
  
  </Card>     
 
    </Grid>
          
      
       
    );
};

export default Product;

