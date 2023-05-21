import React, {useState} from "react";
import {Footer, Navbar, Routes} from "./component";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className=" bg-gray-400 dark:bg-gray-900 dark:text-gray-200 min-h-full">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
