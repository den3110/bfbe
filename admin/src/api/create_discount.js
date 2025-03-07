import Axios from "axios"
import { API_URL } from "../config1"
import { getCookie } from "../function"

const create_discount = async (data)=> {
    const res= await Axios({
        url: API_URL+ "/api/v1/setting/discount",
        method: "post",
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

export default create_discount 