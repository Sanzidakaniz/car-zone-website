import { Grid } from '@mui/material';
import * as React from 'react';
import MyOrder from '../../MyOrder/MyOrder';

const DashboardHome = () => {
    return (
       
        <Grid container spacing={2}>
  <Grid item xs={12} md={8}>
   <MyOrder></MyOrder>
  </Grid>
  
</Grid>
        
    );
};

export default DashboardHome;