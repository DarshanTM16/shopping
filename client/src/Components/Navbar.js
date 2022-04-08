import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './../styles/navbar.css';

const Navbar = () => {

    const [storeclass, setstoreclass] = useState(false);
    const [hamclass, sethamclass] = useState(false);

    const storeClick = () => {
        setstoreclass(!storeclass);
    };

    const hamClick = () => {
        sethamclass(!hamclass);
    }

    return (
        <>
            <div className="firstContainer"></div>
            <nav className="navbar">
                <div className="logobox">
                    <div className="logo">
                        <span className="i">i</span>
                        SHOP
                    </div>
                </div>
                <div className="navitembox">
                    <ul className="navitems">
                        <li><NavLink activeClassName="active" className="linkClass" to="/">HOME</NavLink> </li>
                        <li id="stpoint" onClick={storeClick}>STORE</li>
                        <li><NavLink activeClassName="active" className="linkClass" to="/Iphone">iPHONE</NavLink></li>
                        <li><NavLink activeClassName="active" className="linkClass" to="/Ipad">iPAD</NavLink></li>
                        <li><NavLink activeClassName="active" className="linkClass" to="/Mac">MACBOOK</NavLink></li>
                        <li><NavLink activeClassName="active" className="linkClass" to="/Accessories">ACCESSORIES</NavLink></li>
                    </ul>
                </div>
            </nav>
            
            <div className={storeclass ? "navMenu" : "navmenuChange"}>
                
                <ul className="navmenuItems">
                    <li id="ac"><NavLink className="storelinkClass" to="/Accessories">Accessories</NavLink></li>
                    <li>Airport & Wireless</li>
                    <li>AppleCare</li>
                    <li>Bags, Shells & Sleeves</li>
                    <li>Business & Security</li>
                    <li>Cables & Docs</li>
                </ul>
                <ul className="navmenuItems col-1">
                    <li>Cameras & Videos</li>
                    <li>Car & Travel</li>
                    <li>Cases & Films</li>
                </ul>
                <ul className="navmenuItems">
                    <li id="ct"><NavLink className="storelinkClass" to="/Accessories">Category</NavLink></li>
                    <li>Charging Devices</li>
                    <li>Connected Home</li>
                    <li>Device Care</li>
                    <li>Display & Graphic</li>
                    <li>Fitness & Sport</li>
                </ul>
                <ul className="navmenuItems col-2">
                    <li>Headphones</li>
                    <li>HealthKit</li>
                </ul>
                
            </div>
            
            {/*For mobile view  */}


            <div className="mobileNavbar">
                <div className="m-logo">
                    <span id="m-i">i</span>SHOP
                </div>
                <div className="hamburger" onClick={hamClick}>
                    <i class="fas fa-3x fa-bars"></i>
                </div>
            </div>

            <div className={hamclass ? "m-navMenu" : "m-navMenu-change"}>
                <ul className="m-navMenuItems">
                    <li><input type="text" id="searchbar" /></li>
                    <li><NavLink activeClassName="active" className="linkClass" to="/">HOME</NavLink> </li>
                    <li><NavLink activeClassName="active" className="linkClass" to="/Iphone">iPHONE</NavLink></li>
                    <li><NavLink activeClassName="active" className="linkClass" to="/Ipad">iPAD</NavLink></li>
                    <li><NavLink activeClassName="active" className="linkClass" to="/Mac">MACBOOK</NavLink></li>
                    <li><NavLink activeClassName="active" className="linkClass" to="/Accessories">ACCESSORIES</NavLink></li>
                </ul>
            </div>

        </>
    )
}

export default Navbar;