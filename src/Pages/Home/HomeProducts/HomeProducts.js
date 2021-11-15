import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';

import './HomeProducts.css';

const HomeProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://evening-ocean-25952.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])

    return (
        <Container id="services">
             <Typography sx={{m:8,textAlign: 'center',fontWeight: 'bold'}} variant="h2">
             Our Products
     </Typography>
         
     <Grid container spacing={2} >
                {
                    products.map(product => <HomeProduct
                        key={product.id}
                        product={product}
                    ></HomeProduct>)
                }
           </Grid>
        </Container>
    );
};

export default HomeProducts;