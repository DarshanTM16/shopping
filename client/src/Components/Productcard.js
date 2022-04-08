import React from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../redux/action/action.js";
import './../styles/productcard.css';

const Productcard = (props) => {
    let main = props.data;

    const dispatch = useDispatch();
    const addProduct = (product)=> {
        dispatch(addItem(product));
    }

    return (
        <>
            <div className="bestitemcard">
                <div className="itemimage">
                    <img src={main.itemImage} className={main.display} />
                    <div className="hoverContent">
                        <i class="far fa-2x fa-heart"></i>
                        <i class="fas fa-2x fa-cart-plus" onClick={()=>addProduct(main)} ></i>
                    </div>
                </div>
                <div className="itemname">{main.itemName}</div>
                <div className="rating"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star" id="fifthstar"></i></div>
                <div className="price">
                    <div className="currentprice">${main.itemPrice}</div>
                    <div className="realprice">${main.realPrice}</div>
                </div>
            </div>
        </>
    )
};
export default Productcard;