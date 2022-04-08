import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home.js"
import Ipad from "./Components/Ipad.js";
import Iphone from "./Components/Iphone.js";
import Mac from "./Components/Mac.js";
import Accessories from "./Components/Accessories.js";
import CartPage from "./Components/CartPage.js";

const App = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/iphone" element={<Iphone />}></Route>
                    <Route path="/ipad" element={<Ipad />}></Route>
                    <Route path="/mac" element={<Mac />}></Route>
                    <Route path="/accessories" element={<Accessories />}></Route>
                    <Route path="/cart" element={<CartPage />}></Route>
                </Routes>
            </BrowserRouter>

        </>
    )
};

export default App;
