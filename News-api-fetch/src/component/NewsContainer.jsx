import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import '../App.css'
import axios from "axios";

const NewsContainer = () => {
    const [ articles, setArticle ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const apiKey = `yqqsnvWJScY6Xvt2CnlQ9CpOAi9FZtMccln7KT4nF5vbODNe`;
    // yqqsnvWJScY6Xvt2CnlQ9CpOAi9FZtMccln7KT4nF5vbODNe
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(url);
                setArticle(response.data.articles); 
                setLoading(false);
            } catch (error) {
                setError("Error occurred");
                setLoading(false);
            }
        };
        fetchNews();
    }, []); 

    if (error) return <p>{error}</p>;
    if (loading) return <p>Loading...</p>;
  return (
    <div>
        <div className="heading">
        <h1></h1>
        </div>
      <div className="main-content">
      <NewsCard articles={articles}  />
      </div>
      
    </div>
  );
};

export default NewsContainer;