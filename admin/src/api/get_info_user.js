import Axios from "axios"
import { API_URL } from "../config1"
import { getCookie } from "../function"

const get_info_user= async ()=> {
    const res= await Axios({
        url: API_URL + "/api/auth/info",
        method: "get",
        params: {
            user_id: getCookie("auid")
        }
    })
    const result= await res.data
    return  result
}

export default get_info_user