import Axios from "axios"
import { API_URL } from "../config1"
import { getCookie } from "../function"

const update_modepayment = async (mode)=> {
    const res= await Axios({
        url: API_URL+ "/api/v1/setting/payment/status",
        method: "put",
        data: {
            mode: mode
        },
        headers: {
            Authorization: `Bearer ${getCookie("token")}`
        }
    })
    const result= await res.data
    return result
}

export default update_modepayment 