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

  useEffect(() => {
    // getResults("/search/?query=word cup&num=10");
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  console.log(location.pathname);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between my-6 sm:px-56 ">
          {/* {results?.results?.map((result, index) => {
            const {link, title} = result;
            return
          })} */}
        </div>
      );
      break;

    case "/imagesearch":
      return "Image Search";
      break;

    default:
      return "Error";
  }
};

export default Results;
