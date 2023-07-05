import axios from "axios";
import moment from "moment";
import API from "../Api";

export const getCitiesApi = async()=>{
    try{
       const response = await axios.get(`${API.BASE_URL}${API.GET_CITIES}`);
       console.log("my res",response)
       return response.data.res
   }catch(e){
return {error : e.message}
    }
}

export const getCityWeatherApi= async(cities)=>{
    const today = Date.now();

    const date = moment(today).format('YYYY-M-D')

    try{
        const response = await axios.all(cities.map(cityname=>axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityname}/${date}?key=T82BF47EDRN79D8BWZ327UMA9`)))
        const data = response.map((item)=>{
            return {cityname : item.data.address, weather : item.data}
        })
        console.log('weather response',data)
        return data
   }catch(e){
return {error : e.message}
    }
}
