import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherApi } from "./WeatherApi";

export const getWeather = createAsyncThunk('get/weather', getWeatherApi)