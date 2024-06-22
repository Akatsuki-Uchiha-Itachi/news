import React, { createContext, useContext, useState } from "react";
import { ApiContext } from "./ApiContext";

export const NewsContext = createContext();
const  backendHost = "https://newsapi.org/v2" 

export const NewsProvider = ({ children }) => {

    const [category, setCategory] = useState('');
    const [articles, setArticles] = useState([]);

    const updateArticles = (param) =>{
        
        setArticles(param)
    }
    const getArticles = () =>{
        return articles
    }
    const getCategory = () =>{
        return category;
    }
    const updateCategory = (param) =>{
        updateArticles()
        setCategory(param)
    }
  return (
    <NewsContext.Provider
      value={{
        getCategory,
        updateCategory,
        getArticles,
        updateArticles
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => useContext(NewsContext);