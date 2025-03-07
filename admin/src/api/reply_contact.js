import Axios from "axios"
import { API_URL } from "../config1"
import { getCookie } from "../function"

const reply_contact= async (email, content, contactId, replyText)=> {
    const res= await Axios({
        url: API_URL+ "/api/contact/reply",
        method: "post",
        data: {
            email, content, contactId, replyText, user_reply: parseInt(getCookie("auid"))
        }
    })
    const result= await res.data
    return result
}

export default reply_contact