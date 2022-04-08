import React from "react";
import { profile } from "../data";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './../styles/profile.css';

const Profile = () => {
    const state = useSelector((state)=> state.handleCart);
    return (
        <>
            <div className="profile">
                <span className="language">EN -</span>
                <div className="profileBox">
                    <img src={profile[2]} alt="profile" />
                    <span className="profileText">My profile</span>
                    <NavLink className="cartLink" to="/Cart">
                        <img src={profile[3]} alt="cart" />
                        <span className="cartText">{state.length} Items</span>
                    </NavLink>
                </div>
            </div>
        </>
    )
};

export default Profile;