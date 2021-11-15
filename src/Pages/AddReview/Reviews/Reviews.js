import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

import './Reviews.css';

const Reviews = () => {
    const [Reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://evening-ocean-25952.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <Container >
            <Typography sx={{ m:8,textAlign: 'center',fontWeight: 'bold'}} variant="h4" component="div">
    Customers Reviews
    </Typography>
        <Grid container spacing={2} >
        {
        Reviews.map(review => <Review
            key={review.id}
            review={review}
        ></Review>)
    }
          </Grid>
        </Container>
    );
};

export default Reviews;

// <div id="services">
// <h2 className="text-primary mt-5"> Customer Reviews</h2>
// <div className="service-container">
//     {
//         Reviews.map(review => <Review
//             key={review.id}
//             review={review}
//         ></Review>)
//     }
// </div>
// </div>