import { Button, Container,  Typography } from '@mui/material';
import React from 'react';
import car from '../../../images/car.jpg'

const carBanner={
    background:`url(${car})`,
    backgroundColor:'rgba(84, 80, 80 )',
    backgroundColorBlend:'darken,luminosity',
    height: 650,
}
const Banner = () => {
    return (
      <Container style={carBanner} sx={{ flexGrow: 1 }}>

<Typography style={{fontSize:40,textAlign: 'center'}} variant="h4" component="h2">
    
</Typography><br/><br/><br/>
  <Typography  sx={{fontWeight:600,color:'white',mt:4}} variant="h2" component="h2">
 New Cars Collection
</Typography>
<br/>
  {/* <Typography style={{fontSize:30,textAlign: 'center'}} variant="h4" component="h2">
    Enjoy the Day
</Typography> */}
  <Button  variant="contained">View details</Button>

  
  

      </Container>
    );
};

export default Banner;