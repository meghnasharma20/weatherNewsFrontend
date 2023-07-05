import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNewsApi } from "./NewsApi";

export const fetchNews = createAsyncThunk('getNews',fetchNewsApi)
export const fetchAllNews = createAsyncThunk('getAllNews',fetchNewsApi)
