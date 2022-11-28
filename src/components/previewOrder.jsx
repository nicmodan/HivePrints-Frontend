// import React, {useEffect, useState} from "react"
import "../App.css"
import { Row, Col, Navbar, Button } from "react-bootstrap";
import Logo from "../Resouces/HIVELOGO(2).png"
import ReactCountryFlag from "react-country-flag"
import { useSelector, useDispatch } from "react-redux";
import { postOrders } from "../services/products";
import PaystackPop from "@paystack/inline-js"
import { PlaceOrder } from "../reducers/address&orders";

export const image_url = (val)=>{
    // const resulte = filterdCost[0]["image_links"][Object.keys(filterdCost[0]["image_links"])[0]]
}

const Preview =({handelClick})=>{
    const orders = useSelector(state=>state.hiveShipingOrder)
    const dispatch = useDispatch()

    // console.log(props)
    // console.log(orders)

    const {firstName, lastName, email, phone, cityState, mainAddress, location} = orders
    const {catlog, number, name, cost, images, img_url} = orders

    // console.log(firstName, lastName, email, phone, cityState, address)
    // console.log(catlog, number, name, cost, image)

    const proccedPayment = () =>{
        // console.log(orders)
        // const formData = new FormData()
        // formData.append("orders", orders)
        // postOrders(formData)
        console.log((Number(cost.replace("₦", "")))*100)
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key:"pk_live_74f45a48ac13ad19e3826bed65ba8200702eb69e",
            amount: (Number(cost.replace("₦", "")))*100,
            email: email,
            firstname: firstName,
            lastname: lastName, 
            onSuccess(transaction){
                dispatch(PlaceOrder({...orders, transaction:{...transaction}}))
            }

        })
        // sk_live_4f9ee99a7f79605457e8267edb5bd28c8cd949a6
    }

    return(
        <>
            <Navbar>
                <Navbar.Brand href="#home" className="preview-body-img">
                    <img src={Logo}  alt="HIVE LOGO" />
                </Navbar.Brand>
                {location && <div className='location-position'>
                    {" "}
                    <ReactCountryFlag
                            countryCode={location.country_code}
                            svg
                            style={{
                                width: '2em',
                                height: '2em',
                            }}
                            title={location.country_code}
                    />
                    {"  "}
                    {location.country_name}

                </div>}
            </Navbar>
            <Row style={{paddingTop: 20}}>
                
                <Col sm={8}>
                    <h4>
                        Information & Order Detailes
                    </h4>
                    <div className="preview-sections">
                        <div className="preview-info">
                            <div className="preview-info-main">
                                {/* {firstName, lastName, email, phone, , address, location} */}
                                <p>
                                    <b>
                                        First Name
                                    </b>
                                </p>
                                <div className="preview-info-main-p">
                                    <p>
                                        {firstName}
                                    </p>
                                </div>
                            </div>
                            <div className="preview-info-main">
                                <p>
                                    <b>
                                        Last Name
                                    </b>
                                </p>
                                <div className="preview-info-main-p">
                                    <p>
                                        {lastName}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="preview-info">
                            <div className="preview-info-main">
                                <p>
                                    <b>
                                        Email
                                    </b>
                                </p>
                                <div className="preview-info-main-p">
                                    <p>
                                        {email}
                                    </p>
                                </div>
                            </div>
                            <div className="preview-info-main">
                                <p>
                                    <b>
                                        Phone Number
                                    </b>
                                </p>
                                <div className="preview-info-main-p">
                                    <p>
                                       {phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="preview-info">
                            <div className="preview-info-main-02">
                                <p>
                                    <b>
                                        Address
                                    </b>
                                </p>
                                <div className="preview-info-main-p">
                                    <p>
                                        {mainAddress}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="preview-info">
                            <div className="preview-info-main">
                                <p>
                                    <b>
                                        City/State
                                    </b>
                                </p>
                                <div className="preview-info-main-p">
                                    <p>
                                        {cityState}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="preview-products-imgs">
                            <div className="preview-products-imgs-designe">
                                {images && <img src={URL.createObjectURL(images)} className="preview-products-img"  alt="No image Selected" />}
                            </div>
                            <div className="preview-products-imgs-order">
                            {/* filterdCost[0]["image_links"][Object.keys(filterdCost[0]["image_links"])[0]] */}
                                {img_url && <img src={img_url} className="preview-products-img" />}
                            </div>
                        </div>
                    </div>
                    
                </Col>
                <Col sm={4}>
                    <div className="preview-order">
                        
                            <div className="preview-order-card">
                                <div className="preview-order-main">
                                <p>
                                    {/* catlog, number, name, cost */}
                                    <b>
                                        Product Catlog
                                    </b>
                                </p>
                                <div className="preview-order-main-p">
                                    <p>
                                        {catlog}
                                    </p>
                                </div>
                            </div>
                            <div className="preview-order-main">
                                <p>
                                    <b>
                                        Product Name
                                    </b>
                                </p>
                                <div className="preview-order-main-p">
                                    <p>
                                        {name}
                                    </p>
                                </div>
                            </div>
                            <div className="preview-order-main">
                                <p>
                                    <b>
                                        Numbers Of Orders
                                    </b>
                                </p>
                                <div className="preview-order-main-p">
                                    <p>
                                        {number}
                                    </p>
                                </div>
                            </div>
                            <div className="preview-order-main">
                                <p>
                                    <b>
                                    Cost In Naira
                                    </b>
                                </p>
                                <div className="preview-order-main-p">
                                    <p>
                                        {cost}
                                    </p>
                                </div>
                            </div>
                            <div className='continer-body-info-form-address-button'>
                                <div className='design-select-label-button-left'>
                                    <Button onClick={handelClick} variant="primary">Back</Button>
                                </div>
                                <div className='design-select-label-button-right'>
                                    <Button onClick={proccedPayment} variant="success">Procced Paymen</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
    // return;
}

export default Preview