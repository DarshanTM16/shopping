import React from "react";
import { bannertwoData } from "../data";
import { mobileTwo } from "../data";
import Carousel from 'react-material-ui-carousel';
import './../styles/corousel2.css';

const Corousel2 = () => {
    return (
        <>
            <div className="Corousel2">
                <Carousel
                    autoPlay={true}
                    animation="fade"
                    indicators={false}
                    cycleNavigation={true}
                    stopAutoPlayOnHover={false}
                >
                    {
                        bannertwoData.map((image) => {
                            return (
                                <img src={image} alt="carousel" height="500px" width="100%" />
                            )
                        })
                    }
                </Carousel>
            </div>
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

export default Corousel2;