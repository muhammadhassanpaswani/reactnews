import React from "react";
const NewsItem=({newsItem})=>{
    return(
       
     
            
                <div className="news-item" >
                  <img src={newsItem.urlToImage} alt="" />
                  <h3>{newsItem.title}</h3>
                  <span>Author: {newsItem.author}</span>
                  <p>{newsItem.content}</p>
                  <a href={newsItem.url}  target="_blank">
                    Read More
                  </a>
                </div>
       
    )
            }

export default NewsItem;