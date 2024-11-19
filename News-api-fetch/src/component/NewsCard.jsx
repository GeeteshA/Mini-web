import React from "react";
import "../App.css";

const NewsCard = ({ articles }) => {
  return (
    <div className="news-card-container">
      {articles.map((data, index) => {
        if ( data.title  == '[Removed]' ){
          return null
        }
        else if ( data.urlToImage == '[Removed]'){
          return null
        }
        return (
        <div className="card" key={index}>
          <div className="img">
            <img
              src={data.urlToImage || "No photo avaliable"} 
              alt={data.title || "News Photo"} 
            />
          </div>
          <div className="card-content">
            <h4>{data.title}</h4>
            <a href={data.url} target="_blank" >
              Read more
            </a>
          </div>
        </div>
        );
  })}
    </div>
  );
};

export default NewsCard;
