import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Modal from 'react-modal';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './../styles/cartpage.css';
import { plus, removeItem, sub } from "../redux/action/action";

const CartPage = () => {

    const [isModal, setisModal] = useState(false);
    const [total, setTotal] = useState();
    let shipping = 20;

    
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const setModal = () => {
        setisModal(true);
    };

    const handleClose = (item)=> {
        dispatch(removeItem(item))
    }

    const incQty = (id)=> {
        dispatch(plus(id))
        console.log(state);
    };

    const decQty = (id)=> {
        dispatch(sub(id))
        console.log(state);
    };

    useEffect(()=> {
        setTotal(state.reduce((acc, cur)=> acc + Number(cur.itemPrice)*cur.qty, 0));
    },[state])

    const cartItems = (cartItem) => {
        return (
            <div className="productCart" key={cartItem._id}>
                <div className="cancelProduct" onClick={()=>handleClose(cartItem)} >x</div>
                <div className="productImage"><img src={cartItem.itemImage} alt="philips" className={cartItem.display} width="100px" /></div>
                <div className="productName">{cartItem.itemName} </div>
                <div className="productPrice">${cartItem.itemPrice*cartItem.qty}</div>
                <div className="productQuantity"><span className="proplus" onClick={()=>incQty(cartItem._id)} ><i class="fas fa-plus"></i></span><span className="pronum">{cartItem.qty}</span><span className="prominus" onClick={()=>decQty(cartItem._id)} ><i class="fas fa-minus"></i></span> </div>
                <div className="unitPrice">${cartItem.itemPrice} </div>
            </div>
        )
    }


    return (
        <>
            <Navbar />
            <div className="cartHeading">
                Cart
            </div>
            <div className="cartList">
                <div className="cartProduct">Product</div>
                <div className="cartPrice">Price</div>
                <div className="cartQuantity">Quantity</div>
                <div className="cartUnit">Unit Price</div>
            </div>

            {
                state.length !== 0 && state.map(cartItems)
            }


            <div className="checkoutSection">
                <div className="redeemContainer">
                    <input type="text" className="code" placeholder="Voucher code" />
                    <button className="redeem">Redeem</button>
                </div>

                <div className="checkoutContainer">
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span>${total}</span>
                    </div>
                    <div className="shippingfee">
                        <span>Shipping fee</span>
                        <span>${shipping}</span>
                    </div>
                    <div className="coupon">
                        <span>Coupon</span>
                        <span>No</span>
                    </div> <hr />
                    <div className="totalprice">
                        <span>TOTAL</span>
                        <span>${total+20}</span>
                    </div>
                    <div className="checkOut">
                        <button className="pay" onClick={setModal} >Check out</button>
                    </div>
                </div>
            </div>


            <div className="modal">
                <Modal isOpen={isModal} onRequestClose={() => setisModal(false)} className="orderPlaced" >
                    <div className="head">
                        Order Placed ...
                    </div>

                    <button onClick={() => setisModal(false)}>Done</button>

                </Modal>
            </div>

            <br /><br />

        </>
    )
};

export default CartPage;


