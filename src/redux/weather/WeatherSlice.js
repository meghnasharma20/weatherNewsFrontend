import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    loading : false,
}
const WeatherSlice = createSlice({
    name  : 'Weather',
    initialState : {},
})
export default WeatherSlice