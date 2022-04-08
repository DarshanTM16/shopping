import React, { useEffect, useState } from "react";
import './../styles/cartproduct.css';
import { removeItem } from "../redux/action/action.js";
import { useDispatch } from 'react-redux';

const CartProduct = (props) => {
    // const [singlePrice, setSinglePrice] = useState(parseInt(props.product.itemPrice));
    // const [total, setTotal] = useState(singlePrice);
    // const [count, setCount] = useState(1);
    // console.log(singlePrice);
    // useEffect(()=> {
    //     setSinglePrice(parseInt(props.product.itemPrice));
    // },[props]);

    // const dispatch = useDispatch();
    // const removeProduct = (product)=> {
    //     dispatch(removeItem(props.product));
    // }

    // const increment = () => {
    //     setCount(count + 1);
    //     setTotal(total + singlePrice);
    // };

    // useEffect(()=> {
    //     props.totalQuantity(count, product);
    // },[count])

    // const decrement = () => {
    //     if (count > 0) {
    //         setCount(count - 1);
    //         setTotal(total - singlePrice);
    //     }

    // }
    return (
        <>
            <div className="productCart">
                <div className="cancelProduct" onClick={()=>removeProduct(props.product)}>x</div>
                <div className="productImage"><img src={props.product.itemImage} alt="philips" className={props.product.display} width="100px" /></div>
                <div className="productName">{props.product.itemName} </div>
                <div className="productPrice">${total}</div>
                <div className="productQuantity"><span className="proplus" onClick={increment}>+</span><span className="pronum">{count}</span><span className="prominus" onClick={decrement}>-</span> </div>
                <div className="unitPrice">${props.product.itemPrice} </div>
                
            </div>
        </>
    )
};

// export default CartProduct;