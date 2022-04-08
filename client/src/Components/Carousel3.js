import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { bannerthreeData } from '../data';
import { mobileTwo } from '../data';
import './../styles/carousel3.css';

const Carousel3 = () => {
    return (
        <>
            <div className="carousel3">
                <Carousel
                    autoPlay={true}
                    animation="fade"
                    indicators={false}
                    cycleNavigation={true}
                    stopAutoPlayOnHover={false}
                >
                    {
                        bannerthreeData.map((image) => {
                            return (
                                <img src={image} alt="carousel" height="460px" width="100%" />
                            )
                        })
                    }
                </Carousel></div>
            <div className="carouseltwoMobile">
                <Carousel
                    autoPlay={true}
                    animation="fade"
                    indicators={false}
                    cycleNavigation={true}
                >
                    {
                        mobileTwo.map((image) => {
                            return (
                                <img src={image} alt="carousel" height="380px" width="100%" />
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
};

export default Carousel3;