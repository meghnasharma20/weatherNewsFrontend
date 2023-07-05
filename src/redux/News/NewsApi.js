import axios from "axios";
import API from "../Api";

export const fetchNewsApi = async (cityname)=>{
    try{
        const response = await axios.get(`${API.BASE_URL}${API.GET_NEWS}/${cityname}`)
        return response.data
    }catch(e){
     return { error : e}
         }
}