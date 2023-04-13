import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// #region - IMPORT PAGES
import Error from "pages/Error";
import Add from "pages/Add";
import Home from "pages/Home";
// #endregion - IMPORT PAGES

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
