import React, {useState, useImperativeHandle, forwordRef, useRef, createRef} from "react"
import MainMuckup from "./mainMuckup";
import { useScreenshot } from 'use-react-screenshot'


const ScreenShot = forwordRef((props, refs) =>{

    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(ref.current)

    const {preview, view, val, imageToOrder, imageToDesign} = props

    // This ref is connected to the list
    useImperativeHandle(refs, ()=>{
        return {
            getImage
        }
    })

   
    return(        
        <div className="muckup-main" style={{display: view===val?"" :"none"}}>

            <div style={preview==="design"?{display: ""}:{display: "none"}} className="muckup-main-design">

                <div className="muckup-main-img">
                    <div className="muckup-main-img-container">
                        
                        <div className="muckup-div-sample" ref={ref}>
                            {console.log(val)}
                            <MainMuckup 
                                        imageToOrder={imageToOrder}
                                        imageToDesign={imageToDesign} 
                                    />
                        </div>
                        
                    </div>
                </div>
                {/* <div className="muckup-main-edite">

                </div> */}
            </div>
            <div style={preview==="preview"?{display: ""}:{display: "none"}} className="muckup-main-preview-design">

            </div>

        </div>
            
    )
}
)
export default ScreenShot