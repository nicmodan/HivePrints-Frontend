// import React, {useE} from 'react';
import './App.css';
// import { Container, Row, Col, Button} from 'react-bootstrap';
// import Logo from "./Resouces/HIVELOGO(2).png"
import React, {useState, useEffect} from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { initalizeState } from './reducers/getProducts';
// import {CiBookmark} from 'react-icons/ci';
// import {RiPriceTagLine} from "react-icons/ri"
// import getGeoLocation from './services/getGeoLocation';
// import ReactCountryFlag from "react-country-flag"
// import Address from './components/address';
// import Preview from './components/previewOrder';
// // import { hiveShipingProducts } from './reducers/getProducts';
// import { getHiveShipingOrders } from './reducers/address&orders';
// import QuestionsOfOrders from './components/ordrerQuestions';
// import Selection from "./components/selection"
import Order from "./components/orders"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  // const dispatch = useDispatch()
  // const state = useSelector(state=>state.getProducts)
  
  // // main production state

  // const [catlog, setCatlog] = useState("")
  // const [number, setNumber] = useState(0)
  // const [name, SetName] = useState("")
  // // const [discription, setDiscription] = useState("")
  // const [cost, setCost] = useState("₦0")
  // const [location, setLocation] = useState(undefined)
  // const [images, setImages] = useState(undefined)
  // const [productImg, setProductImg] = useState(undefined)

  // const [showPreview, setShowPreview] = useState(true)

  // const [showCount, setShowCount] = useState(2)
  // const [showClass, SetShowClass] = useState("display01")
 
  // const setdisplayCount = (v)=>{
  //   const count = showCount+v
  //   // count = catlog===""?count:count+1
  //   setShowCount(count)
  //   const setClass = `display0${count}`
  //   SetShowClass(setClass)
  //   // const classNumbers = 

  // }

   
  // // console.log(state)
  // const list = ["t-shirt", "tank_tops", "hoodies_and_sweatshirt", "bottoms", "long_sleeve"]

  // const manu_list = ["t-shirt", "tank_tops", "hoodies_and_sweatshirt", "bottoms", "long_sleeve"].map(val=>{
  //   return state.filter(list=>list["catlog"]===val)
  // })
  // // console.log(manu_list)

  // const manu_filter = manu_list.map((val, idx)=>val.filter( v=>v["catlog"] === catlog ))
  // // console.log(manu_filter)

  // const defineNumber = (e) =>{
  //   setNumber(e.target.value)
  //   const filterdCost = manu_filter[list.indexOf(catlog)].filter(target=>target['name'] === name)
  //   const result = filterdCost[0]["cost"]
  //   setProductImg(filterdCost[0]["image_links"][Object.keys(filterdCost[0]["image_links"])[0]])
  //   // console.log(filterdCost[0]["image_links"][Object.keys(filterdCost[0]["image_links"])[0]])
    
  //   const newCost = Math.round((Number(result.replace("$", ""))/2) * e.target.value)
  //   const theCost = `₦${newCost*720}`

  //   setCost(theCost)
  //   // console.log(theCost)
  // }

  // const getLocation = async() =>{
  //   const response = await getGeoLocation()
  //   setLocation(response)
  //   // console.log(response)
  // }

  // const previewOrders = ()=>{
      

  //   const mainOrderInfo = {
  //     // firstName,
  //     // lastName,
  //     // email,
  //     // phone,
  //     // cityState,
  //     // address,
  //     location,
  //     catlog, 
  //     number, 
  //     name, 
  //     cost,
  //     images: images,
  //     img_url: productImg
  //   }

  //   // const state = useSelector(state=>state.getProducts)
  //   dispatch(getHiveShipingOrders({...state, ...mainOrderInfo}))
    
  // }
  
  // previewOrders()

  // useEffect(()=>{

    
  //   getLocation()
  //   dispatch(initalizeState())
    

  // }, [dispatch])

  return (
    <Order />
    // <>
    //   <Container fluid style={{display: showPreview?"": "none"}} className="continer-body css-selector">
    //     <Row style={{
    //       height: "100%"
    //     }}>
    //       <Col sm={6} className="continer-body-img">
            
    //         <img src={Logo}  alt="HIVE LOGO" />
    //       </Col>
    //       <Col sm={6}  className="continer-body-info">
    //         {location && 
    //         <div className='location-position'>
    //           {" "}
    //           <ReactCountryFlag
    //                   countryCode={location.country_code}
    //                   svg
    //                   style={{
    //                       width: '2em',
    //                       height: '2em',
    //                   }}
    //                   title={location.country_code}
    //           />
    //           {"  "}
    //           {location.country_name}

    //         </div>}
    //         <div className='continer-body-info-form'>
    //             <div style={{display: showClass==="display01"?"": "none"}} className={`continer-body-info-form-select continer-body-tag`}>
    //               <div>Hello 👋🏽, Please Choose What You wold like to Print</div>
    //               {/* <select onChange={e=>{
    //                 setCatlog(e.target.value)
    //                 SetShowClass("display02")
    //               }} value={catlog} 
    //                 className='select-product-type'>
    //                 <option defaultValue>Select Your Items</option>
    //                 <option value="t-shirt">T-Shirt</option>
    //                 <option value="tank_tops">Tank Top</option>
    //                 <option value="hoodies_and_sweatshirt">Hoodies and Sweatshirt</option>
    //                 <option value="bottoms">Bottoms</option>
    //                 <option value="long_sleeve">Long Sleeve</option>
    //               </select> */}
    //               <Selection onChange={e=>{
    //                 setCatlog(e.target.value)
    //                 SetShowClass("display02")
    //               }} value={catlog} 
    //               options={["t-shirt", "tank_tops", "hoodies_and_sweatshirt", "bottoms", "long_sleeve"]} 
    //               />
    //             </div>
    //             <div style={{display: showClass==="display02"?"": "none"}} className={`continer-body-info-form-checking continer-body-tag`}>

    //               <div className={`continer-body-info-form-checking-cost`}>
                   
    //                 <div className='continer-body-info-form-checking-cost-info'>
    //                   <h5>{cost}</h5>
    //                   <RiPriceTagLine className="continer-body-info-form-checking-cost-svg"/>
    //                 </div>
    //               </div>
              
    //               <div style={{paddingBottom: 10}}>Hello 👋🏽, Please Choose What You wold like to Print</div>
    //                 <div>
    //                   {/* <select onChange={e=>{
    //                     setCatlog(e.target.value)
    //                     setCost("₦0")
    //                     setNumber(0)
    //                   }} value={catlog} 
    //                     className='select-product-type'>
    //                     <option defaultValue>Select Your Items</option>
    //                     <option value="t-shirt">T-Shirt</option>
    //                     <option value="tank_tops">Tank Top</option>
    //                     <option value="hoodies_and_sweatshirt">Hoodies and Sweatshirt</option>
    //                     <option value="bottoms">Bottoms</option>
    //                     <option value="long_sleeve">Long Sleeve</option>
    //                   </select> */}
    //                   <Selection onChange={e=>{
    //                     setCatlog(e.target.value)
    //                     setCost("₦0")
    //                     setNumber(0)
    //                   }} value={catlog} 
    //                     options={["t-shirt", "tank_tops", "hoodies_and_sweatshirt", "bottoms", "long_sleeve"]} 
    //                     />
    //                 </div>
    //                 <div>
    //                   <div className='design-select-label'>
    //                     Select Product Name
    //                   </div>
    //                   {manu_filter[list.indexOf(catlog)] && 
    //                   <Selection onChange={e=>{
    //                     SetName(e.target.value)
    //                     setCost("₦0")
    //                     setNumber(0)
    //                   }} value={name} 
    //                     options={manu_filter[list.indexOf(catlog)].map(val=>val["name"])} 
    //                     />}
    //                   {/* <select onChange={e=>{
    //                     SetName(e.target.value)
    //                     setCost("₦0")
    //                     setNumber(0)
    //                   }} value={name} 
    //                           className='select-product-type'>
    //                       <option defaultValue>Select Product Name</option>
                        
    //                       {
    //                         manu_filter[list.indexOf(catlog)] && manu_filter[list.indexOf(catlog)].map((val, idx)=>{
    //                           console.log(manu_filter[list.indexOf(catlog)].map(val=>val["name"]))
    //                           return <option key={idx} value={val["name"]}>{val["name"]}</option>
    //                         })
    //                       }

    //                   </select> */}
    //                 </div>
                  
    //                 <div style={{marginTop: 5}}>
    //                   <div className='design-select-label'>
    //                     Number Of Order
    //                   </div>
    //                   <input type="number" placeholder='0 orders' onChange={defineNumber} value={number} 
    //                           className='input-product-type' required>
    //                   </input>
    //                 </div>
    //                 <div>
    //                   <div className='design-select-label'>
    //                     Images
    //                   </div>
    //                   <input className="design-select-label-image-input" 
    //                         type="file" accept=".png, .jpg, .jpeg" onChange={(e)=>setImages(e.target.files[0])}/>
    //                 </div>
    //                 <div className='design-select-label-button'>
    //                   <Button onClick={()=>setdisplayCount(1)} variant="outline-warning">Precced Order</Button>
    //                 </div>

    //               </div>
    //               <div style={{display: showClass==="display03"?"": "none"}} className="continer-body-info-form-questions continer-body-tag">
    //                 <QuestionsOfOrders /> 
    //                 <div className='continer-body-info-form-address-button'>
    //                   <div className='design-select-label-button-left'>
    //                     <Button onClick={()=>setdisplayCount(-1)} variant="outline-warning">previews</Button>
    //                   </div>
    //                   <div className='design-select-label-button-right'>
    //                     <Button onClick={()=>setdisplayCount(1)} variant="outline-warning">Preview Order</Button>
    //                   </div>
    //                 </div>
    //               </div>
    //               {/* <div style={{display: showClass==="display04"?"": "none"}} className="continer-body-info-form-address continer-body-tag">
    //                 <Address 
    //                       // callback={previewOrders} 
    //                         /> 
    //                 <div className='continer-body-info-form-address-button'>
    //                   <div className='design-select-label-button-left'>
    //                     <Button onClick={()=>setdisplayCount(-1)} variant="outline-warning">previews</Button>
    //                   </div>
    //                   <div className='design-select-label-button-right'>
    //                     <Button onClick={e=>setShowPreview(!showPreview)} variant="outline-warning">Preview Order</Button>
    //                   </div>
    //                 </div>
    //               </div> */}
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <Container fluid style={{display: showPreview?"none": ""}} className="preview-body css-selector" >
        
    //     {/* <Preview handelClick={e=>setShowPreview(!showPreview)}/> */}
        
    //   </Container>
     
    // </>
  );
}

export default App;
