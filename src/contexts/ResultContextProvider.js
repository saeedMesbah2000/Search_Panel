import React, {createContext, useContext, useState} from "react";

const apiKey = process.env.REACT_APP_API_KEY;
const StateContext = createContext();
const baseUrl = "https://google-search72.p.rapidapi.com";

export const ResultContextProvider = ({children}) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("word cup");

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
        "X-RapidAPI-Key": apiKey,
      },
    });

    const data = await res.json();
    console.log(data);

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{getResults, results, searchTerm, setSearchTerm, loading}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
