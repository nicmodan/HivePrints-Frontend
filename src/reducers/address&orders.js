import { postOrders } from "../services/products";
import { createSlice } from "@reduxjs/toolkit";

const getOrdersSlice = createSlice({
    name: "hiveShipingOrders",
    initialState: {
    
        colorCode: "white",
        XS:{
            size: "",
            sizeOrder: 0
        },
        S:{
            size: "",
            sizeOrder: 0
        },
        M:{
            size: "",
            sizeOrder: 0
        },
        L:{
            size: "",
            sizeOrder: 0
        },
        X:{
            size: "",
            sizeOrder: 0
        },
        XL:{
            size: "",
            sizeOrder: 0
        }
        
    },
    reducers: {
        getHiveShipingOrders(state, action){
            // state = {...state, ...action.payload}
            console.log(action.payload)
            return action.payload
        }
    }
})

export const {getHiveShipingOrders} = getOrdersSlice.actions

export const PlaceOrder = (order)=>{
    return async dispatch => {
        await postOrders(order)
        dispatch(getHiveShipingOrders({
           
        colorCode: "white",
        XS:{
            size: "",
            sizeOrder: 0
        },
        S:{
            size: "",
            sizeOrder: 0
        },
        M:{
            size: "",
            sizeOrder: 0
        },
        L:{
            size: "",
            sizeOrder: 0
        },
        X:{
            size: "",
            sizeOrder: 0
        },
        XL:{
            size: "",
            sizeOrder: 0
        }
        
        }))
    }
 }



export default getOrdersSlice.reducer