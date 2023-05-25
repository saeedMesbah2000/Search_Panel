import React from "react";
import Links from "./Links";
import {useState, useEffect} from "react";
// using this to prevent spamming the server by sending request on every keystroke
import {useDebounce} from "use-debounce";
import {useStateContext} from "../contexts/ResultContextProvider";

const Search = () => {
  const [text, setText] = useState("");
  const [debounceValue] = useDebounce(text, 1500);
  const {setSearchTerm} = useStateContext();

  useEffect(() => {
    if (debounceValue) {
      setSearchTerm(debounceValue);
    }
  }, [debounceValue]);

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        type="text"
        value={text}
        placeholder="Search on Tengo or type URL"
        className="sm:w-96 w-80 h-10 p-6 border rounded-full shadow-sm outline-none text-black dark:bg-gray-200 hover:shadow-xl"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button
          type="button"
          className="absolute top-2 right-5 text-2xl text-gray-500"
          onClick={() => setText("")}>
          X
        </button>
      )}
      <Links />
    </div>
  );
};

export default Search;
