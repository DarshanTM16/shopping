import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { fetchData } from '../fetch';
import { useEffect } from 'react';
import Productcard from './Productcard';
import './../styles/mininavbar.css';

const Mininavbar = () => {

    const [activeName, setActiveName] = useState("All");
    const [data, setData] = useState([]);
    const [currentValue, setCurrentValue] = useState(data);

    let curData;

    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(()=> {
        mpager()
    },[data]);

    const mpager = ()=> {
        curData = data.filter((elem, i)=> {
            if(i < 8){
                return elem
            }
        })
        setCurrentValue(curData);
    }

    const getAllProducts = async () => {
        const response = await fetchData();
        setData(response.data);
        setCurrentValue(response.data);
    }

    const mClick = (e) => {
        setActiveName(e.target.innerText);
        let active = e.target.innerText;
        
        curData = data.filter((elem, i) => {
            if (elem.name === active) {
                return elem
            }
            else if (active === 'All' && i < 8) {
                return elem
            }
        })
        setCurrentValue(curData);
    };

    const mobileMclick = (e)=> {
        console.log(e.target.value);
        let active = e.target.value;
        curData = data.filter((elem, i)=> {
            if(elem.name === active){
                return elem
            }
            else if(active === 'All' & i < 8){
                return elem
            }
        }) 
        setCurrentValue(curData);
    }

    return (
        <>
            <nav className="mininav">
                <div className="bestseller">
                    BEST SELLER
                </div>
                <div className="bestitems">
                    <ul className='bestitemlist'>
                        <li className={`${activeName === "All" && "dynamicClass"}`} onClick={mClick}>All</li>
                        <li className={`${activeName === "iPhone" && "dynamicClass"}`} onClick={mClick}>iPhone</li>
                        <li className={`${activeName === "Mac" && "dynamicClass"}`} onClick={mClick}>Mac</li>
                        <li className={`${activeName === "iPad" && "dynamicClass"}`} onClick={mClick}>iPad</li>
                        <li className={`${activeName === "Accessories" && "dynamicClass"}`} onClick={mClick}>Accessories</li>
                    </ul>
                </div>

                {/* <div className="mobileBestitemlist"> */}
                    <div className="bestItemSelector">
                        <select className='selectorItems' onChange={mobileMclick} >
                            <option value="All">All</option>
                            <option value="Mac">MAC</option>
                            <option value="iPhone">iPHONE</option>
                            <option value="iPad">iPAD</option>
                            <option value="Accessories">ACCESSORIES</option>
                        </select>
                    </div>
                {/* </div> */}
            </nav>

            <div className="dataContainer">
                {
                    currentValue.map((product) => {
                        return (
                            <Productcard data={product} key={product._id} />
                        )
                    })
                }
            </div>



        </>
    )
};

export default Mininavbar;
