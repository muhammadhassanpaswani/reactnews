import React from "react";
import NewsItem from "./NewsItem";  
const News=(props)=>{
    return(
        <div className="news-list">
              {props.news.map((newsItem,key) => ( 
              <NewsItem newsItem={newsItem} key={key}/> ))}
              </div>
            );
          }
         
export default News;