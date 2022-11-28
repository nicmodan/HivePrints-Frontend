import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import InputSize from "./input-size"
import { getHiveShipingOrders } from "../reducers/address&orders";

const SetSizeAndCounts = (props) =>{
    const {val} = props

    // const [size, setSize] = useState(undefined)
    const [checked, setChecked] = useState(false)
    
    const orders = useSelector(state=>state.hiveShipingOrder)
    const dispatch = useDispatch()

    const setDispatch = (info) =>{

        // setSize(info)
        setChecked(!checked)

        const data = {...orders}
        if(!checked){
            data[info] = {...orders[info], "size": info}
        }else{
            data[info] = {...orders[info], ...{"size": "", "sizeOrder": 0}}
        }
        

        // console.log(data)
        // console.log(!checked) // VERIFICATION FOR CHECKBOX

        dispatch(getHiveShipingOrders(data))

    }

    return (
        <div className="contain-preview-checkbox">
            <input 
                // value={val} 
                type="checkbox"
                onClick={()=>setDispatch(val)} />
            <label>
                {val}
            </label>
            {checked && <InputSize val={val} checked={checked} />}
        </div>
    )
}

export default SetSizeAndCounts