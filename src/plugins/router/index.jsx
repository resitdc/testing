import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Error from "pages/Error";
// #endregion - IMPORT PAGES

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
