import React from "react";
import data from './../data.json';
import './../styles/socialmedia.css';

const SocialMedia = () => {
    return (
        <>
            <div className="socialmedia">
                <div className="ishoptitle">iShop</div>
                <div className="ishopdetails">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.the printing and typesetting industry.
                </div>
                <div className="followtitle">Follow Us</div>
                <div className="followdetails">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    <img src="Images3\facebook.svg" alt="" className="fbicon"/>
                    <img src="Images3\twitter.svg" alt="" className="twittericon"/>
                </div>
                <div className="contacttitle">Contact Us</div>
                <div className="contactdetails">
                    iShop: address @building 124 <br /> Call us now: 0123-456-789 <br /> Email: support@whatever.com
                </div>
            </div>
        </>
    )
};

export default SocialMedia;