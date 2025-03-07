import Axios from "axios"
import { API_URL } from "../config1"
import { getCookie } from "../function"

const delete_order = async (id)=> {
    const res= await Axios({
        url: API_URL+ "/api/order",
        method: "delete",
        data: {
            id
        },
        headers: {
            Authorization: `Bearer ${getCookie("token")}`
        }
    })
    const result= await res.data
    return result
}

export default delete_order 