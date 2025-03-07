import Axios from "axios"
import { API_URL } from "../config1"
import { getCookie } from "../function"

const update_key = async (data)=> {
    const res= await Axios({
        url: API_URL+ "/api/v1/setting/key",
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

export default update_key 