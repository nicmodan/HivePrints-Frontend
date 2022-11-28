import axios from "axios"
import emailjs from 'emailjs-com';


const url = "https://thehive.fly.dev/api/"

export const getProducts = async() =>{
    const url_target = url+"thehivecatlog/"
    const response = await axios.get(url_target)
    return response.data
}

export const postOrders = async(orders)=>{
    // console.log(orders)
    const url_target = `https://thehive.fly.dev/api/hiveorder/`
    
    // return request.data
    try{
       
        const response = await axios.post(url_target, orders)
        
        const res = await emailjs.send("service_tym9la2", "template_nh4n0er", response.data,"qQNgihnblKNOx_UZK")
        console.log(res)
    }catch(exception){
        console.log("connection not established")
        // console.log(exception.)
    }
    
}