import Axios from "axios"
import { API_URL } from "../config1"

const delete_voucher= async (voucherId)=> {
    const res= await Axios({
        url: API_URL+ "/api/voucher",
        method: "delete",
        data: {
            voucherId
        }
    })
    const result= await res.data
    return result
}

export default delete_voucher