import React from "react";
import {NavLink} from "react-router-dom";

const links = [
  {url: "/search", text: "🔎 All"},
  {url: "/imagesearch", text: "📸 Images"},
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map((link, index) => {
        const {url, text} = link;

        return (
          <NavLink
            to={url}
            className={({isActive}) => {
              if (isActive) {
                return "pb-2 mr-2 ml-2 text-blue-700 border-b-2 border-blue-700 dark:text-blue-300 transition-all duration-200";
              }
              return "mr-2 ml-2";
            }}>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Links;
