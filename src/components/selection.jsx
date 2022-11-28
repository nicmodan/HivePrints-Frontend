import React from "react";
import { firstReplace } from "../services/spellingcheck";


const Selection = ({onChange, value, options, manual})=>{
    
    
    return manual?( 
        <select onChange={onChange} value={value} 
            className='select-product-type'>
            <option defaultValue>Select Your Items</option>
            <option>Others</option>
            {options.map((val, idx)=>
                        <option key={idx} value={val}>{firstReplace(val)}</option>)}
            {/* <option value="t-shirt">T-Shirt</option>
            <option value="tank_tops">Tank Top</option>
            <option value="hoodies_and_sweatshirt">Hoodies and Sweatshirt</option>
            <option value="bottoms">Bottoms</option>
            <option value="long_sleeve">Long Sleeve</option> */}
        </select>
    ):(
        <select onChange={onChange} value={value} 
            className='select-product-type'>
        <option defaultValue>Select Your Items</option>
        {/* {others && <option>Others</option>} */}
            {options.map(val=>(

                val[1].map((v, i)=>{
                    // console.log(val[0][0])
                    return <option key={i} value={val[0][0]}>{v}</option> 
                })

            ))}
                        
            {/* <option value="t-shirt">T-Shirt</option>
            <option value="tank_tops">Tank Top</option>
            <option value="hoodies_and_sweatshirt">Hoodies and Sweatshirt</option>
            <option value="bottoms">Bottoms</option>
            <option value="long_sleeve">Long Sleeve</option> */}
        </select>
    )
}

export default Selection