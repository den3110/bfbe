import Axios from "axios"
import { API_URL } from "../config1"
import { getCookie } from "../function"

const get_setting = async (id)=> {
    const res= await Axios({
        url: API_URL+ "/api/v1/setting",
        method: "get",
        headers: {
            Authorization: `Bearer ${getCookie("token")}`
        }
    })
    const result= await res.data
    return result
}

export default get_setting 