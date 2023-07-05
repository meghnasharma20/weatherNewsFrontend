import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/News/NewsRepository";
/**
 * props must have cityname props
 */
const NewsComponent = (props)=>{

    const dispatch = useDispatch();
    const [newsData,setNewsData] = useState();

useEffect(()=>{
    dispatch(fetchNews(props.cityname)).then(({payload})=>{
        console.log("news data is>>",payload)
        setNewsData(payload.res)}).catch((e)=>{})
},[])
    return (<>
    <div>
        <h1>News</h1>
 {newsData?.news?.map((n)=><p>{n.title}</p>)}
    </div>
    </>);
}

export default NewsComponent;