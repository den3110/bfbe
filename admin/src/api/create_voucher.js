import Axios from "axios"
import { API_URL } from "../config1"

const create_voucher= async (data)=> {
    const res= await Axios({
        url: API_URL + "/api/voucher",
        method: "post",
        data: {
            ...data
        }
    })
    const result= await res.data
    return  result
}

export default create_voucher