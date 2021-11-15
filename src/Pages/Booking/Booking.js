import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect,useState } from 'react';
import { useParams} from 'react-router';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const Booking = () => {
    const { productId } = useParams();
    const [product,setProduct]=useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
      <Container>
      <Grid container spacing={2} >
      
    <Grid item xs={6} md={6}>
    <Card sx={{ minWidth: 300,mt:4 }}>

<CardMedia
  component="img"
 style={{height: '100px',width: 'auto',margin:'0 auto'}}
  image={product.img}
  alt="green iguana"
/>
<CardContent>

  <Typography variant="h5" component="div">
    {product.name}
  </Typography>
<Typography variant="body2">
 {product.description}
   </Typography>
   <Typography variant="body2">
 Price:${product.price}
   
  </Typography>
</CardContent>

</Card>     

  </Grid>
        
    <Grid item xs={6} md={6}>
   <PlaceOrder></PlaceOrder>
  </Grid>
        </Grid>
      </Container>
     
    );
};

export default Booking;

