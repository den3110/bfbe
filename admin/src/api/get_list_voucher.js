import Axios from "axios"
import { API_URL } from "../config1"

const get_list_voucher= async ()=> {
    const res= await Axios({
        url: API_URL + "/api/voucher",
        method: "get",

    })
    const result= await res.data
    return result
}

export default get_list_voucher