import Axios from "axios"
import { API_URL } from "../config1"
import { getCookie } from "../function"

const update_order = async (data)=> {
    const res= await Axios({
        url: API_URL+ "/api/v1/order/status",
        method: "put",
        data: {
            ...data
        },
        headers: {
            Authorization: `Bearer ${getCookie("token")}`
        }
    })
    const result= await res.data
    return result
}

export default update_order 