import { createSlice } from "@reduxjs/toolkit";
import { fetchAllNews } from "./NewsRepository";
const initialState = {
    error : undefined,
    news : [],
    cityName : undefined,
    loading : false
}

const NewsSlice = createSlice({
    name : 'NEWS',
    initialState,
    reducers : {
        getNews: (state,action)=>{
console.log("I am called")
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchAllNews.pending,(state,action)=>{
            return {...state,loading : true}
        })
        builder.addCase(fetchAllNews.fulfilled,(state,action)=>{
            return {...state,loading : false,news : [action.payload.data]}
        })
        builder.addCase(fetchAllNews.rejected,(state,action)=>{
            return {...state,loading : false,error : action.payload.error}
        })
    }
})
export const  newsActions = NewsSlice.actions;
export default NewsSlice;
