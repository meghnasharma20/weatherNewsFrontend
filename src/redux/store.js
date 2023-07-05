import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CitySlice from "./City/CitySlice";
import NewsSlice from "./News/NewsSlice";
import WeatherSlice from "./weather/WeatherSlice";
const reducer = {
   newsStore :  NewsSlice.reducer,
   weatherStore : WeatherSlice.reducer,
   cityStore : CitySlice.reducer
}
const store = configureStore({reducer},applyMiddleware(thunk))
export default store