import React from "react";
import FooterItem from "./FooterItem";
import data from "./../data.json";
import './../styles/footer.css';

const Footer = () => {
    return(
        <>
         <div className="footer">
             <FooterItem data={data[12]} title="Information" />
             <FooterItem data={data[12]} title="Service" />
             <FooterItem data={data[12]} title="Extras" />
             <FooterItem data={data[12]} title="My Account" />
             <FooterItem data={data[12]} title="Useful Links" />
             <FooterItem data={data[12]} title="Our Offers" />
             
         </div>
        </>
    )
};

export default Footer;