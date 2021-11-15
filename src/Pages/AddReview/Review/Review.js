import React from 'react';
import './Review.css';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';

const Review = ({ review }) => {
   
    const { _id,name,description } = review;
    return (
 
        
      <Grid item xs={6} md={4}>
      <Card sx={{ minWidth: 300,mt:4 }}>
  
  
  <CardContent>
  
    <Typography variant="h5" component="div">
      Customer: {name}
    </Typography>
    <Divider/>
  <Typography variant="body2">
   {description}
     </Typography>
    
    

          
  </CardContent>
  
  </Card>     
 
    </Grid>
          
      
      
    );
};

export default Review;

{/* <div className="service pb-3">
          
<h3>{name}</h3>
<hr/>
  <p className="px-3">{description}</p>

  
  
 
</div> */}