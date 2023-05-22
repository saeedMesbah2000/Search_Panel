import React from "react";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Loading from "./Loading";

import {useStateContext} from "../contexts/ResultContextProvider";

const Results = () => {
  const {getResults, setSearchTerm, results, isLoading, searchTerm} =
    useStateContext();

  // getting images , search
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  return <div>Results</div>;
};

export default Results;
