import React from "react";
import NewsComponent from "./NewsComponent";
import WeatherComponent from "./WeatherComponent";

const CityComponent = (props)=>{

    return <>
    <div style={{padding:10}}>
    <h1 style={{textAlign : 'center'}}>{props.cityname}</h1>
    <div style={{maxHeight : 300,
    width : 300, backgroundColor : 'red',padding : 10,overflow:'scroll'}}><NewsComponent cityname={props.cityname}/></div>
    <div ><WeatherComponent cityname={props.cityname}/></div>

    </div>
        </>
}

export default CityComponent