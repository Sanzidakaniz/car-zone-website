import React from 'react';
import Footer from '../../SharedComponent/Footer';
import Navigation from '../../SharedComponent/Navigation';
import AboutUs from '../AboutUs/AboutUs/AboutUs';
import Reviews from '../AddReview/Reviews/Reviews';
import HomeProducts from '../Home/HomeProducts/HomeProducts';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation> 
           <Banner></Banner>
           <HomeProducts></HomeProducts>
           <Reviews></Reviews>
           <AboutUs></AboutUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;