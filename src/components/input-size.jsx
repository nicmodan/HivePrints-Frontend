import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHiveShipingOrders } from "../reducers/address&orders";

const InputSize = (props) =>{
    // const [size, setSize] = useState(undefined)
    const [sizeCount, setSizeCount] = useState("")
    
    const orders = useSelector(state=>state.hiveShipingOrder)
    const dispatch = useDispatch()

    // const or
    // console.log(props)
    // console.log(orders)

    // const {firstName, lastName, email, phone, cityState, address, location} = orders
    // const {catlog, number, name, cost, images, img_url} = orders

    const targetDispatch = (e) =>{
        const val = e.target.value
        setSizeCount(e.target.value)

        const data = {...orders}
        
        data[props.val] = {...orders[props.val], "sizeOrder": val}
        
        
        
        // const replaceSizeCount =  {...orders["orederSpects"][props.val], sizeOrder: val}
        // dispatch(getHiveShipingOrders({...orders, ...replaceSizeCount}))
        dispatch(getHiveShipingOrders(data))

    }
    

    return <input type="text" placeholder="0" 
                    value={sizeCount}
                    onChange={targetDispatch}
                    className="contain-preview-checkbox-input-number"/>
}

export default InputSize