import {
    GET_COMPANY,
} from "../types/actionTypes";
import {publicApi} from "../../HTTP/pudlicApi";
const email = JSON.parse(localStorage.getItem("email"))


export const getCompany = () => {
    return (dispatch) => {
               publicApi("company/")
                   .then(({data}) => {
                       if (data){
                           const sss = data.filter(el => el.email === email)
                           const company = sss[0]
                               dispatch({type: GET_COMPANY, payload: company})
                       }
                   })
    }
}




