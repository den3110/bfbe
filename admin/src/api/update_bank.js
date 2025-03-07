import Axios from "axios"
import { API_URL } from "../config1"
import { getCookie } from "../function"

const update_bank = async (data)=> {
    const res= await Axios({
        url: API_URL+ "/api/v1/setting/bank",
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

export default update_bank 