import { Container, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../SharedComponent/Footer';
import Navigation from '../../SharedComponent/Navigation';

const Payment = () => {
    return (
      <Container>
        <Navigation></Navigation>
        <br/> <br/> <br/> <br/> <br/> <br/>
          <Typography  sx={{ m:2,textAlign: 'center',fontWeight: 'bold'}}variant="h6">Payment System Coming Soon</Typography>
          <br/> <br/> <br/> <br/> <br/> <br/>
          <Footer></Footer>
      </Container>
    );
};

export default Payment;