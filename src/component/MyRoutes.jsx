import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Results from "./Results";

const MyRoutes = () => (
  <div className="p-4">
    <Routes>
      <Route exact path="/" element={<Navigate to="/search" />} />

      <Route exact path={"/search"} element={<Results />} />
      <Route exact path={"/imagesearch"} element={<Results />} />
    </Routes>
  </div>
);

export default MyRoutes;
