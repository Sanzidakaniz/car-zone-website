import React from 'react';
import './Review.css';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, Container, Divider, Grid, Rating, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Review = ({ review }) => {
   
    const { _id,name,description,rating } = review;
    return (
 
        
      <Grid item xs={6} md={4}>
      <Card sx={{ minWidth: 300,mt:4,backgroundColor:'lightBlue' }}>
  
  
  <CardContent>
  
    <Typography sx={{ text:'white' }} variant="h5" component="div">
      Customer: {name}
    </Typography>
    <Divider/>
  <Typography  sx={{ text:'white' }} variant="body2">
   {description}
     </Typography>
    
    

     <Box style={{ display: 'flex', justifyContent: 'center' }} >
                        <Stack sx={{ mt: 2 }} spacing={1}>
                            <Rating name="read-only" readOnly defaultValue={rating} precision={1} />
                        </Stack>
                    </Box>    
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