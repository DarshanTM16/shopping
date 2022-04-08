import React from "react";
import datas from './../data.json';
import './../styles/payment.css';

const Payment = () => {
    let data = datas[13];
    return(
        <>
         <div className="payment">
             <img src={data.p1} alt="" />
             <img src={data.p2} alt="" />
             <img src={data.p3} alt="" />
             <img src={data.p4} alt="" />
         </div>
        </>
    )
};

export default Payment;