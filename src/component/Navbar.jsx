import React from "react";
import {Link} from "react-router-dom";
import Search from "./Search";

const Navbar = (props) => {
  const {darkTheme, changeTheme} = props;
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded-full dark:bg-gray-500 dark:text-gray-900">
            goggle 🔎
          </p>
        </Link>
        <button
          type="button"
          className="text-xl dark:bg-gray-500 bg-white dark:text-gray-900 border rounded-full py-1 px-2 transition-all duration-300 hover:shadow-xl "
          onClick={changeTheme}>
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
