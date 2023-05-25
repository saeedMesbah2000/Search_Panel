import React from "react";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Loading from "./Loading";

import {useStateContext} from "../contexts/ResultContextProvider";

const Results = () => {
  const {getResults, results, searchTerm, setSearchTerm, loading} =
    useStateContext();

  // getting imagesearch , search path names
  const location = useLocation();

  useEffect(() => {
    if (searchTerm) {
      getResults(`${location.pathname}/?query=${searchTerm}&num=20`);
    }
    console.log(`this is results : ${results.items}`);
  }, [searchTerm, location.pathname]);

  if (loading) {
    return <Loading />;
  }

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between my-6 sm:px-56 ">
          {results?.items?.map((result, index) => {
            const {link, title} = result;
            return (
              <div key={index} className="md:w-2/5 w-full mt-3">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm ">
                    {link.length > 30 ? link.substring(0, 30) : link}
                  </p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                    {title}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      );

    case "/imagesearch":
      return (
        <div className="flex flex-wrap justify-center items-center mt-3">
          {results?.items?.map((result, index) => {
            const {thumbnailImageUrl, title, contextLink} = result;

            return (
              <a
                className="sm:p3 p-5"
                href={contextLink}
                key={index}
                target="_blank"
                rel="noreferrer">
                <img src={thumbnailImageUrl} alt={title} loading="lazy" />
                <p className="w-36 break-words text-sm mt-2">{title}</p>
              </a>
            );
          })}
        </div>
      );

    default:
      return "Error";
  }
};

export default Results;
