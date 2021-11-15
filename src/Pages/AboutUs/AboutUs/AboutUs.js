import { Container, Typography,Grid,Card, CardContent } from '@mui/material';
import React from 'react';

const AboutUs = () => {
    return (


        <Container>
        <Grid container  sx={{ m:4}}spacing={2} >
        
      <Grid item xs={6} md={10}>
      <Card sx={{ minWidth: 300,mt:4 }}>
  

  <CardContent>
  <Typography sx={{ m:2,textAlign: 'center',fontWeight: 'bold'}} variant="h4">About Us</Typography>
 <Typography  sx={{ m:2,textAlign: 'center'}}variant="body1">Car Zone is a online based car selling website. We provide latest cars.We have e huge collection.We collect cars from different countries like Malaysia,America,Japan,China,United Kingdom,South Korea,India etc.You can purchase your Favorite Car with minimum cost.You can see we have so many positive reviews,we give five year warranty for every Type of car.We have repairing policy,if you face any problem after purchasing car you can communicate with us directly.</Typography>
  </CardContent>
  
  </Card>     
 
    </Grid>
          
      
          </Grid>
          </Container>
       
    );
};

export default AboutUs;