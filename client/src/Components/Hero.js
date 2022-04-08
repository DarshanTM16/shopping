import React from "react";
import Banner from "./Banner";
import { bannerData } from "../data";
import { mobileOne } from "../data";
import Carousel from 'react-material-ui-carousel';
import './../styles/hero.css';

const Hero = () => {
    return (
        <>
            <div className="hero">
                <Banner bannerDatas={bannerData} />
            </div>
            <div className="mobileHero">
                <Carousel
                    autoPlay={true}
                    animation="fade"
                    indicators={false}
                    cycleNavigation={true}
                    stopAutoPlayOnHover={false}
                >
                    {
                        mobileOne.map((image) => {
                            return (
                                <img src={image} alt="carousel" height="480px" width="100%" />
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
};

export default Hero;