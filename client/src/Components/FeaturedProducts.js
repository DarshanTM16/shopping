import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchData } from "../fetch";
import Productcard from "./Productcard";
import './../styles/featuredproduct.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const FeaturedProducts = () => {

  const [newdata, setnewData] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await fetchData();
    setnewData(response.data);
  };

 console.log(newdata);

  return (
    <>
      <div className="featuredproducts">
        <Carousel
          className="fClass"
          responsive={responsive}
          infinite={true}
          draggable={false}
          swipeable={true}
          autoPlay={true}
        >
          {

            newdata.map((bestProduct) => {
                return (
                  <Productcard data={bestProduct} key={bestProduct._id} />
                )
            })
          }
        </Carousel>
      </div>
    </>
  )
};

export default FeaturedProducts;