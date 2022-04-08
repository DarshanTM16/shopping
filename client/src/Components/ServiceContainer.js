import React from "react";
import Services from "./Services";
import data from './../data.json';
import './../styles/servicecontainer.css';

const ServiceContainer = () => {
    return(
        <>
         <div className="servicecontainer">
            <Services data={data[9]} />
            <Services data={data[10]} />
            <Services data={data[11]} />
         </div>
        </>
    )
};

export default ServiceContainer;