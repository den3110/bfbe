import axios from "axios"
import { API_URL } from "../config1"

const get_list_contact= async ()=> {
    const res= await axios({
        url: API_URL+ "/api/contact",
        method: "get",
    })
    const result= await res.data
    return result
}

export default get_list_contact