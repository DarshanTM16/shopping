import React from 'react';
import Carousel from 'react-material-ui-carousel';

const Banner = (props) => {
    console.log(props);
    return(
        <>
        <Carousel
         autoPlay={true}
         animation="fade"
         indicators={false}
         cycleNavigation={true}
         stopAutoPlayOnHover={false}
        >
            {
                props.bannerDatas.map((image)=>{
                    return(
                        <img src={image} alt="carousel" height="480px" width="100%" />
                    )
                })
            }
        </Carousel>
        </>
    )
};

export default Banner;