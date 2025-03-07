import Axios from "axios"
import { API_URL } from "../config1"

const delete_contact= async (contactId)=> {
    const res= await Axios({
        url: API_URL+ "/api/contact",
        method: "delete",
        data: {
            contactId
        }
    })
    const result= await res.data
    return result
}

export default delete_contact