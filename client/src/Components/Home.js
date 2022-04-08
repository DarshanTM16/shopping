import React from "react";
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Mininavbar from "./Mininavbar.js";
import Corousel2 from './Corousel2';
import ServiceContainer from "./ServiceContainer.js";
import FeaturedProducts from "./FeaturedProducts.js";
import SocialMedia from "./SocialMedia.js";
import Footer from "./Footer.js";
import Payment from "./Payment.js";
import Profile from "./Profile.js";

const Home = () => {


    return (
        <>
            <Profile />
            <Navbar />
            <Hero />
            <Mininavbar />
            {/* <BestitemContainer /> */}
            <Corousel2 />
            <ServiceContainer />
            <FeaturedProducts />
            <SocialMedia />
            <Footer />
            <Payment />
        </>
    )
};

export default Home;