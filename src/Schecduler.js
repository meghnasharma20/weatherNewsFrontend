import { getCitiesNews } from "./redux/City/CityRepository";
import { getWeather } from "./redux/weather/WeatherRepository";

export const getCityDetails = (type , cities)=>{
switch(type){
    case 'news' : getCitiesNews(cities)
    break;
    case 'weather' : getWeather(cities)
    break;
    default  : getCitiesNews(cities)
}
}
