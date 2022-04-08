import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Carousel3 from "./Carousel3";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import Productcard from "./Productcard";
import Profile from "./Profile";
import { fetchData } from "../fetch";
import './../styles/comon.css';

const Comon = (props) => {

    const [data, setData] = useState([]);

    useEffect(()=> {
        getAllProducts();
    },[]);

    const getAllProducts = async () => {
        const response = await fetchData();
        setData(response.data);
    }

    const curArr = data.filter((product, i)=> {
        if(props.num === product.name){
            return product
        }
        else return null
    })



    return(
        <> 
        <Profile />
         <Navbar /> <br />
         <Carousel3 />
         <div className="comon">
            {
                curArr.map((product)=> {
                    return(
                        <Productcard data = {product} key={product._id} />
                    )
                })
            }
         </div>
         <SocialMedia />
         <Footer />
        </>
    )
};

export default Comon;