import axios from "axios"
import API from "../Api"

/**
 * locaiton : string
 * date : yyyy-m-d format
 */
export const getWeatherApi = async(cityname,date)=>{
try{
    const response =await axios.get(`${API.BASE_URL}${API.GET_WEATHER}`,{
        params : {
        date,
        cityname
    }})
    console.log("werather data is",response.data)
    return response.data
}catch(e){
   return {error : e}
}


}