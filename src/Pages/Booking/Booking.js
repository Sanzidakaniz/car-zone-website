import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect,useState } from 'react';
import { useParams} from 'react-router';
import Footer from '../../SharedComponent/Footer';
import Navigation from '../../SharedComponent/Navigation';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import './Booking.css';
const Booking = () => {
    const { productId } = useParams();
    const [product,setProduct]=useState({});

    useEffect(() => {
        fetch(`https://evening-ocean-25952.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
      <Container className="product-container">
<Navigation></Navigation>
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
        <Footer></Footer>
      </Container>
     
    );
};

export default Booking;

