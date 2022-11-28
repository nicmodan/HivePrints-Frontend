import { useState } from "react";
// import { FloatingLabel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import React, useState from "react"
// import {image_url} from "./previewOrder"
// import InputSize from "./input-size"
import { getHiveShipingOrders } from "../reducers/address&orders";
import SetSizeAndCounts from "./setSizeAndCount";

const QuestionsOfOrders = ()=>{

    const [displayColor, setDisplayColor] = useState("white")
    const dispatch = useDispatch()
    // const [size, setSize] = useState(undefined)
    // const [checked, setChecked] = useState(false)
    
    const orders = useSelector(state=>state.hiveShipingOrder)
    // const dispatch = useDispatch()

    // const or
    // console.log(props)
    // console.log(orders)

    // const {firstName, lastName, email, phone, cityState, address, location} = orders
    // const {catlog, number, name, cost, images, img_url} = orders
    const {img_url} = orders

    const handelColor = (val) =>{
        // const val = e.target.val
        setDisplayColor(val.toLowerCase())
        const data = {...orders}
        data["colorCode"] = val 
        dispatch(getHiveShipingOrders(data))
    }

    const sizes = ["XS", "S", "M", "L", "X", "XL"]
    const colors =["Red", "Blue", "Black", "Green", "White"]

    

    return(
        <>
            <div className="spects-for-products-questions">
                <div className="spects-for-products-questions-info">
                    <div className="spects-for-products-questions-image-color">
                        <div className="spects-preview-products-images">
                            <div className="spects-preview-products-images-contain">
                                {/* {img_url &&  */}
                                    <img src={img_url} style={{background: displayColor}} className="spects-preview-products-img" alt="Products Images Are currently Unavailble" />
                                    {/* } */}
                            </div>
                        </div>
                        <div className="spects-preview-products-color">
                            <form onSubmit={(e)=>{e.preventDefault()}}>
                                <ul className="spects-preview-products-color-list">
                                    {
                                        colors.map((val, idx)=>(

                                            <li key={idx} className="spects-preview-products-color-list-style">
                                                <label onClick={()=>handelColor(val)} className="spects-preview-products-color-list-style-container">
                                                    {val}
                                                    <input type="radio" name="radio"/>
                                                    <span onClick={()=>handelColor(val)}
                                                        style={displayColor===val.toLowerCase()?{background: val.toLowerCase()}: {  backgroundColor: "#a7a7a7"}} 
                                                        className="checkmark">
                                                    </span>
                                                </label>

                                            </li>
                                        ))

                                    }
                                    
                                </ul>
                            </form>
                        </div>
                    </div>
                    <div className="spects-products-questions-contain">
                        <div className="spects-products-questions-size-contain-info">
                            <div className="spects-products-questions-size-contain-info-size-count">
                                <div className="spects-products-questions-size-contain-info-size-main">
                                    Size: 
                                </div>
                            </div>
                            <div className="spects-products-questions-size-contain-info-size-count">
                                <div className="spects-products-questions-size-contain-info-count-main">
                                    Order Count:
                                </div>
                            </div>
                        </div>
                        <div className="spects-for-products-questions-size">
                            <div className="spects-for-products-questions-size-contain">
                                
                                {
                                    sizes.map((val, idx)=><SetSizeAndCounts val={val} key={idx} />)
                                }
                                
                               
                            </div>
                        {/* XS, S, M, L,XL,X, XL */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionsOfOrders