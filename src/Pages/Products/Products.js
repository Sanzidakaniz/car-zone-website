import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <Container>
            <Typography sx={{ m:4,textAlign: 'center',fontWeight: 'bold'}} variant="h4" component="div">
     Our Products
    </Typography>
        <Grid container spacing={2} >
        {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
      
          </Grid>
        </Container>
    );
};

export default Products;


{/* <div>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div> */}