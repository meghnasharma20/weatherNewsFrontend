import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../redux/weather/WeatherRepository";

const WeatherComponent = (props)=>{
const dispatch = useDispatch()
const [condition,setCondition] = useState('')

useEffect(()=>{
    dispatch(getWeather(props.cityname)).then(({payload})=>{
        if(payload.res?.weather?.length>0)
        setCondition(payload.res?.weather[0].conditions)})
},[])

    return <div style={{backgroundColor : 'yellow'}}>
        <h2>Weather</h2>
        <p>{condition?condition : 'No data'}</p>
    </div>
}

export default WeatherComponent;