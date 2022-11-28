import React, {useState, useCallback, useRef} from "react"
import Resizer from "react-image-file-resizer";
import {animated, useSpring} from "react-spring"
import {useDrag} from "@use-gesture/react"

import { useSelector, useDispatch } from "react-redux"
import { getHiveShipingOrders } from "../reducers/address&orders";
import {BrowserMockup} from 'react-mockup'
import 'react-mockup/dist/index.css'
import "../muckup.css"

import 'html5-device-mockups/dist/device-mockups.min.css';
// import { IPad } from 'react-device-mockups';

// import moqq from "moqq";

const MainMuckup = (props) =>{
    const [displayBorder, setDisplayBorder] = useState(true)

    const borderDisplay = ()=>{
        setDisplayBorder(!displayBorder)
    }
    const border = displayBorder? "1px dashed orange": ""

    // PROPS
    const {imageToOrder, imageToDesign} = props



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
    
    const OnEnterCropMode = useCallback(() =>{
        // api.set({
        //     x: 0,
        //     y: 0,
        //     height: 100,
        //     width: 100
        // })
    }, [])

    
    return(
                
        <div className={"muckup-main-img-edits"}>
            {/* {console.log(style)} */}
            <div className="muckup-main-img-edite-muckup" onClick={borderDisplay}>
                <img ref={listRef}
                    src={imageToOrder} alt="front"  className="muckup-img"
                />
            </div>
            <animated.div ref={dragERef} style={{x, y, width, height, border:border}} {...bind()}
                onClick={OnEnterCropMode} className="muckup-main-img-edite-design">
                <div className="muckup-img-design">
                    <div className={"muckup-img-design-contain"}>
                        <img 
                            src={imageToDesign} alt="front" className="muckup-design-img" 
                        />
                        
                        <div className="muckup-design-img-cover"></div>
                    </div>
                </div>
                
            </animated.div>
        </div>
                            
    )
}

export default MainMuckup