import React, {useState, useCallback, useRef} from "react"
import Resizer from "react-image-file-resizer";
import {animated, useSpring} from "react-spring"
import {useDrag} from "@use-gesture/react"

import MainMuckup from "./mainMuckup";
import ScreenShot from "./screenShot";


import { useSelector, useDispatch } from "react-redux"
import { getHiveShipingOrders } from "../reducers/address&orders";
import {BrowserMockup} from 'react-mockup'
import 'react-mockup/dist/index.css'
import "../muckup.css"


import front from "../Resouces/front/front.png"
import back from "../Resouces/back/back.png"


import logo from "../Resouces/Logo.jpg"

import 'html5-device-mockups/dist/device-mockups.min.css';
// import { IPad } from 'react-device-mockups';

// import moqq from "moqq";

const Muckup = (props) =>{

    // This ref is connected to the list
    const listRef = useRef(null);
    const dragERef = useRef(null);

    const [{x, y, width, height}, api] = useSpring(()=>({x:100, y:100, width: 100, height: 100}))
    const bind = useDrag((state)=>{
        // window.off
        const isResizing = (state?.event.target===dragERef.current)
        if(isResizing){
            api.set({
                width: state.offset[0],
                height: state.offset[1],
            })
        }else{
            api.set({
                x: state.offset[0],
                y: state.offset[1],
            })
        }
       
        // height: 100,
        // width: 100
    }, {
        from: (event)=>{
            const isResizing = (event.target===dragERef.current)
            if(isResizing){
                return [width.get(), height.get()]
            }else{
                return [x.get(), y.get()]
            }
        },
        bounds: (state)=>{
            const isResizing = (state?.event.target===dragERef.current)
            const muckupImageWidth = listRef.current?.clientWidth ?? 0
            const muckupImageHeight = listRef.current?.clientHeight ?? 0
            if(isResizing){
                return{
                    left: 50,
                    top: 50,
                    right: muckupImageWidth - x.get(),
                    bottom: muckupImageHeight - x.get()
                }
            }else{
                return{
                    left: 0,
                    top: 0,
                    right: muckupImageWidth - width.get(),
                    bottom: muckupImageHeight - height.get()
                }
            }
            
            
        }
    }
    )

    const [view, setView] = useState("front")
    const [preview, setPreiview] = useState("design")
    const [displayBorder, setDisplayBorder] = useState(true)

    const borderDisplay = ()=>{
        setDisplayBorder(!displayBorder)
    }
    const border = displayBorder? "1px dashed orange": ""

    const samplePreview = {
        image_links: {
            front: front,
            back: back
        }
    }
    
    const OnEnterCropMode = useCallback(() =>{
        // api.set({
        //     x: 0,
        //     y: 0,
        //     height: 100,
        //     width: 100
        // })
    }, [])

    const frameStyle={
        backdropFilter: 'blur(16px)',
        background:'radial-gradient(86.36% 107.55% at 6.49% 12.32%,rgba(255, 255, 255, 0.5) 0%,rgba(255, 255, 255, 0.5) 100%)',
        border:'1px solid rgba(228, 228, 228, 0.3)',
        padding:'20px',
        borderRadius:'20px',
    }
    return(
    <div className="muckup-body-container">
        <div className="muckup-body-main">
            <div className="muckup-img-veiw">
                <select 
                    value={view} 
                    onChange={e=>{setView(e.target.value)}}
                    className="selection-muckup">
                    {
                        Object.keys(samplePreview["image_links"]).map((val, idx)=>{
                            return(
                                <option key={idx} value={val}>{val}</option>
                            )
                        })
                    }
                </select>
            </div>
            {
                Object.keys(samplePreview["image_links"]).map((val, key)=>(
                    <ScreenShot 
                        key={key}
                        preview={preview} 
                        view={view}
                        val={val}
                        imageToOrder={samplePreview["image_links"][val]} 
                        imageToDesign={logo}
                        />
                ))
                
            }
            {/* <div className="muckup-main">

                <div style={preview==="design"?{display: ""}:{display: "none"}} className="muckup-main-design">
                    <div className="muckup-main-img">
                        <div className="muckup-main-img-container">
                            {Object.keys(samplePreview["image_links"]).map((val, key)=>(
                                <div className="muckup-div-sample" style={{display: view===val?"" :"none"}}>
                                    {console.log(val)}
                                    <MainMuckup key={key} 
                                                imageToOrder={samplePreview["image_links"][val]}
                                                imageToDesign={logo} 
                                            />
                                </div>
                                

                                // <div style={view===val?{display:""}: {display:"none"}} key={key} className={"muckup-main-img-edits"}>
                                    
                                //     <div className="muckup-main-img-edite-muckup" onClick={borderDisplay}>
                                //         <img ref={listRef}
                                //             src={samplePreview["image_links"][val]} alt="front"  className="muckup-img"
                                //         />
                                //     </div>
                                //     <animated.div ref={dragERef} style={{x, y, width, height, border:border}} {...bind()}
                                //         onClick={OnEnterCropMode} className="muckup-main-img-edite-design">
                                //         <div className="muckup-img-design">
                                //             <div className={"muckup-img-design-contain"}>
                                //                 <img 
                                //                     src={logo} alt="front" className="muckup-design-img" 
                                //                 />
                                //                 {/* <BrowserMockup
                                //                         src={logo}
                                //                         // type={"default"}
                                //                         // windowControlPosition="left"
                                //                         angleX="0deg"
                                //                         angleY="0deg"
                                //                         accentColor="white"
                                //                         // urlValue="google.com"
                                //                         shadow="none"
                                //                         // border="none"
                                //                         color="white"
                                //                         frameStyle={frameStyle}
                                //                     /> */}
                                {/* //                 <div className="muckup-design-img-cover"></div>
                                //             </div>
                                //         </div> */}
{/*                                         
                                //     </animated.div>
                                // </div> */}
                            {/* ))} */}
                            {/* <div className="muckup-main-img-edits">
                                    
                                <div className="muckup-main-img-edite-muckup" onClick={borderDisplay}>
                                    <img ref={listRef}
                                        src={front} alt="front"  className="muckup-img"
                                    />
                                </div>
                                <animated.div ref={dragERef} style={{x, y, width, height, border:border}} {...bind()}
                                    onClick={OnEnterCropMode} className="muckup-main-img-edite-design">
                                    <div className="muckup-img-design">
                                        <div className={"muckup-img-design-contain"}>
                                            <img 
                                                src={logo} alt="front" className="muckup-design-img" 
                                            />
                                            {/* <BrowserMockup
                                                    src={logo}
                                                    // type={"default"}
                                                    // windowControlPosition="left"
                                                    angleX="0deg"
                                                    angleY="0deg"
                                                    accentColor="white"
                                                    // urlValue="google.com"
                                                    shadow="none"
                                                    // border="none"
                                                    color="white"
                                                    frameStyle={frameStyle}
                                                /> */}
                                            {/* <div className="muckup-design-img-cover"></div>
                                        </div>
                                    </div>
                                    
                                </animated.div>
                            </div> */}

                        {/* </div>
                    </div> */}
                    {/* <div className="muckup-main-edite">

                    </div> */}
                {/* // </div> */}
                {/* <div style={preview==="preview"?{display: ""}:{display: "none"}} className="muckup-main-preview-design">

                </div>

            </div> */}

            <div className="muckup-img-preview">
                <select 
                    value={preview} 
                    onChange={e=>setPreiview(e.target.value)}
                    className="selection-muckup">
                        {
                            ["design", "preview"].map((val, idx)=>{
                                return(
                                    <option key={idx} value={val}>{val}</option>
                                )
                            })
                        }
                </select>
            </div>
            
        </div>

    </div>
    )
}

export default Muckup