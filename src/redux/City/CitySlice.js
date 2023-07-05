import { createSlice } from "@reduxjs/toolkit";
import { getCities } from "./CityRepository";

const initialState = {
   loading : false,
   city : [],
    error : null
}
const CitySlice = createSlice({
    name : 'citySlice',
    initialState,
    extraReducers : ((builder)=>{
        builder.addCase(getCities.pending,(state)=>{
            return {...state, loading : true}
        })
        builder.addCase(getCities.fulfilled,(state,action)=>{
            return {...state, loading : false,city : action.payload}
        })
        builder.addCase(getCities.rejected,(state,action)=>{
            return {...state, loading : false,error : action.payload.error}
        })

    })
})
export default CitySlice;