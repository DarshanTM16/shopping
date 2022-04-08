import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import Footer from "./Footer";
import Profile from "./Profile";
import './../styles/accessories.css';
import Navbar from './Navbar';
import { fetchData } from "../fetch";

const Accessories = () => {

    const [data, setData] = useState([]);
    const [activeName, setActiveName] = useState("aone");
    const [currentValue, setCurrentValue] = useState([]);

    let curData;

    const numberCLick = (e)=> {
        let active = e.target.innerText;
        if(e.target.innerText === '1'){
            setActiveName('aone');
        }
        else if(e.target.innerText === '2'){
            setActiveName('atwo');
            
        }
        else if(e.target.innerText === '3'){
            setActiveName('athree');
        }
        else{
            setActiveName('afour');
        }

        

        curData = data.filter((elem, i)=> {
            if(active === '1'){
                return elem.name === 'Accessories'
            }
            else if(active === '2'){
                return elem.name === 'Mac'
            }
            else if(active === '3'){
                return elem.name === 'iPhone'
            }
            else if(active === '4'){
                return elem.name === 'iPad'
            }
        });
        setCurrentValue(curData);
    }
    

    useEffect(()=> {
        getAllProducts();
            
    },[])

    useEffect(()=> {
        pager();
    },[data])

    const pager = ()=> {
        curData = data.filter((elem, i)=> {
            return elem.name === 'Accessories'
        })
        setCurrentValue(curData);
    }

    const getAllProducts = async ()=> {
        const response = await fetchData();
        setData(response.data);
    }


    return (
        <>
            <Profile />
            <Navbar />
            <div className="accHeading">
                Accessories
            </div>

            <div className="topBanner">
            </div>

           <div className="acolumn">
           {
                currentValue.map((product)=> {
                    return(
                        <Productcard data={product} key={product._id} />
                    )
                })
            }
           </div>

           <div className="pageButtons">
           <div className="aButtons">
               <div className={`${activeName === "aone" && "variableClass"}`} onClick={numberCLick}>1</div>
               <div className={`${activeName === "atwo" && "variableClass"}`} onClick={numberCLick}>2</div>
               <div className={`${activeName === "athree" && "variableClass"}`} onClick={numberCLick}>3</div>
               <div className={`${activeName === "afour" && "variableClass"}`} onClick={numberCLick}>4</div>
           </div>
           </div>
           <br />
           <Footer />
           <br />
        </>
    )
};

export default Accessories;