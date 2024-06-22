import React, { createContext, useContext } from "react";
import { NewsContext } from "./NewsContext";

export const ApiContext = createContext();
const backendHost = "https://newsapi.org/v2";

export const ApiProvider = ({ children }) => {
  const { getCategory } = useContext(NewsContext);

  const fetchData = async (url, options) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Error fetching data");
    }
  };

  const getHeadlines = async () => {
    let endpoint = "/top-headlines?country=in&apiKey=64700038c9364eb2be03230d92e8b99c";
    if (getCategory === "business") {
      console.log("business");
      endpoint = "/everything?q=business&apiKey=64700038c9364eb2be03230d92e8b99c";
    } else if (getCategory === "technology") {
      console.log("tech")
      endpoint = "/everything?q=technology&apiKey=64700038c9364eb2be03230d92e8b99c";
    } else if (getCategory === "entertainment") {
      console.log("entertain")
      endpoint = "/everything?q=entertainment&apiKey=64700038c9364eb2be03230d92e8b99c";
    }
    const url = backendHost + endpoint;
    const options = {
      method: "GET",
    };
    return fetchData(url, options);
  };

  return (
    <ApiContext.Provider value={{ getHeadlines }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);
