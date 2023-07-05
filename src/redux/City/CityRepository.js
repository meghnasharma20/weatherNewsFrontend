import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCitiesApi } from './CityApi';

export const getCities = createAsyncThunk('get/cities',getCitiesApi)