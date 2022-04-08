import React from "react";
import './../styles/services.css';

const Services = (props) => {
    let data = props.data;
    return(
        <>
         <div className="services">
            <div className="serviceimage">
                <img src={data.serviceImage} alt="" />
            </div>
            <div className="serviceheading">{data.serviceHeading}</div>
            <div className="servicedescription">{data.serviceDescription}</div>
         </div>
        </>
    )
};

export default Services;

