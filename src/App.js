import React, {useState} from "react";
import {Footer, Navbar, MyRoutes} from "./component";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar changeTheme={changeTheme} darkTheme={darkTheme} />
        <MyRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
