import axios from "axios";
export const API =  "https://motion-time.herokuapp.com/api/v1/"

export const publicApi =  axios.create({
    baseURL:API
})