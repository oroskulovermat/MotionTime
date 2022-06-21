import {
    GET_COMPANY,
} from "../types/actionTypes";
import {getCompany} from "../action/Action";
const initialState = {
    getCompany:{},
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMPANY:
            return {...state,getCompany: action.payload}
        default :
            return state
    }
}